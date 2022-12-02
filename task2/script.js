const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => 
{ alert ('Cлужит для ввода информации в консоль')});

console.log ('Пример использования команды console.log')

const alertT = document.querySelector('#alertT');
alertT.addEventListener('click', () => 
{ alert ('Показывает диалоговое окно с сообщением и кнопкой ЗАКРЫТЬ.')});

console.log ('Пример использования команды alert()')

const promptT = document.querySelector('#promptT');
promptT.addEventListener('click', () => 
{ prompt ('Отображает диалоговое окно с запросом на ввод текста ')});

console.log ('Пример использования команды prompt()')