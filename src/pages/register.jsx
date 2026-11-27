import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./components/forschema/registerschema";

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: "client" },
  });

  const role = watch("role");

  function handleRegister(data) {
    alert(`Welcome ${data.name}! Registration successful.`);
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit(handleRegister)} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-600">Welcome to Collabio</h1>
        <h2 className="text-xl font-semibold text-center">Register</h2>

        <div>
          <label className="block mb-1">Name</label>
          <input {...register("name")} placeholder="Enter your name" className="w-full border rounded-lg p-2" />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input {...register("email")} type="email" placeholder="Enter your email" className="w-full border rounded-lg p-2" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block mb-1">Age</label>
          <input {...register("age")} type="number" placeholder="Enter your age" className="w-full border rounded-lg p-2" />
          <p className="text-red-500 text-sm">{errors.age?.message}</p>
        </div>

        <div>
          <label className="block mb-1">Role</label>
          <select {...register("role")} className="w-full border rounded-lg p-2">
            <option value="client">Client</option>
            <option value="freelancer">Freelancer</option>
          </select>
          <p className="text-red-500 text-sm">{errors.role?.message}</p>
        </div>

        {role === "freelancer" && (
          <>
            <div>
              <label className="block mb-1">Skills</label>
              <input {...register("skills")} placeholder="e.g. React, Python" className="w-full border rounded-lg p-2" />
              <p className="text-red-500 text-sm">{errors.skills?.message}</p>
            </div>

            <div>
              <label className="block mb-1">Experience</label>
              <select {...register("experience")} className="w-full border rounded-lg p-2">
                <option value="">Select experience</option>
                <option value="Beginner">Beginner</option>
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
              <p className="text-red-500 text-sm">{errors.experience?.message}</p>
            </div>

            <div>
              <label className="block mb-1">Portfolio (Optional)</label>
              <input {...register("portfolio")} placeholder="Portfolio or GitHub URL" className="w-full border rounded-lg p-2" />
              <p className="text-red-500 text-sm">{errors.portfolio?.message}</p>
            </div>
          </>
        )}

        <div>
          <label className="block mb-1">Password</label>
          <input {...register("password")} type="password" placeholder="Enter password" className="w-full border rounded-lg p-2" />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <div>
          <label className="block mb-1">Confirm Password</label>
          <input {...register("confirmPassword")} type="password" placeholder="Confirm password" className="w-full border rounded-lg p-2" />
          <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Register</button>
      </form>
    </div>
  );
}
export default Register;