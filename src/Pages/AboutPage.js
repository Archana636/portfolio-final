import React from 'react'
import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
// import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';
import SkillsSection from '../Components/SkillsSection';


function AboutPage() {
    return (
        
        <MainLayout>
            <AboutStyled  >
<Title title={'About Me'} span={'About Me'}/>
   <ImageSection/>
   <Title title={'My Skills'} span={'My Skills'}/>
   <div className="skillscontainer">
   <SkillsSection skill={'JavaScript'} progress={'90%'} width={'90%'}/>
   <SkillsSection skill={'ReactJS'} progress={'92%'} width={'92%'}/>
   <SkillsSection skill={'NodeJS'} progress={'95%'} width={'95%'}/>
   <SkillsSection skill={'SQL Database'} progress={'95%'} width={'95%'}/>
      </div>
   {/* <ServicesSection /> */}
   <ReviewsSection/>
            </AboutStyled >

        </MainLayout>
        
    )
}

const AboutStyled = styled.section`
 /* @media screen and (max-width: 1000px){

 } */

`;
export default AboutPage;
