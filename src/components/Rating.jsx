import { StarIcon } from "@heroicons/react/16/solid"
import './rating.scss'

export function Rating({ rating }) {
  const totalStars = 5
  const redStars = Math.round(rating)
  const greyStars = totalStars - redStars

  return (
    <div className="rating">
      {[...Array(redStars)].map((_, index) => (
        <StarIcon key={index} className="star star-red"/>
      ))}
      {[...Array(greyStars)].map((_, index) => (
        <StarIcon key={index} className="star star-grey"/>
      ))}
    </div>
  )
}
