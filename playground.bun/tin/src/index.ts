import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia()
.get("/", () => "Hello Elysia")
.get("/:text", ({ params: { text } }) => `${text}` )
.get('/api/messages', () => [])
.use(await staticPlugin({
  prefix: "/old",
  assets: "page/playground.v1"
}))
.use(await staticPlugin({
  prefix: "/test",
  assets: "page/testglobalstate"
}))
.ws('/ws', {
  open(ws) {
    console.log('client connected')
  },

  message(ws, message) {
    console.log('recv:', message)
    ws.send(`echo: ${message}`)
  },

  close(ws) {
    console.log('client disconnected')
  },
})
.ws('/ws/chat/:room', {
  open(ws) {
    ws.subscribe(ws.data.params.room)
  },

  message(ws, msg) {
    ws.publish(ws.data.params.room, msg)
  },
})



.listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);