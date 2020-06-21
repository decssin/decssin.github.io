---
layout: page
title: Workout
order: 4
image: "/assets/images/pages/workout.jpg"
---

<style>
    table {
    width: 100%;
    caption-side: bottom;
    }
    table thead tr {
    border-bottom: 1px solid #aaaa;
    }
    table caption {
    text-align: left;
    line-height: 1;
    }
    .c-content h4,
    .c-content table {
    display: none;
    }
</style>

#### 202005

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  | 45  |  -  | 45  | 36  | 11  |  -  |
|  -  | 40  | 47  |  -  | 37  | 06  |  -  |
|  -  | 30  | 37  |  -  | 37  |  -  |  -  |
|  -  | 37  | 46  |  -  | 45  |  -  | 39  |

#### 202006

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  | 42  | 45  |  -  | 45  | 45  |  -  |
|  -  | 46  | 51  |  -  | 51  | 41  |  -  |
|  -  | 58  | 58  |  -  | 56  | 57  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202007

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202008

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202009

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202010

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202011

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202012

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |  -  |  -  |  -  |

<script>
    let month_element = document.getElementById(new Date().getFullYear() +""+String(new Date().getMonth() + 1).padStart(2, "0"));
    let table = month_element.nextElementSibling;
    if (month_element) {
        month_element.style.display = "block";
        table.style.display = "table";
    }

    let last_day = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    let total = 0;
    let td = table.getElementsByTagName("td");
    let workout_day = 0;
    for (var key in td) {
        if (parseInt(td[key].innerText)) {
            total += parseInt(parseInt(td[key].innerText));
            workout_day++;
        }
    }

    let average = parseInt(total / last_day.getDate());
    let nf = Intl.NumberFormat();
    let year_total = 0;
    let year_date = 0;
    let year_workout_date = 0;
    let year_element=document.querySelectorAll("h4[id^='2020']")
    let each_td = {};
    for (var key in year_element) {
        y_el = year_element[key];
        if (typeof(y_el) === 'object') {
            each_td = y_el.nextElementSibling.getElementsByTagName('td');
            for (var e_t in each_td)  {
                if (typeof(each_td[e_t]) === 'object') {
                    year_date++;
                    if (parseInt(each_td[e_t].innerText)) {
                        year_total += parseInt(each_td[e_t].innerText);
                        year_workout_date++;
                    }
                }
            }
        }
    }
    let caption = document.createElement("caption");
    caption.innerHTML =
        "<legend><small>Total: " + nf.format(total) + "</small></legend>"
        + "<legend><small>Average: " + average + "</small></legend>"
        + "<legend><small>Ratio: " + workout_day + "/" + last_day.getDate() + "</small></legend>"
        + "<legend><small>Year Total: " + nf.format(year_total) + "</small></legend>"
        + "<legend><small>Year Ratio: " + year_workout_date + "/" + year_date + "</small></legend>"
        ;
    table.appendChild(caption);
</script>
