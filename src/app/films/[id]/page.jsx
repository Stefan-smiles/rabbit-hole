"use client"
import { useParams } from "next/navigation";


export default function SingleFilm({useParams}) {
  const params = useParams;
  console.log("This is my params log:",params)
  return (<>
  <h1>My single page</h1>
  
  </>)
}