import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Menubar } from 'primereact/menubar';

function Header() {
    const items = [
        {
            label: 'for Bankers',
        },
        {
            label: 'for Corporates',
        },
        {
            label: 'Services',
        },
    ];
  return (
    <div className='bg-white py-3 px-8'>
        <div className='flex justify-between items-center flex-wrap max-lg:gap-y-2.5'>
            {/*Left Side*/}
            <div className='flex items-center max-lg:justify-between max-lg:grow'>
                <Image src={'/images/logo.png'} width={179.53} height={26.45} alt='logo' />
                <div className='max-lg:w-3xs w-full'><Menubar model={items} className='navigation justify-end' /></div>
            </div>
            {/*Left Side*/}
            {/*Right Side*/}
            <div className='grid grid-cols-2 max-lg:grow lg:flex items-center justify-between text-base font-semibold gap-2.5'>
                <button className='py-4 px-8 rounded-[50px] border-[#2C2C2C] text-[#2C2C2C] border w-full'>Login</button>
                <button className='py-4 px-8 rounded-[50px] border-[#2C2C2C] text-white border bg-[#2C2C2C] w-full'>Signup</button>
            </div>
            {/*Right Side*/}

        </div>
    </div>
  )
}

export default Header