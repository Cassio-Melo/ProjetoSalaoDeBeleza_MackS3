function atualizarHorario(event) {
    event.preventDefault(); 
  
    const abertura = document.getElementById("horaAbertura").value;
    const fechamento = document.getElementById("horaFechamento").value;
  
    if (abertura && fechamento) {
      const formatadoAbertura = abertura.replace(":", "H");
      const formatadoFechamento = fechamento.replace(":", "H");
  
      const texto = `HORÁRIO DE FUNCIONAMENTO <strong>${formatadoAbertura} ÀS ${formatadoFechamento}</strong>`;
      document.getElementById("horario-footer").innerHTML = texto;
    } else {
      alert("Por favor, preencha os dois horários.");
    }
  }
  