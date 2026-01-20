import React from 'react'

const page = () => {
  const boxClass = "bg-[#5E28F3]/10 border-2 border-[#7700FF] rounded-lg flex items-center justify-center text-white text-xl font-semibold backdrop-blur-sm";
  
  return (
    
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-3 min-h-[90vh] w-full max-w-7xl mx-auto p-4 md:p-6 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/image 1.png')"}}>
    <div className={`row-span-2 sm:row-span-4 ${boxClass}`}>1</div>
    <div className={`row-span-2 sm:row-span-4 sm:col-start-1 sm:row-start-5 ${boxClass}`}>2</div>
    <div className={`row-span-1 sm:row-span-2 sm:col-start-2 sm:row-start-1 ${boxClass}`}>3</div>
    <div className={`row-span-1 sm:row-span-2 sm:col-start-2 sm:row-start-3 md:col-start-3 md:row-start-1 ${boxClass}`}>4</div>
    <div className={`row-span-2 sm:row-span-4 sm:col-start-2 sm:row-start-5 md:col-start-2 md:row-start-3 ${boxClass}`}>5</div>
    <div className={`row-span-1 sm:row-span-2 sm:col-start-2 sm:row-start-9 md:row-start-7 ${boxClass}`}>6</div>
    <div className={`row-span-2 sm:row-span-4 sm:col-start-1 sm:row-start-9 md:col-start-3 md:row-start-3 ${boxClass}`}>7</div>
    <div className={`row-span-1 sm:row-span-2 sm:col-start-1 sm:row-start-13 md:col-start-3 md:row-start-7 ${boxClass}`}>8</div>
    <div className={`row-span-2 sm:row-span-4 sm:col-start-2 sm:row-start-11 md:col-start-1 md:row-start-9 lg:col-start-4 lg:row-start-1 ${boxClass}`}>9</div>
    <div className={`row-span-1 sm:row-span-2 sm:col-start-2 sm:row-start-15 md:col-start-2 md:row-start-9 lg:col-start-4 lg:row-start-5 ${boxClass}`}>10</div>
    <div className={`row-span-1 sm:row-span-2 sm:col-start-1 sm:row-start-15 md:col-start-3 md:row-start-9 lg:col-start-4 lg:row-start-7 ${boxClass}`}>11</div>
</div>
    
  )
}

export default page