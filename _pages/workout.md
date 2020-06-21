---
layout: page
title: Workout
order: 4
image: '/assets/images/pages/workout.jpg'
---

<style>table{width:100%;caption-side:bottom;}table thead tr{border-bottom: 1px solid #aaaa;}.c-content h4,.c-content table {display:none;}</style>

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

<script>let month_element=document.getElementById(((new Date()).getMonth()+1)+'월');if(month_element){month_element.style.display='block';month_element.nextElementSibling.style.display='table';}let sum=0;let td=month_element.nextElementSibling.getElementsByTagName('td');for(var key in td){if(parseInt(td[key].innerText)){sum+=parseInt(parseInt(td[key].innerText));}}let last_day=new Date((new Date()).getFullYear(),(new Date()).getMonth()+1,0);let average=parseInt(sum/last_day);let caption=document.createElement("caption");caption.innerHTML="<legend><small>월 총합: "+sum+"</small></legend><legend><small>월 평균: "+average+"</small></legend>";table.appendChild(caption);</script>