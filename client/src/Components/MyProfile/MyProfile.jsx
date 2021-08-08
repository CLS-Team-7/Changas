import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function MyProfile() {
  const { user, isAuthenticated } = useAuth0();
  console.log(user)
  return (
    isAuthenticated && (
      <div>
        <Header />
        <div className="w-full relative mt-0 shadow-2xl rounded my-24 overflow-hidden">
        <div className="top h-64 w-full bg-blue-600 overflow-hidden relative " >
          <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" className="bg w-full h-full object-cover object-center absolute z-0" />
          <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            <img src={user.picture} className="h-24 w-24 object-cover rounded-full" alt='User' />
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <h4 className="text-sm font-semibold">Miembro desde '19</h4>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-white ">

          <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

            <div className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Información Básica</div>



          </div>

          <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
            <div className="px-4 pt-4">
              <form action="#" className="flex flex-col space-y-8">

                <div>
                  <h3 className="text-2xl font-semibold">Información Básica</h3>
                  <hr />
                </div>

                <div className="form-item">
                  <label className="text-xl ">Nombre Completo</label>
                  <input type="text" value={user.name} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled />
                </div>

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                  <div className="form-item w-full">
                    <label className="text-xl ">Username</label>
                    <input type="text" value={user.nickname} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                  </div>

                  <div className="form-item w-full">
                    <label className="text-xl ">Email</label>
                    <input type="text" value={user.email} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold ">Mas De Mi</h3>
                  <hr />
                </div>

                <div className="form-item w-full">
                  <label className="text-xl text-align-left">Biografía</label>
                  <textarea cols="30" rows="10" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">Posts</h3>
                  <hr />
                </div>
              </form>
            </div>
          </div>


        </div>
      </div>
      <Footer />
      </div>

    )
  )
}

export default MyProfile
