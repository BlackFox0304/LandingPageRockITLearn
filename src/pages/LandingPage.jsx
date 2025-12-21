import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatIsRockItLearn from '../components/WhatIsRockItLearn'
import HowItWorks from '../components/HowItWorks'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsRockItLearn />
      <HowItWorks />
      <Gallery />
      <FAQ />
      <Footer />
    </>
  )
}

export default LandingPage
