---
layout: page
title: Blog
permalink: /blog/
template_engine: erb
---

<ul>
  <% collections.posts.each do |post| %>
    <li class="flex flex-col mb-10">
      <a href="<%= post.relative_url %>" class="text-2xl font-medium"><%= post.data.title %></a>
      <p class="mt-1 mb-0"><%= post.data.description %></p>
    </li>
  <% end %>
</ul>
