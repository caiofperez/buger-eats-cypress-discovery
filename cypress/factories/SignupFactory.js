var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name:`${firstName} ${lastName}`, 
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '71999999999',
            address: {
                postalcode: '41100000',
                street: 'Rua Thomaz Gonzaga',
                number: '111',
                details: 'Ap 801',
                district: 'Pernambués',
                city_state: 'Salvador/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

            return data

    }


}