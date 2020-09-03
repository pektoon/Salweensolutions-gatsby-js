import React from 'react';
import styled from 'styled-components';
import imgBg from "../images/BG-4.png";
import msGold from "../images/logo-ms-gold.png"
const Wrapper = styled.section`
  background: url(${imgBg}) fixed left top no-repeat;
  background-size: cover;
  position: relative;
`
const AreaInner = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 150px 0 80px;
`
const Title = styled.h2`
  font-size: 2.5em;
  margin: 0 0 30px;
  text-align: center;
  color: #fff;
`
const Subtitle = styled.h3`
  text-align: center;
  color: #fff;
  padding-bottom: 50px;
  font-size: 1.5em;
`

const Basearea = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin-left: -50px;
    text-align: center;
    overflow: hidden;

    li {
      display: inline-block;
      margin: 0 0 50px 50px;
      border: 1px solid #fff;
      padding: 10px 40px;
      color: #fff;
      font-size: 1.3em;
    }
  }
`
const Msgold = styled.li`
  position: relative;
  &:before {
    content: "";
    background: url(${msGold}) no-repeat left top;
    background-size: 100% 100%;
    width: 110px;
    height: 41px;
    position: absolute;
    right: 3px;
    top: 3px;
  }
`

const Headquarter = () => {
    return (
      <>
        <Wrapper name="ABOUT">
          <AreaInner>
            <div className="container">
              <Title>Headquarter in Bangkok</Title>
              <Subtitle>
                One of Thailand’s cutting edge software development companies
              </Subtitle>
              <Basearea>
                <ul>
                  <li>Test Driven Development</li>
                  <li>Agile Methodologies</li>
                  <li>Continuous Integration</li>
                  <li>End to end testing</li>
                  <Msgold>Microsoft Gold Partners</Msgold>
                </ul>
              </Basearea>
              <Title>
                We have generated award-winning software products since 2006.
              </Title>
              <Subtitle>
                Our software has been awarded 8 AVA Digital awards including a
                platinum trophy for Web-Based Production Mobile App for
                Entertainment and an International Hermes Creative Award for
                Mobile Conference/Event App.
              </Subtitle>
            </div>
          </AreaInner>
        </Wrapper>
      </>
    )
}

export default Headquarter
