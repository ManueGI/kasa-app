import "./footer.scss"
import kasaLogoWhite from '../assets/LOGO-white.png'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={kasaLogoWhite} alt="Kasa Logo" />
      <p>© 2023 Kasa. All rights reserved.</p>
    </footer>
  )
}
