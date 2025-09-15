import "./accommodation-card.scss"
import { Link } from "react-router-dom";

export default function AccommodationCard({ accommodation }) {
  return (
    <Link to={`/accommodation/${accommodation.id}`} className="accommodation-card">
      {accommodation.cover && (
        <img src={accommodation.cover} alt={accommodation.title} />
      )}
      <h2>{accommodation.title}</h2>
    </Link>
  )
}
