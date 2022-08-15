function takeInput(){
    let inputValue = prompt("Write your choice : o (not zero) or x" );
    if (inputValue == 'o' || inputValue== 'O' || inputValue == 'x' || inputValue == 'X' ){
        window.choice = inputValue.toUpperCase();  
    }
    else{
        takeInput();
    }
}
function boxNumber(boxNum){
    window.boxPosition = boxNum ;
}
function setValue(){
    console.log("choice is : "+window.choice);
    console.log("position is : "+window.boxPosition);
    console.log('-----------------');
    let element = document.querySelector('[data-box'+window.boxPosition+']');
    console.log('[data-box'+window.boxPosition+']');
    console.log(element);
    valueDisplay(element);

}
function valueDisplay(element){
    element.style.setInnerText = window.choice;
    console.log('value displayed');
    check();
}
function check(arr){
    if((arr[0]==arr[1] && arr[1]==arr[2] ) ||
        (arr[3]==arr[4] && arr[4]==arr[5]) ||
        (arr[6]==arr[7] && arr[7]==arr[8]) ||
        (arr[0]==arr[3] && arr[3]==arr[6]) ||
        (arr[1]==arr[4] && arr[4]==arr[7]) ||
        (arr[2]==arr[5] && arr[5]==arr[8]) ||
        (arr[0]==arr[4] && arr[4]==arr[8]) ||
        (arr[2]==arr[3] && arr[3]==arr[6])){
            gameOver();
        }
}
function gameOver(){
    alert("Game Over !!");
}