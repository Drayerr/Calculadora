var n1 = "", n2 = "", RF = "", operator = "", compare = 0;

function PRON1(x){
  if (compare == 1){
    n2 = parseFloat(x);
  } else {
    n1 = parseFloat(x);
  }
}

function OPERAR(x){
  operator = x;
  compare = 1;
}

//fazer o switch case
function processar(){
  switch(operator){
    case
  }
  alert (RF);
  RF = "";
  n1 = "";
  n2 = "";
  compare = 0;
}

function place(){
  caixa.value = n1;
}