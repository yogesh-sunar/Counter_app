import React from "react";
import { useGetPostsQuery } from "../app/posts/postapi";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const nav = useNavigate();

  const { data, isLoading, isError, isFetching } = useGetPostsQuery();
  console.log("all posts data:", data)

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error fetching posts</div>;

  return (
    <div>
      {data.map((post) => (
        <div onClick={() => nav(`post/${post.id}`)} key={post?.id}>{post?.title}</div>
      ))}
    </div>
  );
};

export default HomePage;
