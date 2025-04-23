"use client";
import React from "react";
import { TextLabel } from "./styles";

const Label = ({ label, hasError }) => {
  return <TextLabel hasError={hasError}>{label}</TextLabel>;
};

export default Label;
