
const lista = document.getElementById('lista');

//const listItems = document.getElementsByTagName('a');

//const outraForma = document.getElementsByTagName('li')[2].getElementsByTagName('a')[0].innerHTML;

//console.log(lista.lastElementChild.firstElementChild.innerText);

//console.log(listItems[2].innerText)

//console.log(document.getElementsByTagName('li')[2]);

const item = document.createElement('li');
/*
const link = document.createElement('a');

link.innerText = 'Angular';

link.href = '#';

item.appendChild(link);
*/

item.innerHTML = `<a href='#'> Angular</a>`;

lista.appendChild(item);