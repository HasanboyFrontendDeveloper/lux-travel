import { Button } from '@material-tailwind/react'
import logo from '../../assets/imgs/logo.png'
import homeHeaderBg from '../../assets/imgs/homeHeaderBg.webp'
import homeHeaderBgCloud from '../../assets/imgs/homeHeaderBg-cloud.webp'
import homeHeaderBgCloud1 from '../../assets/imgs/homeHeaderBg-cloud1.webp'
import homeSlider from '../../assets/imgs/homeSlider.webp'

const HomeHeader = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat relative overflow-hidden ' style={{ background: `url(${homeHeaderBg})` }} >
      <div className="lg:w-[1200px] w-[95%] mx-auto ">

        <div className="py-10">
          <img src={logo} alt="logo" className='w-24' />
        </div>
        <div className="pb-8 text-white ">
          <h1 className='md:text-[60px] md:leading-[60px] text-4xl font-bold max-w-[900px] '>Oilaviy yoki yaqinlaringiz bilan maroqli hordiq chiqaring</h1>
          <h2 className='md:text-xl text-base pt-2 '>Bepul konsultatsiya uchun ro’yxatdan o’ting</h2>
        </div>

        <div className="py-16 hidden sm:flex gap-5 ">

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

        <div className="flex justify-center sm:justify-normal">
          <Button color="green" className='sm:text-xl text-base font-medium py-4 mb-12 ' >Bepul konsultatsiya</Button>
        </div>


        <div className="">
          <img src={homeHeaderBgCloud} alt="cloud" className='absolute top-[7%] left-0 h-[320px] md:h-auto md:top-5 md:left-0 ' style={{ zIndex: 2 }} />
          <img src={homeHeaderBgCloud1} alt="cloud" className='absolute bottom-0 left-0 translate-y-2/4 z-10  ' />
        </div>

      </div>

      <div className="relative flex overflow-x-hidden  ">
        <div className=" md:py-12 animate-marqueeReverse whitespace-nowrap ">
          <div className="w-[900px] sm:w-full ">
            <img src={homeSlider} alt="homeSlider" className='max-w-[100%] ' />
          </div>
        </div>

        <div className="absolute top-0  md:py-12 animate-marqueeReverse2 whitespace-nowrap ">
          <div className="w-[900px] sm:w-full ">
            <img src={homeSlider} alt="homeSlider" className='max-w-[100%] ' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeHeader