import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className="mt-20 pt-10 pb-10 bg-stone-800 rounded-2xl border flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="md:text-right text-center lg:pe-20 my-auto">
            <h2 className="text-2xl 2xl:text-4xl text-amber-600 font-bold pb-6">
              Contact
            </h2>
            <ul className="text-lg 2xl:text-xl text-sky-700 space-y-4">
              <li>📞 027 211 0807</li>
              <li>📧 sam@mclauchlaneletrical.co.nz</li>
            </ul>
          </div>
          <div className="flex justify-center items-center pt-10 lg:pt-0">
            <Image
              src="/images/logo.png"
              width={250}
              height={85}
              alt="Company Logo"
              priority={true}
            />
          </div>
          <div className="md:text-left text-center lg:ps-20 my-auto">
            <h2 className="text-2xl 2xl:text-4xl text-amber-600 font-bold pb-6 lg:pt-24">
              Navigation
            </h2>
            <ul className="text-lg 2xl:text-xl text-sky-700 space-y-2">
              <li>Home 🏠</li>
              <li>Services ⚡</li>
              <li>Meet The Team 👨🏽‍👨🏽‍👦🏽‍👦🏽</li>
              <li>Gallery 🖼️ </li>
              <li>Contact 📞</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
