---
layout: page
title: Tags
image: '/assets/images/pages/about.jpeg'
---

<div>
{% for tag in site.tags %}
    <span style="font-weight:bold;">{{ tag[0] }}</span>
    <br/>
    
    {% assign pages_list = tag[1] %}
    
    {% for post in pages_list %}
        {% if post.title != null %}
            {% if group == null or group == post.group %}
            
                <a class="text-dark" href="{{ site.baseurl }}{{ post.url }}" target="_blank" style="font-size:16px;text-decoration:none;">{{ post.title }}</a><br/>
                
            {% endif %}
        {% endif %}
    {% endfor %}
    
    {% assign pages_list = nil %}
    {% assign group = nil %}
    
    <br/>
{% endfor %}
</div>