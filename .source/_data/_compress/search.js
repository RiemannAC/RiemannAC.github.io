var isfetched=!1,isXml=!0,search_path="{{ config.search.path }}";0===search_path.length?search_path="search.xml":/json$/i.test(search_path)&&(isXml=!1);var path="{{ config.root }}"+search_path,onPopupClose=function(e){$(".popup").hide(),$("#local-search-input").val(""),$(".search-result-list").remove(),$("#no-result").remove(),$(".local-search-pop-overlay").remove(),$("body").css("overflow","")};function proceedsearch(){$("body").append('<div class="search-popup-overlay local-search-pop-overlay"></div>').css("overflow","hidden"),$(".search-popup-overlay").click(onPopupClose),$(".popup").toggle();var e=$("#local-search-input");e.attr("autocapitalize","none"),e.attr("autocorrect","off"),e.focus()}var searchFunc=function(e,s,a){$("body").append('<div class="search-popup-overlay local-search-pop-overlay"><div id="search-loading-icon"><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i></div></div>').css("overflow","hidden"),$("#search-loading-icon").css("margin","20% auto 0 auto").css("text-align","center"),$.ajax({url:e,dataType:isXml?"xml":"json",async:!0,success:function(e){isfetched=!0,$(".popup").detach().appendTo(".header-inner");function t(){var w=n.value.trim().toLowerCase(),T=w.split(/[\s\-]+/);1<T.length&&T.push(w);var b=[];if(0<w.length&&o.forEach(function(e){var t=!1,o=0,h=0,n=e.title.trim(),r=n.toLowerCase(),s=e.content.trim().replace(/<[^>]+>/g,""),a=s.toLowerCase(),i=decodeURIComponent(e.url),c=[],l=[];if(""!=n&&(T.forEach(function(e){function t(e,t,o){var n=e.length;if(0===n)return[];var r=0,s=[],a=[];for(o||(t=t.toLowerCase(),e=e.toLowerCase());-1<(s=t.indexOf(e,r));)a.push({position:s,word:e}),r=s+n;return a}c=c.concat(t(e,r,!1)),l=l.concat(t(e,a,!1))}),(0<c.length||0<l.length)&&(t=!0,o=c.length+l.length)),t){function p(e,t,o,n){for(var r=n[n.length-1],s=r.position,a=r.word,i=[],c=0;s+a.length<=o&&0!=n.length;){a===w&&c++,i.push({position:s,length:a.length});var l=s+a.length;for(n.pop();0!=n.length&&(s=(r=n[n.length-1]).position,a=r.word,s<l);)n.pop()}return h+=c,{hits:i,start:t,end:o,searchTextCount:c}}[c,l].forEach(function(e){e.sort(function(e,t){return t.position!==e.position?t.position-e.position:e.word.length-t.word.length})});var u=[];0!=c.length&&u.push(p(0,0,n.length,c));for(var f=[];0!=l.length;){var d=l[l.length-1],g=d.position,v=d.word,$=g-20,C=g+80;$<0&&($=0),C<g+v.length&&(C=g+v.length),C>s.length&&(C=s.length),f.push(p(0,$,C,l))}f.sort(function(e,t){return e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start});var m=parseInt("{{ theme.local_search.top_n_per_article }}");function x(o,e){var n="",r=e.start;return e.hits.forEach(function(e){n+=o.substring(r,e.position);var t=e.position+e.length;n+='<b class="search-keyword">'+o.substring(e.position,t)+"</b>",r=t}),n+=o.substring(r,e.end)}0<=m&&(f=f.slice(0,m));var y="";0!=u.length?y+="<li><a href='"+i+"' class='search-result-title'>"+x(n,u[0])+"</a>":y+="<li><a href='"+i+"' class='search-result-title'>"+n+"</a>",f.forEach(function(e){y+="<a href='"+i+'\'><p class="search-result">'+x(s,e)+"...</p></a>"}),y+="</li>",b.push({item:y,searchTextCount:h,hitCount:o,id:b.length})}}),1===T.length&&""===T[0])r.innerHTML='<div id="no-result"><i class="fa fa-search fa-5x" /></div>';else if(0===b.length)r.innerHTML='<div id="no-result"><i class="fa fa-frown-o fa-5x" /></div>';else{b.sort(function(e,t){return e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id});var t='<ul class="search-result-list">';b.forEach(function(e){t+=e.item}),t+="</ul>",r.innerHTML=t}}var o=isXml?$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get():e,n=document.getElementById(s),r=document.getElementById(a);$(".search-icon").click(t),n.addEventListener("keypress",function(e){13===e.keyCode&&t()}),$(".local-search-pop-overlay").remove(),$("body").css("overflow",""),proceedsearch()}})};$(".popup-trigger").click(function(e){e.stopPropagation(),!1===isfetched?searchFunc(path,"local-search-input","local-search-result"):proceedsearch()}),$(".popup-btn-close").click(onPopupClose),$(".popup").click(function(e){e.stopPropagation()}),$(document).on("keyup",function(e){27===e.which&&$(".search-popup").is(":visible")&&onPopupClose()});