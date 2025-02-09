const RegisterPage = ({ setIsRegisterOpen, setIsLoginOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-gray-300 p-8 max-w-md w-full rounded-xl shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => setIsRegisterOpen(false)}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-6 mt-4">
          <div className="space-y-1 text-sm">
            <label className="block text-black">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md text-black border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 rounded-md text-black border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-black">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md text-black border"
            />
          </div>
          <button className="w-full bg-gradient-to-r from-[#48B4BB] to-[#63d8e0] font-bold uppercase text-white py-2 rounded-md hover:shadow-lg">
            Register
          </button>
        </form>

        <p className="text-xs text-center text-black mt-4">
          Already have an account?{" "}
          <button
            onClick={() => {
              setIsRegisterOpen(false);
              setIsLoginOpen(true);
            }}
            className="text-blue-700 underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
