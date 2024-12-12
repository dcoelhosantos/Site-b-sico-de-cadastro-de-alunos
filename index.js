function addAluno(){
    let nome = document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let curso = document.querySelector("#curso").value;
    
    let tdNome = document.createElement("td");
    let tdIdade = document.createElement("td");
    let tdCurso = document.createElement("td");
  
    tdNome.innerHTML = nome;
    tdIdade.innerHTML = idade;
    tdCurso.innerHTML = curso;
    
    let tr = document.createElement("tr");
    tr.appendChild(tdNome);
    tr.appendChild(tdIdade);
    tr.appendChild(tdCurso);
  
    let tbody = document.querySelector("#dados");
    tbody.appendChild(tr);

    alert("ALUNO ADICIONADO COM SUCESSO!");
  }