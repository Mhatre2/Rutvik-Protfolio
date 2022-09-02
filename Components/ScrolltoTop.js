import React, { useState } from "react";
import { BiUpArrow} from "react-icons/bi";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
    
    window.addEventListener("scroll", toggleVisible);

  }


  return (
    <>
      {visible && (
        <div className="relative">
     <div className=" bottom-8 right-8 fixed cursor-pointer" onClick={scrollToTop}>
         <BiUpArrow/>
         uguy
        </div>
        </div>
   
      )}
    </>
  );
}

export default ScrollToTop;