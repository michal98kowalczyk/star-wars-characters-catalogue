import React from 'react';

type FilmProps = {
    title:string,
   
}

const Film = ({title}:FilmProps) =>{

   

    return <li>{title}</li>
}

export default Film;