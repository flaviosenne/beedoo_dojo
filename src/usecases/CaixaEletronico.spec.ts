import {CaixaEletronico} from './CaixaEletronico'

const makeSut = () => {
    const sut = new CaixaEletronico()
    return { sut }
}

describe('Teste Caixa Eletronico Dojo', () => {

    it('Should return 10 when withdraw 10', () => {
        const { sut } = makeSut()
        const value = 10
        const result = sut.main(value)
        
        expect(result).toEqual('Entregar 1 nota de R$10,00')
    });
    
    it('Should verify if value it is multiple of 10', () => {
        const { sut } = makeSut()
        const value = 15
        const result = sut.main(value)
        
        expect(result).toEqual('Ná há notas disponíveis para o valor informado.')
    })
    
    it('Should return the quantity of grades referent to value sent (80), being that there only 10, 20, 50 and 100', () => {
        const { sut } = makeSut()
        const value = 80;
        const result = sut.main(value)

        expect(result).toEqual('Entregar 1 nota(s) de R$50,00 1 nota(s) de R$20,00 1 nota(s) de R$10,00 ')
    })

    it('Should return the quantity of grades referent to value sent (110), being that there only 10, 20, 50 and 100', () => {
        const { sut } = makeSut()
        const value = 110;
        const result = sut.main(value)

        expect(result).toEqual('Entregar 1 nota(s) de R$100,00 1 nota(s) de R$10,00 ')
    })

    
    it('Should return the quantity of grades referent to value sent (70), being that there only 10, 20, 50 and 100', () => {
        const { sut } = makeSut()
        const value = 70;
        const result = sut.main(value)

        expect(result).toEqual('Entregar 1 nota(s) de R$50,00 1 nota(s) de R$20,00 ')
    })

    it('Should return with do not exist grades to value sent when is less then 10', () => {
        const { sut } = makeSut()
        const value = 7;
        const result = sut.main(value)

        expect(result).toEqual('Ná há notas disponíveis para o valor informado.')
    })

})
