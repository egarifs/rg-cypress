describe("login page test cases", ()=>{
    it("Visit login page", () =>{
        cy.visit("http://localhost:3000/");
        cy.title().should("eq","React Gallery");
        cy.contains("Hello Again");
    });
    it("Contain email and password input and login button", () =>{
       //check email
       const email = cy.get("input[name='email']");
       email.should("be.visible");
       email.should("have.attr","type", "email")
       email.should("have.attr","placeholder", "Email Address")

       //check email
      const password = cy.get("input[name='password']");
      email.should("be.visible");
      email.should("have.attr","type", "password")
      email.should("have.attr","placeholder", "Password")

      //check email
      const button = cy.get("button");
      button.should("be.visible");
      button.contains("Login");
      button.should("have.css","background-color", "rgb(79, 70, 229)")
      button.should("have.css","color", "rgb(255, 255, 255)")


    });
});