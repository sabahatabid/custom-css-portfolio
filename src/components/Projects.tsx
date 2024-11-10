import React from 'react'
import Heading from './Heading'
import Cards from './Cards';
const data= [
    {
     id: 0,
     title: "Todo List.",
     desk: "A React & Typescript based app for managing and orgnizing your task efficiently.",
     img: "/to do list.png",
     tags:["React","Node","CSS","Typescript"]
},
{ 
  id: 1,
     title: "Contdown Timer.",
     desk: "A Next.js & Typescript powered website to tracktime with an interective countdown feature.",
     img: "/countdown timer.jpeg",
     tags:["Next.js","Node","CSS","Typescript"],

},
{ 
  id: 2,
     title: "Weather widget.",
     desk: "A Next.js & Typescript based tool for fetching nd displaying real-time weather data.",
     img: "/weather widget.jpg",
     tags:["Next.js","Node","CSS","Typescript"],

},
{ 
  id: 3,
     title: "Currency converter Project.",
     desk: "A simple HTML & Typescript powered tool for converting currencies with real-time ratios.",
     img: "/currency convertor.jpg",
     tags:["HTML","Node","CSS","Typescript"],

},
{ 
  id: 4,
     title: "Static interective resume.",
     desk: "A Typescript-based interective resume built with HTML and CSS,allowing users to showcase their skills dynamically.",
     img: "/resume.png",
     tags:["HTML","Node","CSS","Typescript"],

},
{ 
  id: 5,
     title: "Simple Calculator project.",
     desk: "A basic HTML CSS and Typescript calculator for performing essential arithimetic operation.",
     img: "/simple calculator.jpg",
     tags:["HTML","Node","CSS","Typescript"]

}
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My projects' />
      <div className=' grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Cards 
         key={el.id}
         title={el.title}
         desc={el.desk}
         img={el.img}
         tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
