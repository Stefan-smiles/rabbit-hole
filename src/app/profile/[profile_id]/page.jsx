import { db } from "@/utils/db";

export default async function singleProfilePage({ params }) {
  const usersid = (await params).userid;
  console.log(params);
  const userresoponse = await db.query(
    `SELECT * FROM users WHERE id = ${usersid}`
  );
  const user = userresoponse.rows;
  console.log(user);

  return (
    <di>
      <h2>username:{user[0].username}</h2>
      <p>bio:{user[0].bio}</p>
      <p>favourites:{user[0].favourites}</p>
    </di>
  );
}
