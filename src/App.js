import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";

import React from "react";

import MiniCenteredFooter from "./components/footers/MiniCenteredFooter";
import BackgroundAsImage from "components/hero/BackgroundAsImage";
import { StyledDiv } from "helpers/PageWrapper";
import DashedBorderSixFeatures from "components/features/DashedBorderSixFeatures";

export default function App() {
  return (
    <StyledDiv className="App">
      <BackgroundAsImage />
      <DashedBorderSixFeatures />
      <MiniCenteredFooter />
    </StyledDiv>
  );
}
