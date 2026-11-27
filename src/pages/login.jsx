
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  function handleLogin(data) {
    alert(`Welcome to Collabio, ${data.email}!`);
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-500 text-center mb-6">Welcome To Collabio</h1>

        <form onSubmit={handleSubmit(handleLogin)}>
          <label className="block mb-2">Email</label>
          <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" } })} type="email" placeholder="Enter your email" className="w-full border p-2 rounded mb-2" />
          <p className="text-red-500 text-sm mb-3">{errors.email?.message}</p>

          <label className="block mb-2">Password</label>
          <input {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } })} type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-full border p-2 rounded mb-2" />
          <p className="text-red-500 text-sm mb-3">{errors.password?.message}</p>

          <label className="flex items-center gap-2 mb-4"><input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} /> Show Password</label>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
        </form>

        <p className="text-center mt-5 text-sm text-gray-500">Don't have an account? <a href="/register" className="text-blue-500 font-semibold">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
