import React, { useEffect, useState } from "react";

const TreeNode = ({ comment }) => {
  const [showComments, setShowComments] = useState(false);
  const [reply, setReply] = useState("");

  const submitReply = () => {
    if (!comment.children) {
      comment.children = [];
    }
    comment.children.push({
      _id: Math.random() * 100,
      comment: reply,
    });
    setReply("");
    setShowComments(true);
  };

  const nestedComments = (comment.children || []).map((comment) => {
    return <TreeNode key={comment._id} comment={comment} />;
  });

  return (
    <div className="pl-12 py-6 mx-4 mt-6 border-md border-gray-500 border-solid">
      <div onClick={() => setShowComments((v) => !v)}>{comment.comment}</div>
      <input
        type="text"
        value={reply}
        id={comment._id}
        name={comment._id}
        className="pl-2 border border-gray-300 border-solid w-1/2 mt-4 h-6"
        onChange={(e) => setReply(e.target.value)}
      />
      <div>
      <button className='py-1 px-4 mt-2' onClick={submitReply} disabled={!reply || reply.length == 0}>
        Reply
      </button>
      </div>
      {showComments && <div>{nestedComments}</div>}
    </div>
  );
};

export default TreeNode;
