

function rollDice(){

    const numDice = document.getElementById('numDice').value;
    const result = document.getElementById('result');
    const diceimg = document.getElementById('diceimg');
    const values = [];
    const images = [];

    for (let i = 0; i < numDice; i++){
        const value = Math.floor(Math.random()*6)+1
        values.push(value);
        images.push(`<img src="dice_img/${value}.png"> `);
    }

    result.textContent = `Dice: ${values.join(', ')}`;
    diceimg.innerHTML = images.join(' ');


}