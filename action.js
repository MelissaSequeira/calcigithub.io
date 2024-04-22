function display(val){
     document.querySelector('.result').value+=val;
}
function clearscr(){
    document.querySelector('.result').value=" ";
}
function equate(){
    let x=document.querySelector('.result').value;
    let y=eval(x);
    document.querySelector('.result').value=y;
}