const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);

// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');

function clickButton(){
    // alert('success!');
    // // const text = text1.value.replace(/[\n\r]/g,"");
    document.getElementById('after').value = document.getElementById('before').value.replace(/[\n\r]/g,"");
}