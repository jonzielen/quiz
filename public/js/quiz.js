!function(n){function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=1)}([function(n,e,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};window.Quiz=function(n){({quizElem:document.querySelector(n),init:function(){this.buildQuizTemplate()},newElem:function(n,e,t){var r=document.createElement(n);return void 0!==e&&(r.className=e),void 0!==t&&(r.innerHTML=t),r},append:function(n,e){var t=[];return Array.prototype.slice.call(arguments).map(function(n){"object"===(void 0===n?"undefined":r(n))&&t.push(n),"string"==typeof n&&t.push(document.querySelector(n))}),t[0].appendChild(t[1])},data:[{question:"pick b",answers:{a:"a",b:"b",c:"c"},correctAnswer:"b"},{question:"pick a",answers:{a:"a",b:"b",c:"c"},correctAnswer:"a"},{question:"pick c",answers:{a:"a",b:"b",c:"c"},correctAnswer:"c"}],buildQuizTemplate:function(){var n=this.buildQuizQuestion(),e='\n        <h4>Quiz:</h4>\n        <div class="quiz-wrapper">\n          '+n+'\n        </div>\n        <button type="submit" class="submit">Submit</button>';this.quizElem.insertAdjacentHTML("afterbegin",e)},buildQuizQuestion:function(){return this.data.map(function(n,e){return"\n          <h5>Q: "+n.question+'</h5>\n          <label>\n            <input type="radio" name="quesion-'+(e+1)+'" value="'+n.answers.a+'">\n            '+n.answers.a+'\n          </label>\n          <label>\n            <input type="radio" name="quesion-'+(e+1)+'" value="'+n.answers.b+'">\n            '+n.answers.b+'\n          </label>\n          <label>\n            <input type="radio" name="quesion-'+(e+1)+'" value="'+n.answers.c+'">\n            '+n.answers.c+"\n          </label>"}).join("")}}).init()}},function(n,e,t){n.exports=t(0)}]);