import { Elysia, file } from "elysia";

const app = new Elysia()
.get("/", () => "Hello Elysia")
.get("/:text", ({ params: { text } }) => html(text) )


.get('/old', file('playground.v1/index.html'))
.get("/page/:filename", ({ params: { filename } }) => file(`playground.v1/page/${filename}/index.html`) )
.listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

function html( text: string ) {
  return(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Kuy888</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div>${text}</div>
      </body>
    </html>
    `
  );
}