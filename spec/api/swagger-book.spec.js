const supertest = require("supertest");
const app = require("../../app");
const { startDbServer, stopDBServer } = require("../../server");

// ALl get function test cases

describe("swagger-books-test", () => {
  const request = supertest(app);

  beforeAll(async () => {
    startDbServer();
  });

  afterAll(async () => {
    stopDBServer();
  });

  // it("should throw an error if it doesn't return an author", async () => {
  //
  //   const response = await request.get("/books/");

  //   expect(response.status).toBe(400);
  //   expect(response.body.message).toBe("book should have an author");
  // });

  // it("should throw an error if it doesn't return a title", async () => {
  //
  //   const response = await request.get("/books/");

  //   expect(response.status).toBe(400);
  //   expect(response.body.message).toBe("book should have a title");
  // });

  // it("should throw an error if it doesn't return an ISBN", async () => {
  //
  //   const response = await request.get("/books/");

  //   expect(response.status).toBe(400);
  //   expect(response.body.message).toBe("book should have an ISBN");
  // });

  // it("should throw an error if it doesn't return an id", async () => {
  //
  //   const response = await request.get("/books/");

  //   expect(response.status).toBe(400);
  //   expect(response.body.message).toBe("book should have an id");
  // });

  it("should return the books", async () => {
    const response = await request.get("/books");

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  //All post function test cases

  it("should show a bad request error if title is not provided", async () => {
    const response = await request.post("/books").send({
      author: "murakami",
      ISBN: "1234"
    });

    expect(response.status).toBe(400);
    expect(response.body).toBeDefined();
    expect(response.body.message).toBe("title should be provided");
  });

  it("should show a bad request error if author is not provided", async () => {
    const response = await request.post("/books").send({
      title: "kafka on the shore",
      ISBN: "1234"
    });

    expect(response.status).toBe(400);
    expect(response.body).toBeDefined();
    expect(response.body.message).toBe("author should be provided");
  });

  it("should show a bad request error if ISBN is not provided", async () => {
    const response = await request.post("/books").send({
      author: "murakami",
      title: "kafka on the shore"
    });

    expect(response.status).toBe(400);
    //expect(response.body).toBeDefined();
    expect(response.body.message).toBe("ISBN should be provided");
  });

  // it("should show a bad request error if id is not provided", async () => {
  //
  //   const response = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "1234"
  //   });

  //   expect(response.status).toBe(400);
  //   expect(response.body).toBeDefined();
  //   expect(response.body.message).toBe("id should be provided");
  // });

  it("should create a book successfully", async () => {
    const response = await request.post("/books").send({
      author: "murakami",
      title: "kafka on the shore",
      ISBN: "1234"
    });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.title).toBeDefined();
    expect(response.body.author).toBeDefined();
    expect(response.body.ISBN).toBeDefined();
    expect(response.body.title).toBe("kafka on the shore");
    expect(response.body.author).toBe("murakami");
  });

  // it("should throw an error if the ISBN already exists in the database", async () => {
  //
  //   const response = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "1234"
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body).toBeDefined();

  //   const responseForDuplicate = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "1234"
  //   });

  //   expect(responseForDuplicate.status).toBe(400);
  //   expect(responseForDuplicate.body.message).toBe(
  //     "ISBN cannot be the same for two books"
  //   );
  // });

  // it("should throw an error if the id already exists in the database", async () => {
  //
  //   const response = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "1234",
  //     id: "ABCD"
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body).toBeDefined();

  //   const responseForDuplicate = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "12345",
  //     id: "ABCD"
  //   });

  //   expect(responseForDuplicate.status).toBe(400);
  //   expect(responseForDuplicate.body.message).toBe(
  //     "id cannot be the same for two books"
  //   );
  // });

  // // All updation of books

  // it("should update the book with the corresponding id", async () => {
  //
  //   const response = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "1234",
  //     id: "ABCD"
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body).toBeDefined();

  //   const url = "/books/" + response.body.id;
  //   const responseForDuplicate = await request.put(url).send({
  //     author: "murakamiiii",
  //     title: "kafka on the shoreeeeee",
  //     ISBN: "123456"
  //   });

  //   expect(responseForDuplicate.status).toBe(200);
  //   expect(responseForDuplicate.body).toBeDefined();
  // });

  // it("should show a bad request error if ISBN is not provided", async () => {
  //
  //   const response = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "1234",
  //     id: "ABCD"
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body).toBeDefined();

  //   const url = "/books/" + response.body.id;
  //   const responseForDuplicate = await request.put(url).send({
  //     author: "murakamiiii",
  //     title: "kafka on the shoreeeeee"
  //   });

  //   expect(responseForDuplicate.status).toBe(400);
  //   expect(responseForDuplicate.body.message).toBe("ISBN should be provided");
  // });

  // it("should show a bad request error if title is not provided", async () => {
  //
  //   const response = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "1234",
  //     id: "ABCD"
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body).toBeDefined();

  //   const url = "/books/" + response.body.id;
  //   const responseForDuplicate = await request.put(url).send({
  //     author: "murakamiiii",
  //     ISBN: "123456"
  //   });

  //   expect(responseForDuplicate.status).toBe(400);
  //   expect(responseForDuplicate.body.message).toBe("title should be provided");
  // });

  // it("should show a bad request error if author is not provided", async () => {
  //
  //   const response = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "1234",
  //     id: "ABCD"
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body).toBeDefined();

  //   const url = "/books/" + response.body.id;
  //   const responseForDuplicate = await request.put(url).send({
  //     title: "kafka on the shoreeeeee",
  //     ISBN: "123456"
  //   });

  //   expect(responseForDuplicate.status).toBe(400);
  //   expect(responseForDuplicate.body.message).toBe("author should be provided");
  // });

  // it("should throw an error if ISBN already exists in the database", async () => {
  //
  //   const response = await request.post("/books/").send({
  //     author: "murakami",
  //     title: "kafka on the shore",
  //     ISBN: "1234",
  //     id: "ABCD"
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body).toBeDefined();

  //   const url = "/books/" + response.body.id;
  //   const responseForDuplicate = await request.put(url).send({
  //     author: "murakamiiii",
  //     title: "kafka on the shoreeeeee",
  //     ISBN: "1234"
  //   });

  //   expect(responseForDuplicate.status).toBe(400);
  //   expect(responseForDuplicate.body.message).toBe(
  //     "ISBN invalid as it already exists in the database"
  //   );
  // });
});
