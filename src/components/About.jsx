import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";

function About() {
  return (
    <Wrapper className="section gradient__bg">
      <div className="section-center">
        <div className="about-content">
          <div className="container-img">
            <img src={profile} alt="profile" className="profile-img" />
          </div>
          <div className="about-text">
            <h1 className="gradient_text">
              Welcome to my website and portfolio, be able to know all about my
              developer life.
            </h1>
            <p>
              This website was making after a long time of study and implement
              of new features of development, i will show you all my projects
              and scale of learning.
            </p>
          </div>
        </div>
      </div>
      <div className="triangle"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  .triangle {
    position: absolute;
    z-index: 1;
    bottom: -1px;
    width: 100%;
    height: 10vw;
    background: #fff;
    clip-path: polygon(100% 0px, 100% 0px, 100% 100%, 0px 100%);
  }

  .about-content {
    display: grid;
    margin-bottom: 5rem;
  }

  .container-img {
    display: flex;
    justify-content: center;
    .profile-img {
      width: 100%;
      display: block;
      height: 300px;
      width: 300px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .about-text {
    margin: 2rem auto;
    h1 {
      text-transform: inherit;
    }
    p {
      color: var(--clr-grey-6);
      font-size: 1rem;
    }
  }
`;

export default About;
