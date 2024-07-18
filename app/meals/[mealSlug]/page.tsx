import clasess from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal = await getMeal(params.mealSlug);
  return {
    title: meal?.title || "Meal not found",
    description: meal?.summary || "Meal not found",
  };
}

export default async function MealDetailPage({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={clasess.header}>
        <div className={clasess.image}>
          <Image src={meal.image} fill alt="image" />
        </div>
        <div className={clasess.headerText}>
          <h1>{meal.title}</h1>
          <p className={clasess.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={clasess.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={clasess.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
