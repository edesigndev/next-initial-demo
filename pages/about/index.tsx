import Link from 'next/link';
import type { ReactElement } from 'react';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '@/components/layouts/DarkLayout';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div className={'container'}>
        <h1 className={'title'}>
          Ir a <Link href='/'>Inicio</Link>
        </h1>
        <p className={'description'}>
          Get started by editing <code className={'code'}>pages/about.tsx</code>
        </p>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
