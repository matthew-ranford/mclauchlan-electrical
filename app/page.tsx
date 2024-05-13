import Hero from './components/Hero'
import MainPage from './components/MainPage'

export default function Home() {
  return (
    <>
      {/* Hide bottom scrollbar */}
      <div className="overflow-hidden">
        <Hero />
        <MainPage />
      </div>
    </>
  )
}
