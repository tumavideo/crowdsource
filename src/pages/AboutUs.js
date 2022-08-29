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
        heading="We are modern design and development consultants."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt barriers for youth initiatives."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      <MiniCenteredFooter />
    </StyledDiv>
  );
};
