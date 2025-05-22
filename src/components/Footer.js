"use client";
import React, {useState} from 'react'
import Image from 'next/image'
import { InputText } from 'primereact/inputtext';
function Footer() {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search logic here
  };

  return (
    <div className='footer_wap p-[80px] grid grid-cols-12 gap-x-36'>
        <div className='col-span-5'>
            <Image src={'/images/white-logo.png'} width={180.55} height={32.2} alt='' />
            <div className='text-white text-5xl font-medium'>
                <p>You are building India's future, we would like to fuel yours</p>
                <span className='text-[16px] font-medium'>Our weekly expert newsletter on stories that matter to your money.</span>
                <div className='relative'>
                    <InputText
          value={searchTerm}
          className='custom_InputText'
          onChange={handleSearch}
          placeholder="Search..."
        />
        <button className='bg-[#2C2C2C] text-white text-base font-semibold rounded-[50px] py-4 px-8 relative -left-[135px]'>Subscribe</button>
                </div>
            </div>
        </div>

        <div className='col-span-7'>
            aasd
        </div>
    </div>
  )
}

export default Footer