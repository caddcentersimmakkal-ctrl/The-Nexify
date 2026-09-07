import http from "http";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/web-development",
  "/services/data-analytics",
  "/services/ai-automation",
  "/services/erp-crm",
  "/services/web-hosting",
  "/projects",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
  "/sitemap.xml",
  "/robots.txt",
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http
      .get(`http://localhost:3000${route}`, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          resolve({
            route,
            statusCode: res.statusCode,
            contentLength: data.length,
            hasSolutionsMenu: data.includes("Solutions"),
          });
        });
      })
      .on("error", (err) => {
        resolve({ route, error: err.message });
      });
  });
}

async function run() {
  console.log("Checking all routes on http://localhost:3000 ...\n");
  for (const r of routes) {
    const result = await checkRoute(r);
    console.log(
      `Route: ${result.route.padEnd(30)} | Status: ${result.statusCode} | Length: ${result.contentLength} bytes`
    );
  }
}

run();
