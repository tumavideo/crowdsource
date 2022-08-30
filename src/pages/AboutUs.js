import React from "react";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import { StyledDiv } from "helpers/PageWrapper";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <StyledDiv>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Crowdsource</Subheading>}
        heading="Crowdsource Creators Ltd is a strategic communications company based in Lusaka, Zambia."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      <MiniCenteredFooter />
    </StyledDiv>
  );
};
