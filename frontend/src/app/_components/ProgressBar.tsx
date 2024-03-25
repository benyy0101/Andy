import React from "react";
import { Progress } from "./styles/ProgressBar.style";

interface ProgressBarProps {
  value: number;
  max: number;
}
function ProgressBar(props: ProgressBarProps) {
  const { value, max } = props;

  return <Progress value={value} max={max} />;
}

export default ProgressBar;
