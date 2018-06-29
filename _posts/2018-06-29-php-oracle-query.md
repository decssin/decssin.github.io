---
layout: post
title: PHP에서 오라클 쿼리 사용하기
date: 2018-06-29 22:06:00 +0900
description: 오라클을 사용해서 CRUD (Create, Read, Update, Delete) 처리를 할 수 있도록 쿼리문을 함수로 묶어 놓았습니다. # Add post description (optional)
img: php-oracle-query.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [PHP, Oracle]
---

기본적인 뷰 테이블의 생성은 일반 테이블의 SELECT 구문과 같이 합니다.
JOIN으로 묶어도 되지만, FROM 에 테이블을 열거해서 WHERE 구문으로 조건을 달아도 같은 결과를 냅니다.

#### create view table
~~~sql
CREATE VIEW VIEW_TABLE AS
  SELECT
S.INDEX,
S.TITLE,
S.CONTENT,
S.COVER,
S.KEYWORD,
G.ARTIST,
G.ALBUM,
G.POSTER,
G.FILENAMEPATH_MP3,
G.FILENAMEPATH_OGA,
G.UPLOAD_DATETIME,
G.UPLOAD_LOCATION
FROM
SAMSUNG S
JOIN GOOGLE G
ON S.INDEX = G.INDEX
/
~~~

페이지네이션을 구현할 때, 모든 데이터를 불러와서 계산을 통해 나누는 것은 데이터가 많아졌을 때 큰 비용이 지불됩니다. 페이지 마다 데이터를 불러와야 하는데, 아래는 오라클에서 페이지네이션을 구현하는 기본 쿼리입니다.

#### query pagination
~~~sql
select * 
from ( 
    select rownum as rnum, tablename.* 
    from (
        select * 
        from sampletable 
        order by sampletable.index desc
        ) tablename where rownum <= 10
) where 0 <= rnum
~~~

기본적인 1개 테이블의 페이지네이션 뿐만 아니라, 뷰 테이블의 형태로 조인을 걸어서 구현할 수도 있습니다.

#### view (select) and pagination
~~~sql
select * 
from (
    select rownum as rnum, t_view_user.*
    from
        (
        select
            t1.f_userid,
            t1.f_username,
            t1.f_loginid,
            t1.f_password,
            t1.f_email,
            t1.f_extension,
            t1.f_depid,
            t1.f_posid,
            t1.f_work,
            t1.f_use,
            t1.f_mobile,
            t1.f_birthday,
            t1.f_gender,
            t1.f_certkey,
            t1.f_order,
            t1.f_regdate,
            t2.f_depname,
            t2.f_order as f_dep_order,
            t2.f_use as f_dep_use,
            t3.f_posname,
            t3.f_order as f_pos_order,
            t3.f_use as f_pos_use
        from t_user t1, t_department t2, t_position t3
        where t1.f_depid = t2.f_depid and t1.f_posid = t3.f_posid
        order by t1.f_userid
        ) t_view_user
        where rownum <= 10
) where 0 <= rnum;
~~~

페이지 번호와 페이지 당 데이터의 개수를 받아서 페이지네이션을 구현하는 쿼리문입니다. 하지만 이 상태에서도 데이터가 100만 건이 넘고, 뒤 쪽의 페이지를 선택할 경우 딜레이가 생길 수 있으므로 튜닝이 필요합니다.

