import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import { InnerLayout} from '../styles/Layouts';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';
// import { Button } from 'react-bootstrap';
// import GetAppIcon from '@material-ui/icons/GetApp';



function Resume() {

 const briefcase =  <BusinessCenterIcon/>
    const school = <SchoolIcon/>

    return (
        <ResumeStyled>
             <Title title={'EDUCATION'} span={'resume'}/>
            {/* <a className='btn btn-primary' rel="noreferrer" href='https://drive.google.com/file/d/1P-S6k-XyGb7Isdvyd--yyH3uC0s545y2/view?usp=sharing' target='_blank'>Download <GetAppIcon/></a>   */}
            <InnerLayout>
             <div className="small-title">
            <SmallTitle icon={briefcase} title={'Educational Qualification'}/>
            </div>
            <div className="resume-content">
            <ResumeItem 
           year={'2015-2018'} 
            title={' BCA (Bachelor of Computer Application)'}
            subTitle={'KLE  societys S. Nijalingappa College, Bangalore'}
            text={'76%'}/>

<ResumeItem 
            year={'2013-2015'} 
            title={'2nd PUC'}
            subTitle={'GT Independent PU College, Bangalore'}
            text={'79%'}/>

<ResumeItem 
            year={'2012-2013'} 
            title={'SSLC'}
            subTitle={'Shushruti Vidya Samste, School, Peenya 2nd Stage, Bangalore'}
            text={'72%'}/>

           </div>

           <div className="small-title u-small-title-margin">
            <SmallTitle icon={school} title={'Certifications'}/>
            </div>
            <div className="resume-content ">
<ResumeItem 
            year={'2015-2016'} 
            title={'DCA(Diploma in Computer Application)'}
            subTitle={'KEONICS, Rajajinagar, Bangalore'}
            text={''}/>

<ResumeItem 
            year={'2017-2018'} 
            title={'Sql Server Administrator'}
            subTitle={'KDSSG Institute Marathahalli, Bangalore'}
            text={''}/>

    
{/* <ResumeItem 
            year={'2015-2018'} 
            title={'Bachelor Degree'}
            subTitle={'KLE  societys S. Nijalingappa College '}
            text={'I completed my Bachelor of Computer Application (BCA) at KLE Institute, Rajajinagar, Bangalore '}/> */}
            </div>
          
            </InnerLayout>
            
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
.small-title{
    padding-bottom: 3rem;
}
.u-small-title-margin{
    margin-top:4rem;
}

 
.resume-content{
    border-left: 2px solid var(--border-color);

}

`;

export default Resume

