import Link from 'next/link';
import { ReactNode } from 'react';

export default function HelloLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className='flex justify-center gap-5'>
        <Link href='/hello' scroll={false} type='button'>
          Hello
        </Link>
        <a href='/hello/morning'>Morning</a>
        <a href='/hello/afternoon'>Afternoon</a>
        <a href='/hello/evening'>Evening</a>
      </nav>
      <div className='container'>{children}</div>
    </>
  );
}
