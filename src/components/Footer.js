"use client";
import React, { useState } from "react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
function Footer() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search logic here
  };

  return (
    <div className="footer_wap p-[80px] grid grid-cols-12">
      <div className="col-span-12 lg:col-span-5">
        <Image
          src="/images/white-logo.png"
          width={180.55}
          height={32.2}
          alt=""
        />
        <div className="text-white text-5xl font-medium">
          <p className="py-7 leading-16">
            You are building India's future, we would like to fuel yours
          </p>
          <span className="text-[16px] font-medium">
            Our weekly expert newsletter on stories that matter to your money.
          </span>
          <div className="relative mt-3.5">
            <InputText
              value={searchTerm}
              className="custom_InputText w-full lg:w-[400px]"
              onChange={handleSearch}
              placeholder="Search..."
            />
            <button className="bg-[#2C2C2C] text-white text-base font-semibold rounded-[50px] py-4 px-8 relative lg:-left-[135px] cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-7">
        <div className="flex justify-end gap-3.5">
          <Link href="/">
            <Image
              src="/images/insta.png"
              width={32}
              height={32}
              alt="insta"
            />
          </Link>
          <Link href="/">
            <Image src="/images/fb.png" width={32} height={32} alt="insta" />
          </Link>
          <Link href="/">
            <Image
              src="/images/linke.png"
              width={32}
              height={32}
              alt="insta"
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/twiter.png"
              width={32}
              height={32}
              alt="insta"
            />
          </Link>
        </div>
        <div className='pt-10 grid grid-cols-10'>
          {/*col*/}
          <div className="col-span-10 lg:col-span-4">
            <div className="text-[#BDBDBD] text-base font-semibold leading-normal pb-5"><p>Knowledge Repository</p></div>
            <ul className="text-white text-base font-semibold flex flex-col gap-3">
              <li><Link href=''>Bonds</Link></li>
              <li><Link href=''>IPA</Link></li>
              <li><Link href=''>Mutual Funds</Link></li>
              <li><Link href=''>Portfolio Management Services</Link></li>
              <li><Link href=''>Wealth Monitor</Link></li>
            </ul>
          </div>
          {/*col*/}
          <div className="col-span-10 lg:col-span-3">
            <div className="text-[#BDBDBD] text-base font-semibold leading-normal pb-5"><p>About</p></div>
            <ul className="text-white text-base font-semibold flex flex-col gap-3">
              <li><Link href=''>Team</Link></li>
              <li><Link href=''>Careers</Link></li>
              <li><Link href=''>FAQs</Link></li>
              <li><Link href=''>Blog</Link></li>
              <li><Link href=''>Investment</Link></li>
            </ul>
          </div>
          {/*col*/}
          <div className="col-span-10 lg:col-span-3">
            <div className="text-[#BDBDBD] text-base font-semibold leading-normal pb-5"><p>Legal</p></div>
            <ul className="text-white text-base font-semibold flex flex-col gap-3">
              <li><Link href=''>Contact</Link></li>
              <li><Link href=''>Disclaimer</Link></li>
              <li><Link href=''>ODR Portal</Link></li>
              <li><Link href=''>Privacy</Link></li>
              <li><Link href=''>Returns & cancellation</Link></li>
              <li><Link href=''>Security</Link></li>
              <li><Link href=''>Terms & Disclosure</Link></li>
              <li><Link href=''>KYC Check</Link></li>
              <li><Link href=''>Scheme documents</Link></li>
              <li><Link href=''>Fraud Notice</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
