import React from 'react'
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import './portfolio.css'


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
                             
                              <p className='codeLinks text-center pt-3'>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Amazon-Frontend'>Client<i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Amazon-Backend'>Server <i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='http://archu-amazon-clone.herokuapp.com/'>Demo<i class="fad fa-link"></i></a>
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
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/pizza_frontend'>Client<i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/pizzaapp_backend'>Server<i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://vast-castle-62530.herokuapp.com/'>Demo<i class="fad fa-link"></i></a>
                              </p>
                          </div>
                      </div>
                  </div>   
              </div>
            
                 <div class="card" data-aos="zoom-in-up">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHdMC9lCaq0l2N28KPVIWsKW_Xu-Z8i5NRw&usqp=CAU' class="card-img-top" alt="..." />
                  <div class="title_heading">
                      <h5 class="card-title">Zoom Clone</h5>
                  </div>
                  <div className='card-img-overlay'>
                      <div className='img-title'>Zoom Clone</div>
                      <div className='img-description'>
                          <p>Zoom is a cloud-based video communications app that allows you to set up virtual video and audio conferencing, webinars, live chats, screen-sharing, and other collaborative capabilities.
                        </p>
                          <div className='tech_used'>
                              <i class="fab fa-react react"></i> &nbsp;
                              <i class="fab fa-node node"></i> &nbsp;
                             
                              <p className='codeLinks text-center pt-3'>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Zoom-Clone-Frontend'>Client<i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Zoom-Clone-Backend'>Server<i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://murmuring-sands-15339.herokuapp.com/'>Demo <i class="fad fa-link"></i></a>
                              </p>
                          </div>
                      </div>
                  </div>   
              </div>
              <div class="card" data-aos="zoom-in-up">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4-eJxybr_VduO3Wg1pA-jsZekt8N20-AeA&usqp=CAU' class="card-img-top" alt="..." />
                  <div class="title_heading">
                      <h5 class="card-title">Ecommerce</h5>
                  </div>
                  <div className='card-img-overlay'>
                      <div className='img-title'>Ecommerce App</div>
                      <div className='img-description'>
                          <p>e commerce application is concerned with providing goods and services between two businesses
                          Hence, the products they are selling will be such that it becomes a raw material for another industry. Mobile apps that sell spare automobile parts, machine parts, etc. come into this category of apps.</p>
                          <div className='tech_used'>
                              <i class="fab fa-react react"></i> &nbsp;
                              <i class="fab fa-node node"></i> &nbsp;
                             
                              <p className='codeLinks text-center pt-3'>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/ecommerce_frontend'>Client<i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/ecommerce_backend'>Server<i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://brave-bose-b8d60b.netlify.app/'>Demo <i class="fad fa-link"></i></a>
                              </p>
                          </div>
                      </div>
                  </div>   
              </div>
              <div class="card" data-aos="zoom-in-up">
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
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/Messagingapp_frontend'>Client<i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://github.com/Archana636/messagingapp_backend'>Server<i class="fab fa-github"></i></a>
                                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href='https://focused-murdock-d2bc7d.netlify.app/'>Demo<i class="fad fa-link"></i></a>
                              </p>
                          </div>
                      </div>
                  </div>   
              </div>
             
          
      </div>
      </InnerLayout>
      </MainLayout>
     
  )
}

export default Portfolio