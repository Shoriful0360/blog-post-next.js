
'use client'
import axios from "axios";
import { useEffect, useState } from "react";



export default function BlogPage({params}) {
    const [blog,setBlog]=useState()
    const {id}=params;
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>setBlog(res.data))

    },[id])
    console.log(blog)
    return (
    <div className="flex justify-center">
         <div className="card  bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    );
}

