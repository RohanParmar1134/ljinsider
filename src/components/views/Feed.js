import React, { useState, useEffect } from 'react'
import "../css/Feed.css"
import Post from './Post'
import firestore from "../../database/firebase"
import {auth} from "../../database/firebase"
import {useAuthState} from 'react-firebase-hooks/auth';
// import TweetBox from "./TweetBox.js"


function Feed() {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    {/*}
    const[posts,setPosts]=useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot=>(
         setPosts(snapshot.docs.map(doc=>doc.data()))   
        ))
    },[])*/}
    const getItems = async () => {
        const itemsRef = await firestore.collection("confess").get();
        const itemsData = itemsRef.docs.map((doc) => [doc.data(), doc.id]);
        console.log(itemsData);
        setItems(itemsData);
    };

    useEffect(() => {
        getItems();
    }, []);


    return (
        <div className="feed">
            {/*header */}
            <div className="feed__header">
                <h2>LJ Insider's</h2>
            </div>


            {/*tweetbox */}
            {/* <h2>this is tweetbox</h2> */}
            {/* <TweetBox /> */}


            {/*post */}

            {items.map((tweet, index) => (
                <Post
                    key={tweet[1]}
                    displayName={tweet[0].name}
                    verified={true}
                    text={tweet[0].desc}
                    timestamp={tweet[0].date}
                    avatar={tweet[0].img}
                // onDelete={() => handleDelete(tweet[1])}
                />
            ))}
            {/* <Post 
         displayName="fenil faldu"
         username="fenil_faldu"
         verified={true}
         text="too it working"
         avatar=""
         image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
         
         />         */}
        </div>
    )
}

export default Feed