#### dynamic pagination
~~~php
public function user_view($p, $s)
	{
		$query = "select * from (
					select
					  rownum as rnum,
					  t_view_user.*
					from
					  (
						select
						  t1.f_userid,
						  t1.f_username,
						  t1.f_loginid,
						  t1.f_password,
						  t1.f_email,
						  t1.f_extension,
						  t1.f_depid,
						  t1.f_posid,
						  t1.f_work,
						  t1.f_use,
						  t1.f_mobile,
						  t1.f_birthday,
						  t1.f_gender,
						  t1.f_certkey,
						  t1.f_order,
						  t1.f_regdate,
						  t2.f_depname,
						  t2.f_order as f_dep_order,
						  t2.f_use as f_dep_use,
						  t3.f_posname,
						  t3.f_order as f_pos_order,
						  t3.f_use as f_pos_use
						from t_user t1, t_department t2, t_position t3
						where t1.f_depid = t2.f_depid and t1.f_posid = t3.f_posid
						order by t1.f_userid
					  ) t_view_user
					  where rownum <= $p*$s
          ) where (($p-1)*$s)+1 <= rnum";

		$stmt = $this->db->parse($query);
		$row = array();
		if ($this->db->exec($stmt)) {
			while ($item = $this->db->fetch($stmt))
			{
				$row[] = $item;
			}
		}

		return $row;
  }

$p = isset($_GET['p']) ? $_GET['p'] : 1; // 페이지 번호
$s = isset($_GET['s']) ? $_GET['s'] : 10; // 페이지 당 데이터 개수

$count = $User->user_count()["COUNT(*)"];
$ceil = ceil($count/$s); // 소수점 올림
?>

<div id="sv">
	<select name="s" title="select">
		<option value="10" <? if($s==10) echo "selected"; ?>>10</option>
		<option value="25" <? if($s==25) echo "selected"; ?>>25</option>
		<option value="50" <? if($s==50) echo "selected"; ?>>50</option>
		<option value="100" <? if($s==100) echo "selected"; ?>>100</option>
	</select>
</div>

<?php
// 데이터 처리
foreach ($User->user_view($p, $s) as $key => $row)
{
	echo "<pre>[$row[RNUM]] [$row[F_USERID]] [$row[F_PASSWORD]] [$row[F_USERNAME]] [$row[F_LOGINID]] [$row[F_DEPNAME]] [$row[F_POSNAME]]</pre>";
}



// 페이지 번호 처리
for ($i = 1; $i<=$ceil; $i++) {
	$page[] = $i;
}
$p_p = array_chunk($page, 10, true);

$p_minus = $p > 1 ? $p-1 : 1;
$p_plus = $p < $ceil ? $p+1 : $ceil;

echo "<div>" . "<a href='/test.php?p=1&s=$s'> [<<] </a> <a href='/test.php?p=$p_minus&s=$s'> [<] </a>";
foreach ($p_p as $k => $v)
{
	if (in_array($p, $v))
	{
		foreach ($v as $item)
		{
			echo "<a href='/test.php?p=$item&s=$s'>$item</a> ";
		}
	}
}
echo "<a href='/test.php?p=$p_plus&s=$s'> [>] </a> <a href='/test.php?p=$ceil&s=$s'> [>>] </a>" . "</div>";
?>

<script>
	// Using Vanilla Script
	document.addEventListener("DOMContentLoaded", function(){
		document.querySelector('#sv').addEventListener('change', function() {
			var p = page.getUrlParameter('p'),
				s = page.getSelectedValue('s');

			page.mv(p, s);
		});
	});

	var page = {
		getUrlParameter : function getUrlParameter(sParam)
		{
			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;

			for (i = 0; i < sURLVariables.length; i++)
			{
				sParameterName = sURLVariables[i].split('=');

				if (sParameterName[0] === sParam)
				{
					if (sParameterName[1] === undefined || sParameterName[1] === '')
					{
						return 1;
					}
					else
					{
						return sParameterName[1];
					}
				}
				else if (sParameterName[0] === '')
				{
					return 1;
				}
			}
		},
		getSelectedValue : function(sParam)
		{
			var q = 'select[name='+sParam+']',
				v = document.querySelector(q).value;
			return v;
		},
		mv : function(p, s)
		{
			location.href='/test.php?p='+p+'&s='+s;
		}
	};
</script>

~~~

오라클의 rownum 이 아닌 row_number() 를 이용한 페이지네이션 기본 형식입니다.

~~~sql
select * from (
  select 
    f_userid,f_username,
    row_number() over
      (order by f_userid) rn
  from t_user)
