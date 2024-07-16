import Link from "next/link";
import clasess from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealDetailPage() {
  return (
    <>
      <header className={clasess.header}>
        <h1>
          Delicios Meal, created{" "}
          <span className={clasess.highlight}>by NextLevel Foods</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={clasess.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={clasess.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
