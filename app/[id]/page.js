
'use client'
import axios from "axios";
import { useEffect, useState } from "react";



export default function BlogPage({params}) {
    const {id}=params;
    const [blog,setBlog]=useState()
    const{bode,title,userId,body}=blog || {}

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>setBlog(res.data))

    },[id])
    console.log(blog)
    return (
    <div className="flex justify-center">
         <div className="card  bg-base-100 w-96 shadow-xl">
        <div className="card-body">
            <p>User Id: {userId}</p>
          <h2 className="card-title">Title: {title}</h2>
          <p>body: {body}</p>
     
        </div>
      </div>
    </div>
    );
}

