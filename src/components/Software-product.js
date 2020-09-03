import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import { Container, Row, Col } from "react-bootstrap";
import Image from "gatsby-image"


const SoftwareWrapper = styled.div`
  text-align: center;
  background: #e3e4e6;
  padding: 50px 0;
`
const TitleSoftwareInner = styled.div`
  margin: 0 0 50px;
  color: #3a3a3a;
  font-size: 2.5em;
`

const ImageIcon = styled.div`
  margin: 0 auto 30px;
  max-width: 60%;
`


const SoftwareProduct = () => {
  const data = useStaticQuery(graphql`
    query {
      allSoftwareJson {
        edges {
          node {
            description
            id
            title
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

    const { edges: softwareData } = data.allSoftwareJson 
  

    return (
      <>
        <SoftwareWrapper name="SOFTWARE">
          <Container >
              <TitleSoftwareInner className="title-software-inner">
                <h2>Our software products</h2>
              </TitleSoftwareInner>
              <Row>
                {softwareData.map(softsware => {
                  const { id, description, title, image } = softsware.node
                  return (
                    <Col sm={4} key={id}>
                      <section>
                        <ImageIcon>
                          <Image
                            fluid={image.childImageSharp.fluid}
                          />
                        </ImageIcon>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </section>
                    </Col>
                  )
                })}
              </Row>
            </Container >
        </SoftwareWrapper>
      </>
    )
}

export default SoftwareProduct
