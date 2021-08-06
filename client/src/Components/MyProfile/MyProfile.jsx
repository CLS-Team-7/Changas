import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function MyProfile() {
    const { user, isAuthenticated } = useAuth0();
    console.log(user)
    return (
        isAuthenticated && (
            <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
  <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
    <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" class="bg w-full h-full object-cover object-center absolute z-0" />
    <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
      <img src={user.picture} class="h-24 w-24 object-cover rounded-full" alt='User'/>
      <h1 class="text-2xl font-semibold">{user.name}</h1>
      <h4 class="text-sm font-semibold">Joined Since '19</h4>
    </div>
  </div>
  <div class="grid grid-cols-12 bg-white ">

    <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

      <div class="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Basic Information</div>

      

    </div>

    <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
      <div class="px-4 pt-4">
        <form action="#" class="flex flex-col space-y-8">

          <div>
            <h3 class="text-2xl font-semibold">Basic Information</h3>
            <hr />
          </div>

          <div class="form-item">
            <label class="text-xl ">Full Name</label>
            <input type="text" value={user.name} class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled />
          </div>

          <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

            <div class="form-item w-full">
              <label class="text-xl ">Username</label>
              <input type="text" value={user.nickname} class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
            </div>

            <div class="form-item w-full">
              <label class="text-xl ">Email</label>
              <input type="text" value={user.email} class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-semibold ">More About Me</h3>
            <hr />
          </div>

          <div class="form-item w-full">
            <label class="text-xl text-align-left">Biography</label>
            <textarea cols="30" rows="10" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea>
          </div>

          <div>
            <h3 class="text-2xl font-semibold">Posts</h3>
            <hr />
          </div>
        </form>
      </div>
    </div>


  </div>
</div>
        
        )
    )
}

export default MyProfile
