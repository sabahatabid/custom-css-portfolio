import React from 'react'
import '@/app/style/heading.css';

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='heding-container'>
      <p className='heding-title'>{title}</p>
    </div>
  );
};

export default Heading;
