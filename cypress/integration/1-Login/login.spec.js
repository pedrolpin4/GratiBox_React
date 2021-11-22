/* eslint-disable no-undef */
import faker from 'faker'

const fakeName = faker.name.firstName();
const fakeEmail = faker.internet.email();
const fakePassword = '123456';

describe('Signup', () => {
    it('Should signup successfully', () => {
      cy.visit('http://localhost:3000/register');
      cy.contains('I am not grateful yet').click();
      cy.wait(2000);
      cy.get('input[placeholder=Name]').type(fakeName);
      cy.get('input[placeholder=Email]').type(fakeEmail);
      cy.get("input[placeholder='Password [6-15 characters]']").type(fakePassword);
      cy.get("input[placeholder='Repeat your Password']").type(fakePassword);
      cy.contains('Sign Up').click();
    });
});
  
describe('Login', () => {
    it('Should login successfully', () => {
      cy.visit('http://localhost:3000/register'); 
      cy.get('input[placeholder=Email]').type(fakeEmail); 
      cy.get("input[placeholder='Password [6-15 characters]']").type(fakePassword); 
      cy.contains('Login').click();
      cy.url().should('equal', 'http://localhost:3000/signatures'); 
    });
});