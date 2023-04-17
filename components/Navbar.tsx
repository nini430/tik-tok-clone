import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center px-4 py-2 border-b border-gray-200'>
        <div>
          <Link href='/'>
          <Image src='/assets/tiktik-logo.png' alt='tiktik' width={100} height={100} />
          </Link>
        </div>
    </div>
  )
}

export default Navbar;