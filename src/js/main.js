window.Quiz = function(elem) {

  const QuizBuilder = {
    quizElem: document.querySelector(elem),
    init: function() {
      this.buildQuizTemplate();
    },
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
    },
    data: [
      {
        question: 'pick b',
        answers: {
          a: 'a',
          b: 'b',
          c: 'c'
        },
        correctAnswer: 'b'
      },
      {
        question: 'pick a',
        answers: {
          a: 'a',
          b: 'b',
          c: 'c'
        },
        correctAnswer: 'a'
      },
      {
        question: 'pick c',
        answers: {
          a: 'a',
          b: 'b',
          c: 'c'
        },
        correctAnswer: 'c'
      }
    ],
    buildQuizTemplate: function() {
      const questions = this.buildQuizQuestion();
      const temp = `
        <h4>Quiz:</h4>
        <div class="quiz-wrapper">
          ${questions}
        </div>
        <button type="submit" class="submit">Submit</button>`;

      this.quizElem.insertAdjacentHTML('afterbegin', temp);

    },
    buildQuizQuestion: function() {

      const quizQuestions = this.data.map(function(e, i) {
        return `
          <h5>Q: ${e.question}</h5>
          <label>
            <input type="radio" name="quesion-${i+1}" value="${e.answers.a}">
            ${e.answers.a}
          </label>
          <label>
            <input type="radio" name="quesion-${i+1}" value="${e.answers.b}">
            ${e.answers.b}
          </label>
          <label>
            <input type="radio" name="quesion-${i+1}" value="${e.answers.c}">
            ${e.answers.c}
          </label>`;
      });

      return quizQuestions.join('');
    }
  };

  QuizBuilder.init();
};
