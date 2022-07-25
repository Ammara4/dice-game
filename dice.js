function game() {
    const firstNum = Math.floor(Math.random() * 6) + 1;
    const firstImage = 'images/dice' + firstNum + '.jpeg'
    document.querySelectorAll('img')[0].setAttribute('src', firstImage);

    const secondNum = Math.floor(Math.random() * 6) + 1;

    const secondImage = 'images/dice' + secondNum + '.jpeg'
    document.querySelectorAll('img')[1].setAttribute('src', secondImage);

    if (firstNum > secondNum) {
        document.querySelector('h1').innerHTML = "Winner is User 1";
    } else if (firstNum < secondNum) {
        document.querySelector('h1').innerHTML = "Winner is User 2";
    } else {
        document.querySelector('h1').innerHTML = "It is Draw";
    }
}





document.querySelector("button").addEventListener("click", game)
