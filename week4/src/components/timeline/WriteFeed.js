import React, {useState} from 'react';
import '../css/writeDesign.css'

export function WriteFeed(props) {
    const [owner, setOwner] = useState("");
    const [contents, setContents] = useState("");

    const ownerFunc = (e) => {
        setOwner(e.target.value);
    };
    const contentFunc = (e) => {
        setContents(e.target.value);
    };

    const postFeed = async () => {
        await fetch("https://react-js-sample-api.kmuwink.net/feed/", {
            method: 'POST',
            body: JSON.stringify({
                owner: owner,
                content: contents
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Token ' + localStorage.getItem("token"),
            }
        });
    };

    return <>
        <input type="text" id="writer" placeholder="글쓴이" onChange={ownerFunc} className='owner'/>
        <textarea name="" id="contents" cols="30" rows="10" placeholder="내용" onChange={contentFunc} className='content'></textarea>
        <input value='POST' onClick={postFeed} className='button'/>
    </>
}
