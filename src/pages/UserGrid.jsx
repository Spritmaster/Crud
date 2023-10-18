import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/features/UsersSlice'
import { Link, NavLink } from 'react-router-dom'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
const UserGrid = () => {
    const dispatch=useDispatch()
    const usersList=useSelector((store)=>store.usersInfo.users)
  return (
    <div className='max-w-[1300px] flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 mx-auto pl-[20px]  mt-20 mb-10 p-1'>
        {usersList ?
        usersList.map((user)=>{
            const {id,name,email,phone,job,image}=user
            return(
                <div className="card card-compact  bg-base-200 shadow-xl max-w-[300px] sm:max-w-[330px]" key={id}>
                <figure><img src={image} alt="Shoes" className='h-[240px] sm:h-[300px] w-full object-cover object-top hover:scale-110'/></figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <h2 className='text-xl font-semibold'> Job : {job}</h2>
                  <Link className='flex gap-5 items-center'> <AiTwotoneMail className='w-[30px] h-[30px] text-[#45c8f8]'/> 
                  <span className='link link-hover hover:text-[#9060ff] text-xs sm:text-sm'>{email}</span></Link>
                  <Link className='flex gap-5 items-center'> <BsFillTelephoneInboundFill className='w-[24px] h-[30px] text-[#7eff3d]'/> 
                  <span className='link link-hover hover:text-[#9060ff] text-xs sm:text-xl'>{phone}</span></Link>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  <div className="card-actions flex justify-between">
                   <NavLink to={`editUser/${id}`} className={'btn btn-warning '}>EDIT</NavLink>
                    <button className="btn btn-error" onClick={()=>dispatch(remove(id))}>DELETE</button>
                  </div>
                </div>
              </div>
            )
        })
         : <h1 className='text-6xl font-bold text-[#802222]'>NO USERS</h1>}
    </div>
  )
}

export default UserGrid