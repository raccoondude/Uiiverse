function popup(a){a?a.preventDefault():window.event.returnValue=!1,window.open(this.getAttribute("href"),this.getAttribute("target"),"width="+this.getAttribute("data-window-width")+",height="+this.getAttribute("data-window-height")+",menubar=no,toolbar=no,location=no,status=no,resizeable=no,scrollbars=yes")}function loadedTask(){resize.resizeEvent();var a=document.getElementById("empathy-button");a&&(a.onclick=popup);for(var b,c=document.getElementsByTagName("img"),d=0;b=c[d];d++)b.onload=function(){resize.resizeEvent()}}var resize={setup:function(){resize.callFlag=!1,resize.lastHeight=0,window.addEventListener?window.addEventListener("resize",resize.resizeEvent,!1):window.attachEvent&&window.attachEvent("onresize",resize.resizeEvent)},resizeEvent:function(){if(!window.parent.postMessage)return!1;resize.callFlag||(resize.callFlag=!0,setTimeout(resize.execPostMessage,60)),resize.height=Math.max.apply(null,[document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.scrollHeight])},execPostMessage:function(){if(resize.callFlag=!1,resize.height!==resize.lastHeight){var a=resize.height;window.parent.postMessage("height:"+a,"*"),resize.lastHeight=a}document.documentElement.style.overflow="hidden"}};(function(){window.postMessage&&(resize.setup(),document.addEventListener?document.addEventListener("DOMContentLoaded",loadedTask,!1):window.onload=loadedTask)}).call(this);