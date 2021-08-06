import React from 'react'
import FaqComponent from './FaqComponent.css'

function FaqComponen() {
  return (
    <>
      <div class="container mx-auto">
      <div class="m-8 rounded overflow-hidden">
 
        <div class="group outline-none accordion-section" tabindex="1">
          <div
            class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div class="group-focus:text-white transition ease duration-500">
              Title for Tab - 1
            </div>
            <div
              class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
            >
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div
            class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500"
          >
            <p class="p-2 text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </p>
          </div>
        </div>

        <div class="group outline-none accordion-section" tabindex="2">
          <div
            class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div class="group-focus:text-white transition ease duration-500">
              Title for Tab - 2
            </div>
            <div
              class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
            >
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div
            class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500"
          >
            <p class="p-2 text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </p>
          </div>
        </div>
    
        <div class="group outline-none accordion-section" tabindex="3">
          <div
            class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative"
          >
            <div class="group-focus:text-white transition ease duration-500">
              Title for Tab - 3
            </div>
            <div
              class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
            >
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div
            class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500"
          >
            <p class="p-2 text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </p>
          </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default FaqComponen
