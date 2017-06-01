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
        <form action="/" class="quiz-wrapper">
          ${questions}
          <button type="submit" class="quiz-submit">Submit</button>
          <button type="reset">Reset</button>
        </form>`;

      this.quizElem.insertAdjacentHTML('afterbegin', temp);

      document.querySelector('form.quiz-wrapper').addEventListener('submit', function(e) {
        e.preventDefault();
        QuizBuilder.validation();
      });
    },
    buildQuizQuestion: function() {
      const quizQuestions = this.data.map((e, i, a) => {
        let quizList = `<h5>Q: ${e.question}</h5>`;

        quizList = quizList + `<div class="group-${i+1}">`;

        for(let key in e.answers) {
          let value = e.answers[key];

          quizList = quizList + `<label for="quesion-${i+1}-${key}">
            <input type="radio" id="quesion-${i+1}-${key}" name="quesion-${i+1}" value="${key}">
            ${value}
          </label>`;
        }

        quizList = quizList + `</div>`;

        return quizList;
      });

      return quizQuestions.join('');
    },
    validation: function() {
      let selGroups = document.querySelectorAll('.quiz-wrapper div[class^="group-"]');
      let selGroupsVals = [];

      [].forEach.call(selGroups, function(e, i) {
        if (e.querySelector('input:checked') !== null &&
            e.querySelector('input:checked').value === QuizBuilder.data[i].correctAnswer) {
          e.classList.remove('error');
          e.classList.add('valid');
          return;
        }

        e.classList.remove('valid');
        e.classList.add('error');
      });
    }
  };

  QuizBuilder.buildQuizTemplate();

};
