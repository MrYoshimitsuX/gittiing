const numbers = ["1","2","3","4","5","6","7","8","9"]

function randomNumber(){
    const length = numbers.length;
    const index = Math.floor(Math.random()*length)
    return numbers[index]
}

export function guessNumber(number){
    return(
        randomNumber() === number ? true : false
    );
}