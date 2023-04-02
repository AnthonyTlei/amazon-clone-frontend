describe("Auth (e2e)", () => {
  it("should load and redicret to /signin", () => {
    cy.visit("http://localhost:3001/");
    cy.url().should("include", "signin");
  });
  it("should have the correct initial state", () => {
    cy.visit("http://localhost:3001/");
    const initialState = {
      auth: {
        user: null,
        jwt: null,
        isError: false,
        isLoading: false,
        isAuthenticated: false,
        isSuccess: false,
      },
    };
    cy.window().should("have.property", "store");
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", initialState);
  });
  const random = Math.floor(Math.random() * 1000);
  const name = `test${random}`;
  const email = `test${random}@gmail.com`;
  const password = "test123";
  it("should navigate to /signin upon registering", () => {
    cy.visit("http://localhost:3001/register");
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#confirmPassword").type(password);
    cy.get("#register-btn").click();
    cy.url().should("include", "signin");
  });
  it("should have disabled signin button", () => {
    cy.visit("http://localhost:3001/signin");
    cy.get("#signin-btn").should("be.disabled");
  });
  it("should navigate to / upon signin then back signin upon signout", () => {
    cy.visit("http://localhost:3001/signin");
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#signin-btn").click();
    cy.url().should("include", "");
    cy.wait(1000);
    cy.get("#logout-btn").click();
    cy.url().should("include", "signin");
  });
});
