  	var homePage = "https://www.densena.com",
numPosts = 10;
function recentPosts(a){if(document.getElementById("recent-posts")){var e=a.feed.entry,title,link,content="",ct=document.getElementById("recent-posts");for(var i=0;i<numPosts;i++){for(var j=0;j<numPosts;j++){if(e[i].link[j].rel=="alternate"){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+='<li class="recent-posts"><a href="'+link+'" title="'+title+'" target="_blank" rel="nofollow">'+title+'</a></li>'}ct.innerHTML=content}}var rcp=document.createElement('script');rcp.src=homePage+'/feeds/posts/summary?alt=json-in-script&orderby=published&max-results='+numPosts+'&callback=recentPosts';document.getElementsByTagName('head')[0].appendChild(rcp);
  var appended = false,
  bookmark = document.createElement("div");
  bookmark.id = "fbOnscroll";
  bookmark.innerHTML = '<div id="fbbox-wrapper"><div class="fbbox-wrapper zoomInUp">\
  <object name="f13bea94f064144" width="1000px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:page Facebook Social Plugin" data="https://www.facebook.com/v2.7/plugins/page.php?adapt_container_width=true&amp;app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FuN4_cXtJDGb.js%3Fversion%3D42%23cb%3Df19b772d4d20444%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff1ba7fe51c4d354%26relation%3Dparent.parent&amp;container_width=613&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Finfodensena&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false" style="border: none; visibility: visible; width: 340px; height: 214px;" class=""></object>\
<div class="close-fbcookie" onclick="hidefbbox()"><span>&#215;</span> Don\'t Show Again</div>\
<div class="close-fbbox" onclick="hidefb()">&#215;</div>\
              </div>\
              <div class="layer fadeIn"></div></div>\
';
function hidefb(){document.getElementById("fbbox-wrapper").style.display="none"}function hidefbbox(){document.getElementById("fbbox-wrapper").style.display="none",createCookie("hideDialog","hide",7000)}function hidesubscribe(){document.getElementById("site-subs").style.display="none"}function hidesubscribebox(){document.getElementById("site-subs").style.display="none",createCookie("hideDialog2","hide",7000)}function createCookie(e,o,n){if(n){var t=new Date;t.setTime(t.getTime()+24*n*60*60*1e3);var i="; expires="+t.toGMTString()}else var i="";document.cookie=e+"="+o+i+"; path=/"}function readCookie(e){for(var o=e+"=",n=document.cookie.split(";"),t=0;t<n.length;t++){for(var i=n[t];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(o))return i.substring(o.length,i.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>800&&(appended||(document.body.appendChild(bookmark),appended=!0),readCookie("hideDialog")&&(document.getElementById("fbbox-wrapper").style.display="none"),readCookie("hideDialog2")&&(document.getElementById("site-subs").style.display="none"))};
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v3.2&appId=174283936611283&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
