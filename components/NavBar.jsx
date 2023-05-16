import React from 'react'
import '@/styles/styles.module.css';

function NavBar ()  {
    return (
    <nav>
        <div class="mx-auto  px-2 sm:px-6 lg:px-8 bg-backgroud relative flex h-16 items-center justify-between">
            <div class="flex flex-wrap  gap-1">
                <h1 class="text-3xl left-96">resimex</h1>
                <p className='navs'>emoji</p>
            </div>
            <div class="flex space-x-4 text-base">
                <a href="#" class="text-#000  text-sm font-medium">Home</a>
                <a href="#" class="text-#000  text-sm font-medium">Testimonies</a>
                <a href="#" class="text-#000  text-sm font-medium">Contact</a>
            </div>
            <button class="bg-blue w-40 h-11 rounded-xl text-white"> Get Startet</button>
        </div>
        <div></div>
      </nav>
    )
  }
  
  export default NavBar