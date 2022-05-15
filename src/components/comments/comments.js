/** @format */

import React, { useEffect, useState } from "react";
import "./_comments.scss";
import Comment from "../comment/comment";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getVideoCommentsById,
} from "../../redux/actions/comments.action";
const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    dispatch(addComment(videoId, text));
    setText("");
  };

  useEffect(() => {
    dispatch(getVideoCommentsById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="https://www.seekpng.com/png/full/920-9209963_hand-painted-original-cute-avatar-png-and-psd.png"
          alt="asdf"
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="border-0 p-3">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {_comments?.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
