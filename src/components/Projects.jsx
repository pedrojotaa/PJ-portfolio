import React from "react";
import styled from "styled-components";
import project1 from "../assets/1.png";

function Projects() {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <div className="container">
          <h2>project name</h2>
          <img src={project1} alt="p1" />
          <p>description</p>
        </div>
        <div className="container">
          <h2>project name</h2>
          <img src={project1} alt="p1" />
          <p>description</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    height: 250px;
    border-radius: 5px;
    border: 1px solid #222;
  }
`;

export default Projects;
