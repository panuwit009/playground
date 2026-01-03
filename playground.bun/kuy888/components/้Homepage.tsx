import { useNavigate } from 'react-router-dom'

export default function Homepage() {
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="rounded-xl bg-white px-10 py-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          🎉 Welcome to Homepage
        </h1>

        <p className="text-gray-600 mb-6">
          คุณเข้าสู่ระบบสำเร็จแล้ว
        </p>

        <button
          onClick={() => navigate('/')}
          className="rounded-md bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-500 transition"
        >
          กลับไปหน้า Login
        </button>
      </div>
    </div>
  )
}
