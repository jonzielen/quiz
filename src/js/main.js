window.Quiz = function(elem) {

  const QuizBuilder = {
    quizElem: document.querySelector(elem),
    newElem: function(elemType, className, text) {
      let elem = document.createElement(elemType);

      // adds class name if set
      if (className !== undefined) elem.className = className;

      // adds text if set
      if (text !== undefined) elem.innerHTML = text;

      return elem;
    },
    data: [
      {
        question: 'pick b',
        answers: {
          a: 'aaaa',
          b: 'bbbb',
          c: 'cccc'
        },
        correctAnswer: 'b'
      },
      {
        question: 'pick d',
        answers: {
          a: 'aaaa',
          b: 'bbbb',
          c: 'cccc',
          d: 'dddd'
        },
        correctAnswer: 'd'
      },
      {
        question: 'pick a',
        answers: {
          a: 'aaaa',
          b: 'bbbb',
          c: 'cccc'
        },
        correctAnswer: 'a'
      },
      {
        question: 'pick c',
        answers: {
          a: 'aaaa',
          b: 'bbbb',
          c: 'cccc'
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
        <button type="submit" class="quiz-submit">Submit</button>`;

      this.quizElem.insertAdjacentHTML('afterbegin', temp);

      document.querySelector('.quiz-submit').addEventListener('click', this.validation);
    },
    buildQuizQuestion: function() {
      const quizQuestions = this.data.map(function(e, i, a) {
        let quizList = `<h5>Q: ${e.question}</h5>`;

        for(var key in e.answers) {
          let value = e.answers[key];

          quizList = quizList + `<label>
            <input type="radio" name="quesion-${i+1}" value="${key}">
            ${value}
          </label>`;
        }

        return quizList;
      });

      return quizQuestions.join('');
    },
    validation: function() {
      console.log('valid????');
    }
  };

  QuizBuilder.buildQuizTemplate();

};
