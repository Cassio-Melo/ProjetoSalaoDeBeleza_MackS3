document.getElementById("filtroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nomeFuncionario").value;
  const data = document.getElementById("data").value;

  fetch(`/servicos/filtrar?nomeFuncionario=${nome}&data=${data}`)
    .then(response => response.json())
    .then(data => {
      let html = "<ul>";
      data.forEach(servico => {
        html += `<li>${servico.tipoServico} - ${servico.nomeCliente} em ${servico.data} às ${servico.horario}</li>`;
      });
      html += "</ul>";
      document.getElementById("resultado").innerHTML = html;
    });
});
