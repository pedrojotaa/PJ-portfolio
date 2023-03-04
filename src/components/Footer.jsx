import React from 'react'
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <div className="footer-container">
          <h3 className="footer-title">
            Be ready to get in touch by email here or on the social networks
            below
          </h3>
          <form className="footer-form">
            <input type="text" placeholder="Your Email Address" />
            <button type="button">
              <FaArrowRight />
            </button>
          </form>
          <div className="footer-contact">
            <p>Contact</p>
            <p>pjdev@outlook.com</p>
          </div>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://github.com/pedrojotaa">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-84a611213/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      ;
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: var(--clr-bg);
  .footer-container {
    display: grid;
    gap: 2rem;
  }

  .footer-title {
    color: #fff;
    text-transform: inherit;
    font-size: 1.6rem;
  }
  .footer-form {
    display: flex;
    input {
      background: var(--clr-grey-7);
      border: none;
      padding: 0.5rem 1rem;
      background-color: var(--clr-grey-10);
      max-width: 100%;
    }
    button {
      background-color: rgb(253, 133, 20);
      padding: 0.5rem 1rem;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }
  .footer-contact p {
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0;
  }
  .footer-nav ul {
    display: flex;
    max-width: 100%;
    justify-content: flex-start;
    li {
      margin-right: 1rem;
      svg {
        background: transparent;
        color: #fff;
        font-size: 1.7rem;
      }
    }
  }
`;

export default Footer