import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/dist/types/server";
import { revalidatePath } from "next/cache";
import { VoteControls } from "./voteControls.jsx"


async  function getExistingVote(userId, reviewId) {
   const { userId } = await auth()
   const {rows: existingVotes} = await db.query(
       "SELECT * FROM  likes WHERE user_id =$1 And post_id = $2 LIMIT 1",
       [userId, reviewId]
   );


   return existingVotes?.[0];
}


async function handleVote(userId, reviewId, newVote) {
  if(!userId) {
    throw error("Can't like without signing in");
  }

  const existingVote =  await getExistingVote( userId, reviewId );

  if (existingVote) {
    if (existingVote.likes === newVote) {
        await db.query ("DELETE FROM likes WHERE id = $1", [existingVote.id]);
    } else {
        await db.query("UPDATE likes SET vote = $1 WHERE id = $2", [ newVote, existingVote.id ]);
    }
  } else {
    db.query(
        "INSERT INTO likes (user_id, review_id, vote, vote_type) VALUES ($1, $2, $3, 'review')",
        [userId, reviewId, newVote,]);
  }
  revalidatePath('/film/${film_id}')
}

export async function Vote({reviewId, votes}){
  const session = await auth();
  const existingVote= await getExistingVote(session?.user?.id, reviewId)

  async function upvote() {
    "use server";
    await handleVote(session?.user?.id, reviewId, 1);
  }

  async function downvote() {
    "use server";
    await handleVote(session?.user?.id, reviewId, -1);
  }
  
  return(
    <div>
      <form  className="flex items-center  space-x-3 pl-3">
        <VoteControls
          upvote={upvote}
          downvote={downvote}
          votes={votes}
          existingVote={existingVote}/>
      </form>
    </div>
  )
}