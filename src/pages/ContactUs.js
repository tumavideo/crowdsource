import React from "react";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import { StyledDiv } from "helpers/PageWrapper";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <StyledDiv>
      <Header />
      <ContactDetails
        cards={[
          {
            title: "Lusaka",
            description: (
              <>
                <Address>
                  <AddressLine>Unit 2, Plot No. 57A Lukanga Road</AddressLine>
                  <AddressLine>Roma, LUN 10101</AddressLine>
                </Address>
                <Email>info@crowdsourcecreators.com</Email>
                <Phone>+260 (76) 642-6165</Phone>
              </>
            ),
          },
        ]}
      />
      <MiniCenteredFooter />
    </StyledDiv>
  );
};
