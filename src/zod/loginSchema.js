import z from 'zod';

const loginSchema = z.object({
  email: z.string().min(2, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be between 6 and 32 characters'),
});

export default loginSchema;
