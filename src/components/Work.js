import React from 'react';
import MTImg from '../images/site-previews/moneytools.png'


function WorkCont() {
    return (
        <div className='flex flex-col items-center py-24 px-6 md:px-16 max-w-8xl mx-auto gap-8 lg:gap-14 duration-500'>
            <Project title='Money Tools'
            description='A web-app for tracking investments, utilising APIs and storing data in a postgreSQL database.'
            tags={['Python', 'PostgreSQL', 'APIs', 'Jinja']}
            src={MTImg}
            site={'https://toolsformoney.herokuapp.com/'}
            code={'https://github.com/tomcodedthis/toolsformoney'} />
        </div>
    )
}

function Project(props) {
    const tags = props.tags.map((name, index) => {
        return (
            <Tag name={name} index={index} key={name+index}/>
        )
    })
    return (
        <div className='flex items-center gap-8'>
            <div className='flex flex-col gap-8 text-5xl font-bold'>
                <div className='flex justify-between items-center'>
                    <div>{props.title}</div>
                    <div className='flex gap-4'>
                        <LinkBtn title={props.title} name='Site' link={props.site} />
                        <LinkBtn title={props.title} name='Code' link={props.code} />
                    </div>
                </div>
                <div className='text-3xl font-medium'>{props.description}</div>
                <div className='flex gap-4 justify-between'>
                    <div className='flex gap-4'>{tags}</div>
                </div>
            </div>

            <div>
                <img 
                className='rounded-2xl border-2 border-sky-900 max-w-md md:max-w-lg xl:max-w-xl 2xl:max-w-2xl duration-500'
                src={props.src} 
                alt={props.title}></img>
            </div>
        </div>
    )
}

function Tag(props) {
    return (
        <div className='h-fit text-base py-2 px-4 rounded-2xl bg-slate-700'>
            {props.name}
        </div>
    )
}

function LinkBtn(props) {
    return (
        <a href={props.link} key={props.title+props.name} target={'_blank'} rel='noreferrer'>
            <button className='flex items-center gap-2 py-2 px-4 text-lg rounded-lg text-black bg-slate-200'>
                {props.name}
                <i className={`fa-solid fa-${props.name === 'Site' ? 'window-maximize' : 'code'}`}></i>
            </button>
        </a>
    )
}

export default WorkCont