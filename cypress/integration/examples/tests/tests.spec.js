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
              .type('Hue Janus')
              .should('have.value', 'Hue Janus')

            specialInstruct()
            .should('have.value', '')
              .type('No mushrooms!')
              .should('have.value', 'No mushrooms!')
        })
      
        it('the submit button enables if we type on boths inputs', () => {
            nameInput().type('ThrockMorton')
            sizeInput().select('medium')
            pepperoniBox().check()
            bbqBox().check()
           specialInstruct().type('I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.')
            submitBtn().should('not.be.disabled')
          })
    })
}) 