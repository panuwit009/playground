import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

interface typebody {
  username: string;
  password: string;
}

const app = new Elysia()

  app.use(
    await staticPlugin({
      prefix: '/'
    })
  )

  .post('/login', ({ body }) => {
    console.log(body)
    const { username, password } = body as typebody


    if (username === 'admin' && password === '1234') {
      return { success: true, message: 'Login success' }
    }

    return { success: false, message: 'Wrong username or password' }
  })

  .listen(3000)


console.log('🚀 Server running at http://localhost:3000')

