import React from 'react';
import {Feed} from './Feed'
import {Link} from "react-router-dom";

export function TimeLine(props) {
    return <div>
        {props.feeds.map((feed) =><Link to={"/detail/" +feed.id} style={styles.link_decoration}><Feed id={feed.id} name={feed.name} content={feed.content} create_at={feed.create_at}/></Link>)}
    </div>
}

const styles = {
    link_decoration: {
      textDecoration: 'none',
        color: '#000',
    },
}
