export class CaixaEletronico {

    avaliablesGrade: number[]

    constructor(){
        this.avaliablesGrade = [100, 50, 20,10]
    }

    main (value: number): string {
    
        if(this.avaliablesGrade.includes(value)) {
            return `Entregar 1 nota de R$${value},00`
        }
        
        if(value % 10 !==0 || value < 10){
            return 'Ná há notas disponíveis para o valor informado.'
        }
    
        return this.getGrades(value)
        
    }

    getGrades(value: number): string{
        const msg = {  grade: 0, qnt: 0, total: value }
        
        let result = ''

        this.avaliablesGrade.map(grade => {
            msg.qnt = 0
            while (msg.total >= grade) {
                msg.total = msg.total - grade
                msg.qnt ++
                msg.grade = grade
                
                result += `${msg.qnt} nota(s) de R$${msg.grade},00 ` 
            }
        })
    
        return 'Entregar '+result
    }

}




// Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa
// eletrônico. Os requisitos básicos são os seguintes:
// ● Entregar o menor número de notas;
// ● É possível sacar o valor solicitado com as notas disponíveis;
// ● Saldo do cliente infinito;
// ● Quantidade de notas infinito (pode-se colocar um valor finito de cédulas para aumentar a dificuldade do
// problema);

// Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00

// Exemplos:
// Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.
// Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$
// 10,00