let form = document.querySelector ('#form');
let textinput = document.querySelector ('#textinput');
let text = document.querySelector ('#duplicateField');

textinput.addEventListener('keypress', (event) => {
    text.textContent = text.textContent + event.key;
});

form.addEventListener('submit', (event) => { 
    event.preventDefault();
    console.log (text.texcontent);
    text.texcontent = '';
    form.reset();
});