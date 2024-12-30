// import Image from "next/image";
import styles from '@/app/home.module.css'
import { lusitana } from './font';
import Image from 'next/image';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52'>
        {/* <Image
        src="/hero.jpeg"
        width={1000}
        height={760}
        className='hidden md:block'
        alt='Image'
        /> */}
      </div>
    </main>
  );
}
