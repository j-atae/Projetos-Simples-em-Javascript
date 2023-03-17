function adicionar() {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var acao = document.getElementById("acao").value;
    var tarefas  = document.getElementById("tarefas").innerHTML;
    tarefas = tarefas + "<li>"+acao+"</li>";
    tarefas.appendChild('checkbox');
    document.getElementById("tarefas").innerHTML = tarefas;
}
  //"<li>"+acao+"</li>"
               

  
 


  //var container = document.getElementById('container');
 // container.appendChild(checkbox);