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
          <button type="reset" class="reset">Reset</button>
        </form>
        <div id="numberCorrect"></div>`;

      this.quizElem.insertAdjacentHTML('afterbegin', temp);

      document.querySelector('.reset').addEventListener('click', function() {
        QuizBuilder.quizElem.innerHTML = '';
        QuizBuilder.buildQuizTemplate();
      });

      document.querySelector('form.quiz-wrapper').addEventListener('submit', function(e) {
        e.preventDefault();
        QuizBuilder.validation();
      });
    },
    buildQuizQuestion: function() {
      const quizQuestions = this.data.map((e, i, a) => {
        let quizList = `<div class="group-${i+1}">`;

        quizList = quizList + `<h5>Q: ${e.question}</h5>`;

        for(let key in e.answers) {
          let value = e.answers[key];

          quizList = quizList + `<label for="quesion-${i+1}-${key}">
            <input type="radio" id="quesion-${i+1}-${key}" name="quesion-${i+1}" value="${key}">
            <span>${value}</span>
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
      let count = 0;

      [].forEach.call(selGroups, function(group, i) {
        let selections = group.querySelectorAll('input');

        // adds error message to inputs
        [].forEach.call(selections, function(input) {
          if (input.value === QuizBuilder.data[i].correctAnswer) {

            input.parentElement.classList.remove('input-error');
            input.parentElement.classList.add('input-valid');
          } else {

            input.parentElement.classList.remove('input-valid');
            input.parentElement.classList.add('input-error');
          }
        });

        // adds errors to groups
        if (group.querySelector('input:checked') !== null &&
            group.querySelector('input:checked').value === QuizBuilder.data[i].correctAnswer) {
            group.classList.remove('group-error');
            group.classList.add('group-valid');
            count = count + 1;
            return;
        } else {
          group.classList.remove('group-valid');
          group.classList.add('group-error');
        }
      });

      document.getElementById('numberCorrect').innerHTML = count;
    }
  };

  QuizBuilder.buildQuizTemplate();
};
