import { client } from '@/utils/client';
import React, { BaseSyntheticEvent, MouseEvent, SyntheticEvent, useState } from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import {SanityAssetDocument} from '@sanity/client'
import { topics } from '@/utils/constants';
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';
import { useRouter } from 'next/router';

const Upload = () => {
    const router=useRouter();
    const [isLoading,setIsLoading]=useState(false);
    const [videoAsset,setVideoAsset]=useState<SanityAssetDocument | null>(null);
    const [caption,setCaption]=useState('');
    const [category,setCategory]=useState(topics[0]);
    const [savingVideo,setSavingVideo]=useState(false);
    const  [wrongTypeFile,setWrogTypeFile]=useState(false);
    const {userProfile}=useAuthStore();
    const uploadVideo=async(e:any)=>{
        setIsLoading(true);
            const selectedFile=e.target.files[0];
            console.log(selectedFile)
            const fileTypes=['video/mp4','video/webm','video/ogg'];
            if(fileTypes.includes(selectedFile.type)) {
                setIsLoading(false);
                client.assets.upload('file',selectedFile,{contentType:selectedFile.type,filename:selectedFile.name}).then((data)=>{
                    setIsLoading(false);
                    setVideoAsset(data);
                    setWrogTypeFile(false);
                })
                
            }else{
                setWrogTypeFile(true);
            }
    }
    const handlePost=async()=>{
        if(caption && videoAsset && category) {
            setSavingVideo(true);
        const document={
            _type:'post',
            userId:userProfile?._id,
            video:{
                _type:'file',
                asset:{
                    _type:'reference',
                    _ref:videoAsset._id
                }
              
            },
            postedBy:{
                _type:'postedBy',
                _ref:userProfile?._id,
            },
            caption,
            topic:category
        }
        await axios.post('http://localhost:3000/api/post',document);
        router.push('/')
        }   
        
       
        
    }
  return (
    <div className='flex gap-7 items-center flex-col md:flex-row pb-6'>
        <div className='flex flex-col gap-8'>
        <div>
            <p className='font-bold text-2xl'>Upload Video</p>
            <p className='text-gray-500 text-md font-semibold'>Upload video to your account</p>
            </div>
            <div className='w-[260px] h-[460px] cursor-pointer flex justify-center items-center rounded-md border-dashed border-[4px] p-2 hover:bg-gray-200 hover:border-[#f51997] transition'>
                {isLoading ? <p>Uploading...</p>:(
                    <div>
                        {videoAsset ? (<div>
                            <video src={videoAsset.url} loop controls/>
                        </div>):(
                            <label className='cursor-pointer w-full h-full flex flex-col justify-center  items-center' htmlFor='file'>
                                <AiOutlineCloudUpload className='text-5xl text-gray-400'/>
                                <p className='text-2xl mt-2 font-sbold'>Upload Video</p>
                                <div className='mt-6 flex flex-col leading-10 text-gray-500'>
                                    <p>MP4 or WebM or ogg</p>
                                    <p>720 X 1280 or higher</p>
                                    <p>Up to 10 minutes</p>
                                    <p>Less than 2GB</p>
                                </div>
                                <button className='mt-6 bg-[#f51997] text-white p-4 py-2 rounded-sm w-full'>Select File</button>
                                <input onChange={uploadVideo} id='file' type="file" className='w-0 h-0' />
                            </label>
                        )}
                        {wrongTypeFile && <p className='text-rose-500 text-sm text-center'>Please upload video with written format</p>}
                    </div>
                )}
            </div>
    </div>
    <div className='flex flex-col gap-4'>
    <div>
        <label  className='font-bold flex text-gray-500' htmlFor='caption'>Caption</label>
        <input id='caption' value={caption} onChange={(e)=>{setCaption(e.target.value)}} className='border mt-1 p-2 rounded-md focus:outline-none '/>
    </div>
    <div>
        <label className='font-bold text-gray-500 flex'>Choose Category</label>
        <select onChange={(e:any)=>{setCategory(e.target.value)}} className='border mt-1 p-3 rounded-md w-full focus:outline-none'>
        {topics.map(topic=>(
            <option value={topic.name} className='p-2' key={topic.name}>{topic.name}</option>
        ))}
        </select>
    </div>
    <div className='flex gap-5 items-center'>
        <button className='border font-bold text-gray-800 py-2 px-4'>Discard</button>
        <button disabled={savingVideo} onClick={handlePost} className='border font-bold text-white bg-[#f51997] py-2 px-4'>{savingVideo?'loading..':'Post'}</button>
    </div>
    </div>
    </div>
    
  )
}

export default Upload;