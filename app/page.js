"use client";
import { Footer, NavBar } from '@/Components';
import Card from '@/Components/Card';
import Hero from '@/Components/Hero';
import Popup from '@/Components/Popup';
import { CrowdFundingAbi } from '@/context/contant'
import {  CrowdFundingContext, CrowdFundingProvider} from '@/context/CrowdFunding';
import React, { Component, useContext, useEffect, useState } from 'react'

export default function Page() {
         const { titleData,
          account,
          createCampaign,
          getCampaigns,
          getUserCampaigns,
          donate,
          getDonators,
          connectWallet} = useContext(CrowdFundingContext);

          const [allCampaign,setAllCampaign]=useState();
          const [userCampign,setUserCampign]=useState();
          const [openModel,setOpenModel]=useState(false);
          const [donateCampign,setDonateCampign]=useState();
          useEffect(() => {
            const fetchData = async () => {
              try {
                const allData = await getCampaigns();
                const allUserData = await getUserCampaigns();
                console.log("All Data:", allData);
                console.log("User Data:", allUserData);
                setAllCampaign(allData);
                setUserCampign(allUserData);
              } catch (error) {
                console.error("Error fetching campaigns:", error);
              }
            };
          
            fetchData();
          }, [account, openModel,getCampaigns,getUserCampaigns,createCampaign]);


       

  return (
    <>
            <Hero titleData={titleData} createCampaign={createCampaign}/>

            <Card title="All Listed Campign" allCampaign={allCampaign} setOpenModel={setOpenModel} setDonate={setDonateCampign}/>
            <Card title="Your Created Campigns" allCampaign={userCampign} setOpenModel={setOpenModel} setDonate={setDonateCampign}/>

            {openModel && (
              <Popup setOpenModel={setOpenModel} getDonators={getDonators} donate={donateCampign} donateFunction={donate}/>
            )}
    </>

  )
}
