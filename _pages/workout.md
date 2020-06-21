---
layout: page
title: Workout
order: 4
image: '/assets/images/pages/workout.jpg'
---

<style>table{width:100%;caption-side:bottom;}table thead tr{border-bottom: 1px solid #aaaa;}table caption{text-align:left;line-height:1;}.c-content h4,.c-content table {display:none;}</style>

#### 6월

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  55 |  55 |  55 |  55 |  55 |  -  |
|  -  |  55 |  55 |  55 |  55 |  55 |  -  |
|  -  |  55 |  55 |  55 |  55 |  55 |  -  |
|  -  |  55 |  55 |  55 |  55 |  55 |  -  |
|  -  |  55 |  55 |  -  |  -  |  -  |  -  |

#### 7월

|  일 |  월 |  화  |  수 |  목 |  금 |  토 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  -  |  -  |  -  |  55 |  55 |  55 |  -  |
|  -  |  55 |  55 |  55 |  55 |  55 |  -  |
|  -  |  55 |  55 |  55 |  55 |  55 |  -  |
|  -  |  55 |  55 |  55 |  55 |  55 |  -  |
|  -  |  55 |  55 |  55 |  55 |  55 |  -  |

<script>let month_element=document.getElementById(((new Date()).getMonth()+1)+'월');let table=month_element.nextElementSibling;if(month_element){month_element.style.display='block';table.style.display='table';}let sum=0;let td=table.getElementsByTagName('td');let workout_day=0;for(var key in td){if(parseInt(td[key].innerText)){sum+=parseInt(parseInt(td[key].innerText));workout_day++;}}let average=parseInt(sum/workout_day);let nf=Intl.NumberFormat();let caption=document.createElement("caption");caption.innerHTML="<legend><small>총합: "+nf.format(sum)+"</small></legend><legend><small>평균: "+average+"</small></legend>";table.appendChild(caption);</script>