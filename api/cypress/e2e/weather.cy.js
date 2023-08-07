const appId = Cypress.env('appId');
const appInvalidId = Cypress.env('appInvalidId')

describe("GET /weather", () => {
  it("get current weather by city name", () => {
    cy.getWeatherWithQueryParams(
      `q=Manaus&appid=${appId}`
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.sys.country).eq("BR")
      expect(response.body.name).to.eq("Manaus");
      expect(response.body.id).to.eq(3663517)
    });
  });

  it("get current weather by city name and country code", () => {
    cy.getWeatherWithQueryParams(
      `q=New York,US&appid=${appId}`
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.sys.country).eq("US")
      expect(response.body.name).to.eq("New York");
      expect(response.body.id).to.eq(5128581)
      expect(response.body.cod).to.eq(200)
    });
  });

  it("get current weather by lat and long", () => {
    cy.getWeatherWithQueryParams(
      `lat=51.5085&lon=-0.1257&appid=${appId}`
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.sys.country).eq("GB")
      expect(response.body.name).to.eq("London");
      expect(response.body.id).to.eq(2643743)
      expect(response.body.cod).to.eq(200)
    });
  });

  it("get current weather where city is not compatible with country", () => {
    cy.getWeatherWithQueryParams(
      `q=New York,BR&appid=${appId}`
    ).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.cod).to.eq("404")
      expect(response.body.message).to.eq("city not found")
    });
  });

  it("get current weather where latitude is wrong", () => {
    cy.getWeatherWithQueryParams(
      `lat='51.5085'&lon=-0.1257&appid=${appId}`
    ).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.cod).to.eq("400")
      expect(response.body.message).to.eq("wrong latitude")
    });
  });

  it("get current weather where longitude is wrong", () => {
    cy.getWeatherWithQueryParams(
      `lat=51.5085&lon='-0.1257'&appid=${appId}`
    ).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.cod).to.eq("400")
      expect(response.body.message).to.eq("wrong longitude")
    });
  });

  it("get current weather by name without apiKey", () => {
    cy.getWeatherWithQueryParams(
      'q=Manaus'
    ).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.cod).to.eq(401)
      expect(response.body.message).to.eq("Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.")
    });
  });

  it("get current weather by name with invalid apiKey", () => {
    cy.getWeatherWithQueryParams(
      `q=Manaus&appid=${appInvalidId}`
    ).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.cod).to.eq(401)
      expect(response.body.message).to.eq("Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.")
    });
  });
  
});
