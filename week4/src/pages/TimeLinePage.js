import React, {useEffect, useState} from 'react';
import {WriteFeed} from "../components/timeline/WriteFeed";
import {TimeLine} from '../components/timeline/TimeLine'

export function TimeLinePage(props) {
    const [feeds, setfeeds] = useState([]); //타임라인이 여러개 이므로 [] 선언


    useEffect(() => {
        // GET
        const server = async () => {
            const result = await fetch("http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/", {
                method: 'get',
            });

            const resultJson = await result.json();
            const propsData = resultJson.map(read => {
                return {
                    name: read.owner,
                    content: read.content,
                    create_at: read.created_at,
                };
            });
            setfeeds(propsData); // feeds 안에 리스트 형태의 값을 할당
            console.log(propsData);
        };

        server();


    });

    return <div>
        <WriteFeed/>
        <TimeLine
            feeds = {feeds}
        />
    </div>
}