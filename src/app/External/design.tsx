import React from 'react';

interface IconProps {
  name: string;
}

export const Icon: React.FC<IconProps> = (props) => {
  return <i className='material-symbols-outlined'>{props.name}</i>;
  // return <i className={`material-symbols-outlined ${props.name}`} />;
};