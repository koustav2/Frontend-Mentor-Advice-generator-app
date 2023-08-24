const getAdviceButton = document.getElementById('getAdviceButton');

async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    const adviceEle = document.getElementById('advice');
    const dataEle = document.getElementById('data');

    adviceEle.innerHTML = `Advice #${data.slip.id}`;
    dataEle.innerHTML = `"${data.slip.advice}"`;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

function handleGetAdviceClick() {
  getAdvice();
}
getAdviceButton.addEventListener('click', handleGetAdviceClick);
