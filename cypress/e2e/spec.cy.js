describe("prueba de inicio de sesion y apuntarse a una ruta", () => {
  it("inicio de sesion valido", () => {
    cy.visit("http://127.0.0.1:5173/").wait(3000);
    cy.get(".position-relative > #botoninicio").click();
    cy.get(".me-5 > form > :nth-child(1) > .form-control")
      .type("juan.ordonez89@hotmail.es")
      .wait(3000);
    cy.get(".me-5 > form > :nth-child(2) > .form-control")
      .type("12345")
      .wait(3000);
    cy.get(":nth-child(3) > #iniciosesion").click().wait(3000);
  });
});
