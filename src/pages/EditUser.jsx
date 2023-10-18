import React, { useState, useEffect } from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';
import CreateForm from '../components/CreateForm';
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../redux/features/UsersSlice';

const EditUser = () => {
const  {newid}  = useParams();
const id=parseInt(newid)
const navigate = useNavigate();
const usersList = useSelector((store) => store.usersInfo.users);
const dispatch = useDispatch();

const [name, setName] = useState('');
const [image, setImage] = useState('');
const [email, setEmail] = useState('');
const [job, setJob] = useState('');
const [number, setNumber] = useState('');


useEffect(() => {
const user = usersList.find(user => user.id === id);
if (user) {
setName(user.name);
setImage(user.image);
setEmail(user.email);
setJob(user.job);
setNumber(user.phone);
}
}, [usersList, newid]);

const handleSubmit = (e) => {
e.preventDefault();

const editedUser = {
id,
name: e.target[0].value,
image:e.target[1].value,
email:e.target[2].value,
job:  e.target[3].value,
phone:e.target[4].value,
};
dispatch(editUser(editedUser));
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
               defaultValue={name}
               />
          <CreateForm 
               labelFor={'image'} 
               labelText={'User Image'} 
               inputType={'url'} 
               inputId={'image'}
               defaultValue={image}/>
              
          <CreateForm 
               labelFor={'email'} 
               labelText={'User Email'} 
               inputType={'email'} 
               inputId={'email'}
               defaultValue={email}/>
             
          <CreateForm 
               labelFor={'job'}   
               labelText={'User Job'} 
               inputType={'text'} 
               inputId={'job'}
               defaultValue={job}/>
          <CreateForm 
               labelFor={'number'}
               labelText={'User Phone Number'} 
               inputType={'text'} 
               inputId={'number'}
               defaultValue={number}
          />
      
    

          <button type="submit" className='btn btn-warning self-center mt-2 text-2xl font-bold'>Add User</button>
        </Form>
        </div>

    </div>
  );
};

export default EditUser;