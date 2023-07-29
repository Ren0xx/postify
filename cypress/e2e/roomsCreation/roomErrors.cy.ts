describe("Cypress login", () => {
    beforeEach(() => {
        cy.login();
        cy.visit("/");
        cy.wait("@session");

        cy.get("#authenticated").should("exist").then(() => {
            cy.log("Cypress login successful");
        });

    });

    it("should get room not found when ", () => {

        cy.visit("/rooms/1");
        cy.get("#room-not-found").should("exist");
    });
});