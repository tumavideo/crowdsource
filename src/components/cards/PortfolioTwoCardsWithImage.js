import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { Link } from "react-router-dom";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)((props) => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`,
]);
const CardColumn = tw(
  Column
)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

export default ({
  subheading = "Our Portfolio",
  headingHtmlComponent = (
    <>
      We're working on some <span tw="text-primary-500">cool projects.</span>
    </>
  ),
  description = "Working with NGOs, government, and other institutions in both the public and private sector.",
  textOnLeft = false,
}) => {
  const cards = [
    {
      imageSrc: "assets/portfolio/the_portal.jpg",
      company: "The Portal",
      type: "Jobs Portal",
      title: "Opportunities for all Zambian Youths",
      durationText: "Youth Day Initiative",
      locationText: "Zambia",
      link: "https://tumaworks.netlify.app",
      cardLinkText: "Pre-register",
    },
    {
      imageSrc: "assets/portfolio/tv_app.png",
      company: "TumaVideo",
      type: "Earn, connect, explore",
      title:
        "Pre-register to be notified as soon as the Tuma Video app goes live!",
      durationText: "3 months of on-going development",
      locationText: "Zambia",
      link: "http://tumavideo.com/",
      cardLinkText: "",
    },
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <Link
                  to="#"
                  onClick={() => {
                    window.open(card.link, "_blank");
                  }}
                  className="px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300"
                >
                  <CardImage imageSrc={card.imageSrc} />
                </Link>
                <CardText>
                  <CardHeader>
                    <Link
                      to="#"
                      onClick={() => {
                        window.open(card.link, "_blank");
                      }}
                      className="px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300"
                    >
                      <CardCompany>{card.company}</CardCompany>
                    </Link>
                    <Link
                      to="#"
                      onClick={() => {
                        window.open(card.link, "_blank");
                      }}
                      className="px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300"
                    >
                      <CardType>{card.type}</CardType>
                    </Link>
                  </CardHeader>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
