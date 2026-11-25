import { useState } from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h1 className="text-2xl font-bold text-blue-500 text-center"> Wellcome To Collabio</h1>
        <form>

          <label className="block mb-2">Email</label>

          <input type="email" placeholder="Enter email" className="w-full border p-2 rounded mb-4" required></input>
          <label className="block mb-2">Password</label>

          <input type="password" placeholder="Enter password" className="w-full border p-2 rounded mb-4" required ></input>

          <button type="submit" className="w-full bg-blue-500 p-2 rounded "> Login </button>
        </form>
      </div>
    </div>
  );
}

export default Login;