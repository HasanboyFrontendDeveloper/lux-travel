import blackHand from '../../assets/imgs/black_hand_1.png'
import pic1 from '../../assets/imgs/aboutUs1.png'
import pic2 from '../../assets/imgs/aboutUs2.png'
import pic3 from '../../assets/imgs/aboutUs3.png'
import pic4 from '../../assets/imgs/aboutUs4.png'
import pic5 from '../../assets/imgs/aboutUs5.png'
import pic6 from '../../assets/imgs/aboutUs6.png'
import pic7 from '../../assets/imgs/aboutUs7.png'
import pic8 from '../../assets/imgs/aboutUs8.png'
import pic9 from '../../assets/imgs/aboutUs9.png'
import pic10 from '../../assets/imgs/aboutUs10.png'
import pic11 from '../../assets/imgs/aboutUs11.png'

const imgs = [pic1, pic2, '', pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11]


const AboutUs = () => {
    return (
        <div className="pb-20 relative">


            <div className="lg:w-[1200px] w-[95%] mx-auto">
                <h1 className='text-4xl font-medium text-center pb-16 '>Biz haqimizda quyidagi video orqali batafsil bilib oling</h1>
                <iframe className='w-full h-[600px] '
                    src='https://www.youtube.com/embed/n2Q38jtwjIQ'>
                </iframe>

                <img src={blackHand} alt="blackHand" className='w-[400px] absolute top-80 left-0 animate-blackHandMovement ' />
            </div>

            <div className="">
                <div className="py-7">

                    <h1 className='text-4xl font-medium text-center py-2 text-gray-800 '><span className='text-black font-bold'>2.000 dan</span> ortiq mijozlar bizning xizmatlarimizdan mamnun</h1>
                    <p className='text-center text-xl font-semibold text-gray-800 '>Bizga ishonch bilidrgan mijozlarimizning suratlaridan namunalar</p>
                </div>

                <div className="flex flex-wrap gap-4  lg:w-[1400px] w-[95%] mx-auto ">
                    {imgs.map((img, index) => (
                        <>
                            {img ? <img src={img} alt="img" className='h-72  ' key={index} /> : <div className='w-72 h-72 rounded-lg shadow-lg flex justify-center items-center text-center text-xl font-semibold '>Bu yerda sizning suratingiz bo’lishi mumkin edi</div>}

                        </>
                    ))}

                </div>
            </div>
        </div >
    )
}

export default AboutUs