(function(){function t(t){typeof Log!==n&&typeof Log.Log!==n&&Log.Log("NcHeader","Rewards",t,!0)}function i(){var u,e,r,a,o,v,y,s,i,h;if(typeof bepcfg===n)t("bepcfg Undefined");else if(u=_ge("nc_iid"),u){var c=typeof bepcfg.wb!==n,l=typeof bepcfg.v!==n,f=u.getAttribute("_IG");if(f&&f.length||(f=_G.IG),e="&IID="+u.getAttribute("_iid")+"&IG="+f,l)try{sj_cook.get("")}catch(p){e+="&CID="+u.getAttribute("_cid")}r="/rewardsapp/ncheader?ver="+_G.AppVer+e;a=r;try{o=undefined;v=/(^|&)uncrunched=1(&|$)/i;o=v.exec(_w.location.search.substr(1));r=r+(o?"&uncrunched=1":"")}catch(w){r=a}y=_ge("rewardsEntryPoint");y&&(r="".concat(r,"&loadEntryPointsScript=1"));s=[_w.top,_w];i=sj_gx();i.open("POST",r,!0);i.setRequestHeader("Content-type","application/x-www-form-urlencoded");c&&(i.onreadystatechange=function(){i&&i.readyState==4&&i.status==200&&sj_appHTML(sj_b,i.responseText)});h="wb="+(c?bepcfg.wb:"0");l&&(h+=";i="+(s[0]!==s[1].self?0:1)+";v="+bepcfg.v);i.send(h)}else t("nc_iid NotFound")}var n="undefined";sj_evt.bind("onHTML",function(){i()},!0,0)})()