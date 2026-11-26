
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome to Collabio, ${email}!`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-blue-500 text-center mb-6">Welcome To Collabio</h1>
        
        <form onSubmit={handleSubmit}>

          <label className="block mb-2">Email</label>
          <input type="email" placeholder="Enter your email" className="w-full border p-2 rounded mb-4" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label className="block mb-2">Password</label>
          <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-full border p-2 rounded mb-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <label className="flex items-center gap-2 mb-4"><input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} /> Show Password</label>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
        </form>
        <p className="text-center mt-5 text-sm text-gray-500">Don't have an account? <a href="/register" className="text-blue-500 font-semibold">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
