!function(e){function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(e,n,t){"use strict";window.Quiz=function(e){var n={quizElem:document.querySelector(e),newElem:function(e,n,t){var r=document.createElement(e);return void 0!==n&&(r.className=n),void 0!==t&&(r.innerHTML=t),r},data:[{question:"pick b",answers:{a:"aaaa",b:"bbbb",c:"cccc"},correctAnswer:"b"},{question:"pick d",answers:{a:"aaaa",b:"bbbb",c:"cccc",d:"dddd"},correctAnswer:"d"},{question:"pick a",answers:{a:"aaaa",b:"bbbb",c:"cccc"},correctAnswer:"a"},{question:"pick c",answers:{a:"aaaa",b:"bbbb",c:"cccc"},correctAnswer:"c"}],buildQuizTemplate:function(){var e=this.buildQuizQuestion(),n='\n        <h4>Quiz:</h4>\n        <form action="/" class="quiz-wrapper">\n          '+e+'\n        </form>\n        <button type="submit" class="quiz-submit">Submit</button>';this.quizElem.insertAdjacentHTML("afterbegin",n),document.querySelector(".quiz-submit").addEventListener("click",this.validation)},buildQuizQuestion:function(){return this.data.map(function(e,n,t){var r="<h5>Q: "+e.question+"</h5>";r=r+'<div class="group-'+(n+1)+'">';for(var c in e.answers){r=r+'<label for="quesion-'+(n+1)+"-"+c+'">\n            <input type="radio" id="quesion-'+(n+1)+"-"+c+'" name="quesion-'+(n+1)+'" value="'+c+'">\n            '+e.answers[c]+"\n          </label>"}return r+="</div>"}).join("")},validation:function(){var e=document.querySelectorAll('.quiz-wrapper div[class^="group-"]'),t=[];[].forEach.call(e,function(e,n){if(e.querySelector("input:checked"))return void t.push(e.querySelector("input:checked").value);t.push(void 0)}),console.log(t);var r=document.querySelectorAll('input[name^="quesion-"]:checked'),c=[];[].forEach.call(r,function(e){c.push(e)});var i=[];n.data.map(function(e){i.push(e.correctAnswer)})}};n.buildQuizTemplate()}},function(e,n,t){e.exports=t(0)}]);