import RegisterForm from '@/components/register-form';
import Button from '@/components/ui/button';
import { Undo2 } from 'lucide-react';
import Link from 'next/link';

const RegisterPage = () => {
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
          <h4>CREATE ACCOUNT</h4>
          <p>Sign up to start organizing your developer logs</p>
          <RegisterForm />
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
