const grid = document.getElementById('word-search');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const response = {
    "id": 1,
    "word": "SAPO",
    "position": [59, 69, 79, 89]
}

//gerador de letras aleatorias
for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = i;
    cell.setAttribute('clicked', 'false')
    cell.textContent = letters[Math.floor(Math.random() * letters.length)];
    cell.add
    grid.appendChild(cell);

    //clicar na letra
    cell.addEventListener('click', () => {
        if (!cell.classList.contains('clicked')){
            cell.classList.add('clicked');
        }else{
            cell.classList.remove('clicked');
        }
    })
}

//escrevendo palavra
writeInScreen()

function writeInScreen(){

    const word = response.word;
    const position = response.position;
    for(let i = 0; i < word.length; i++){
        document.getElementById(position[i]).innerText = word[i];
    }
}

//botao de enviar
const submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', () => {
    var clickedLetters = document.querySelectorAll('.clicked');
    console.log(clickedLetters);
    clickedLetters = Array.from(clickedLetters).map(cell => parseInt(cell.id));
    console.log(clickedLetters);
    var correctAnwser = false
    for (let i = 0; i < response.word.length; i++) {
        
        if (clickedLetters[i] == response.position[i]) {
            correctAnwser = true;
        }else{
            correctAnwser = false;
            i = 101;
        
    }
}
    if (correctAnwser) {
        console.log(':)');
    }else{
        console.log(':(');
    }
})