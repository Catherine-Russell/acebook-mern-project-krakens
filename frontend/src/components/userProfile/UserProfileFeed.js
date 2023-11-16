import React, { useEffect, useState } from 'react';
import Post from '../post/Post'

const UserProfileFeed = ({ navigate }) => {
	const [posts, setPosts] = useState([]);
	const [token, setToken] = useState(window.localStorage.getItem("token"));

    // authentication
    useEffect(() => {
      if(token) {
        fetch("/users/profile/:user_id", {
					// fetch("/posts", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => response.json())
          .then(async data => {
            window.localStorage.setItem("token", data.token)
            setToken(window.localStorage.getItem("token"))
            setPosts(data.posts);
          })
      }
    }, [])

    // logout button
  // const logout = () => {
  //   window.localStorage.removeItem("token")
  //   navigate('/login')
  // }
  // TODO: get user_id from url req params
    

  // Users posts: filter list of posts on the basis of user_id

    if(token) {
      return(
				<>
					<h2>USER PROFILE PAGE</h2>
					<div id='user-profile-feed' role="feed">
							{posts.map(
								(post) => ( <Post post={ post } key={ post._id } /> )
							)}
					</div>
				</>
			)
		} else {
			navigate('/login')
		}
	}
  export default UserProfileFeed;
  