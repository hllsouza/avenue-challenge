const appId = Cypress.env('appId');

describe("GET /weather", () => {
  it("get current weather by city name", () => {
    cy.getWeatherWithQueryParams(
      `q=Shuzenji&appid=${appId}`
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Shuzenji");
    });
  });

  it("get current weather by city name and country code", () => {
    cy.getWeatherWithQueryParams(
      `q=Shuzenji,JP&appid=${appId}`
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Shuzenji");
    });
  });

  it("get current weather by lat and long", () => {
    cy.getWeatherWithQueryParams(
      `lat=51.5085&lon=-0.1257&appid=${appId}`
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("London");
    });
  });
});
