import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'





import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'



import Footer from '../../components/Footer/Footer';
import Blogs from '../../components/blogs/blogs';
import HowYouHelp from '../../components/HowToHelp/Help';
import Testimonials from '../../components/Testimonials/Testimonials';
import HomeInfo from '../HomeInfo/HomeInfo';
import Carousel from '../../components/Carousel/Carousel';
import Navbar from '../../components/Navbar/Navbar'
import theme from '../../theme';



function HomePage() {
  return (

    <div className="App">
      <div className='navbar_carousel'>
   
      <Carousel/>
    <HomeInfo/>
    <Testimonials/>
    <HowYouHelp/>
    <Blogs/>
   
      </div>
      
    </div>
  )
}

export default HomePage