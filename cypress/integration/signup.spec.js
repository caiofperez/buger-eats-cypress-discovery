import SignupPage from '../Pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'

/// <reference types="cypress" />

describe('Signup', () => {

    // beforeEach(function() {
    //     cy.fixture('deliver').then((dlv)=> {
    //         this.deliver = dlv

    //     })

    // })

    it('User should be a deliver', function () {
        var signup = new SignupPage
        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })
    it('Invalid document', function () {
        var signup = new SignupPage
        var deliver = SignupFactory.deliver()

        deliver.cpf = '02000111CA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
    it('Invalid email', function () {
        var signup = new SignupPage
        var deliver = SignupFactory.deliver()

        deliver.email = 'felipe.test.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })
    context('Required fields', function () {
        var signup = new SignupPage
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ]
        before(function(){
            
            signup.go()
            signup.submit()

        })
        messages.forEach(function(msg){
            it(`${msg.field} is required`,function(){
                signup.alertMessageShouldBe(msg.output)

            })

        })


    })

    

});

