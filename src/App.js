import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";

import React from "react";

import MiniCenteredFooter from "./components/footers/MiniCenteredFooter";
import PortfolioTwoCardsWithImage from "components/cards/PortfolioTwoCardsWithImage";
import BackgroundAsImage from "components/hero/BackgroundAsImage";
import { StyledDiv } from "helpers/PageWrapper";

export default function App() {
  return (
    <StyledDiv className="App">
      <BackgroundAsImage />
      <PortfolioTwoCardsWithImage />
      <MiniCenteredFooter />
    </StyledDiv>
  );
}
