"use strict";$(function(){({init:function(){this.getEle(),this.bindEvent()},getEle:function(){this.$err=$(".err"),this.$word=$(".word"),this.$back=$(".back"),this.$move=$(".move"),this.$btn=$(".btn"),this.$phone=$("#phone"),this.$box=$(".box")},bindEvent:function(){var s=this,i=!1,c=!1;this.$move[0].onmousedown=function(t){var e=(t=t||t.event).offsetX,n=s.$box.offset().left;console.log(n),document.onmousemove=function(t){var o=t.clientX-e-n;if(s.$move.css({left:o}),s.$back.css({width:o}),o<=0)s.$move.css({left:0});else if(260<=o)return s.$move.css({left:260}),s.$back.css({width:260}),$(".move").html('<img src="./img/pass.png" alt="">'),$(".word").text("验证通过"),$(".word").css({color:"#fff",transform:"translate(-80%, -50%)"}),c=i=!0,s.$move[0].onmousedown=null,void(document.onmousemove=null);document.onmouseup=function(t){t.clientX;if(c)return s.$move.css({left:260}),s.$back.css({width:260}),$(".move").html('<img src="./img/pass.png" alt="">'),$(".word").text("验证通过"),$(".word").css({color:"#fff",transform:"translate(-80%, -50%)"}),i=!0,s.$move[0].onmousedown=null,document.onmousemove=null,void(document.onmouseup=null);animate(s.$back[0],{width:0}),animate(s.$move[0],{left:0}),document.onmousemove=null}}},this.$btn.click(function(){/^1[3456789]\d{9}$/.test(s.$phone.val())?(s.$err.css({opacity:0}),i?$.ajax({url:"./php/login.php",type:"get",data:{type:"select",phone:s.$phone.val()},dataType:"json",success:function(t){t.result?2===t.result&&alert("手机号暂未注册，快去注册吧！"):(alert("您的初始密码为"+t[0].pass),location.href="./login.html")}}):alert("为了您的帐户安全，请进行安全校验")):s.$err.css({opacity:1})})}}).init()});