describe('testing', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/pizza')
    })
  
    const nameInput = () => cy.get('input[name="name"]')
     const sizeInput = () => cy.get('select[name="size"]')
    const pepperoniBox = () => cy.get('input[name="pepperoni"]')
    const bbqBox = () => cy.get('input[name="bbq"]')
    const chickenBox = () => cy.get('input[name="chicken"]')
    const mushroomBox = () => cy.get('input[name="mushroom"]')
    const submitBtn = () => cy.get('button[id="order"]') 
    const specialInstruct = ()=> cy.get('input[name="textarea"]')

    it('exisitence', ()=>{
        nameInput().should('exist')
       sizeInput().should('exist')
      pepperoniBox().should('exist')
     bbqBox().should('exist')
      chickenBox().should('exist')
      mushroomBox().should('exist')
       submitBtn().should('exist')
       specialInstruct().should('exist')
    }) 

    describe('filling out inputs', ()=>{
        it('submit button is disabled', () => {
            submitBtn().should('be.disabled')
        })
        
        it('can select boxes', ()=>{
            pepperoniBox().check()
            chickenBox().check()
            bbqBox().check()
        })
        it('can type inside the inputs', () => {
           nameInput()
              .should('have.value', '')
              .type('ThrockMorton')
              .should('have.value', 'ThrockMorton')

            specialInstruct()
            .should('have.value', '')
              .type('No mushrooms!')
              .should('have.value', 'No mushrooms!')
        })
      
        it('the submit button enables if we type on boths inputs', () => {
            nameInput().type('foo')
            sizeInput().select('medium')
            pepperoniBox().check()
            bbqBox().check()
           specialInstruct().type('bar')
            submitBtn().should('not.be.disabled')
          })
    })
}) 