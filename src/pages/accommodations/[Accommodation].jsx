import { useParams, useNavigate } from 'react-router-dom'
import accommodations from '../../data/mockedAccomodations.json';
import Carousel from '../../components/Carousel'
import DropDown from '../../components/DropDown';
import { useState, useEffect } from 'react';
import { Rating } from '../../components/Rating';

export default function Accommodation() {
  const { id } = useParams();

  const navigate = useNavigate();
  const accommodation = accommodations.find(item => item.id === id);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const toggleDescriptionDropdown = () => setIsDescriptionOpen(!isDescriptionOpen);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const toggleEquipmentDropdown = () => setIsEquipmentOpen(!isEquipmentOpen);

  useEffect(() => {
    if (!accommodation) {
      navigate('/not-found');
    }
  }, [accommodation, navigate]);

  if (!accommodation) return null; 

  return (
    <div className='container'>
      <Carousel pictures={accommodation.pictures} title={accommodation.title} />

      <div className="accommodation-main-info">
        <div className="accommodation-main-left">
          <h1 className="accommodation-title">{accommodation.title}</h1>
          <div className="accommodation-location">{accommodation.location}</div>
          <div className="accommodation-tags">
            {accommodation.tags.map(tag => (
              <span className="accommodation-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="accommodation-main-right">
          <div className="host-info">
            <span className="host-name">
              {accommodation.host.name.replace(' ', '\n')}
            </span>
            <img className="host-avatar" src={accommodation.host.picture} alt={accommodation.host.name} />
          </div>
          <Rating rating={accommodation.rating} />
        </div>
      </div>

      <div className="accommodation-dropdowns">
        <DropDown
          title="Description"
          content={accommodation.description}
          onToggle={toggleDescriptionDropdown}
          isOpen={isDescriptionOpen}
          titleSize="18px"
        />
        <DropDown
          title="Équipements"
          onToggle={toggleEquipmentDropdown}
          isOpen={isEquipmentOpen}
          titleSize="18px"
          content={
            <ul>
              {accommodation.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}
