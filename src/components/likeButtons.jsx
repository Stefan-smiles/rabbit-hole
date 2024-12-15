import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/dist/types/server";
import { revalidatePath } from "next/cache";
import { VoteControls } from "./voteControls.jsx"


async  function getExistingVote(userId, reviewId) {
   const { userId } = await auth()
   const {rows: existingVotes} = await db.query(
       "SELECT * FROM  votes WHERE user_id =$1 And post_id = $2 LIMIT 1",
       [userId, reviewId]
   );


   return existingVotes?.[0];
}


async function handleVote(userId, postId, newVote) {
  
}
