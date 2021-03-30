import React from "react";
import {
  StyledCodeBlock,
  StyledKeyWord,
  StyledNumberType,
  StyledOr,
  StyledTextType,
  StyledType,
} from "./styleText";

export const Particle: React.FC = () => {
  let tap = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
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
        <StyledKeyWord>type</StyledKeyWord> ParticleDateInfo = Particle{"<"}
        DateInfo{">"}
        <br></br>
      </StyledCodeBlock>
      <StyledCodeBlock>
        <StyledKeyWord>type</StyledKeyWord> DateInfo = {"{"}
        <br></br>
        {tap}year: <StyledType>number</StyledType>;<br></br>
        {tap}month: <StyledType>string</StyledType>;<br></br>
        {tap}date: <StyledType>number</StyledType>;<br></br>
        {"}"} <StyledOr>{"|"}</StyledOr> {"{"}
        <br></br>
        {tap}year: <StyledType>number</StyledType>;<br></br>
        {tap}month: <StyledType>string</StyledType>;<br></br>
        {"}"} <StyledOr>{"|"}</StyledOr> {"{"}
        <br></br>
        {tap}month: <StyledType>string</StyledType>;<br></br>
        {tap}date: <StyledType>number</StyledType>;<br></br>
        {"}"} <StyledOr>{"|"}</StyledOr> {"{"}
        <br></br>
        {tap}year: <StyledType>number</StyledType>;<br></br>
        {tap}date: <StyledType>number</StyledType>;<br></br>
        {"}"} <StyledOr>{"|"}</StyledOr> {"{"}
        <br></br>
        {tap}year: <StyledType>number</StyledType>;<br></br>
        {"}"} <StyledOr>{"|"}</StyledOr> {"{"}
        <br></br>
        {tap}month: <StyledType>string</StyledType>;<br></br>
        {"}"} <StyledOr>{"|"}</StyledOr> {"{"}
        <br></br>
        {tap}date: <StyledType>number</StyledType>;<br></br>
        {"}"};
      </StyledCodeBlock>
    </>
  );
};
