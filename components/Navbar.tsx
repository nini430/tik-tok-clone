import Image from "next/image";
import Link from "next/link";
import {GoogleLogin,googleLogout} from '@react-oauth/google'
import { createOrGetUser } from "@/utils";
import { useAuthStore } from "@/store/authStore";
import {IoMdAdd} from 'react-icons/io'
import {AiOutlineLogout} from 'react-icons/ai'

const Navbar = () => {
  const {userProfile,addUser,removeUser}=useAuthStore();
  return (
    <div className='w-full flex justify-between items-center px-4 py-2 border-b border-gray-200'>
        <div>
          <Link href='/'>
          <Image src='/assets/tiktik-logo.png' alt='tiktik' width={100} height={100} />
          </Link>
        </div>
        <div>SEARCH</div>
        <div>
          {userProfile? <div className='flex gap-3 items-center'>
          <Link href='/upload'>
            <button className='flex gap-1 border justify-center px-2 py-2 transition hover:bg-gray-200'>
              <IoMdAdd fontSize={25}/>
             <span className='text-gray-500 hidden lg:block'>upload</span>
              </button>
          </Link>
          <Link href='/'>
            <Image src={userProfile.image} width={40} height={40} className="cursor-pointer rounded-full" alt='profile'/>
          </Link>
          <button onClick={()=>{
              googleLogout();
              removeUser();
          }}>
            <AiOutlineLogout  className="p-1 text-5xl shadow-sm text-rose-500 rounded-full hover:bg-rose-500 hover:text-white trnsition"/>
          </button>
          </div>: <GoogleLogin onSuccess={response=>createOrGetUser(response,addUser)} onError={()=>console.log('Error')}/>}
        </div>
    </div>
  )
}

export default Navbar;