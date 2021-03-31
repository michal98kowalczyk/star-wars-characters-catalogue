import React,{useState,useEffect} from 'react';

import FilmsList from './FilmsList';

type CharactersProps = {
    name:string,
    birth_year:string,
    gender:string,
    films:string[],
    height:string,
    mass:string,


    
  }

const initialFilmsNames:Array<string> = [];  

const Character = ({name,birth_year,gender,films,height,mass}:CharactersProps) =>{

    const [filmsNames,setFilmsNames] = useState(initialFilmsNames);
    const [isActive,setIsActive] = useState(false);


    useEffect( ()=>{
   
      getFilmsNames().then(response => setFilmsNames([...response]));
    
      },[]); // eslint-disable-line react-hooks/exhaustive-deps

   

    const getFilmsNames = async() =>{

       
        let result:Array<string> = [];
        if(films){
            for(let i=0;i<films.length;i++){

                const response = await fetch(films[i]);

                if(response.status===200){
                    const json = await response.json();
                    result.push(json.title);    
                }
                

        }
        }
    
  
    return result;



    }


    const handeOnClick = ()=>{
        setIsActive(prev=>!prev);
    }



        

    const person =<> <span>Name:</span> {name}, <span>Birth year:</span> {birth_year}, <span>Gender:</span> {gender}</> ;
 
    const details = <>  <span>Height:</span>{height}, <span>Mass:</span> {mass}  <br/>
                    <span>Films:</span> 
                    <FilmsList titles={filmsNames}/>
                    </>

    return (
    <li onClick={handeOnClick}>
        {person}
        {isActive && details}
    </li>)
}

export default Character;