describe("Prime tables end to end tests", () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it("Should load the page", () => {
        const inputBar = cy.get(".input-bar")
        inputBar.should("have.value", "");
    })

    it("Should have a label", () => {
        const inputBar = cy.get("label")
        inputBar.should("contain", "Enter a value to get a 'primes table'");
    })

    it("Should have a prompt to enter info on start-up", () => {
        const inputBar = cy.get("h4")
        inputBar.should("contain", "Please enter a value greater than 0!");
    })

    it("Should be able to input number", () => {
        const inputBar = cy.get(".input-bar");
        inputBar.type("34");
        inputBar.should("have.value", "34");
    })

    it("Should have submit button", () => {
        const submit = cy.get(".submit-button");
        submit.should("exist");
    })

    it("Should be able to create table", () => {
        const inputBar = cy.get(".input-bar")
        inputBar.type("11");
        const form = cy.get("form");
        form.submit();
        const table = cy.get("table");
        table.should("exist");
    })

    it("Should be able to input values and result in table with number of rows n + 1", () => {
        const inputBar = cy.get(".input-bar")
        inputBar.type("6");
        const form = cy.get("form");
        form.submit();
        const numberOfRows = cy.get("table").find("tr");
        numberOfRows.should("have.length", 7);
    })

    it("Should be able to input values and result in table with number of rows (n + 1)", () => {
        const inputBar = cy.get(".input-bar")
        inputBar.type("8");
        const form = cy.get("form");
        form.submit();
        const row = cy.get("table").find("tr").find("td");
        row.should("have.length", 81);
    })
    
  })