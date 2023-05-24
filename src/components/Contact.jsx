import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='pt-11 w-full h-screen bg-[#F6FAF5] flex justify-center items-center p-4'>
        <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#43FF48] text-[#a7b4ba]'>Contato</p>
                <p className='text-[#41444b] py-4'>// Envie uma mensagem através do formulário ou me mande um email - vitorbastos195@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nome' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mensagem'></textarea>
            <button className='text-[#516b49] border-[#516b49] border-2 hover:bg-[#43FF48] hover:border-[#43FF48] px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact