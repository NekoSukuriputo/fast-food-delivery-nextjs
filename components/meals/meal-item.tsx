import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';


/**
 * Renders a meal item component.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.title - The title of the meal.
 * @param {string} props.slug - The slug of the meal.
 * @param {string} props.image - The URL of the meal image.
 * @param {string} props.summary - The summary of the meal.
 * @param {string} props.creator - The creator of the meal.
 * @returns {JSX.Element} The rendered meal item component.
 */
export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}): JSX.Element {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
