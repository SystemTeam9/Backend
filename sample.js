let textFieldNum = 1;
const container = document.getElementById("putTextField");
const classButton = document.getElementsByClassName("exButton");

const addButtonHandle = () => {
    if(textareaNum == 15) {
        alert("これ以上増やせません");
        exit;
    }
    const newTextField = container.lastElementChild.cloneNode(true);
    container.appendChild(newTextField);
    recreateId();
    textareaNum++;
}

const deleteButtonHandle = (buttonElements) => {
    if(textareaNum == 1) {
        alert("これ以上削除できません");
        exit;
    }
    container.removeChild(container.children[buttonElements.id]);
    recreateId();
    textareaNum--;
}

const recreateId = () => {
    for(let i=0; i < classButton.length; i++) {
        classButton[i].setAttribute("id", i);
    }
}
