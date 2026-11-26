import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert('Welcome ${name}! Registration successful.');
  }

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <label>Name : </label>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
       <br/>
      <label>Email : </label>
      <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
       <br/>
       <label>Password : </label>
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br/>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
