import z from 'zod';

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name is required'),
    email: z
      .string()
      .min(2, 'Email is required')
      .email('Invalid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
      .max(32, 'Password must be between 6 and 32 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export default registerSchema;
