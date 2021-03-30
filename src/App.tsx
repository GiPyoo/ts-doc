import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Omit } from "./Omit";
import { Particle } from "./Particle";
import { Pick } from "./Pick";
import { Record } from "./Record";
import {
  StyledBlank,
  StyledHeader,
  StyledScroll,
  StyledSecondHeader,
} from "./styleText";

function App() {
  return (
    <div className="App">
      <StyledHeader>타입 유틸리티</StyledHeader>
      <StyledBlank></StyledBlank>
      <StyledSecondHeader>Pick</StyledSecondHeader>
      <StyledScroll>
        <Pick></Pick>
      </StyledScroll>
      <StyledBlank></StyledBlank>
      <StyledSecondHeader>Omit</StyledSecondHeader>
      <StyledScroll>
        <Omit></Omit>
      </StyledScroll>
      <StyledBlank></StyledBlank>
      <StyledSecondHeader>Record</StyledSecondHeader>
      <StyledScroll>
        <Record></Record>
      </StyledScroll>
      <StyledBlank></StyledBlank>
      <StyledSecondHeader>Particle</StyledSecondHeader>
      <StyledScroll>
        <Particle></Particle>
      </StyledScroll>
    </div>
  );
}

export default App;
