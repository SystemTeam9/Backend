let textFieldNum = 1;       // 現在の翻訳欄の数
const container = document.getElementById("putTextField");      // 翻訳欄の親要素
const classButton = document.getElementsByClassName("exButton");        // ボタンにidを後から付与するための要素

// 翻訳欄の追加
const addButtonHandle = () => {
    if(textareaNum == 15) {
        alert("これ以上増やせません");
        exit;
    }
    const newTextField = container.lastElementChild.cloneNode(true);        // 最後の子要素を複製
    container.appendChild(newTextField);        // 複製した要素の追加
    createId();
    textareaNum++;
}

// 翻訳欄の削除
const deleteButtonHandle = (buttonElements) => {
    if(textareaNum == 1) {
        alert("これ以上削除できません");
        exit;
    }
    container.removeChild(container.children[buttonElements.id]);       // 押されたボタンのidを配列番号として要素を削除
    createId();
    textareaNum--;
}

// 各ボタンにidを設定
const createId = () => {
    for(let i=0; i < classButton.length; i++) {
        classButton[i].setAttribute("id", i);
    }
}
