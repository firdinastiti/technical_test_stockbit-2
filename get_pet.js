describe('Testing API Endpoints Using Cypress', () => {

    it('Test GET Request', () => {
        cy.request({
             method: 'GET',
             url: 'https://petstore.swagger.io/v2/pet/5',

        }).then((response) => { 
                expect(response.body).has.property('id',5); 
        })
    })  

    it('Test POST Request', () => {
        cy.request({
             method: 'POST',
             url: 'https://petstore.swagger.io/v2/pet/',
             body: {
                 'id' : 2,
                 'name':'kucing'
             }
        }).then((response) => { 
                expect(response.body).has.property('id',2); 
        })
  })

  it('Test PUT Request', () => {
        cy.request({
                method: 'PUT',
                url: 'https://petstore.swagger.io/v2/pet/2',
                body: { 
                   'id': 2,
                   'name' : 'kucing hitam'
                }
        }).then((response) => { 
                expect(response.body).has.property('name','kucing hitam'); 
        })          
  })        

  it('Test DELETE Request', () => {
        cy.request({
                  method : 'DELETE',
                  url: 'https://petstore.swagger.io/v2/pet/2'
                  }).then((response) => {
                    expect(response.body).to.be.empty;
        })	
  })

 
})