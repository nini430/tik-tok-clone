import React from 'react'
import { topics } from '@/utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Discover = () => {
  const router=useRouter();
  const selectedTopic=router.query.topic;
  return (
    <div className='border-b p-4 justify-center'>
        <p className='text-gray-500 hidden font-semibold xl:block'>Popular Topics</p>
        <div className='flex flex-wrap gap-3'>
        {topics.map(topic=>(
          
            <Link key={topic.name} href={`/?topic=${topic.name}`}>
                <div className={`flex mt-2 items-center gap-2 xl:border rounded-full hover:bg-[#f51997] hover:text-white transition p-2 ${topic.name===selectedTopic?'xl:border-[2px] border-[#f51997] text-[#f51997]':''}`}>
                  <span>{topic.icon}</span>
                  <span className='xl:block hidden'>{topic.name}</span>
                  </div> 
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Discover;