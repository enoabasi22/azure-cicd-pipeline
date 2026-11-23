const http = require("http");

const PORT = process.env.PORT || 3000;
const VERSION = "1.0.0";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", version: VERSION }));
    return;
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Hello from my CI/CD pipeline!</h1><p>Version ${VERSION}</p>`);
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));