import React from 'react'
import styled from 'styled-components';
import LogoAwards01 from '../images/Logo01.png';
import LogoAwards02 from '../images/Logo02.png';
import LogoAwards03 from '../images/Logo03.png';

const Wrapper = styled.section`
  padding: 50px 0;
  background: #e3e4e6;
` 
const Title = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin: 0 0 50px 0;
`
const Wrapperlist = styled.ul`
  list-style: none;
  padding: 0;
`

const List = styled.li`
    &:first-child {
        top: 0;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
    }
`
const Awards = () => {
    return (
      <>
        <Wrapper>
          <Title>Awards</Title>
          <div className="container">
            <Wrapperlist className="row">
              <List className="col-sm-4">
                <img src={LogoAwards01} alt="Award" />
              </List>
              <List className="col-sm-4">
                <img src={LogoAwards02} alt="Award" />
              </List>
              <List className="col-sm-4">
                <img src={LogoAwards03} alt="Award" />
              </List>
            </Wrapperlist>
          </div>
        </Wrapper>
      </>
    )
}

export default Awards