where rn between :n and :m
order by rn;
~~~



~~~php
// todo: mysql/oracle 공통 부분, 나눌 부분 정확히 구분. 트랜잭션, 커밋, 롤백 처리 다듬기
// todo: mysql은 따로 포스팅하겠습니다.

/**
* 명령어별 DB 호출 클래스
*
* Class Own
*/
class Own
{
   public $oracle;
   public $mysql;

   public function __construct()
   {
       // 데이터베이스 설정값, 서버 외부에서 가져오기
       $db = parse_ini_file("{$_SERVER["DOCUMENT_ROOT"]}/../set/db.ini", true, INI_SCANNER_RAW);

       $this->oracle = $db["oracle"]["company_01"];
       $this->mysql = $db["mysql"]["company_02"];
   }

   /**
   * mysql, oracle where 구문 공통 함수
   *
   * @param
   * @return array
   */
   private function own_where($where)
   {
       $i = 0;
       foreach ($where as $name => $value) {
           if ($value === "*") return array("execute" => array(":1" => "1"), "where" => ":1 = 1");
           if (is_int($name)) die("WHERE 조건은 키와 값이 있는 Map 배열 형식이어야 합니다.");

           if (is_array($value)) {
               $execute[":W_$name"] = $value[0];

               if (!isset($value[1]) || empty($value[1])) $value[1] = "=";
               if (!isset($value[2]) || empty($value[2])) $value[2] = "AND";
               if ($i === count($where) - 1) $value[2] = "";

               if ($value[1] === "LIKE") {
                   $wildcard = "%";
                   $where_case[] = "$name $value[1] :W_$name $value[2]";

                   $execute[":W_$name"] = $wildcard.$value[0].$wildcard;
               } else {
                   $where_case[] = "$name $value[1] :W_$name $value[2]";
               }
           } else {
               if ($i === count($where) - 1) $AND = "";
               else $AND = "AND";

               $execute[":W_$name"] = $value;
               $where_case[] = "$name = :W_$name $AND";
           }

           $i++;
       }

       $where_case = implode(" ", $where_case);

       return array(
           "execute" => $execute, 
           "where" => $where_case
           );
   }

   /**
   * mysql, oracle where 구문의 매개변수 처리 공통 함수
   *
   * @param
   * @return array
   */
   private function own_param($parameter)
   {
       $set_params = array();
       foreach ($parameter as $name => $value) {
           if (is_int($name)) die("매개 변수의 이름은 키와 값이 있는 Map 배열 형식이어야 합니다.");
           if (is_array($value)) die("매개 변수의 값은 배열 형식이 아닙니다.");

           $set_params["sets"][] = "$name = :P_$name";
           $set_params["fields"][] = "$name";
           $set_params["colon_fields"][] = ":P_$name";
           $set_params["execute"][":P_$name"] = $value;
       }

       $sets = implode(", ",$set_params["sets"]);
       $fields = implode(", ",$set_params["fields"]);
       $colon_fields = implode(", ",$set_params["colon_fields"]);

       return array(
           "fields" => $fields, 
           "colon" => $colon_fields, 
           "sets" => $sets, 
           "execute" => $set_params["execute"]
           );
   }

   /**
   * mysql 커넥션을 반환합니다.
   *
   * @return PDO
   */
   function own_mysql_conn()
   {
       $db = $this->mysql;

       $dsn = "mysql:host=" . $db["host"] . ";dbname=" . $db["dbname"];
       $options = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
       $conn = new PDO($dsn, $db["username"], $db["password"], $options);

       return $conn;
   }

