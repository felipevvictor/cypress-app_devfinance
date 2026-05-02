describe('Transações', () => {
    // Método auxiliar para preencher o formulário

    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app/");
    })

    it('Cadastrar uma entrada', () => {
    
        const freela = { 
            description: "Consultoria", 
            amount: 200, 
            date: "2026-05-02" 
        };

        cy.addTransaction(freela); 

    });

    it('Cancelar cadastro', () => {
    
        const freela = { 
            description: "Teste cancel", 
            amount: 200, 
            date: "2026-05-02" 
        };

        cy.cancelTransaction(freela); 

    });

    it('Cadastrar uma saída', () => {

        const freela = { 
            description: "Cinema", 
            amount: 40, 
            date: "2026-05-11" 
        };

        cy.addTransaction(freela); 

    });

    it('Excluir transação', () => {

        const cinema = { 
            description: "Cinema", 
            amount: -40, 
            date: "2026-05-14" 
        };

        const freela = { 
            description: "Freela", 
            amount: 120, 
            date: "2026-04-11" 
        };
        
        cy.addTransaction(cinema);
        cy.addTransaction(freela);

        cy.contains(".description", "Cinema")
        .parent()
        .find('img')
        .click()

        cy.get('tbody tr').should("have.length", 1)
    });

});