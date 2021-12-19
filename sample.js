let textareaNum = 1;
const classButton = document.getElementsByClassName("exButton");

const addButtonHandle = () => {
    if(textareaNum == 15) {
        alert("これ以上増やせません");
        exit;
    }
    const elements = document.getElementById("inputText");
    const copied = elements.lastElementChild.cloneNode(true);
    elements.appendChild(copied);
    for(let i=0; i < classButton.length; i++) {
        classButton[i].setAttribute("id", i);
    }
    textareaNum++;
}

const deleteButtonHandle = (buttonElements) => {
    if(textareaNum == 1) {
        alert("これ以上削除できません");
        exit;
    }
    const elements = document.getElementById("inputText");
    elements.removeChild(elements.children[buttonElements.id]); //ここの指定をどうするかが課題
    for(let i=0; i < classButton.length; i++) {
        classButton[i].setAttribute("id", i);
    }
    textareaNum--;
}
