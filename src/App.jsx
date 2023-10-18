import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import CreateUser from './pages/CreateUser'
import UserGrid from './pages/UserGrid'
import EditUser from './pages/EditUser'
import { useDispatch, useSelector } from 'react-redux'
import { localMemory } from './redux/features/UsersSlice'

const App = () => {
  const dispatch=useDispatch()
  const users=useSelector((store) =>store.usersInfo)
  useEffect(()=>{
    dispatch(localMemory())
  },[localMemory,dispatch,users])
  const routes=createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout/>,
      children:[
        {
          index:true,
          element:<UserGrid/>
        },
        {
          path:'createUser',
          element:<CreateUser/>
        },
        {
          path:'editUser/:newid',
          element:<EditUser/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App