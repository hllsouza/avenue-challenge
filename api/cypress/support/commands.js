Cypress.Commands.add("getWeatherWithQueryParams", (queryParams) => {
  cy.api({
    method: "GET",
    failOnStatusCode: false,
    url: `/weather?${queryParams}`,
  }).then((response) => {
    return response;
  });
});
