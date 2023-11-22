import React from "react";
import MessageHeader from "../messageHeader/MessageHeader";
import CommentFeed from "../commentFeed/CommentFeed";


const Post = ({ post }) => {
  // generating image path
  // **** NOTICE: change to different url when app deployed ****
  let imageSource = `http://localhost:8080/uploads/${post.image_path}`;
  // console.log("POST COMPONENT:", post._id)

  return (
    <article data-cy="post" key={post._id}>
      <MessageHeader user_id={post.user_id}/>
      {post.message}
      The post id is {post.user_id}
      <br />
      {/* if image exists display it */}
      {post.image_path && (
        <img
          src={imageSource}
          alt={imageSource}
          width={"700px"}
          data-cy="post-image"
        />
      )}
      <br />
      <article data-cy="comment">
        <CommentFeed post_id={post._id} />
      </article>
      {/* line added for visibility, remove later when working on CSS */}
      <hr />
    </article>
  );
};

export default Post;
