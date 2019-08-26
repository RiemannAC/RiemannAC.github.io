---
title: Hello World
tags:
  - Testing
  - Another Tag
categories: Testing
abbrlink: 4a17b156
mathjax: true
copyright: false
---

Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

<!-- more -->

<style>
  span.label {
    padding: 4px 8px !important;
    margin: 4px;
    display: inline-block !important;
    border-radius: 4px;
  }
  .primary {
    color: #fff !important;
    background-color: #2780e3 !important;
  }
</style>

## [Quick Start](#Quick-Start)

### [Create a new post](#Create-a-new-post)

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### [Run server](#Run-server)

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### [Generate static files](#Generate-static-files)

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### [Deploy to remote sites](#Deploy-to-remote-sites)

``` bash
$ hexo deploy
```

### [Code with path](#Code-with-path)

```yaml
{% codeblock _config.yml %}
# Sitemap
sitemap:
  path: sitemap.xml
{% endcodeblock %}
```

{% codeblock _config.yml %}
# Sitemap
sitemap:
  path: sitemap.xml
{% endcodeblock %}

### [MathJax](#MathJax)

```
$x^{y^z}=(1+{\rm e}^x)^{-2xy^w}$
```
$x^{y^z}=(1+{\rm e}^x)^{-2xy^w}$

More info: [MathJax](https://www.zybuluo.com/knight/note/96093)

### [Imgur](#Imgur)

```bash
![Here is alt desc](imgurl)
```

### [Title](#Title) #####

```markdown
### Title
### Title #####
```

<style>
  #Code-block-with-fence a {
    color: red;
  }
  .primary {
    color: red;
  }
</style>
### [Code block with fence](#Code-block-with-fence)

``````markdown
`````
```
test
```
`````
``````

## [Git diff](#Git-diff)

`````
```diff=
def double(num)
- num^2
+ num*2
end
```
`````

```diff=
def double(num)
- num^2
+ num*2
end
```

## [Label](#Label)

{% codeblock themes/next/_config.yml lang:yaml %}
# Label tag
label: true
{% endcodeblock %}

{% label primary@primary %}
{% label default@default %}
{% label success@success %}
{% label info@info %}
{% label warning@warning %}
{% label danger@danger %}

```
{% label primary@primary %}
{% label default@default %}
{% label success@success %}
{% label info@info %}
{% label warning@warning %}
{% label danger@danger %}
```

## [Font-awesome](#Font-awesome)

<i class="fa fa-paper-plane"></i> <i class="fa fa-align-center"></i>

```html
<i class="fa fa-paper-plane"></i> <i class="fa fa-align-center"></i>
```

More info: [Font Awesome](https://fontawesome.com)