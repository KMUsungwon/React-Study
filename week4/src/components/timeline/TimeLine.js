import React from 'react';
import {Feed} from './Feed'

export function TimeLine(props) {
    return <div>
        {props.feeds.map((feed) => <Feed name={feed.name} content={feed.content} create_at={feed.create_at}/>)}
    </div>
}
