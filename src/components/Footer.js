import React from 'react'
import styled from 'styled-components'
import iconFacebook from '../images/SocialIcon-02.png'
import iconTwitter from '../images/SocialIcon-04.png'


const Wrappder = styled.footer`
  padding: 30px 0;
  background: #1a2127;
  color: #fff;
`
const Title = styled.h2`
  font-size: 2.5em;
  margin: 0 0 30px;
  color: #5d6063;
`
const Text = styled.dl`
  margin: 0;
  overflow: hidden;

  dt {
    float: left;
    clear: both;
  }
  dd {
    overflow: hidden;
    margin-left: 80px;
  }
`
const SocialLink = styled.div`
  ul {
    list-style: none;
    padding: 53px 0 0;
    margin-left: -10px;

    li {
      float: left;
      margin-left: 10px;
      transition: 1s;

      a {
        display: block;
        width: 60px;

        &:hover {
            opacity: 0.7;
        }

        img {
          width: 100%;
        }
      }
    }
  }
`

const Footer = () => {
    return (
      <Wrappder>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Title>CONTACT US</Title>
              <Text>
                <dt>Phone:</dt>
                <dd>+66-2-0246687</dd>
                <dt>Email:</dt>
                <dd>
                  inquiries@salweensolutions.com <br />
                  Feel free to chat with us
                </dd>
              </Text>
            </div>
            <div className="col-sm-4">
              <Title>LOCATION</Title>
              <p>
                3 Promphan 3 Building, 13th Floor, Unit 1308 - 1312
                <br />
                Ladphrao Soi 3, Ladphrao Road, Chompol,
                <br />
                Chatuchak, Bangkok 10900
                <br />
                Thailand
              </p>
            </div>
            <div className="col-sm-4">
              <SocialLink className="row">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/salweensolutions/">
                      <img src={iconFacebook} atl="Salweensolutions" />
                    </a>
                  </li>
                  <li>
                    <a href="https://mobile.twitter.com/salween">
                      <img src={iconTwitter} atl="Salweensolutions" />
                    </a>
                  </li>
                </ul>
              </SocialLink>
            </div>
          </div>
        </div>
      </Wrappder>
    )
}

export default Footer
