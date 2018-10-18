var n1 = '',
  n2 = '',
  RF = '',
  operator = '',
  compare = 0,
  caixa = document.getElementById('caixa'),
  historico = document.getElementById('historico');

function PRON1(x) {
  if (compare == 1) {
    n2 += x;
    place(n2);
  } else {
    n1 += x;
    place(n1);
  }
}

function PRON0(x) {
  if (compare == 1) {
    n2 += x;
    n2 += x;
    place(n2);
  } else {
    n1 += x;
    n1 += x;
    place(n1);
  }
}

function OPERAR(x) {
  if (caixa.value != '') {
    if (x == '.') {
      n1 = n1 * -1;
      place(n1);
    } else {
      operator = x;
      compare = 1;
      n1 = n1 + x;
      place(n1);
    }
  }
}

//fazer o switch case
function processar() {
  if (n1 != '' && operator != '' && n2 != '') {
    n1 = n1.replace(',', '.');
    n2 = n2.replace(',', '.');
    Fn1 = parseFloat(n1);
    Fn2 = parseFloat(n2);
    switch (operator) {
      case '+':
        RF = Fn1 + Fn2;
        break;

      case '-':
        RF = Fn1 - Fn2;
        break;

      case '.':
        RF = Fn1 * -1;
        break;

      case 'x':
        RF = Fn1 * Fn2;
        break;

      case '%':
        RF = (Fn1 / 100) * Fn2;
        break;

      case '/':
        RF = Fn1 / Fn2;
        break;
    }

    showResult();
    n1 = RF;
    historic();
    operator = '';
    n2 = '';
    Fn1 = '';
    Fn2 = '';
    compare = 0;
  }
}

function place(n) {
  caixa.value = n;
}

function clearBox() {
  caixa.value = '';
  historico.innerHTML = '';
  n1 = '';
  n2 = '';
}

function showResult() {
  caixa.value = RF;
}

function toDec(x) {
  if (n1 ==  '') {
    n1 += '0';
  }
  if (n2 == ''){
    n2 += '0';
  }
  if (compare == 1) {
    n2 += ',';
    place(n2);
  } else {
    n1 += ',';
    place(n1);
  }
}

function historic() {
  historico.innerHTML = Fn1 + '<span class="operador">' + operator + '</span>' + Fn2;
}

clearBox();
historic(); 
