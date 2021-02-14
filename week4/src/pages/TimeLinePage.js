import React, {useEffect, useState} from 'react';
import {WriteFeed} from "../components/timeline/WriteFeed";
import {TimeLine} from '../components/timeline/TimeLine'

export function TimeLinePage(props) {
    const [feeds, setfeeds] = useState([]); //타임라인이 여러개 이므로 [] 선언


    useEffect(() => {
        if(localStorage.getItem("token")) {
            // GET
            const server = async () => {
                const result = await fetch("https://react-js-sample-api.kmuwink.net/feed/", {
                    method: 'get',
                    headers: {
                      Authorization : 'Token ' + localStorage.getItem("token"),
                    },
                });

                const resultJson = await result.json();
                const propsData = resultJson.map(read => {
                    return {
                        id: read.id,
                        name: read.owner,
                        content: read.content,
                        create_at: read.created_at,
                    };
                });
                setfeeds(propsData); // feeds 안에 리스트 형태의 값을 할당
                // console.log(propsData);
            };

            server();
        } else {
            alert("로그인 해주세욥 ㅋ");
        }
    });

    return <div>
        <WriteFeed/>
        <TimeLine
            feeds = {feeds}
        />
    </div>
}
