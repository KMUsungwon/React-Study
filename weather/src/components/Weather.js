import React, {useEffect} from 'react';

export function Weather(props) {
    useEffect(() => {

    })
    return(
        <>
            <span>{props.postCity}의 날씨 : {props.weather}</span>
            <img src={props.image}/>
        </>
    );
}
