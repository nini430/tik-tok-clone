import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useState,useEffect} from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR,setIsSSR]=useState(true);
  useEffect(()=>{
    if(isSSR) {
      setIsSSR(false);
    }
  },[])

  if(isSSR) return null;
  return (
    <div>
      <Navbar/>
       <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
        <Sidebar/>
        </div>
        <div className='h-[88vh] mt-4 flex flex-col gap-10 overflow-auto videos flex-1'>
        <Component {...pageProps} />
        </div>
    </div>
    </div>
   
  )
}
