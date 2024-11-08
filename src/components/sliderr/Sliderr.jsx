import React from 'react'
import image1 from '../../assets/hero/women.png'
import image2 from '../../assets/hero/discount.png'
import image3 from '../../assets/hero/shopping.png'
import Slider from 'react-slick'

const imageList = [
    {
        id: 1,
        img: image1,
        title: "up to 50% off on all men's wear",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem officia laborum eius eaque assumenda laboriosam error totam, nisi distinctio cum, aliquid dicta minus corrupti quas quisquam! Minima inventore distinctio quis?"
    },
    {
        id: 2,
        img: image2,
        title: "up to 70% off on all products",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem officia laborum eius eaque assumenda laboriosam error totam, nisi distinctio cum, aliquid dicta minus corrupti quas quisquam! Minima inventore distinctio quis?"
    },
    {
        id: 3,
        img: image3,
        title: "up to 30% off on all women's wear",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem officia laborum eius eaque assumenda laboriosam error totam, nisi distinctio cum, aliquid dicta minus corrupti quas quisquam! Minima inventore distinctio quis?"
    }
]


const Sliderr = ({handleOrderPopup}) => {
    let settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: true,
    };


  return (
          <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center
       dark:bg-gray-950 dark:text-white duration-200'>
          {/* background */}
          <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2  right-0 rounded-3xl
      rotate-45 -z[8]
      '></div>

          {/* content section */}
          <div className='container pb-8 sm:pb-0'>

          <Slider {...settings}>
              {imageList.map((data)=>(
                  <div>
                  <div className='grid grid-cols-1 sm:grid-cols-2'>
                      {/* text  */}
                      <div
                          className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
              order-2 sm:order-1 relative z-10'
                      >
                          <h1
                              className='text-5xl sm:text-6xl lg:text-7xl font-bold'
                          >{data.title}</h1>
                          <p
                              className='text-sm'
                          >{data.description}</p>
                          <div>
                              <button
                              onClick={()=>{handleOrderPopup()}}
                                  className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200
                      text-white py-2 px-4 rounded-full'
                              >
                                  Order Now!
                              </button>
                          </div>
                      </div>

                      {/* image  */}
                      <div className='order-2 sm:order-1'>
                        
                          <div>
                              <img
                                  className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto'
                                  src={data.img} alt="" />
                          </div>
                      </div>
                  </div>
              </div>
                ))}
          
          </Slider>
          
       </div>
      </div>
  )
}

export default Sliderr;




