import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#F6FAF5]'>
        {/* Container*/}
        <div className='max-w[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl text-[#a7b4ba] font-bold inline border-b-4 border-[#43FF48]'>Habilidades</p>
                <p className='text-[#41444b] py-4'>// Essas são as tecnologias que eu uso</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#BDBBB9] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="ícone HTML" />
                    <p className='text-[#41444b] my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#BDBBB9] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="ícone CSS" />
                    <p className='text-[#41444b] my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#BDBBB9] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="ícone JavaScript" />
                    <p className='text-[#41444b] my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#BDBBB9] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="ícone React" />
                    <p className='text-[#41444b] my-4'>React</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills