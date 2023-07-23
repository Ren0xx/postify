// describe('creates public room', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000');
//   });
// });

describe("Cypress login", () => {
	beforeEach(() => {
		cy.login();
		// Visit a route in order to allow cypress to actually set the cookie
		cy.visit("/");
		// Wait until the intercepted request is ready
		cy.wait("@session");

		cy.get("#authenticated").should("exist").then(() => {
			cy.log("Cypress login successful");
		});

	});

	// it("should provide a valid session", () => {
	// 	// Call your custom cypress command
	// 	cy.login();
	// 	// Visit a route in order to allow cypress to actually set the cookie
	// 	cy.visit("/");
	// 	// Wait until the intercepted request is ready
	// 	cy.wait("@session");
	// 	// This is where you can now add assertions
	// 	// Example: provide a data-test-id on an element.
	// 	// This can be any selector that "always and only" exists when the user is logged in
	// 	// cy.get("[data-test-id='authenticated']").should("exist").then(() => {
	// 	// 	cy.log("Cypress login successful");
	// 	// });
	// });

	it("should create a public room", () => {

		cy.visit("/");
		cy.get("#open-create-room-form").click();
		cy.get("#name").type('name-of-room', { delay: 1 });
		cy.get('#create-room').click();
		cy.get('#alert-dialog-title').should('not.exist');

	});

	it("should get error when creating room already taken name", () => {

		cy.visit("/");
		cy.on("window:console", (consoleMessage) => {
			// Sprawdź, czy konsola zawiera oczekiwany błąd
			if (consoleMessage.type === "error") {
				// Tutaj możesz dokładnie przetestować, czy zawartość błędu jest zgodna z oczekiwaniami
				expect(consoleMessage.message).to.include("Pokoj juz istnieje");
			}
		});
		cy.get("#open-create-room-form").click();
		cy.get("#name").type('name-of-room', { delay: 1 });
		cy.get('#create-room').click();




	});
});