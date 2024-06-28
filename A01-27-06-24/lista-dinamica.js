

document.getElementById("registrar").addEventListener("click",()=>{
    const item = document.getElementById('itemId').value;
    
    const lista = document.getElementById('lista');

    const li = document.createElement('li');

    //li.innerHTML = '<a href='+'#'+' >'+item+'</a>'

    li.innerHTML = `<a href='#' >${item}</a> 
                    <button class='trash' onclick='apagarItem(this)'>apagar</button>`

    lista.appendChild(li);

    console.log(item);
});

document.getElementById("resetar").addEventListener("click",()=>{
    const lista = document.getElementById('lista');
    
    lista.innerHTML = '';
});

/*
document.getElementsByClassName("trash").addEventListener("click",()=>{
    
});
*/

function apagarItem(teste){
    const botoes = document.getElementsByClassName('trash');
    
    //botoes[0].parentElement

    const lista = document.getElementById('lista');
    
    console.log(teste);

   lista.removeChild(teste.parentElement);
}
