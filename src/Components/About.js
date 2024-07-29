import React from 'react'
import AboutImg from '../assets/aboutImg1.png'

export const About = () => {
  return (
    <section className='about bg-slate-600 text-white  flex flex-col md:flex-row px-5'>
        <div className="ImgDiv md:w-1/2 justify-center py-5">
            <img className='introImg justify-center' src={AboutImg} alt='mern logo'/>
        </div>

        <div className = "contentDiv md:w-1/2 flex justify-center p-5">
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-4 mb-5 w-[160px]'>About Me</h1>
            <p>Aspiring MERN stack developer seeking an entry-level position to apply my knowledge of MongoDB, Express.js, React.js, and Node.js in a dynamic development team.
            <br/>
            Aiming to leverage my academic background in computer science and hands-on project experience to deliver high-quality web applications.</p>
          </div>

        </div>
    </section>
  )
}
