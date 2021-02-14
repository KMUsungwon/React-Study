import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Comment} from "../components/timeline/Comment";

export function TimeLineDetail() {
    const { id } = useParams();

    const [userInfo, setInfo] = useState({
       author: '',
       content: '',
       createTime: '',
       id: '',
    });

    const [comment, setComment] = useState([]);

    const [rep_content, setContent] = useState(''); // 건드리다가 큰일남

    const readFeed = async (value) => {
        const response = await fetch("https://react-js-sample-api.kmuwink.net/feed/"+value, {
            method: 'GET',
            headers: {
                Authorization : 'Token ' + localStorage.getItem("token"),
            },

        });
        return await response.json();
    }

    const readComment = async (value) => {
        const response = await fetch("https://react-js-sample-api.kmuwink.net/feed/"+value+'/comment/', {
            method: 'GET',
            headers: {
                Authorization : 'Token ' + localStorage.getItem("token"),
            },

        });

        const resultJson = await response.json();
        const readData = resultJson.map(read=> {
            return {
                id: read.id,
                name: read.owner,
                content: read.content,
                create_at: read.created_at,
            };
        });

        setComment(readData);
        // console.log(comment);
    }

    // 건드리다가 이상해질 것 같아서 못했읍니다 ㅎ
    const createComment = async (value) => {
        await fetch("https://react-js-sample-api.kmuwink.net/feed/"+value+"/comment/", {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                Authorization : 'Token ' + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                content: rep_content,
            }),

        });
    }

    useEffect(() => {
        if(localStorage.getItem("token")) {
            const server = async () => {
                const getFeed = await readFeed(id);
                const getComment = await readComment(id);

                setInfo({
                    author: getFeed.owner,
                    content: getFeed.content,
                    id: getFeed.id,
                    createTime: getFeed.created_at,
                });


                console.log(getFeed);
                console.log(comment);
            }
            server();
        } else {
            alert("error");
        }
    }, [])

    return (
        <>
            <div>
                <div>작성자 : {userInfo.author}</div>
                <div>id : {userInfo.id}</div>
                <div>작성날짜 : {userInfo.createTime}</div>
                <div>내용 : {userInfo.content}</div>
            </div>

            <Comment comments={comment}/>


            {/*<div style={styles.create_comment_box}>*/}
            {/*    <span>댓글작성하기</span>*/}
            {/*    <input type="button" value="댓글쓰기" onClick={createComment(id)}/>*/}
            {/*    <div>*/}
            {/*        <textarea cols={30} rows={10} onChange={event => setContent(event.target.value)}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}

const styles = {
    comment_container: {
        border: '1px solid black',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
    },
    create_comment_box: {
      textAlign: 'center',
        marginTop: 20,
    },
}
