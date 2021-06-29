import React, {useEffect} from 'react';

export function Display(props) {

    useEffect(() => {

    })
    return(
        <>
            <div>
                <img src={props.image} alt=""/>
            </div>
            <div>{props.title}</div>
            <div>{props.desc}</div>
        </>
    );
}
