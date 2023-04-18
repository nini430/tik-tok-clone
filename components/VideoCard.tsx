import { Video } from '@/types'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {GoVerified} from 'react-icons/go'
import {useState,useRef} from 'react'
import {BsFillPlayFill,BsFillPauseFill} from 'react-icons/bs';
import {HiVolumeOff,HiVolumeUp} from 'react-icons/hi';

interface IVideoCardProps {
  post:Video
}



const VideoCard:NextPage<IVideoCardProps> = ({post}) => {
  const [isHover,setIsHover]=useState<boolean>(false)
  const [playing,setPlaying]=useState<boolean>(false)
  const [isVideoMuted,setIsVideoMuted]=useState<boolean>(false);
  const videoRef=useRef<HTMLVideoElement>(null);
  const onVideoPlayPress=()=>{
    console.log('ok')
      if(playing) {
        videoRef.current?.pause();
        setPlaying(false);
      }else{
        videoRef.current?.play();
        setPlaying(true);
      }
  }
  return (
    <div className='flex flex-col gap-5 border-b border-gray-200 pb-6'>
      <div>
        <div className='flex gap-3 items-center'>
          <div className='md:w-16 md:h-16 w-10 h-10'>
            <Image className='rounded-full' src={post.postedBy.image} alt='profile' width={65} height={65}/>
          </div>
          <div className='flex gap-3'>
            <p className='flex gap-2'>
              {post.postedBy.username} {` `}
              <GoVerified className='text-blue-400 text-md'/>
            </p>
            <p className='text-gray-500 text-sm hidden xl:block'>{post.postedBy.username}</p>
          </div>
        </div>
      </div>
      <div className='flex gap-4 relative'>
        <div onMouseOver={()=>{setIsHover(true)}}   className='rounded-3xl'>
          <Link href='/'>
          <video ref={videoRef} src={post.video.asset.url} loop className='w-[200px] lg:w-[600px] h-[300px] bg-slate-200 rounded-md cursor-pointer'/></Link>
         
        </div>
        {
          isHover && (
            <div className='absolute bottom-2  flex justify-between z-20'>
                {playing ? <button onClick={onVideoPlayPress}><BsFillPauseFill className='text-2xl lg:text-4xl'/></button>:<button onClick={onVideoPlayPress}><BsFillPlayFill className='text-2xl lg:text-4xl'/></button>}
                {isVideoMuted ? <button><HiVolumeOff className='text-2xl lg:text-4xl'/></button>:<button><HiVolumeUp className='text-2xl lg:text-4xl'/></button>}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default VideoCard