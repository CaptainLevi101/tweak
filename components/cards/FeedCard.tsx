import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded, BiMoney, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'

const FeedCard:React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-gray-800 p-4 hover:bg-slate-800 transition-all cursor-pointer ">
     <div className='grid grid-cols-12 gap-3'>
      <div className="col-span-2 flex justify-center lg:col-span-1"> 
       <Image src={'/lePhoto.jpg'} alt='user-image' height={1} width={50} className='cursor-pointer rounded-3xl h-12 w-12'/>
      </div>
      <div className="col-span-10 lg:col-span-11 ">
        <h5 className="">Ashish Parashar</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Veritatis iste repudiandae nesciunt. 
           Fugit dicta ratione enim cum libero eos adipisci. Temporibus sunt
           fuga ut animi quidem et. Maxime, ab repellat.
        </p>
        <div className="flex items-center justify-between mt-5 text-xl px-8 lg:mx-16">
        <div className="">
          <BiMessageRounded/>
        </div>
        <div className="">
          <FaRetweet/>
        </div>
        <div className="">
          <AiOutlineHeart/>
        </div>
        <div className="">
          <BiUpload/>
        </div>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default FeedCard
