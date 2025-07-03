import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPostsByidQuery } from '../app/posts/postapi';

const PostDetails = () => {

    const {id} = useParams();
    console.log(id)


    const {data, isLoading} = useGetPostsByidQuery(id);
    console.log("data by id:", data)

  return (
    <div className='w-[300px] h-auto px-4 py-4 bg-red-200  rounded-xl mx-auto my-106'>
        <h2>{data?.title}</h2>
        <p>{data?.body}</p>
        <p>{data?.userId}</p>
    </div>
  )
}

export default PostDetails