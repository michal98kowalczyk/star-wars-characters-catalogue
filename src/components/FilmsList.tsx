import React from 'react';
import Film from './Film';


type FilmsListProps = {
    titles: string[]
    
  }


const FilmsList = ({titles}:FilmsListProps) =>{


 

    const list = titles.map((title,index) => (
        <Film
         key={index}
         title={title}
        />)
        );

    return (<ol> 
        {list}
        </ol>)
}

export default FilmsList;