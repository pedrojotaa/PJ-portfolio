import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-logo">
            <p>PJ Developer</p>
          </div>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="nav-btn">
            <p>Sign in</p>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--clr-bg);

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .nav-logo{
    p{
      margin: 0 auto;
      font-size: 1.5rem;
      color: var(--clr-grey-7);
    }
  }

  .nav-links {
    display: none;
  }

  .nav-btn {
    display: none;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-grey-7);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
`;

export default Navbar;
