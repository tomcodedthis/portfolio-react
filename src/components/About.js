import React from 'react';
import AvatarImg from '../images/avatar-560.png'
import LogoCont from './Logos';

function About() {
    return (
        <div className='flex flex-col items-center py-24 px-6 md:px-16 max-w-8xl mx-auto gap-8 lg:gap-14 duration-500'>
            <div className='flex items-center justify-center gap-8'>
                <Avatar src={AvatarImg} alt='Avatar'/>
                <AboutText />
            </div>
            <LogoCont />
        </div>
    )
}

function Avatar(props) {
    return (
        <img src={props.src} 
        alt={props.alt}
        className='max-w-[40%] md:max-w-xs lg:max-w-sm duration-500'
        />
    )
}

function AboutText() {
    return (
        <div className='flex flex-col gap-6 md:gap-12 xl:gap-14 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl'>
            <div><strong>Hi, i'm Tom.</strong> I develop modern, powerful and responsive websites.</div>
            <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-right'><i>"Learning never exhausts the mind."</i> – Leonardo da Vinci</div>
        </div>
    )
}

export default About