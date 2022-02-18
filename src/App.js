import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";

import ThreeColCenteredStatsPrimaryBackground from "components/features/ThreeColCenteredStatsPrimaryBackground";
import TwoColWithButton from "components/features/TwoColWithButton";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header from "./components/headers/light";
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
