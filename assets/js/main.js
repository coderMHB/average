
const gradeCountInput = document.getElementById('grade-count');
const generateFieldsButton = document.getElementById('generate-fields');
const gradesContainer = document.getElementById('grades-container');
const calculateAverageButton = document.getElementById('calculate-average');
const resultContainer = document.getElementById('result');
const averageValue = document.getElementById('average-value');

generateFieldsButton.addEventListener('click', () => {
  const count = parseInt(gradeCountInput.value, 10);

  if (isNaN(count) || count <= 0) {
    alert('لطفاً تعداد نمرات معتبر وارد کنید!');
    return;
  }

  gradesContainer.innerHTML = '';
  gradesContainer.classList.remove('hidden');
  calculateAverageButton.classList.remove('hidden');
  resultContainer.classList.add('hidden');

  // ایجاد فیلدهای جدید
  for (let i = 0; i < count; i++) {
    const field = document.createElement('div');
    field.classList.add('grade-field');
    field.innerHTML = `
      <input type="input" dir="ltr" class="grade-input" placeholder="0" min="0" max="20">
    `;
    gradesContainer.appendChild(field);
  }
});


let numbers = [];
let average = 0;
let sum = 0;
generateFieldsButton.addEventListener('click', () => {
    const gradeInputs = document.querySelectorAll(".grade-input");
    document.getElementById("calculate-average").addEventListener("click", () => {
        numbers = [];
        gradeInputs.forEach(input => {
            numbers.push(+input.value);
        })
        sum = 0;
        numbers.map(num => {
            sum += num;
        })
        average = 0;
        average = sum / numbers.length;
        averageValue.innerHTML = average.toFixed(2);
        resultContainer.classList.remove("hidden");
    })
})
