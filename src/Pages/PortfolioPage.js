import React from 'react'
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import './portfolio.css'
// import { Button } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
// import * as SiIcons from "react-icons/si";


function Portfolio() {
  return (
    <MainLayout>
          <Title title={'portfolios'} span={'portfolios'}/>
          <InnerLayout>
          <div className='allProjects'>
              <div className="card"  data-aos="zoom-in-up">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbaZxBr74nAr46kChNndBVjp5bbTjNTfU4Ag&usqp=CAU" class="card-img-top" alt="..." />
                  <div class="title_heading">
                      <h5 class="card-title">Amazon </h5>
                  </div>
                  <div className='card-img-overlay'>
                      <div className='img-title'>Amazonapp</div>
                      <div className='img-description'>
                          <p>Amazon is the big online we know today. You can specialize your "store", shop by various departments,
                          read reviews, leave reviews, comment on reviews, rate items and distributors, and find the best deals availble</p>
                          <div className='tech_used'>
                              <i class="fab fa-react react"></i> &nbsp;
                              <i class="fab fa-node node"></i> &nbsp;
                             
                              {/* <SiIcons.SiMongodb className='mongodb' /> &nbsp; */}
                              <p className='codeLinks text-center pt-3'>
                                   <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Amazon-Frontend'>Client     <GitHubIcon/></a> 
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Amazon-Backend'>Server <GitHubIcon/></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='http://archu-amazon-clone.herokuapp.com/'>Demo  <LinkIcon/></a>
                              </p>
                          </div>
                      </div>
                  </div>   
              </div>
              <div class="card" data-aos="zoom-in-up">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNl7adfkkGz13l25x4P6mlHXpqFFKFLnVCaw&usqp=CAU' class="card-img-top" alt="..." />
                  <div class="title_heading">
                      <h5 class="card-title">Pizza Delivery</h5>
                  </div>
                  <div className='card-img-overlay'>
                      <div className='img-title'>Pizza Delivery</div>
                      <div className='img-description'>
                          <p>Pizza Delivery Driver starts at the pizza restaurant or chain where you work. Customers call or email in an order, including the address where they want it delivered. After the food is prepared, you grab the address and pizza.</p>
                          <div className='tech_used'>
                              <i class="fab fa-react react"></i> &nbsp;
                              <i class="fab fa-node node"></i> &nbsp;
                             
                              <p className='codeLinks text-center pt-3'>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/pizza_frontend'>Client    <GitHubIcon/></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/pizzaapp_backend'>Server     <GitHubIcon/></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://vast-castle-62530.herokuapp.com/'>Demo     <LinkIcon/></a>
                              </p>
                          </div>
                      </div>
                  </div>   
              </div>
            
                 <div class="card" data-aos="zoom-in-up">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj5lvL_aWUgnop-S_OD7UIINsEQ9zIWjTpw&usqp=CAU' class="card-img-top" alt="..." />
                  <div class="title_heading">
                      <h5 class="card-title">Gmail Clone</h5>
                  </div>
                  <div className='card-img-overlay'>
                      <div className='img-title'>Gmail Clone</div>
                      <div className='img-description'>
                          <p>Gmail is a free email service provided by Google. In many ways, Gmail is like any other email service: You can send and receive emails, block spam, create an address book, and perform other basic email tasks. 
                        </p>
                          <div className='tech_used'>
                              <i class="fab fa-react react"></i> &nbsp;
                              <i class="fab fa-node node"></i> &nbsp;
                             
                              <p className='codeLinks text-center pt-3'>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Gmail-Frontend'>Client     <GitHubIcon/></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Gmail-Backend'>Server       <GitHubIcon/></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://archu-gmail.herokuapp.com/'>Demo   <LinkIcon/></a>
                              </p>
                          </div>
                      </div>
                  </div>   
              </div>
              <div class="card" data-aos="zoom-in-up">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY1e-4AJYq-X6pOrUF3sqon9NJ4Zcd0mS-w&usqp=CAU' class="card-img-top" alt="..." />
                  <div class="title_heading">
                      <h5 class="card-title">UniChat</h5>
                  </div>
                  <div className='card-img-overlay'>
                      <div className='img-title'>UniChat</div>
                      <div className='img-description'>
                          <p>Unichat is a really cool graphical chatting program that allows you to select online avatars and interact with other users on the Internet</p>
                          <div className='tech_used'>
                              <i class="fab fa-react react"></i> &nbsp;
                              <i class="fab fa-node node"></i> &nbsp;
                             
                              <p className='codeLinks text-center pt-3'>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/UniChat'>Client     <GitHubIcon/></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/UniChat'>Server      <GitHubIcon/></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://archu-unichat.netlify.app/'>Demo   <LinkIcon/></a>
                              </p>
                          </div>
                      </div>
                  </div>   
              </div>
              {/* <div class="card" data-aos="zoom-in-up">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYubaHI5LcqfJzG3niNBy6jQvBJ6U3K6jlFg&usqp=CAU' class="card-img-top" alt="..." />
                  <div class="title_heading">
                      <h5 class="card-title">Messaging Application</h5>
                  </div>
                  <div className='card-img-overlay'>
                      <div className='img-title'>Messaging App</div>
                      <div className='img-description'>
                          <p>A messaging app is a chat application or platform that enables users to instant message and connect with each other through their computers or mobile devices. Think Facebook Messenger, WhatsApp, WeChat, or Slack.</p>
                          <div className='tech_used'>
                              <i class="fab fa-react react"></i> &nbsp;
                              <i class="fab fa-node node"></i> &nbsp;
                             
                              <p className='codeLinks text-center pt-3'>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Messagingapp_frontend'>Client    <GitHubIcon/></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/messagingapp_backend'>Server     <GitHubIcon/></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://focused-murdock-d2bc7d.netlify.app/'>Demo<LinkIcon/></a>
                              </p>
                          </div>
                      </div>
                  </div>   
              </div> */}
             
          
      </div>
      </InnerLayout>
      </MainLayout>
     
  )
}

export default Portfolio