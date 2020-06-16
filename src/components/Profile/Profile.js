import React from "react";
import classes from "./Profile.module.css";
import Post from "./Post";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://begaem.com/wp-content/uploads/2016/09/14380181_1256094541099356_2572855944509945348_o.jpg'/>
            </div>
            <div>
                <div><textarea placeholder='Enter your text'></textarea></div>
                <div><button>Добавить</button></div>
            </div>
            <div>
                My posts
                <div>
                    <Post message="Hello!" likeCount="10"/>
                    <Post message="my young friend" likeCount="8"/>
                    <Post message="&#128156;" likeCount="57"/>
                </div>
            </div>
        </div>
    )
};

export default Profile;