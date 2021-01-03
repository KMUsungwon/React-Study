import React, {useState} from 'react';
import '../css/writeDesign.css'

export function WriteFeed(props) {
    const [owner, setOwner] = useState("");
    const [contents, setContents] = useState("");

    const ownerFunc = (e) => {
        setOwner(e.target.value);
        console.log(owner);
    };
    const contentFunc = (e) => {
        setContents(e.target.value);
        console.log(contents);
    };

    const postFeed = async () => {
        await fetch("http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/", {
            method: 'POST',
            body: JSON.stringify({
                owner: owner,
                content: contents
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return <>
        <input type="text" id="writer" placeholder="글쓴이" onChange={ownerFunc} className='owner'/>
        <textarea name="" id="contents" cols="30" rows="10" placeholder="내용" onChange={contentFunc} className='content'></textarea>
        <input value='POST' onClick={postFeed} className='button'/>
    </>
}