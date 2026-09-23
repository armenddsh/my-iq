const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const OUT_DIR = path.join(__dirname, "..", "out");
const BASE_PATH = "/my-iq";

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  let urlPath = req.url || "/";

  // Strip query strings and fragments.
  const queryIndex = urlPath.indexOf("?");
  if (queryIndex !== -1) {
    urlPath = urlPath.slice(0, queryIndex);
  }

  // Strip the base path so GitHub Pages-style URLs resolve to the out folder.
  if (urlPath.startsWith(BASE_PATH)) {
    urlPath = urlPath.slice(BASE_PATH.length) || "/";
  }

  // Avoid path traversal.
  const safePath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, "");
  let filePath = path.join(OUT_DIR, safePath);

  // Serve trailing-slash directories via their index.html.
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    const notFound = path.join(OUT_DIR, "404.html");
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : "Not found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`E2E server running at http://localhost:${PORT}${BASE_PATH}/`);
});
