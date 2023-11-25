import { create, router, defaults, rewriter } from "json-server";
const server = create();
const router = router("db.json");

const middlewares = defaults();

server.use(middlewares);

server.use();

rewriter({
  "/*": "/$1",
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

export default server;
