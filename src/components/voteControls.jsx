"use client";
import { useFormStatus } from "react-dom";
import { ImCool, ImCool2, ImBaffled, ImBaffled2 } from "react-icons/im";
import clsx from "clsx";
import { FaSpinner } from "react-icons/fa"


export default function VoteControls({ upvote, downvote, votes, existingVote }) {
const { pending, data, method, action } = useFormStatus();

return (
   <div>
       <button formAction={upvote}>
           {existingVote?.vote === 1 ? (
           <ImCool2 size={18}
           className={clsx("hover:text-#94a3b8", {
               "text-#f8fafc": existingVote?.vote === 1,
           })}
           />
           ) : (
               <ImCool size= {18}
               className={clsx("hover:text-#94a3b8", {
               "text-#f8fafc": existingVote?.vote === 1,
               })}
               />
       )}</button>
       <button formAction={downvote}>
           {existingVote?.vote === 1 ? (
           <ImBaffled2 size={18}
           className={clsx("hover:text-#94a3b8", {
               "text-#f8fafc": existingVote?.vote === -1,
           })}
           />
           ) : (
               <ImBaffled size= {18}
               className={clsx("hover:text-#94a3b8", {
               "text-#f8fafc": existingVote?.vote === -1,
               })}
               />
       )}</button>
   </div>
)
}
