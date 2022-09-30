import React, { useEffect, useState } from "react";
import TreeNode from "../components/TreeNode";

const Comments = () => {
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("https://www.mocky.io/v2/5dc596503200008200769be8")
      .then((response) => response.json())
      .then((resData) => {
        setLoading(false);
        setCommentData(resData);
      })
      .catch((err)=>{
          alert('Something went wrong')
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading
        ? "Loading..."
        : commentData.map((comment) => {
            return <TreeNode key={comment._id} comment={comment} />;
          })}
    </div>
  );
};

export default Comments;
