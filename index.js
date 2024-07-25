function calculateResults() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    let score = 0;
    for (let entry of formData.entries()) {
        score += parseInt(entry[1]);
    }
    const resultDiv = document.getElementById('result');
    if (score >= 7) {
        resultDiv.innerText = 'Você tem uma personalidade extrovertida!';
    } else if (score >= 4) {
        resultDiv.innerText = 'Você tem uma personalidade ambivertida!';
    } else {
        resultDiv.innerText = 'Você tem uma personalidade introvertida!';
    }
}

