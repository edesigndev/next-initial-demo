import Link from 'next/link';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact</h1>
      <div className={'container'}>
        <h1 className={'title'}>
          Ir a <Link href='/'>Inicio</Link>
        </h1>
        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.tsx</code>
        </p>
      </div>
    </MainLayout>
  );
}
