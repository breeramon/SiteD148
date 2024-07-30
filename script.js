const rollButtons = document.querySelectorAll('.rollButton');
const resultDiv = document.getElementById('result');
const historyList = document.getElementById(('historyList'));
const darkModeToggle = document.getElementById('darkModeToggle');

rollButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sides = parseInt(this.getAttribute('data-sides'));
        const result = rollDice(sides);
        updateResult(result);
        updateHistory(result, sides);
    });
});

function rollDice(sides){
    return Math.floor(Math.random() * sides) + 1;
}

function updateResult(result) {
    resultDiv.innerText = `Resultado: ${result}`;
}

function updateHistory(result, sides) {
    const listItem = document.createElement('li');
    listItem.innerText = `D${sides}: ${result}`;
    historyList.insertBefore(listItem, historyList.firstChild);
}

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerText = 'Modo Claro';
    } else {
        darkModeToggle.innerText = 'Modo Escuro';
    }
});