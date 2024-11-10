import React from 'react'
import Image from 'next/image';
interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Cards: React.FC<propsType> = ({title, desc, img, tags}) => {
    return (
        <div className='border border-ascent w-full sm:w-[340px] rounded-lg overflow-hidden shadow-lg p-4 ' data-aos="zoom-in-up">
            <div className='w-full h-[200px] sm:w[250px] relative mb-4'>
                <Image
                 src={img}
                 width={350}
                 height={350}
                 alt={title}
                />
            </div>
    
            <div className='p-4 space-y-4'>
                <div className='text-4xl font-semibold'>{title}</div>
                <div>{desc}</div>
                <div>
                    {tags.map((el) => (
                        <div className='tags' key={el}>
                         {el}
                        </div>))}
                </div>
            </div>
          
        </div>
      )};
export default Cards
