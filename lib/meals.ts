import sql from "better-sqlite3";

const db = sql("meals.db");

export const getAllMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Something went wrong");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = async (slug: any) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get([slug]);
};
