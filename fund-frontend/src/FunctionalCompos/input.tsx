import React from "react";
import styled from "styled-components";

interface InputWidth {
    $width: string;
  }
const InputContainer = styled.div<InputWidth>`
  display: flex;
  width: ${(props) => `${props.$width}`};;
  flex-direction: column;
  row-gap: 0.8rem;
  justify-content: flex-start;
`;
const InputLabel = styled.label`
  color: #2f435a;
  font-size: 18px;
  font-weight: 600;
`;
const MainInput = styled.input`
  resize: none;
  height: 48px;
  min-height: 48px;
  padding: 9px 16px;
  border: 1px solid #eaebee;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  font-size: 16px;
  color: #2f435a;
  transition: 0.4s;
  box-shadow: none !important;
  -webkit-appearance: none;
  outline: 0;
`;
interface proptypes {
  label: string;
  width:string;
  placeholder: string;
  value: string;
  ChangeFunc: (type: string, value: string) => void;
  type: string;
  name: string;
}

function Forminput(props: proptypes) {
  return (
    <InputContainer $width={props.width}>
      <InputLabel>{props.label}</InputLabel>
      <MainInput  type={props.type}  placeholder={props.placeholder} value={props.value} name={props.name} onChange={(event)=>{props.ChangeFunc(event.target.name,event.target.value)}}></MainInput>
    </InputContainer>
  );
}

export default Forminput;
