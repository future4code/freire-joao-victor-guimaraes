
 const valor1 = Number(process.argv[3])
 const valor2 = Number(process.argv[4])
    const values = process.argv[2]

switch (values) {
    case 'add':
      console.log("O Resultado é", valor1 + valor2)
      break;
    case 'sub':
      console.log("O Resultado é", valor1 - valor2)
      break;
    case 'mult':
      console.log("O Resultado é", valor1 * valor2)
      break;
    case 'div':
      console.log("O Resultado é", valor1 / valor2)
      break;
    default:
      break;
  }
  


  