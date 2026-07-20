import LoginForm from '@/components/login-Form';
import Button from '@/components/ui/button';
import { Undo2 } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center p-5">
        <div className="max-w-xl w-full mx-autow-full mb-5">
          <Link href={'/'} className="w-fit">
            <Button size={'sm'} variant={'green'}>
              <Undo2 size={16} /> Back Home
            </Button>
          </Link>
        </div>
        <div className="max-w-xl w-full mx-auto border border-neo-border rounded-xl p-7 flex flex-col justify-center items-center ">
          <h4>WELCOME BACK</h4>
          <p>Login in to access your developer notes</p>
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
