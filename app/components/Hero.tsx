import { TypewriterEffect } from '@/components/ui/typewrite-effect'

export default function Hero() {
  // TypeWriteEffect

  const mainHeader = [
    {
      text: 'McLauchlan',
      className: 'text-blue-900',
    },
    {
      text: 'Eletrical',
      className: 'text-amber-600',
    },
  ]

  return (
    <>
      <div className="hero-wrapper">
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="full-screen-video"
        >
          <track
            kind="captions"
            label="Video animation of houses with lights on outside"
          />
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute pt-48 md:pt-72 2xl:pt-96 2xl:mt-56 px-8 md:px-16 2xl:px-60 ">
          <h1>
            <TypewriterEffect words={mainHeader} />
          </h1>
          <div className="text-white md:text-left text-2xl 2xl:text-3xl px-4 pt-6 space-y-6">
            <p>
              Residential, Commercial, Marine & Industrial Contracting Company
            </p>
            <p>Providing electrical services to the Wellington region</p>
          </div>
        </div>
      </div>
    </>
  )
}

// checkout height for when you rotate dimensions on phone,ipad etc. might have to move padding up a little bit - currently cutting off second piece of text
