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
        padding-top: 25px;
    }
    .c-content h4,
    .c-content table {
        display: none;
    }
</style>

#### 202005

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  0  |  0  |
|  0  | 45  |  0  | 45  | 36  | 11  |  0  |
|  0  | 40  | 47  |  0  | 37  | 06  |  0  |
|  0  | 30  | 37  |  0  | 37  |  0  |  0  |
|  0  | 37  | 46  |  0  | 45  |  0  | 39  |
|  0  |  -  |  -  |  -  |  -  |  -  |  -  |

#### 202006

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  | 42  | 45  |  0  | 45  | 45  |  0  |
|  0  | 46  | 51  |  0  | 51  | 41  |  0  |
|  0  | 58  | 58  |  0  | 56  | 57  |  0  |
|  0  | 56  | 62  |  0  | 56  |  0  |  0  |
|  0  |  0  |  0  |  -  |  -  |  -  |  -  |

#### 202007

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  -  |

#### 202008

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  -  |  -  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  -  |  -  |  -  |  -  |  -  |

#### 202009

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  -  |  -  |  -  |

#### 202010

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  -  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |

#### 202011

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  -  |  -  |  -  |  -  |  -  |

#### 202012

| 일  | 월  |  화  | 수  | 목  | 금  | 토  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  0  |  0  |  0  |  -  |  -  |

<script>
    let month_element = document.getElementById(
        new Date().getFullYear() 
        + "" 
        + (new Date().getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    );

    if (month_element) {
        month_element.style.display = "block";
        month_element.nextElementSibling.style.display = "table";
    }

    let last_day = new Date(
        new Date().getFullYear(), 
        new Date().getMonth() + 1, 
        0
    );

    let total               = 0;
    let nf                  = Intl.NumberFormat();
    let year_total          = 0;
    let year_date           = 0;
    let year_workout_date   = 0;

    let month_td = month_element.nextElementSibling.getElementsByTagName("td");
    let workout_day = 0;
    for (var key in month_td) {
        if (parseInt(month_td[key].innerText)) {
            total += parseInt(parseInt(month_td[key].innerText));
            workout_day++;
        }
    }

    let average         = parseInt(total / last_day.getDate());
    let year_element    = document.querySelectorAll("h4[id^='2020']");
    let each_td         = {};

    for (var key in year_element) {
        each_year_element = year_element[key];

        if (typeof(each_year_element.id) === 'string') {
            
            var year_last_date = new Date(
                each_year_element.id.substring(0,4), 
                each_year_element.id.substring(4,6) + 1, 
                0
            );
            year_date += year_last_date.getDate();

            each_td = each_year_element.nextElementSibling.getElementsByTagName('td');
            for (var key_td in each_td)  {
                if (typeof(each_td[key_td]) === 'object') {
                    if (parseInt(each_td[key_td].innerText)) {
                        year_total += parseInt(each_td[key_td].innerText);
                        year_workout_date++;
                    }
                }
            }
        }
    }

    let caption = document.createElement("caption");
    caption.innerHTML =
        "<legend><small>Total: "        + nf.format(total)                          + "</small></legend>"
        + "<legend><small>Average: "    + average                                   + "</small></legend>"
        + "<legend><small>Ratio: "      + workout_day + "/" + last_day.getDate()    + "</small></legend>"
        + "<legend><small>Year Total: " + nf.format(year_total)                     + "</small></legend>"
        + "<legend><small>Year Ratio: " + year_workout_date + "/" + year_date       + "</small></legend>"
        ;
    month_element.nextElementSibling.appendChild(caption);
</script>
