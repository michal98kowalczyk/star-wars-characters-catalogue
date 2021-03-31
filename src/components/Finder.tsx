import React, {useState} from 'react';

import '../styles/Finder.scss';

const initialFindingName:string = "";

type FinderProps = {
    setNameForFiltering:any,
    setIsFiltered:any,


}   


const Finder = ({setNameForFiltering,setIsFiltered}:FinderProps) =>{

    const [name,setName] = useState(initialFindingName);

    


    const handleOnClickReset = (e:React.MouseEvent<HTMLElement>) =>{
        e.preventDefault();   
        setNameForFiltering(initialFindingName);
        setName(initialFindingName);
        setIsFiltered(false);
    }

    const handleOnClickSearch = (e:React.MouseEvent<HTMLElement>) =>{
        e.preventDefault();
        

        setNameForFiltering(name);
        setIsFiltered(true);
        
       
    }

    const handleOnChange = (e:React.FormEvent<HTMLInputElement>) =>setName(e.currentTarget.value);


    return (

        <form >
            <label htmlFor="name">
                <input id="name"  value={name} onChange={handleOnChange} type="text" placeholder="Name"/>
            </label>

            <button onClick={handleOnClickSearch}>Search</button>
            <button onClick={handleOnClickReset}>Clear</button>
        </form>
    )
}

export default Finder;