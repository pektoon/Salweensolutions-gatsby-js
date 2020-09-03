import React from 'react'
import styled, {keyframes} from 'styled-components'
import imgBg from "../images/BG-3.png"
import { ChevronDoubleDown } from "react-bootstrap-icons"
import { Link } from "react-scroll"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"


const Wrapper = styled.section`
  padding: 50px 0 50px;
  color: #fff;
  text-align: center;
  background: #1988bd url(${imgBg}) fixed no-repeat left top;
  background-size: cover;
  position: relative;
  text-align: center;
`
const Title = styled.h2`
  margin: 0 0 50px;
  font-size: 2.5em;
  text-align: center;
  color: #fff;
`
const Inner = styled.div`
  border: 1px solid #1988bd;
  border-radius: 5px;
  padding: 50px 20px;
  background: #0372a7;

  ul {
    margin-left: -15px;
    margin-right: -15px;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;

    li {
      position: relative;
      min-height: 1px;
      padding-left: 15px;
      padding-right: 15px;
      position: relative;
      min-height: 1px;
      padding-left: 15px;
      padding-right: 15px;
      margin: 0 0 30px;
      color: #fff;

      img {
        margin-bottom: 30px;
        height: 80px;
      }
    }
  }
`

const animation = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-10px);}
`

const BounceArrow = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  width: 60px;
  height: 60px;
  margin-left: -30px;
  animation: ${animation} 2s infinite;
  -webkit-animation: ${animation} 2s infinite;
  -moz-animation: ${animation} 2s infinite;
  -o-animation: ${animation} 2s infinite;
`

const Technologies = () => {
  const data = useStaticQuery(graphql`
    query {
      allTechnologiesJson {
        edges {
          node {
            id
            title
            image {
              childImageSharp {
                fixed(width: 80, height: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
    const { edges: techData } = data.allTechnologiesJson ;

    return (
      <>
      <Wrapper name="TECHNOLOGIS">
        <Title>Technologies</Title>
        <div className="container">
          <Inner>
            <ul className="row">
              {techData.map(tech => {
                const { id, title,  image } = tech.node;
                return (
                  <li key={id} className="col-sm-2">
                    <Image fixed={image.childImageSharp.fixed} />
                    <br />
                    {title}
                  </li>
                )
              })}
            </ul>
          </Inner>
        </div>
        <BounceArrow>
          <Link
            activeClass="active"
            className="nav-link"
            to="TEAM"
            spy={true}
            smooth={true}
            duration={500}
          >
            <ChevronDoubleDown color="#FFF" size={40} />
          </Link>
        </BounceArrow>
      </Wrapper>
    </>
    )
}

export default Technologies