   /**
    * mysql select example
    * 나이가 30세 이하 이거나, 키가 177 인 필드 검색
    * $mySelect("USER", array("AGE" => array("30", "<=", "OR"), "HEIGHT" => array("177")));
    * ["queryString"] => "SELECT * FROM `USER` WHERE `AGE` <= 30 OR `HEIGHT` = 177
    *
    * @param string $table
    * @param array $where array("FIELD" => array("VALUE", "Functional symbol", "Logical operator"), ...)
    * @param string $target
    * @param string $query
    * @return array
    */
   function own_mysql_select($table, $where, $target = "*", $query = "")
   {
       $conn = $this->own_mysql_conn();

       if (!is_array($where)) die("WHERE 조건은 배열 형식이어야 합니다.");
       if (!empty($query)) $query = "AND ($query)";

       $w = $this->own_where($where);

       $prepared = $conn->prepare("SELECT $target FROM $table WHERE $w[where] $query");

       if ($prepared->execute($w["execute"])) $fetch = $prepared->fetchAll(\PDO::FETCH_ASSOC);
       else $fetch = array();

       return $fetch;
   }

   /**
    * mysql insert example
    * 나이가 32 이고, 키가 180 인 튜플(레코드) 생성
    * $myInsert("USER", array("AGE" => 32, "HEIGHT" => 180));
    * ["queryString"] => "INSERT INTO `USER` (`AGE`, `HEIGHT`) VALUES (:P_AGE, :P_HEIGHT)
    *
    * @param string $table
    * @param array $parameters
    * @return bool
    */
   function own_mysql_insert($table, $parameters)
   {
       $conn = $this->own_mysql_conn();

       if (!is_array($parameters)) die("매개 변수는 배열 형식이어야 합니다.");

       $p = $this->own_param($parameters);

       $prepared = $conn->prepare("INSERT INTO {$table} ($p[fields]) VALUES ($p[colon])");

       return $prepared->execute($p["execute"]);
   }

   /**
    * mysql update example
    * 나이가 32 이상이거나, 키가 180 인 필드의 값을 28, 177 으로 수정
    * $myUpdate("USER", array("AGE" => 28, "HEIGHT" => 177), array("AGE" => array(32, ">=", "OR"), "HEIGHT" >= 180));
    * ["queryString"] => "UPDATE `USER` SET `AGE` = :P_AGE AND `HEIGHT` = :P_HEIGHT WHERE `AGE` >= :W_AGE" OR `HEIGHT` >= 180
    *
    * @param string $table
    * @param array $parameters
    * @param array $where
    * @param string $query
    * @return bool|int
    */
   function own_mysql_update($table, $parameters, $where, $query = "")
   {
       $conn = $this->own_mysql_conn();

       if (!is_array($parameters)) die("매개 변수는 배열 형식이어야 합니다.");
       if (!is_array($where)) die("WHERE 조건은 배열 형식이어야 합니다.");
       if (!empty($query)) $query = "AND ($query)";

       $p = $this->own_param($parameters);
       $w = $this->own_where($where);

       $prepared = $conn->prepare("UPDATE $table SET $p[sets] WHERE $w[where] $query");

       if ($prepared->execute(array_merge($p["execute"], $w["execute"]))) return $prepared->rowCount();
       else return false;
   }

   /**
    * mysql delete example
    * 나이가 32 이상이면 모두 삭제
    * $myDelete("USER", array("*"), "`AGE` >= 32");
    * ["queryString"] => "SELECT * FROM `USER` WHERE 1 `AGE` >= :W_AGE"
    *
    * @param string $table
    * @param array $where
    * @param string $query
    * @return bool|int
    */
   function own_mysql_delete($table, $where, $query = "")
   {
       $conn = $this->own_mysql_conn();

       if (!is_array($where)) die("WHERE 조건은 배열 형식이어야 합니다.");
       if (!empty($query)) $query = "AND ($query)";

       $w = $this->own_where($where);

       $prepared = $conn->prepare("DELETE FROM $table WHERE $w[where] $query");

       if ($prepared->execute($w["execute"])) return $prepared->rowCount();
       else return false;
   }

