import React from 'react';
import styled, {keyframes} from 'styled-components';
import Photo from "../images/pic-01.png";
import {Row} from 'react-bootstrap';
import { ChevronDoubleDown } from "react-bootstrap-icons";
import { Link } from "react-scroll"

const ServiceWrap = styled.section`
  overflow: hidden;
  position: relative;
  padding: 50px 0;
`

const CompanyImages = styled.div`
  position: relative;
  min-height: 1px;
  padding: 0 15px;

  img {
    width: 100%;
  }
`
const CompanyText = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  padding: 12% 0 0;
  text-align: center;

  h3 {
    color: #69696b;
    font-weight: bold;
    margin: 30px 0;
    font-size: 1.5em;
  }
`
const TextSalween = styled.div`
  position: relative;
  margin-bottom: 50px;
  padding: 30px 0;

  &:before {
    content: "";
    background: #aaa;
    width: 200px;
    height: 1px;
    position: absolute;
    left: 50%;
    margin-right: -50%;
    bottom: 0;
    transform: translate(-50%, -50%);
  }
  h2 {
    color: #f38227;
    text-align: center;
    margin: 0 0 30px;
    font-size: 2.5em;
  }
  p {
    font-size: 1.3em;
        color: #69696B;
    }
    span {
        color: #F38227;
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
  color:#E3E4E6;
  height: 60px;
  margin-left: -30px;
  animation: ${animation} 2s infinite;
  -webkit-animation: ${animation} 2s infinite;
  -moz-animation: ${animation} 2s infinite;
  -o-animation: ${animation} 2s infinite;
`


const Introduction = () => {
    return (
      <>
        <ServiceWrap name="SERVICES">
          <Row>
            <CompanyImages className="col-md-8">
              <img src={Photo} alt="SALWEEN SOLUTIONS" />
            </CompanyImages>
            <CompanyText className="col-md-4">
              <TextSalween>
                <h2>SALWEEN SOLUTIONS</h2>
                <p>
                  has been <span>developing software</span>
                  <br />
                  used all over the world for over
                  <br />
                  ten years.
                </p>
              </TextSalween>
              <h3>We produce</h3>
              <p>
                web, mobile and desktop applications using a range of
                technologies.
              </p>
            </CompanyText>
            <BounceArrow>
              <Link
                activeClass="active"
                className="nav-link"
                to="TECHNOLOGIS"
                spy={true}
                smooth={true}
                duration={500}
              >
                <ChevronDoubleDown color="#E3E4E6" size={40} />
              </Link>
            </BounceArrow>
          </Row>
        </ServiceWrap>
      </>
    )
}

export default Introduction
