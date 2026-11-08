type HttpMethod = "GET" | "POST";
type ApiPath = "/users" | "/products";
type RequestKey = `${HttpMethod} ${ApiPath}`;
const route: RequestKey = "GET /users";
console.log(route);
