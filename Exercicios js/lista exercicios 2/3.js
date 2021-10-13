//Desenvolva uma função que recebe dois parâmetros,
//um é a quantidade de horas trabalhadas por um funcionário num mês,
//e o quanto ele recebe por hora. A função deverá calcular o salário
//líquido mensal do funcionário, que é da quantidade de horas trabalhadas
//no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído 30%, relativo a impostos.

const calcularSalario = (horasTrabalhadas, salarioHora) => {
  console.log(`você trabalhou ${horasTrabalhadas} horas`);
  console.log(`Seu salário é R$ ${salarioHora}/hora`);
  console.log(
    `depois do imposto de 30%, seu salário final é R$ ${
      horasTrabalhadas * salarioHora * 0.7
    }`
  );
};

calcularSalario(160, 50);
