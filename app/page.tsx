import { Button } from '@/components/ui/button';
import FeedCard from '@/components/cards/FeedCard';
import React from 'react'
import { BiHash, BiHomeCircle, BiMoney, BiUser } from 'react-icons/bi';
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import { SlOptions } from 'react-icons/sl';


interface sideBarButton{
    title:string,
    icon:React.ReactNode;
}
interface sideBarButton{
  title:string,
  icon:React.ReactNode;
}
const sideBarMenuItems:sideBarButton[]=[
      {
        title:'Home',
        icon:<BiHomeCircle/>
      },
      {
        title:'Explore',
        icon:<BiHash/>
      },
      {
        title:'Notifications',
        icon:<BsBell/>
      },
      {
        title:'Messages',
        icon:<BsEnvelope/>
      },
      {
        title:'BookMarks',
        icon:<BsBookmark/>
      },
      {
        title:'Twitter Blue',
        icon:<BiMoney/>
      },
      {
        title:'Profile',
        icon:<BiUser/>
      },
      {
        title:'More',
        icon:<SlOptions/>
      },

]
const page = () => {


  return (
    <div className='grid grid-cols-12 h-screen w-screen lg:px-48'>
      <div className="col-span-3  pt-1 justify-start lg:ml-28">
        <div className="text-3xl w-fit hover:bg-gray-600 p-2 rounded-full cursor-pointer h-fit transition-all">
        <BsTwitter/> 
        </div>
        <div className="mt-2 text-2xl font-semibold pr-4 ">
          <ul>
          {sideBarMenuItems.map((item:sideBarButton,index:number)=>(
             <li key={index} className='flex justify-start items-center gap-4 hover:bg-gray-800 mt-2 rounded-full px-5 py-2 cursor-pointer w-fit'>
             <span className="">{item.icon}</span>
             <span className="">{item.title}</span>
             </li>
          ))}
          </ul>
        </div>
        <Button className='bg-[#1d9bf0] hover:bg-[#45a0e0] rounded-full w-[60%] h-12 ml-12 p-4 mt-5'>Tweet</Button>
      </div>
      <div className="col-span-5 h-screen  overflow-y-scroll border-r-[0.2px] border-l-[0.2px] border-gray-500 no-scrollbar">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className="col-span-3"></div>
    </div>
  )
}

export default page
