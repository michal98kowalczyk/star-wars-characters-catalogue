import React, {useState} from 'react';


import Character from './Character';
import Finder from './Finder';

import '../styles/CharactersList.scss';


type CharactersListProps = {
    people: any[]
    
  }



const CharactersList = ({people}:CharactersListProps) =>{

    const [isFiltered,setIsFiltered] = useState(false);
    const [nameForFiltering,setNameForFiltering] = useState("");
    
    const filterByName = ():Array<any> =>{
        
        return people.filter(person =>person.name.toLowerCase()
                                    .match(nameForFiltering.toLowerCase()))
    }

    let list = isFiltered ? filterByName() : people;

     list = list.map((person,index) => (
        <Character 
        key={index} 
        name={person.name}
        birth_year={person.birth_year}
        gender={person.gender}
        films={person.films}    
        height={person.height}
        mass={person.mass}
        />
        
        ))

    return (
        <>
        <Finder setNameForFiltering={setNameForFiltering} setIsFiltered={setIsFiltered}/>
        <main>
        <h2>Characters: </h2>
        <ul> 
        {list}
        </ul>
        </main>
        </>)
}

export default CharactersList;