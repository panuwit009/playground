type LoginProps = {
  onSuccess: () => void
}
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()

  return (
    <div
      className="w-screen h-screen flex items-center justify-center overflow-hidden
             bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/loginBG.jpg')" // เปลี่ยนเป็น path รูปพื้นหลังไม้
      }}
    >
      <div className="w-[380px] rounded-[40px] bg-gray-200 px-8 py-10 shadow-lg">
        <h2 className="text-center text-lg font-semibold mb-8">
          ยินดีต้อนรับสู่ช่องทางการเข้าสู่ระบบ
        </h2>

            {/* Username */}
            <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
                username
            </label>
            <input
                type="text"
                placeholder=""
                className="
                w-full
                rounded-md
                border
                border-gray-400
                bg-white
                px-3
                py-2
                text-sm
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-200
                outline-none
                "
            />
            </div>

            {/* Password */}
            <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1">
                password
            </label>
            <div className="flex items-center gap-2">
                <input
                type="password"
                placeholder=""
                className="
                    flex-1
                    rounded-md
                    border
                    border-gray-400
                    bg-white
                    px-3
                    py-2
                    text-sm
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-200
                    outline-none
                "
                />
                <button
                type="button"
                className="text-xs text-black whitespace-nowrap"
                >
                ลืม password
                </button>
            </div>
            </div>

        {/* Login button */}
        <button
          type="button"
          onClick={() => navigate('/home')}
          className="w-full rounded-md bg-yellow-200 py-2 font-semibold hover:bg-yellow-300 transition"
        >
          login
        </button>

        {/* Register */}
        <p className="text-center text-sm mt-4">
          หากยังไม่ได้สมัคร คลิกที่
        </p>

        <hr className="my-4 border-gray-400" />

        <p className="text-center text-sm text-gray-600 mb-3">
          หรือเข้าสู่ระบบโดยเลือกอื่นผ่าน
        </p>

        {/* Social login */}
        <div className="flex justify-center gap-6">
          <button className="w-11 h-11 rounded-full bg-blue-600 text-white text-xl font-bold">
            f
          </button>
          <button className="w-11 h-11 rounded-full bg-red-500 text-white text-xl font-bold">
            G
          </button>
        </div>
      </div>
    </div>
  );
}
