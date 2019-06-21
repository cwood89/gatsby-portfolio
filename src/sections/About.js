import React from 'react';
import { Box, Image, Flex } from 'rebass';
import ReactMarkdown from 'react-markdown';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const aboutContent = ` Hi, my name is Christopher Wood. 🌴 

  I'm a recent graduate from the Full Stack Coding BootCamp at UNC Charlotte.
My bootcamp experience was tough but extremely rewarding. I developed a passion 
for code and realized how far that passion has allowed me to push myself. The
more I learn, the more my passion grows, and the constant learning is what's 
going to keep me hooked forever. 

  I've learned so much from so many people in my coding journey and I plan on paying
it forward. I hope to one day use my skills to help people and make a difference in 
the world.

Feel free to email me at: **ctwood89(at)gmail(dot)com**

  Some of my skills 💪:

  - [MongoDB](https://www.mongodb.com/) - a document oriented database program.
  - [Express](https://expressjs.com//) - a web framework for node.
  - [React](https://reactjs.org/) - a frontend javascript libary.
  - [Node](https://nodejs.org/en/) - an enviroment which uses javascript to write server side code.
`

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;
  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="👋" label="wave" />
    <StaticQuery
      query={graphql`
      query {
        file(relativePath: { eq: "chris.jpg" }) {
          childImageSharp {
              fixed(width: 400, height: 400 quality: 100) {
                src
                width
                height
            }
          }
        }
      }
    `
      }
      render={data => {
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutContent}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade right>
                <ProfilePicture
                  src={data.file.childImageSharp.fixed.src}
                  alt="picture of me"
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
