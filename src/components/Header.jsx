import kasaLogo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'
import "./header.scss"

export default function Header() {

  return (
    <header className="header">
      <img src={kasaLogo} alt="Kasa Logo" />
      <nav>
        <Link to="/" className='header-link'>Accueil</Link>
        <Link to="/about" className='header-link'>À propos</Link>
      </nav>
    </header>
  )
}
