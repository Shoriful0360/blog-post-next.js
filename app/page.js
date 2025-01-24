"use client"
import Image from "next/image";
import blog from './blog.jsx'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link.js";
export default function Home() {
const[blogData,setBlogData]=useState()
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
     setBlogData(res.data)
    })
  },[])
  console.log(blogData)
  return (
   <main>
    <div className="text-start space-y-2 mt-4  md:w-8/12 mx-auto">
     {
      blogData?.map((item,idx)=><li className="list-none " key={item.id}>
<Link href={''}>{idx + 1}.  <span className="text-red-400">{item.title}</span></Link>
      </li>)
     }
    </div>
   </main>
  );
}
