---
layout: page
title: Tags
image: '/assets/images/pages/about.jpeg'
---


# Simple default styles for headings

## Simple default styles for headings

### Simple default styles for headings

#### Simple default styles for headings

##### Simple default styles for headings

###### Simple default styles for headings

{% for tag in site.tags %}
    {{ tag[0] }}
    <br/>
    {{ tag[1] }}
{% endfor %}