   /**
   * oracle 커넥션을 반환합니다.
   *
   * @return resource
   */
   function own_oracle_conn()
   {
       $db = $this->oracle;

       if (!function_exists("oci_connect")) die ("oci_connect() 를 사용할 수 없습니다.");

       $conn = oci_connect(
           "$db[user]", 
           "$db[password]", 
           "$db[ip]/$db[database_name]", 
           "$db[charset]"
           );

       if (!$conn) {
           $e = oci_error();
           trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
       } else {
           return $conn;
       }

       die ("OCI 연결이 되지 않았습니다.");
   }

   function own_oci_exe_proc($conn, $execute)
   {
       if ($execute) {
           oci_commit($conn);
           oci_close($conn);
           return true;
       } else {
           oci_rollback($conn);
           oci_close($conn);
           return false;
       }
   }

   function own_oci_select($table, $where, $target = "*", $query = "")
   {
       $conn = $this->own_oracle_conn();

       if (!is_array($where)) die("WHERE 조건은 배열 형식이어야 합니다.");
       if (!empty($query)) $query = "AND ($query)";

       $w = $this->own_where($where);

       $stmt = oci_parse($conn, "select $target from $table where $w[where] $query");

       foreach ($w["execute"] as $bv_name => $variable) {
           $result = oci_bind_by_name($stmt, $bv_name, $w["execute"][$bv_name]) ? "success" : "fail";
       }

       oci_execute($stmt);
       oci_fetch_all($stmt, $output, null, null, OCI_FETCHSTATEMENT_BY_ROW);

       return $output;
   }

   function own_oci_ins_exe($table, $parameters)
   {
       $conn = $this->own_oracle_conn();

       $p = $this->own_param($parameters);

       // Index 필드는 테이블명에 ID를 붙히고, 앞 구분자를 F 로 표시
       $AUTO_INCREMENT["ID"] = str_replace("T", "F", $table) . "ID";
       // Index 필드의 시퀀스 이름은 테이블명 뒤에 _SEQ를 붙힘
       $AUTO_INCREMENT["SEQ"] = $table . "_SEQ.NEXTVAL";
       $stmt = oci_parse($conn, "INSERT INTO $table ($AUTO_INCREMENT[ID], $p[fields]) VALUES($AUTO_INCREMENT[SEQ], $p[colon])");

       foreach ($p["execute"] as $bv_name => $variable) {
           $result = oci_bind_by_name($stmt, $bv_name, $p["execute"][$bv_name]) ? "success" : "fail";
       }

       return array("conn" => $conn, "execute" => oci_execute($stmt, OCI_NO_AUTO_COMMIT));
   }

   function own_oci_upd_exe($table, $parameters, $where, $query = "")
   {
       $conn = $this->own_oracle_conn();

       if (!is_array($parameters)) die("매개 변수는 배열 형식이어야 합니다.");
       if (!is_array($where)) die("WHERE 조건은 배열 형식이어야 합니다.");
       if (!empty($query)) $query = "AND ($query)";

       $p = $this->own_param($parameters);
       $w = $this->own_where($where);

       $stmt = oci_parse($conn, "update $table set $p[sets] where $w[where] $query");

       foreach (array_merge($p["execute"], $w["execute"]) as $bv_name => $variable) {
           $result = oci_bind_by_name($stmt, $bv_name, $w["execute"][$bv_name]) ? "success" : "fail";
       }

       return array("conn" => $conn, "execute" => oci_execute($stmt, OCI_NO_AUTO_COMMIT));
   }

   function own_oci_del_exe($table, $where, $query = "")
   {
       $conn = $this->own_oracle_conn();

       if (!is_array($where)) die("WHERE 조건은 배열 형식이어야 합니다.");
       if (!empty($query)) $query = "AND ($query)";

       $w = $this->own_where($where);

       $stmt = oci_parse($conn, "delete from $table where $w[where] $query");

       foreach ($w["execute"] as $bv_name => $variable) {
           $result = oci_bind_by_name($stmt, $bv_name, $w["execute"][$bv_name]) ? "success" : "fail";
       }

       return array("conn" => $conn, "execute" => oci_execute($stmt, OCI_NO_AUTO_COMMIT));
   }
}
~~~