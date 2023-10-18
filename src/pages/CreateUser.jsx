import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import CreateForm from '../components/CreateForm';
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/app/store';
import { addNewUser } from '../redux/features/UsersSlice';

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const data=new Date()

  const [name,setName]=useState(null)
  const [image,setImage]=useState(null)
  const [email,setEmail]=useState(null)
  const [job,setJob]=useState(null)
  const [number,setNumber]=useState(null)



 

  const handleSubmit = (e) => {
    e.preventDefault();
    const user={
      id:data.getTime(),
      name: e.target[0].value,
      image:e.target[1].value,
      email:e.target[2].value,
      job:  e.target[3].value,
      phone:e.target[4].value,
    }
    dispatch(addNewUser(user))
    navigate('/');
   
  };

  const [bgFon,setBgFon]=useState(`url(https://img5.goodfon.ru/original/1680x1050/e/8c/gray-edge-lines-fon-seryi-liniii-fon.jpg)`)

  return (
    <div className='flex  justify-center  object-contain  h-screen'
    style={{background:bgFon}}>
        <div className='max-w-[470px]'>
        <Form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col  items-center gap-2  px-6 mt-10 object backdrop-blur-[30px] box__shadow  py-5 rounded-xl' >
          
          <CreateForm 
               labelFor={'name'}   
               labelText={'User Name'} 
               inputType={'text'} 
               inputId={'name'}
               />
          <CreateForm 
               labelFor={'image'} 
               labelText={'User Image'} 
               inputType={'url'} 
               inputId={'image'}/>
          <CreateForm 
               labelFor={'email'} 
               labelText={'User Email'} 
               inputType={'email'} 
               inputId={'email'}/>
          <CreateForm 
               labelFor={'job'}   
               labelText={'User Job'} 
               inputType={'text'} 
               inputId={'job'}/>
          <CreateForm 
               labelFor={'number'}
               labelText={'User Phone Number'} 
               inputType={'number'} 
               inputId={'number'}
          />
      
    

          <button type="submit" className='btn btn-warning self-center mt-2 text-2xl font-bold'>Add User</button>
        </Form>
        </div>

    </div>
  );
};

export default CreateUser;