import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Accommodation from './pages/accommodations/[Accommodation]'

export default function Router() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<About />} />
    </Routes>

  )
}
