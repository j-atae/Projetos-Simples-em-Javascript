function adicionar(item){
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    item = document.getElementById("item").value;
    var tarefas = document.getElementById('tarefas');
    var br = document.createElement('br');
    var newitem = document.createTextNode(item);
    var label = document.createElement('label');

    label.appendChild(newitem);
    
    tarefas.appendChild(checkbox);
    tarefas.appendChild(label);
    tarefas.appendChild(br);

    document.getElementById('item').value='';

}