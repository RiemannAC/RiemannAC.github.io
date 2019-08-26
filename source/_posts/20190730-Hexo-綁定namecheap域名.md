---
title: GitHub Page 綁定 Namecheap 域名
comments: true
author: Riemann
mathjax: false
summary_img: /images/cover-code720.png
abbrlink: 859f993a
date: 2019-07-30 03:47:07
tags: [DNS, GitHub Page]
categories: HTTP
copyright: true
---

<style>
  /* 修正 ol 後縮 */
  ol {
    padding-left: 16px; 
  }
  .custom-table table {
    width: auto;
  }
  /* 圖片長度一致 */
  .custom-img img {
    width: 100%;
  }
</style>

想更換 GitHub Page 的 domain name 找了幾家 DNS。我要的域名在 Namecheap 比較便宜，又有免費的 WhoisGuard 服務，個人使用上比較隱私就選擇了 Namecheap

<!-- more -->

## [購買域名](#購買域名)

購買域名的部份請參考其它教學，大致上挑喜歡的域名加入購物車結帳即可，一般使用不到其它付費選項

## [將域名連結 GitHub Page](#將域名連結-GitHub-Page)

Namecheap 提供了[設定文件](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages)

以下以這個 Blog 為例：

原本 Blog 的位址為 https://riemannac.github.io
域名 riemann.blog

請自行更換成自己的位址和域名

1. 在 Sidebar 點選 "Domain List"
2. 在購買的域名那一列右側點選 "MANAGE"

![](https://i.imgur.com/9I5ueoc.png)

3. 點選圖擊的 Advanced DNS

<div class="custom-img">

![](https://i.imgur.com/LOzR00J.png)

</div>

4. 點擊左下紅色的 ADD NEW RECORD 並新增四個 record 如下:

   四個 A Record 都是指向 GitHub DNS Server IP 一般設定一到兩個即可，但這邊就照文件設定

   CNAME Record 指向預連結的 GitHub Page 完成後儲存設定

<div class="custom-table">

| Type | Host | Value | TTL |
|:-----|:-----|:------|:----|
| A Record | @ | 185.199.108.153 | 30 min |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | riemannac.github.io | 30 min |

</div>

5. 刪除兩個預設的 Record

<div class="custom-img">

![](https://i.imgur.com/9y9q8Sv.png)

</div>

## [將 GitHub Page 綁定域名](#將-GitHub-Page-綁定域名)

到 GitHub 專案 Setting 頁面 > GitHub Pages > Custom domain

![](https://i.imgur.com/0ln75Fw.png)

填入申請的域名並按下 Save 儲存設定即可

下方的 Enforce HTTPS 一般幾個小時後便可以按下，然後網址就是 https 開頭了

## [上傳 CNAME 設定](#上傳-CNAME-設定)



1. 在 `source` 目錄下新增一個檔案

```bash
[~/blog/source] (✘ master) $ touch CNAME
```

2. 檔案內容輸入域名

若輸入 www.riemann.blog 則只能訪問帶有 www 開頭的位址，輸入 riemann.blog 則兩者皆可

{% codeblock source/CNAME %}
riemann.blog
{% endcodeblock %}

3. 執行

```bash
hexo clean && hexo d -g
```

上傳後就會保留設定避免每次佈署後 CNAME 消失


**參考資料**
[實作 - 如何更改 Github-Page 的網域 | Kenny Li](https://kennyliblog.nctu.me/2019/06/20/Change-domain/)
[GitHub+Hexo 搭建个人网站详细教程 | echobits](https://blog.byhi.org/archives/c137e341)