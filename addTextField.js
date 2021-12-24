let textFieldNum = 1;       // 現在の翻訳欄の数
const container = document.getElementById("putTextField");      // 翻訳欄の親要素

// 翻訳欄の追加
const addButtonHandle = () => {
    if(textFieldNum == 15) {
        alert("これ以上増やせません");
        return;
    }
    const newTextField = container.lastElementChild.cloneNode(true);        // 最後の子要素を複製
    container.appendChild(newTextField);        // 複製した要素の追加
    createId();
    document.getElementById(textFieldNum).value = "";       // 複製後の翻訳欄のテキストを削除
    textFieldNum++;
}

// 翻訳欄の削除
const deleteButtonHandle = (buttonElements) => {
    if(textFieldNum == 1) {
        alert("これ以上削除できません");
        return;
    }
    container.removeChild(container.children[buttonElements.id]);       // 押されたボタンのidを配列番号として要素を削除
    createId();
    textFieldNum--;
}

// 各ボタンにidを設定
const createId = () => {
    const classButton = document.getElementsByClassName("exButton");        // ボタンにidを後から付与するための要素
    const classTextField = document.getElementsByClassName("exTextField");        // テキストエリアにidを後から付与するための要素
    for(let i=0; i < classButton.length; i++) {
        classButton[i].setAttribute("id", i);
        classTextField[i].setAttribute("id", i);
    }
}
