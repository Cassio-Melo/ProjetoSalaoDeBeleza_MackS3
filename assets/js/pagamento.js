document.addEventListener("DOMContentLoaded", function () {
    const botao = document.querySelector("button");

    botao.addEventListener("click", function () {
        // Captura todos os inputs de texto, exceto o TOTAL
        const inputs = document.querySelectorAll("input:not([disabled])");
        let camposVazios = [];

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                camposVazios.push(input.placeholder);
            }
        });

        if (camposVazios.length > 0) {
            alert("Preencha todos os campos obrigatórios:\n" + camposVazios.join("\n"));
        } else {
            // Redireciona para a página de confirmação
            window.location.href = "confirmacao.html";
        }
    });
});
