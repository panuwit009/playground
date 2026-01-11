import { FormEvent, useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log({
      email,
      password,
    })
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-cyan-900 mb-2">Welcome Back</h1>
        <p className="text-cyan-700/70">Sign in to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-cyan-900 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg border border-cyan-200 bg-white/50
            text-cyan-900 placeholder:text-cyan-400/50 focus:outline-none
            focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-cyan-900 mb-2">
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-lg border border-cyan-200 bg-white/50
              text-cyan-900 placeholder:text-cyan-400/50 focus:outline-none
              focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="flex justify-end">
          <a
            href="#"
            className="text-cyan-600 hover:text-cyan-800 transition-colors"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600
          text-white py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700
          transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}
