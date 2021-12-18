const addButtonHandle = () => {
    const elements = document.getElementById("inputText");
    const copied = elements.lastElementChild.cloneNode(true);
    elements.appendChild(copied);
}

const deleteButtonHandle = () => {
    const elements = document.getElementById("inputText");
    elements.removeChild(elements.lastChild);
}
