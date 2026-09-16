/**
 * Applied-Optics-SVAGDC: Interactive "Test Your Understanding" Quiz & Exercise Engine
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  function initQuiz(containerId, quizData) {
    const container = document.getElementById(containerId);
    if (!container || !quizData) return;

    const quizzes = Array.isArray(quizData) ? quizData : [quizData];
    if (quizzes.length === 0) return;

    let html = `
      <div class="quiz-header-bar">
        <div class="quiz-badge"><i class="fa-solid fa-graduation-cap"></i> Test Your Understanding</div>
        <span class="quiz-count-badge"><i class="fa-solid fa-list-check"></i> ${quizzes.length} Exercise${quizzes.length > 1 ? 's' : ''}</span>
      </div>
    `;

    quizzes.forEach((q, qIdx) => {
      html += `
        <div class="quiz-item-block" id="quiz_item_${containerId}_${qIdx}">
          <div class="quiz-q-num">Exercise ${qIdx + 1} of ${quizzes.length}</div>
          <div class="quiz-question">${q.question}</div>
      `;

      if (q.type === 'fill-in') {
        html += `
          <div class="quiz-code-prompt">
            ${q.codeTemplate || ''}
          </div>
        `;
      } else if (q.type === 'multiple-choice') {
        html += `<div class="quiz-options">`;
        q.options.forEach((opt, idx) => {
          html += `
            <label class="quiz-option-label">
              <input type="radio" name="quiz_${containerId}_${qIdx}" value="${idx}">
              <span>${opt}</span>
            </label>
          `;
        });
        html += `</div>`;
      }

      html += `
          <div class="quiz-actions">
            <button class="btn-check-answer" id="check_${containerId}_${qIdx}">
              <i class="fa-solid fa-circle-check"></i> Check Answer
            </button>
            <button class="btn-show-solution" id="solution_${containerId}_${qIdx}">
              <i class="fa-regular fa-lightbulb"></i> Show Solution
            </button>
          </div>
          <div class="quiz-feedback" id="feedback_${containerId}_${qIdx}"></div>
        </div>
      `;
    });

    container.innerHTML = html;

    function renderMathIfAvailable(el) {
      if (!el || typeof window.renderMathInElement !== 'function') return;
      try {
        window.renderMathInElement(el, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false }
          ],
          throwOnError: false
        });
      } catch (e) {}
    }

    renderMathIfAvailable(container);

    // Attach event listeners for each question
    quizzes.forEach((q, qIdx) => {
      const checkBtn = document.getElementById(`check_${containerId}_${qIdx}`);
      const solutionBtn = document.getElementById(`solution_${containerId}_${qIdx}`);
      const feedback = document.getElementById(`feedback_${containerId}_${qIdx}`);

      if (checkBtn) {
        checkBtn.addEventListener('click', () => {
          if (q.type === 'multiple-choice') {
            const selected = container.querySelector(`input[name="quiz_${containerId}_${qIdx}"]:checked`);
            if (!selected) {
              feedback.className = 'quiz-feedback show warning';
              feedback.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please select an option before checking!';
              return;
            }
            const val = parseInt(selected.value, 10);
            if (val === q.correctIndex) {
              feedback.className = 'quiz-feedback show correct';
              feedback.innerHTML = `
                <div class="fb-title"><i class="fa-solid fa-circle-check"></i> Excellent! That is correct.</div>
                <div class="fb-desc">${q.explanation}</div>
              `;
            } else {
              feedback.className = 'quiz-feedback show incorrect';
              feedback.innerHTML = `
                <div class="fb-title"><i class="fa-solid fa-circle-xmark"></i> Incorrect. Try again!</div>
                <div class="fb-desc">${q.hint || 'Review the optical ray trace or formula above and rethink.'}</div>
              `;
            }
            renderMathIfAvailable(feedback);
          } else if (q.type === 'fill-in') {
            const inputs = container.querySelectorAll(`#quiz_item_${containerId}_${qIdx} input.blank-input`);
            let allCorrect = true;
            inputs.forEach(inp => {
              const expected = (inp.dataset.answer || '').trim().toLowerCase();
              const actual = inp.value.trim().toLowerCase();
              if (actual !== expected) allCorrect = false;
            });

            if (allCorrect) {
              feedback.className = 'quiz-feedback show correct';
              feedback.innerHTML = `
                <div class="fb-title"><i class="fa-solid fa-circle-check"></i> Correct!</div>
                <div class="fb-desc">${q.explanation}</div>
              `;
            } else {
              feedback.className = 'quiz-feedback show incorrect';
              feedback.innerHTML = `
                <div class="fb-title"><i class="fa-solid fa-circle-xmark"></i> Not quite right.</div>
                <div class="fb-desc">${q.hint || 'Carefully check optical units, signs, or variable symbols.'}</div>
              `;
            }
            renderMathIfAvailable(feedback);
          }
        });
      }

      if (solutionBtn) {
        solutionBtn.addEventListener('click', () => {
          let solText = '';
          if (q.type === 'multiple-choice') {
            const correctOpt = q.options[q.correctIndex];
            solText = `<strong>Correct Option:</strong> (${String.fromCharCode(65 + q.correctIndex)}) ${correctOpt}`;
          } else if (q.type === 'fill-in') {
            solText = `<strong>Expected Solution:</strong> ${q.answerText || q.explanation}`;
          }
          feedback.className = 'quiz-feedback show info';
          feedback.innerHTML = `
            <div class="fb-title"><i class="fa-regular fa-lightbulb"></i> Solution & Pedagogical Explanation</div>
            <div style="margin-bottom: 0.5rem;">${solText}</div>
            <div class="fb-desc">${q.explanation}</div>
          `;
          renderMathIfAvailable(feedback);
        });
      }
    });
  }

  window.OpticsQuiz = {
    render: initQuiz
  };

})(window);
