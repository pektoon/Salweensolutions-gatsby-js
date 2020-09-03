import React from 'react'
import { ChevronDoubleDown } from "react-bootstrap-icons"
import styled, {keyframes} from 'styled-components';
import { Link } from "react-scroll"


const Hadertitle = styled.div`
  .header-title {
    font-size: 6vw;
    color: $base-color-white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 -50% 0 0;
    text-align: center;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  .header-button {
    background: transparent;
    border: 1px solid $base-color-white;
    color: $base-color-white;
    padding: 8px 0;
    display: block;
    text-align: center;
    width: 200px;
    font-size: 1.3;
    transition: 1s;
    position: absolute;
    top: 85%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    &:hover {
      opacity: 0.7;
      transition: 1s;
      background: #ccc;
      text-decoration: none;
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


const HeaderTitle = () => {
  return (
    <>
      <Hadertitle>
        <h2 className="header-title">
          We develop software <br />
          worldwide
        </h2>
        <BounceArrow>
          <Link 
              activeClass="active"
              className="nav-link"
              to="SERVICES"
              spy={true}
              smooth={true}
              duration={500}
          >
            <ChevronDoubleDown color="#fff" size={40} />
          </Link>
        </BounceArrow>
      </Hadertitle>
    </>
  )
}
export default HeaderTitle;