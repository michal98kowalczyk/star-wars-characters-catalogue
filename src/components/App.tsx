import React, {useState,useEffect} from 'react';

import CharacterList from './CharactersList';
import Footer from './Footer';
import Header from './Header';
import LoaderButton from './LoaderButton';


import '../styles/App.scss';


const baseUrl:string = 'https://swapi.dev/api/';

const startedCharactersCount:number = 10;


const initialArray:Array<any> = [];
let sizeOfPeopleArray=0; //need to fetch correct person using scroll position

function App() {

  const [people,setPeople] = useState(initialArray);
  

  useEffect( ()=>{
    window.addEventListener('scroll', handleScroll)
    getPeople(startedCharactersCount).then(response => setPeople(prev => {
      sizeOfPeopleArray += response.length;
      return [...prev,...response]
      
    }));

    return () => window.removeEventListener('scroll', handleScroll)
  },[]); // eslint-disable-line react-hooks/exhaustive-deps



  const prepareUrls = (startIndex:number,offset:number):Array<string> =>{

    const urls:Array<string> = [];

    for(let i=startIndex;i<startIndex+offset;i++){
      urls.push(`${baseUrl}people/${i+1}/`)


    }


    return urls;
  }


  const getPeople = async (count:number)=>{
   
    const urls:Array<string> = prepareUrls(sizeOfPeopleArray,count);
    let result:Array<any> = [];
    for(let i=0;i<urls.length;i++){

      const response = await fetch(urls[i]);
      if(response.status ===200){
        const json = await response.json();
      
        result.push(json);

      }
      

    }
    
  
    return result;
  }

  const addPeople = (count:number) =>{
    getPeople(count).then(response => setPeople(prev => {
      sizeOfPeopleArray += response.length;
      return [...prev,...response]
    }
      ));

  }

  const handleScroll = (event:Event) =>{
     
    const currentPosition =
      document.documentElement.scrollTop || document.body.scrollTop
    
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight


     

    if(currentPosition+1 >= height)addPeople(5);

      
  
  
  }


  return (
    <div className="App">

    <Header/>
    <LoaderButton click={addPeople}/>
   
    <CharacterList people={people}/>
    <Footer/>
      
    </div>
  );
}

export default App;
