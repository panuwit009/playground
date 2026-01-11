import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const app = new Elysia().get("/1", () => "Hello Elysia Kuay tok").use(await staticPlugin({
  prefix: '/reactdoo2',
  assets: 'pubood',
}))

.use(await staticPlugin({
  prefix: '/bossii',
}))

.listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
