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
        <div className='flex justify-between items-center'>
            {/*Left Side*/}
            <div className='flex items-center'>
                <Image src={'/images/logo.png'} width={179.53} height={26.45} alt='logo' />
                <div className='max-lg:w-3xs'><Menubar model={items} className='navigation' /></div>
            </div>
            {/*Left Side*/}
            {/*Right Side*/}
            <div className='flex items-center justify-between text-base font-semibold gap-2.5'>
                <button className='py-4 px-8 rounded-[50px] border-[#2C2C2C] text-[#2C2C2C] border'>Login</button>
                <button className='py-4 px-8 rounded-[50px] border-[#2C2C2C] text-white border bg-[#2C2C2C]'>Signup</button>
            </div>
            {/*Right Side*/}

        </div>
    </div>
  )
}

export default Header