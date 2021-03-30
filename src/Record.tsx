import React, { useState } from "react";
import {
  StyledCodeBlock,
  StyledInput,
  StyledKeyWord,
  StyledNumberType,
  StyledTextType,
  StyledType,
} from "./styleText";

export const Record: React.FC = () => {
  let tap = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
  let data = 1222;
  return (
    <>
      <StyledCodeBlock>
        <StyledKeyWord>type</StyledKeyWord> DateInfo = {"{"}
        <br></br>
        {tap}year: <StyledType>number</StyledType>;<br></br>
        {tap}month: <StyledType>string</StyledType>;<br></br>
        {tap}date: <StyledType>number</StyledType>;<br></br>
        {"}"}
        <br></br>
        <br></br>
        <StyledKeyWord>type</StyledKeyWord> PersonerDate = "birth" | "death"
        <br></br>
      </StyledCodeBlock>
      <StyledCodeBlock>
        <StyledKeyWord>const</StyledKeyWord> MrDOO : Record{"<"}PersonerDate,
        DateInfo{">"} = {"{"} <br></br>
        {tap}birth: {"{"} year: <StyledNumberType>1900</StyledNumberType>,
        month: <StyledTextType>"jan"</StyledTextType>, date:{" "}
        <StyledNumberType>1 </StyledNumberType>
        {"}"}
        <br></br>
        {tap}death: {"{"} year: <StyledNumberType>1980</StyledNumberType>,
        month: <StyledTextType>"dec"</StyledTextType>, date:{" "}
        <StyledNumberType>31 </StyledNumberType>
        {"}"}
        <br></br>
        {"}"}
        <br></br>
      </StyledCodeBlock>
    </>
  );
};
