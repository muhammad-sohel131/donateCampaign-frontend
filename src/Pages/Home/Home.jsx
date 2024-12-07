import React, { useContext } from 'react'
import BannerSlider from '../../components/BannerSlider/BannerSlider'
import RunningCampaigns from '../../components/RunningCampaigns/RunningCampaigns'
import WhyDonate from '../../components/WhyDonate/WhyDonate'
import OurImpact from '../../components/OurImpact/OurImpact'
import { AuthContext } from '../../Provider/AuthProvider'
import './Home.css'
export default function Home() {
  const { isDarkMode, setIsDarkMode } = useContext(AuthContext)
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <>
      <BannerSlider />

      <div className={isDarkMode ? 'dark mt-[-20px] pt-10' : 'light mt-[-20px] pt-10'}>
        <div className='flex justify-center'>
        <button
          onClick={handleToggle}
          className={isDarkMode ? 'mt-6 p-2 rounded bg-white text-black' : 'mt-6 p-2 rounded bg-black text-white'}
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        </div>
        <RunningCampaigns />
        <WhyDonate />
        <OurImpact />
      </div>
    </>
  )
}
