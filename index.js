function display(val){
    
    document.getElementById('calc').value += val;
    return val;
}

function solve(){

    let x = document.getElementById('calc').value
    let y = eval(x);
    document.getElementById('calc').value = y
    return y
}

function clearScreen(){

    document.getElementById('calc').value = ''

}