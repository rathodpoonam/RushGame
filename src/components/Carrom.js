import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Carousel from './Carousel'
import Card from './Card'
import CardMobile from './CardMobile'
import Install from './Install'
import IntallCarousel from './IntallCarousel'
import PlayRush from './PlayRush'
import Review from './Review'
import ReviewCarousel from './ReviewCarousel'
import FaqFooter from './FaqFooter'
import Rushmember from './Rushmember'
import step_1 from '../assets/step_1.png'
import step_2 from '../assets/step_2.png'
import step_3 from '../assets/step_3.png'
import step_4 from '../assets/step_4.png'
import carrom_main_mobile_new from '../assets/carrom_main_mobile_new.png'
import main_gallery_img_2 from '../assets/main_gallery_img_2.png'
import  main_gallery_img_3 from '../assets/main_gallery_img_3.png'


const Carrom = () => {
  const intas = [
    step_1,
    step_2,
    step_3,
    step_4,
];

const items = [
  carrom_main_mobile_new,
  main_gallery_img_2,
  main_gallery_img_3,
];

  return (


    <div>
      <Navbar />
      <div className="p-4">
        <div className="hidden md:block">
          <HeroSection imageSrc="Carrom_main_Eng.png" />
        </div>
        <div className="block md:hidden">
          <Carousel items={items} />
        </div>
      </div>

      <div className="p-4">
        <div className="hidden md:block">
          <Card />
        </div>
        <div className="block md:hidden">
          <CardMobile />
        </div>
      </div>

      <div className="p-4">
        <div className="hidden md:block">
          <Install />
        </div>
        <div className="block md:hidden">
          <IntallCarousel intas={intas} />
        </div>
      </div>

      <PlayRush />

      <div className="p-4">
        <div className="hidden md:block">
          <Review />
        </div>
        <div className="block md:hidden">
          <ReviewCarousel />
        </div>
      </div>

      <FaqFooter />
      <Rushmember />
    </div>
  )
}

export default Carrom
