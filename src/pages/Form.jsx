import React from 'react'
import { useAddpostMutation } from '../app/posts/postapi'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from "yup";


export const addpostSchema = Yup.object({

  title:Yup.string().required("enter a title"),
  body:Yup.string().required("enter a body"),
})

const AddForm = () => {
    const[addPost,{isLoading, isSuccess, isError}]= useAddpostMutation();
    const { values, errors, touched, handleChange, handleSubmit, resetForm} = useFormik({  
      initialValues:{
        title:"",
        body:"",
        userId:1,

      },
      onSubmit:async(val)=>{
        try{
          const response = await addPost(val).unwrap();
          console.log("post added successfully",response);
          toast.success("post added successfully!");
          resetForm();
          

        }catch(err){
          console.log("Error while adding post",err);
          
        }
      },

      validationSchema: addpostSchema

    })
  return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto shadow-md rounded-xl bg-white">
      <h2 className="text-xl font-bold">Create a Post</h2>
      
      <div>
        <label className="block mb-1 font-medium">Title:</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={values.title}
         
          className="w-full border rounded px-3 py-2"
          
        />
        {errors.title && touched.title && (
          <h2 className='text-red-700'>{errors.title}</h2>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Body:</label>
        <textarea
          name="body"
          type="text"
          onChange={handleChange}
          value={values.body}
          className="w-full border rounded px-3 py-2 h-32"
        />

        {errors.body && touched.body && (
          <h2 className='text-red-600'>{errors.body}</h2>
        )}
        
      </div>

      <button  disabled={isLoading} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {isLoading ? "adding post": "add post"}
      </button>
      
    </form>
  )
}

export default AddForm