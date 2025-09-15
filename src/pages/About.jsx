import { useState } from 'react'
import DropDown from '../components/DropDown'
import aboutContent from '../data/aboutContent.json'
import '../styles/main.scss'
import aProposImg from '../assets/aProposImg.png'

export default function About() {

  const [openStates, setOpenStates] = useState(Array(aboutContent.length).fill(false))

  const handleToggle = index => {
    setOpenStates(states =>
      states.map((open, i) => (i === index ? !open : open))
    )
  }

  return (
    <div className="container">
      <img src={aProposImg} alt="A propos banner" className='about-img' />
      <div className="about-content">
        {aboutContent.map((item, index) => (
          <DropDown
            key={item.id || index}
            title={item.title}
            content={item.description}
            isOpen={openStates[index]}
            onToggle={() => handleToggle(index)}
            titleSize="24px"
            className="about-dropdown"
          />
        ))}
      </div>
    </div>
  )
}
