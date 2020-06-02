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
    
    {% assign pages_list = tag[1] %}
    
    {% for post in pages_list %}
        {% if post.title != null %}
            {% if group == null or group == post.group %}
                {% include tags.html %}
            {% endif %}
        {% endif %}
    {% endfor %}
    
    {% assign pages_list = nil %}
    {% assign group = nil %}
{% endfor %}