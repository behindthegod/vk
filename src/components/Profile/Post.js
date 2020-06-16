import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRivPnRzGriSNHDLi52oj5b5VCag26xlSwrB_v0CkNjtdajs3zj&usqp=CAU'/>
            <div>
                {props.message}
                <div><span>&#128156; </span></div>
                {props.likeCount}
            </div>

        </div>
    )
};

export default Post;