import React, { useState } from "react";
import {
  StyledCodeBlock,
  StyledInput,
  StyledKeyWord,
  StyledType,
} from "./styleText";

export const Omit: React.FC = () => {
  let [omit, setOmit] = useState('"id"');
  let tap = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
  let getOmitTypes = () => {
    let omits = omit.split("|").map((v) => v.replaceAll('"', "").trim());
    return ["id", "index", "name"].map((v) => {
      console.log(omits.includes(v));
      if (omits.includes(v)) return null;
      return (
        <>
          {tap}
          {v}: <StyledType>{getTypes(v)}</StyledType>;<br></br>
        </>
      );
    });
  };

  const getTypes = (v: string) => {
    switch (v) {
      case "id":
        return "string";
      case "index":
        return "number";
      case "name":
        return "string";
    }
  };
  return (
    <>
      <StyledCodeBlock>
        <StyledKeyWord>type</StyledKeyWord> Card = {"{"}
        <br></br>
        {tap}id: <StyledType>string</StyledType>;<br></br>
        {tap}index: <StyledType>number</StyledType>;<br></br>
        {tap}name: <StyledType>string</StyledType>;<br></br>
        {"}"}
        <br></br>
        <br></br>
        <StyledKeyWord>type</StyledKeyWord> SubCard = Omit{"<"}Card,
        <StyledInput
          value={omit}
          onChange={(e) => setOmit(e.target.value)}
        ></StyledInput>
        {">"}
        <br></br>
      </StyledCodeBlock>
      <StyledCodeBlock>
        <StyledKeyWord>type</StyledKeyWord> SubCard = {"{"} <br></br>
        {getOmitTypes()}
        {"}"}
        <br></br>
      </StyledCodeBlock>
    </>
  );
};
