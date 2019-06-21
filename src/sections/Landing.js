import React, { Fragment } from 'react';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import Resume from '../ChrisWoodResume.pdf';
import Contact from './Contact';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);
const roles = [
  "Creative \u{1f3a8}",
  "Driven \u{1f947}",
  "Passionate \u{1f525}"
]

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Fragment>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[5, 6, 8]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm Chris!`}
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[4, 5, 6]}
        mb={[3, 5]}
        textAlign="center"
      >
        <TextLoop>
          {roles.map(text => (
            <Text width={[300, 500]}>
              {text}
            </Text>
          ))}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        <Box mx={3} fontSize={[5, 6, 6]}>
          <SocialLink
            url="https://github.com/cwood89"
            name="Github"
            fontAwesomeIcon="github"
          />
        </Box>

        <Box mx={3} fontSize={[5, 6, 6]}>
          <SocialLink
            url="https://www.linkedin.com/in/cwood89/"
            name="LinkedIn"
            fontAwesomeIcon="linkedin"
          />
        </Box>

        <Box mx={3} fontSize={[5, 6, 6]}>
          <Contact />
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </Box>

        <Box mx={3} fontSize={[5, 6, 6]}>
          <SocialLink
            url={Resume}
            name="Resume"
            fontAwesomeIcon="id-card"
          />
        </Box>
      </Flex>

      <SectionLink section="about">
        {({ onClick }) => <MouseIcon onClick={onClick} />}
      </SectionLink>
    </Fragment>
  </Section.Container>
);

export default LandingPage;
