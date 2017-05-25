(function() {

  const Quiz = {
    mainElem: '#quiz',
    newElem: function(elemType, className, text) {
      let elem = document.createElement(elemType);

      // adds class name if set
      if (className !== undefined) elem.className = className;

      // adds text if set
      if (text !== undefined) elem.innerHTML = text;

      return elem;
    },
    append: function(obj1, obj2) {
      var selElem = [];

      Array.prototype.slice.call(arguments).map(function(e) {
        if (typeof e === 'object') selElem.push(e);
        if (typeof e === 'string') selElem.push(document.querySelector(e));
      });

      return selElem[0].appendChild(selElem[1]);
    }
  };

  const quizElem = document.querySelector('#quiz');
  const qWrapper = Quiz.newElem('div', 'quiz-wrapper', 'qw');

  //console.log(qWrapper);

  Quiz.append('#quiz', qWrapper);

  //console.log(quizElem);


})();
