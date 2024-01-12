"use client";

import { ArrowUpCircleFill } from 'react-bootstrap-icons'
import { useEffect, useState } from "react";

export default function ReturnTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setShowButton(true);
      else setShowButton(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {showButton && (
        <div className='bg-white p-2 m-2 rounded-full'>
          <ArrowUpCircleFill className='cursor-pointer text-gray-600' onClick={scrollToTop} size={40}/>
        </div>
      )}
    </>
  );
}
