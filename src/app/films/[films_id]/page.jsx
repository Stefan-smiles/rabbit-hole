
"use client"
import { useParams } from "next/navigation";

export default async function SingleFilmsPage() {
const params = useParams()

  console.log("This is my params log:", params);
  return (<>
    <h2>This im my single film Page</h2>;
    
  </>)
}
