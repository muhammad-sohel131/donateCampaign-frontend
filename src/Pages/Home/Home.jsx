import React from 'react'
import BannerSlider from '../../components/BannerSlider/BannerSlider'
import RunningCampaigns from '../../components/RunningCampaigns/RunningCampaigns'
import WhyDonate from '../../components/WhyDonate/WhyDonate'
import OurImpact from '../../components/OurImpact/OurImpact'

export default function Home() {
  return (
    <>
      <BannerSlider />
      <RunningCampaigns />
      <WhyDonate />
      <OurImpact />
    </>
  )
}
