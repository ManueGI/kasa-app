import Banner from "../components/Banner"
import accommodations from '../data/mockedAccomodations.json';
import '../styles/main.scss'
import AccommodationCard from "../components/AccommodationCard";

export default function Home() {

  const accommodationsList = accommodations.map(accommodation => (
    <AccommodationCard key={accommodation.id} accommodation={accommodation} />
  ));

  return (
    <div className="container">
      <Banner />
      <div className="home-cards-container">
        {accommodationsList}
      </div>
    </div>
  )
}
