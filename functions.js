let list = ["escovar os dentes", "beber agua", "tomar cafe", "exercicios"];

document.getElementById('list').innerHTML =
list.map(item =>`<li>${item}</li>`).join('')

function busca() {
  let txt = document.getElementById("txt").value;
  let content = list.indexOf(txt);
  if (content !== -1) {
    alert("existe");
  } else {
    alert("não existe");
  }
}



function alterar() {
  
  list.splice(0, 1, 'tomar banho')
  document.getElementById("list").innerHTML = list.map(item =>`<li>${item}</li>`).join('');
  
}

function deletar() {
  let txt = document.getElementById("txt").value;
  list.pop(txt);
  document.getElementById("list").innerHTML = list.map(item =>`<li>${item}</li>`).join('');
}
function adicionar() {
  let txt = document.getElementById("txt").value;
  list.push(txt);
  document.getElementById("list").innerHTML = list.map(item =>`<li>${item}</li>`).join('');
}



