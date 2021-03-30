import React, { useState } from "react";
import {
  StyledCodeBlock,
  StyledInput,
  StyledKeyWord,
  StyledType,
} from "./styleText";

export const Pick: React.FC = () => {
  const [user, setUser] = useState<string>('"name"');
  const [grade, setGrade] = useState<string>('"subtitle"');

  const getGradeType = (g: string) => {
    switch (g) {
      case "subtitle":
        return "string";
      case "score":
        return "number";
      default:
        return "number";
    }
  };

  const getUserType = (u: string) => {
    switch (u) {
      case "name":
        return "string";
      case "nickName":
        return "number";
      case "grade":
        return "Grade";
      default:
        return "number";
    }
  };

  const isMatchingGrade = (g: string) => {
    return ["subtitle", "score"].includes(g);
  };

  const isMatchingUsers = (g: string) => {
    return ["name", "nickName", "grade"].includes(g);
  };

  const resultUsers = () => {
    let users = user.split("|").map((v) => v.replaceAll('"', "").trim());
    return users.map((u) => {
      if (u.length > 0 && isMatchingUsers(u))
        return (
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;{u}:{" "}
            <StyledType>{getUserType(u)}</StyledType>;<br></br>
          </>
        );
    });
  };

  const resultGrade = () => {
    let grades = grade.split("|").map((v) => v.replaceAll('"', "").trim());
    return grades.map((g) => {
      if (g.length > 0 && isMatchingGrade(g))
        return (
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;{g}:{" "}
            <StyledType>{getGradeType(g)}</StyledType>;<br></br>
          </>
        );
    });
  };

  return (
    <>
      <StyledCodeBlock>
        <StyledKeyWord>type</StyledKeyWord> Users = {"{"}
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;name: <StyledType>string</StyledType>; <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;nickName: <StyledType>string</StyledType>;{" "}
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;grade: Grade<br></br>
        {"}"};<br></br>
        <br></br>
        <StyledKeyWord>type</StyledKeyWord> Grade = {"{"}
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;subtitle: <StyledType>string</StyledType>;
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;score: <StyledType>number</StyledType>;<br></br>
        {"}"}
        <br></br>
        <br></br>
        <StyledKeyWord>type</StyledKeyWord> SubTitleUsers ={" "}
        <StyledType>Pick</StyledType>
        {"<"} Grade,{" "}
        <StyledInput
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        ></StyledInput>{" "}
        {">"} &<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<StyledType>Pick</StyledType>
        {"<"}
        Users,
        <StyledInput
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></StyledInput>{" "}
        {">"}
      </StyledCodeBlock>
      <StyledCodeBlock>
        <StyledKeyWord>type</StyledKeyWord> SubTitleUsers = {"{"}
        <br></br>
        {resultGrade()}
        {resultUsers()}
        {"}"}
      </StyledCodeBlock>
    </>
  );
};
