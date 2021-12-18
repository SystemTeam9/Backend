let textareaNum = 1;
const className = document.getElementsByClassName("container");

const addButtonHandle = () => {
    if(textareaNum == 15) {
        alert("これ以上増やせません");
        exit;
    }
    const elements = document.getElementById("inputText");
    const copied = elements.lastElementChild.cloneNode(true);
    elements.appendChild(copied);
    for(let i=0; i < className.length; i++) {
        className[i].setAttribute("id", "Container"+i);
    }
    textareaNum++;
}

const deleteButtonHandle = () => {
    if(textareaNum == 1) {
        alert("これ以上削除できません");
        exit;
    }
    const elements = document.getElementById("inputText");
    elements.removeChild(elements.children[3]); //ここの指定をどうするかが課題
    for(let i=0; i < className.length; i++) {
        className[i].setAttribute("id", "Container"+i);
    }
    textareaNum--;
}
