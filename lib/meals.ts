import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export const getAllMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Something went wrong");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = async (slug: any) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const imageStream = fs.createWriteStream(`public/images/${filename}`);
  const imageBuffer = await meal.image.arrayBuffer();
  imageStream.write(Buffer.from(imageBuffer), (err) => {
    if (err) throw new Error("Image saving failed");
  });

  meal.image = `/images/${filename}`;

  db.prepare(
    `INSERT INTO meals (title, summary, image, instructions, creator, creator_email, slug) VALUES (@title, @summary, @image, @instructions, @creator, @creator_email, @slug)`
  ).run(meal);
};
