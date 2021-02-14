import React from 'react';
import {Feed} from "./Feed";

export function Comment(props) {

    return <div style={styles.feed}>
        {props.comments.map((feed) => <Feed id={feed.id} name={feed.name} content={feed.content} create_at={feed.create_at}/>)}
    </div>;
}

const styles = {
    feed: {
        boxShadow: '0 0 30px rgba(0,0,0,0.5)',
        padding: '15px',
        margin: '15px',
        zIndex: '100',
    },
};
