import pg from "pg";

export const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

export const key = { connectionString: process.env.API_KEY };
