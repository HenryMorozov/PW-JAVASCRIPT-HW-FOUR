nick = prompt("Введите имя:");
num = +prompt("Введите свой год рождения:");
dat = +prompt("Введите актуальный год:");

let info = function (num,dat) {
    let res = dat - num 
    return(nick + ', ' + 'Ваш возраст: ' + res)
}
console.log(info(num,dat));


let crux = +prompt('What examples do you want to solve?');
function random(max) {
    return Math.floor( Math.random() * max + 1)
}

let max = 21;

for(let i = 0; i < crux;i++) {
    let one = random(max)
    let two = random(max)
    let example = Math.floor( Math.random() * 2 + 1)
    
    if (example == 1) {
        answer = one + two;
        question = prompt("Give the correct answer:" + one + "+" + two + "=");
    }else if (example == 2) {
        answer = one - two;
        question = prompt("Give the correct answer:" + one + "-" + two + "=");
    }else if (example == 3) {
        answer = one * two;
        question = prompt("Give the correct answer:" + one + "*" + two + "=");
    }else if (example == 4) {
        answer = one / two;
        question = prompt("Give the correct answer:" + one + "/" + two + "=");
    }
    if (answer == question) {
        console.log('Your answer is correct: - ' + answer);
    }else {
        console.log('Your answer is not correct: - ' + question + '!' + ' The correct answer is: - ' + answer + '!');
    }
}

