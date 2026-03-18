import "@testing-library/jest-dom";

const { fetch, Headers, Request, Response } = require("whatwg-fetch");

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;