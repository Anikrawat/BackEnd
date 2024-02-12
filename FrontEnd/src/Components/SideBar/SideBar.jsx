import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import { useGlobalContext } from '../../Context/provider'

const SideBar = () => {

  const {userName,isLogin} = useGlobalContext()
  const [fillStar,setFillStar] = useState({
    "firstStar":false,
    "secondStar":false
  });

  return (
    <>
        <div className='w-[20vw] h-[94vh] flex flex-col gap-3 items-end border-r-2 border-slate-100 mobileSideBar '>
            <div className=' w-[80%] mt-[4vh] flex flex-col justify-center text-lg gap-2'>
            <Link to = "/"><li className='list-none rounded flex items-center w-[95%] h-[6vh] hover:bg-slate-100 hover:text-Signin sideBarMenuItems'><i className="fa-solid fa-house ml-[15px]"></i><span className='ml-[15px] mobileSideBarItems'>Overview</span></li></Link> 
            {
              isLogin && <><Link to = '/recent'><li className='list-none rounded flex items-center w-[95%] h-[6vh] hover:bg-slate-100 hover:text-Signin sideBarMenuItems'><i className="fa-solid fa-clock ml-[15px]"></i><span className='ml-[15px] mobileSideBarItems'>Recent</span></li></Link> 
            <Link to = '/starred'><li className='list-none rounded flex items-center w-[95%] h-[6vh] hover:bg-slate-100 hover:text-Signin sideBarMenuItems'><i className="fa-solid fa-star ml-[15px]"></i><span className='ml-[15px] mobileSideBarItems'>Starred</span></li></Link>
            <Link to = '/task'><li className='list-none rounded flex items-center w-[95%] h-[6vh] hover:bg-slate-100 hover:text-Signin sideBarMenuItems'><i className="fa-solid fa-file ml-[19px]"></i><span className='ml-[15px] mobileSideBarItems'>Task</span></li></Link>
            </>
            }
            
            </div>
            {
              isLogin && <>
              <div className=' w-[80%] mt-[2.5vh] flex flex-col justify-center'>
                <li className='list-none rounded grid grid-cols-2 w-[90%] h-[3vh] mobileSideBarItems'><span className='ml-[15px] text-[0.800rem] font-bold text-gray-400'>SPACES</span><i className="cursor-pointer justify-self-end fa-solid fa-plus"></i></li>
                <li className='mt-2 list-none rounded grid grid-cols-7 content-center w-[95%] h-[6vh] hover:bg-slate-100 hover:text-Signin text-lg'><Link to = '/teamtasks' className='col-span-6 hover:text-Signin'><div className=''><i className="fa-solid fa-circle ml-[15px] "></i><span className='ml-[15px] mobileSideBarItems'>{userName}</span></div></Link><div className='justify-self-end mobileSideBarItems z-[1] cursor-pointer' onClick={() => {setFillStar({firstStar:!fillStar.firstStar,secondStar:fillStar.secondStar})}}><i className={`fa-${fillStar.firstStar?'solid':'regular'} fa-star mr-[0.7vw] ${fillStar.firstStar?'style="color: #FFD43B;':''}`}></i></div></li>
                <li className='list-none rounded grid grid-cols-7 content-center w-[95%] h-[6vh] hover:bg-slate-100 hover:text-Signin text-lg'><Link to = '/teamtasks' className='col-span-6 hover:text-Signin'><div className=''><i className="fa-solid fa-circle ml-[15px] "></i><span className='ml-[15px] mobileSideBarItems'>Team</span></div></Link><div className='justify-self-end mobileSideBarItems z-[1] cursor-pointer' onClick={() => {setFillStar({firstStar:fillStar.firstStar,secondStar:!fillStar.secondStar})}}><i className={`fa-${fillStar.secondStar?'solid':'regular'} fa-star mr-[0.7vw] ${fillStar.secondStar?'style="color: #FFD43B;':''}`}></i></div></li>
              </div>
            </>
            }
        </div>
        
    </>
  )
}

export default SideBar