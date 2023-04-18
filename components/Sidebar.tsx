import Link from 'next/link';
import React,{useState} from 'react'
import {AiFillHome,AiOutlineMenu} from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import { Footer } from './Footer';

const Sidebar = () => {
  const [showSidebar,setShowSidebar]=useState(true);
  const userProfile=false;
  const normalLink='font-bold flex items-center gap-2 justify-start  cursor-pointer p-3 transition hover:bg-slate-200 rounded-md'
  return (
    <div>
      <div onClick={()=>setShowSidebar(prev=>!prev)} className='block xl:hidden ml-4 mt-3 m-2 cursor-pointer '>
        {showSidebar ? <ImCancelCircle/> : <AiOutlineMenu/>}
      </div>
      {showSidebar && (
        <div className='w-20 justify-center xl:w-[400px] flex flex-col gap-5 border-r p-4 border-r-gray-500 xl:border-0'>
          <div className={normalLink}>
            <Link href='/'>
            <p className='text-2xl text-[#f51997]'>
            <AiFillHome/>
            </p>
           
            <span className='hidden xl:block text-gray-400'>For you</span></Link>
          </div>
         <Discover/>
         <SuggestedAccounts/>
         <Footer/>

          </div>
      )}
    </div>
  )
}

export default Sidebar;