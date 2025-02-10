import { useState } from "react";

const RegisterPage = ({ setIsRegisterOpen, setIsLoginOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.photo) newErrors.photo = "Photo URL is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      setIsRegisterOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 top-5 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative bg-[#48B4BB] bg-opacity-30 p-8 max-w-md w-full rounded-xl shadow-lg">
        <button
          onClick={() => setIsRegisterOpen(false)}
          className="absolute top-2 right-2 bg-[#48B4BB] text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          ✕
        </button>
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-1.5 rounded-md border text-black"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-1.5 rounded-md border text-black"
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="w-full px-4 py-1.5 rounded-md border text-black"
              placeholder="Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500 text-xs">{errors.photo}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-1.5 rounded-md border text-black"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-1.5 rounded-md border text-black"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>
          <button className="w-full bg-gradient-to-r from-[#48B4BB] to-[#63d8e0] font-bold uppercase text-white py-2 rounded-md hover:shadow-lg">
            Register
          </button>
        </form>
        <p className=" text-center text-sm font-semibold mt-4">
          Already have an account?{" "}
          <button
            onClick={() => {
              setIsRegisterOpen(false);
              setIsLoginOpen(true);
            }}
            className="text-blue-700 text-sm hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
