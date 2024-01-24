import React from 'react';
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpg";
export default function Testimonial() {
  return (
    <Section id="testimonial">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          "Wanderly made planning easy and stress-free for my dream vacation!"
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Murugavel M</h4>
              <span>CEO - Cloudlogic solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          "Personalized recommendations and real-time price comparisons – Wanderly nailed it!"
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Malliga Natarajan</h4>
              <span>ANM - PHC Muthialpet</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          "Wanderly's simple interface saved me time and money. Highly recommended!"
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Krishnamurthy K</h4>
              <span>Manager - Western Union</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
margin:5rem 0;
.title{
  text-align:center;
  margin-bottom: 2rem;
}
.testimonials{
  display:flex;
  justify-content:center;
  margin:0 2rem;
  gap:2rem;

 .testimonial{
  background-color:aliceblue;
  padding:2rem;
  border-radius:0.5rem;
  box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
  transition:0.3s ease-in-out;
  &:hover{
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;
  
  }
  .info{
    display:flex;
    justify-content:center;
    gap:1rem;
    align-items:center;
    margin-top:1rem;
    img{
      height:3rem;
      border-radius:3rem;
    }
    .details{
      span{
        font-size:0.9rem;
      }
    }
  }
 }
}

@media screen and (min-width: 280px) and (max-width:768px){
 .testimonials{
  flex-direction:column;
  margin:0;
  .testimonial{
    justify-content:center;
    .info{
      flex-direction:column;
      justify-content: center;
    }
  }
 }

}
`;
