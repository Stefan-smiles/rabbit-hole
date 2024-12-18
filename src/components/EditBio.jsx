import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { useState } from "react";

export async function EditBio (){
    const [isEditing, setIsEditing] = useState(false);
    const [bio, setBio] = useState("");
    const {userId} = await auth()

    const handleEdit = async () => {
      await db.query(`UPDATE users SET bio =$1 WHERE clerk_id = $2, [setBio, id]`);
      setIsEditing (false)
    }
    

  }

return(
  <div>
    {isEditing ?(
      <div>
        <textarea value = {bio} onChange = {(e)=>setBio(e.target.value)} />
    <button onClick={handleEdit}>
      save
    </button>
    <button onClick={()=>setIsEditing(false)}>
      cancel
    </button>
    </div>
    ):(
      <button onClick={()=>setIsEditing(true)}>
        Edit Bio
      </button>)}
  </div>
)

  //TODO get clerk
  //TODO get user where it matches clerk
  //TODO get bio
  //TODO change bio
  //TODO post bio
