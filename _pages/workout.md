---
layout: page
title: Workout
order: 4
image: '/assets/images/pages/workout.jpg'
---

<style>table{width:100%;caption-side:bottom;}table thead tr{border-bottom: 1px solid #aaaa;}table caption{text-align:left;line-height:1;}.c-content h4,.c-content table {display:none;}</style>

#### 202005

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  45 |  -  |  45 |  36 |  11 |  -  |
|  -  |  40 |  47 |  -  |  37 |  06 |  -  |
|  -  |  30 |  37 |  -  |  37 |  -  |  -  |
|  -  |  37 |  46 |  -  |  45 |  -  |  39 |

#### 202006

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  42 |  45 |  -  |  45 |  45 |  -  |
|  -  |  46 |  51 |  -  |  51 |  41 |  -  |
|  -  |  58 |  58 |  -  |  56 |  57 |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202007

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202008

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202009

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202010

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202011

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202012

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

<script defer>let month_element=document.getElementById(((new Date()).getFullYear())+''+(String((new Date()).getMonth()+1).padStart(2, '0')));let table=month_element.nextElementSibling;if(month_element){month_element.style.display='block';table.style.display='table';}var last_day=new Date((new Date()).getFullYear(),(new Date()).getMonth()+1,0);let total=0;let td=table.getElementsByTagName('td');let workout_day=0;for(var key in td){if(parseInt(td[key].innerText)){total+=parseInt(parseInt(td[key].innerText));workout_day++;}}let average=parseInt(total/last_day);let nf=Intl.NumberFormat();let year_total=0;let year_workout_day=0;$('[id^='+(new Date().getFullYear())+']').next().find('td').each(function(i,o){if(parseInt($(o).text())){year_total+=parseInt($(o).text());year_workout_day++;}});let caption=document.createElement("caption");caption.innerHTML="<legend><small>Total: "+nf.format(total)+"</small></legend><legend><small>Average: "+average+"</small></legend><legend><small>Ratio: "+workout_day+"/"+last_day+"</small></legend><legend><small>Year Total: "+nf.format(year_total)+"</small></legend><legend><small>"+year_workout_day+"</small></legend>";table.appendChild(caption);</script>