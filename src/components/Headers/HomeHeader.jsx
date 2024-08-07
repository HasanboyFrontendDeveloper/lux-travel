import { Button } from '@material-tailwind/react'
import logo from '../../assets/imgs/logo.png'
import homeHeaderBg from '../../assets/imgs/homeHeaderBg.webp'
import homeHeaderBgCloud from '../../assets/imgs/homeHeaderBg-cloud.webp'
import homeHeaderBgCloud1 from '../../assets/imgs/homeHeaderBg-cloud1.webp'
import homeSlider from '../../assets/imgs/homeSlider.webp'

const HomeHeader = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat relative overflow-hidden ' style={{ background: `url(${homeHeaderBg})` }} >
      <div className="w-[1200px] mx-auto ">

        <div className="py-10">
          <img src={logo} alt="logo" className='w-24' />
        </div>
        <div className="pb-8 text-white ">
          <h1 className='text-[60px] font-bold max-w-[900px] ' style={{ zIndex: 5 }} >Oilaviy yoki yaqinlaringiz bilan maroqli hordiq chiqaring</h1>
          <h2 className='text-xl'>Bepul konsultatsiya uchun ro’yxatdan o’ting</h2>
        </div>

        <div className="py-16 flex gap-5 ">

          <div className="bg-white p-5 max-w-56 rounded-2xl shadow-lg ">
            <h1 className='text-2xl font-bold text-gray-800 pb-2  '>Tajriba</h1>
            <p className=' text-gray-600 '>5 yildan ortiq tajribaga ega jamoa</p>
          </div>

          <div className="bg-white p-5 max-w-56 rounded-2xl shadow-lg ">
            <h1 className='text-2xl font-bold text-gray-800 pb-2'>Qulay narxlar </h1>
            <p className=' text-gray-600 '>Umumi sayoha xarajatlari uchun xamyonbop narxlar </p>
          </div>

          <div className="bg-white p-5 max-w-56 rounded-2xl shadow-lg ">
            <h1 className='text-2xl font-bold text-gray-800 pb-2'>Keng tanlov</h1>
            <p className=' text-gray-600 '>O'zbekiston hamda qo'shni davlatlar bo'ylab sahohatlar</p>
          </div>

        </div>

        <div className="">
          <Button color="green" className='text-xl font-medium py-4 ' >Bepul konsultatsiya</Button>
        </div>


        <div className="">
          <img src={homeHeaderBgCloud} alt="cloud" className='absolute top-0 left-0 ' style={{ zIndex: 2 }} />
          <img src={homeHeaderBgCloud1} alt="cloud" className='absolute bottom-0 left-0 translate-y-2/4 z-10  ' />
        </div>

      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marqueeReverse whitespace-nowrap flex ">
          <img src={homeSlider} alt="homeSlider" />
        </div>

        <div className="absolute top-0 py-12 animate-marqueeReverse2 whitespace-nowrap flex ">
          <img src={homeSlider} alt="homeSlider" />

        </div>
      </div>

    </div>
  )
}

export default HomeHeader