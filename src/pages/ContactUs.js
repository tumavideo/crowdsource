import React from "react";
import tw from "twin.macro";
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
                  <AddressLine>Suite 7, 46 Kudu Road</AddressLine>
                  <AddressLine>Kabulonga, LUN 10101</AddressLine>
                </Address>
                <Email>info@crowdsourcecreators.com</Email>
                <Phone>+260 (76) 642-6165</Phone>
              </>
            ),
          },
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
      <Footer />
    </StyledDiv>
  );
};
