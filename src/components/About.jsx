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
            <nav className="about-nav">
              <input type="text" placeholder="Your Email Address" />
              <button type="button">Get Started</button>
            </nav>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .about-content {
    display: grid;
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

  .about-nav {
    input {
      background: var(--clr-grey-7);
      border: none;
      padding: 0.5rem 1rem;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background-color: var(--clr-grey-1);
      outline: none;
    }
    button {
      background-color: rgb(253, 133, 20);
      padding: 0.5rem 1rem;
      width: 100%;
      max-width: 150px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      color: #fff;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
  }
`;

export default About;
