import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import { StyledDiv } from "helpers/PageWrapper";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <StyledDiv>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Lusaka",
            description: (
              <>
                <Address>
                  <AddressLine>46 Kudu Road</AddressLine>
                  <AddressLine>Kabulonga, LUN 10101</AddressLine>
                </Address>
                <Email>info@tumavideo.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "Lusaka",
            description: (
              <>
                <Address>
                  <AddressLine>20 Lukanga Road</AddressLine>
                  <AddressLine>Roma, LUN 10101</AddressLine>
                </Address>
                <Email>info@tumavideo.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </StyledDiv>
  );
};
