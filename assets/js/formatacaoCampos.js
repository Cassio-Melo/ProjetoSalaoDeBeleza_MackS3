document.addEventListener('DOMContentLoaded', function () {
  const celularInput = document.getElementById('celular');

  celularInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (value.length > 11) value = value.slice(0, 11); // Máximo 11 dígitos

    // Formatação do celular: (99) 99999-9999
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    e.target.value = value;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const cpfInput = document.getElementById('cpf');
  const cepInput = document.getElementById('cep');
  const cartaoInput = document.getElementById('cartao');
  const validadeInput = document.getElementById('validade');
  const totalInput = document.getElementById('total');

  // CPF: 000.000.000-00
  cpfInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
                 .replace(/(\d{3})(\d)/, '$1.$2')
                 .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = value;
  });

  // CEP: 00000-000
  cepInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 8);
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value;
  });

  // Cartão: 0000 0000 0000 0000
  cartaoInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    e.target.value = value;
  });

  // CVV
  const cvvInput = document.getElementById('cvv');
  cvvInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3) value = value.slice(0, 3);
    e.target.value = value;
  });

  // Data de validade: MM/AA
  validadeInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
    }
    e.target.value = value;
  });

  // Total fixo formatado (exemplo)
  if (totalInput) {
    totalInput.value = 'R$ 430,00';
  }
});
