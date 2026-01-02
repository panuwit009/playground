import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia()
.get("/", () => "Hello Elysia")
.get("/:text", ({ params: { text } }) => (text) )

.use(await staticPlugin({
  prefix: "/old",
  assets: "playground.v1"
}))
.listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);