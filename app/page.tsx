import Hero from './components/Hero'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      {/* Hide bottom scrollbar */}
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <MainPage />
      </div>
    </>
  )
}
