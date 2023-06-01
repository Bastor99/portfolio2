import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#F6FAF5] px-8'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-[#a7b4ba] text-4xl font-bold inline border-b-4 border-[#43FF48]'>Sobre</p>
                </div>
                <div></div>
                </div>
                <div className='text-[#41444b] max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Olá, me chamo Vitor, se sinta a vontade para ver os meus projetos</p>
                    </div>
                    <div>
                        <p>
                        Tenho 17 anos e curso há três anos o curso de Desenvolvimento de Sistemas, estou ansioso para descobrir novas formas de trabalho e novas tecnologias.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
