// Code your solutions in this file
 function writeCards(nameArray, gift) {
    const newArray = [];
    for (let i = 0; i < nameArray.length; i++) {
        newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${gift} gift!`);
    }
    return newArray;
 }

 function countDown(number) {
    while (number > -1) {
        console.log(number);
        number-=1;
    }
 }

 writeCards(["bob", "john", "lisa"], "surprise");
 countDown(10);