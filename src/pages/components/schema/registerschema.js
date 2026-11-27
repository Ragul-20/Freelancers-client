import { z } from "zod";

const commonFields = {
  name: z.string().min(3, "Name must have at least 3 characters"),
  email: z.string().email("Enter a valid email address"),
  age: z.coerce.number().min(18, "You must be at least 18 years old").max(100, "Enter a valid age"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
};

const clientSchema = z.object({
  ...commonFields,
  role: z.literal("client"),
});

const freelancerSchema = z.object({
  ...commonFields,
  role: z.literal("freelancer"),
  skills: z.string().min(2, "Please enter your skills"),
  experience: z.string().min(1, "Please select your experience"),
  portfolio: z.string().optional(),
});

export const registerSchema = z.discriminatedUnion("role", [clientSchema, freelancerSchema]).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
