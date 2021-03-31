import React from 'react';

import '../styles/LoaderButton.scss';

type LoaderButtonProps={
    click:any,
}

const countOfCharactersToLoad:number = 5;

const LoaderButton = ({click}:LoaderButtonProps) =>{

    const handleOnClick = ()=>{
        click(countOfCharactersToLoad);
    }

    return <button className="loader" onClick={handleOnClick}>Load next {countOfCharactersToLoad} characters</button>
}

export default LoaderButton;