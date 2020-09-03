import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Card , Container, Row, Col } from "react-bootstrap"
import Image from "gatsby-image"
import styled from 'styled-components'
import imgBg from "../images/BG-5.jpg"

const Wrapper = styled.div`
  padding: 50px 0;
  background: url(${imgBg}) fixed left top repeat;
  position: relative;
}
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin: 0;
  color: #333;
  text-align: center;
`
const SubTitle = styled.h3`
  font-size: 1.5em;
  color: #333;
  text-align: center;
  padding: 30px 0 50px 0;
  margin: 0;
  font-weight: normal;
`
const WrapperList = styled.ul`
  margin-left: -15px;
  margin-right: -15px;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  li {
    width: 20%;
    float: left;

    &:hover {
      h4 {
        margin: 0;
        display: inline-block;
        opacity: 0;
        margin: 0;
        padding: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        text-indent: -9999px;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        -webkit-transition: all 500ms ease-in-out;
        -moz-transition: all 500ms ease-in-out;
        -ms-transition: all 500ms ease-in-out;
        -o-transition: all 500ms ease-in-out;
        transition: all 500ms ease-in-out;
        background: rgba(0, 0, 0, 0.7);
      }

      h5 {
        display: inline-block;
        top: 15%;
        opacity: 0;
        margin: 0;
        padding: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        text-indent: -9999px;
        overflow: hidden;
        position: absolute;
        left: 0;
        -webkit-transition: all 500ms ease-in-out;
        -moz-transition: all 500ms ease-in-out;
        -ms-transition: all 500ms ease-in-out;
        -o-transition: all 500ms ease-in-out;
        transition: all 500ms ease-in-out;
      }

      p {
        text-align: center;
        display: inline-block;
        top: 50%;
        margin-top: -50px;
        line-height: 1.6;
        opacity: 0;
        margin: 0;
        padding: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        text-indent: -9999px;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        -webkit-transition: all 500ms ease-in-out;
        -moz-transition: all 500ms ease-in-out;
        -ms-transition: all 500ms ease-in-out;
        -o-transition: all 500ms ease-in-out;
        transition: all 500ms ease-in-out;
      }
    }
    img {
      width: 100%;
      position: relative;
      z-index: 1;
      display: block;
    }

    h4 {
      margin: 0 0 20px;
      display: none;
    }

    h5 {
      margin-bottom: 30px;
      display: none;
    }

    p {
      text-align: center;
      display: none;
    }
  }
`


const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      allTeamJson {
        edges {
          node {
            id
            position
            title
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allSuitsJson {
        edges {
          node {
            id
            position
            title
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const { edges: memberData } = data.allTeamJson; 
  const { edges: suitsData } = data.allSuitsJson 
  return (
    <>
      <Wrapper name="TEAM">
        <div className="content-team">
          <Title>We are a Team of Developers & Suits</Title>
          <SubTitle>The Developers</SubTitle>
          <WrapperList>
            <Container>
              <Row>
                {memberData.map(member => {
                  const {
                    id,
                    position,
                    title,
                    description,
                    image,
                  } = member.node
                  return (
                    <Col key={id} sm={6} md={4} className="mb-5">
                      <Card className="h-100">
                        <Image fluid={image.childImageSharp.fluid} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Subtitle>{position}</Card.Subtitle>
                          <Card.Text>{description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </Container>
          </WrapperList>
          <SubTitle>The Suits</SubTitle>
          <WrapperList>
            <Container>
              <Row>
                {suitsData.map(suits => {
                  const { id, position, title, description, image } = suits.node
                  return (
                    <Col key={id} sm={6} md={4} className="mb-5">
                      <Card className="h-100">
                        <Image fluid={image.childImageSharp.fluid} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Subtitle>{position}</Card.Subtitle>
                          <Card.Text>{description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </Container>
          </WrapperList>
        </div>
      </Wrapper>
    </>
  )
}

export default Team
