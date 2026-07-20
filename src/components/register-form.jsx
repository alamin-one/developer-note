'use client';
import Input from './ui/input';
import Button from './ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import registerSchema from '@/zod/registerSchema';
import { startTransition, useActionState, useEffect } from 'react';
import { registerUser } from '@/actions/auth';
import { handleActionAlert } from '@/lib/handleAlart';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const route = useRouter();
  const [state, formAction, pending] = useActionState(registerUser, null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = data => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('confirmPassword', data.confirmPassword);

    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (!state) return;
    handleActionAlert(state.success, state.message);
    if (state.success) {
      reset();
      route.refresh();
      route.push('/dashboard');
    }
  }, [reset, route, state]);

  return (
    <>
      <form
        action=""
        className="w-full space-y-3 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label={'Name'}
          error={errors.name}
          placeholder="Enter your name"
          {...register('name')}
        />
        <Input
          label={'Email'}
          error={errors.email}
          placeholder="Enter your email"
          {...register('email')}
        />
        <Input
          label={'Password'}
          type="password"
          error={errors.password}
          placeholder="Enter your password"
          {...register('password')}
        />
        <Input
          label={'Confirm Password'}
          type="password"
          error={errors.confirmPassword}
          placeholder="Confirm your password"
          {...register('confirmPassword')}
        />
        <Button
          disabled={pending}
          loading={pending}
          className={'w-full mt-5'}
          size={'lg'}
        >
          SIGN UP
        </Button>
        <p>
          Already have an account?{' '}
          <a href="/login" className="text-neo-blue">
            Log in
          </a>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
