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
    cell.addEventListener('click', () => {
        if (cell.getAttribute('clicked') === 'false'){
            cell.style.backgroundColor = 'red';
            console.log("bb");
            cell.setAttribute('clicked', 'true');
        }else{
            console.log("Oi");
            cell.style.backgroundColor = 'white';
            cell.setAttribute('clicked', 'false')
        }
    })
}

//escrevendo palavra
writeInScreen()

function writeInScreen(){

    const word = response.word;
    const position = response.position;
    for(let i = 0; i < word.length; i++){
        console.log(word[i]);
        document.getElementById(position[i]).innerText = word[i];
    }

}