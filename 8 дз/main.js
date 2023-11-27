
function calculate(operator, num1, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return 'Деление на ноль невозможно';
        }
      case '^':
        return Math.pow(num1, num2);
      case 'sqrt':
        return Math.sqrt(num1);
      default:
        return 'Неправильная операция';
    }
  }
  

  function buttonClick(event) {
    const value = event.target.innerText;
    
    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  }
  
  
  const calculator = document.createElement('div');
  calculator.className = 'calculator';
  document.body.appendChild(calculator);
  
  const display = document.createElement('input');
  display.type = 'text';
  display.className = 'display';
  calculator.appendChild(display);
  
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '^', 'sqrt'
  ];
  
  buttons.forEach(buttonText => {
    const button = document.createElement('button');
    button.innerText = buttonText;
    button.addEventListener('click', buttonClick);
    calculator.appendChild(button);
  });