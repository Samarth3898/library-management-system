const supertest = require("supertest");
const app = require("../../app");

describe("testing link", () => {
  it("api-docs link should work", async () => {
    const request = supertest(app);
    const response = await request.get("/api-docs/");
    expect(response.status).toBe(200);
  });
});
