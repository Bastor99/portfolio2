import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#F6FAF5]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-[#a7b4ba] font-bold inline border-b-4 border-[#43FF48]'>Projetos</p>
                <p className='text-[#41444b]  py-4'>Veja alguns dos meus projetos</p>
            </div>
                
            {/* Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item*/}
                <div style={{backgroundImage: `url(${project1})` }} 
                className='shadow-lg shadow-[#BDBBB9] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Dispositivos de Redes
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${project2})` }} 
                className='shadow-lg shadow-[#BDBBB9] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            News Show
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item*/}
                <div style={{backgroundImage: `url(${project3})` }} 
                className='shadow-lg shadow-[#BDBBB9] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            PetShow
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
                    </div>
                </div>
            </div>
  )
}

export default Work