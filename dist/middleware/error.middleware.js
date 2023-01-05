"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlTemplate = (message) => {
    return `
  <div style="height:100vh;display:flex;align-items: center;justify-content: center;">
    <h1 style="color:red">
      ${message}
    </h1>
  </div>
  `;
};
const errorMiddleware = (error, _req, res) => {
    const status = error.status || 500;
    const message = error.message || "opps";
    res.status(status).send(htmlTemplate(message));
};
exports.default = errorMiddleware;
