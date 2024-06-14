import React, { useEffect, useState } from 'react'

function useResponsiveImage(desktopImg, tabletImg, mobileImg) {
    const[currentImg, setCurrentImg]=useState(desktopImg)
    useEffect(()=>{
        const updateImg= ()=>{
            if (window.innerWidth < 640) {
                setCurrentImg(mobileImg);
              } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
                setCurrentImg(tabletImg);
              } else {
                setCurrentImg(desktopImg);
              }
        };
        updateImg();//Call updateImg function to set the initial image based on the current window size
        window.addEventListener('resize', updateImg) // add resize eventlistener
        return ()=> window.removeEventListener('resize', updateImg) // cleanup event listener
    },[desktopImg,tabletImg,mobileImg]) //rerender if any of the dependencies change
  return currentImg; //return the current appropriate img
}

export default useResponsiveImage