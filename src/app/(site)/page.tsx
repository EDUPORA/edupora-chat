import Image from 'next/image';
import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <main className="flex h-full min-h-screen sm:px-6 lg:px-8 bg-gray-100 flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height={48}
          width={48}
          className="mx-auto w-auto"
          src={'/images/logo.jpg'}
        />

        <AuthForm />
      </div>

      {/* AuthForm */}
    </main>
  );
}
