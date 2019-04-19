describe('Yandex Domashka', () => {
  describe('Notes label on filter block', () => {
    it('appear on desktop', () => {
      cy.viewport(1920, 1080);
      cy.visit('http://localhost:3000');
      cy.contains('Заметки');
    });
    it("don't apper on touch", () => {
      cy.viewport(768, 946);
      cy.visit('http://localhost:3000');
      cy.contains('Заметки').not();
    });
    it("don't apper on mobile", () => {
      cy.viewport(340, 480);
      cy.visit('http://localhost:3000');
      cy.contains('Заметки').not();
    });
  });
});
