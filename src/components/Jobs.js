import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 50px 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #4fdcff),
    color-stop(1, #26a8e0)
  );
  background-image: -o-linear-gradient(bottom, #4fdcff 0%, #26a8e0 100%);
  background-image: -moz-linear-gradient(bottom, #4fdcff 0%, #26a8e0 100%);
  background-image: -webkit-linear-gradient(bottom, #4fdcff 0%, #26a8e0 100%);
  background-image: -ms-linear-gradient(bottom, #4fdcff 0%, #26a8e0 100%);
  background-image: linear-gradient(to bottom, #4fdcff 0%, #26a8e0 100%);
  color: #fff;
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
`
const Text = styled.p`
    text-align: center;
    font-size: 1.5em;
`
const Tester = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid #fff;
  padding: 15px 0;
  margin: 15px 0;
  border-top: 1px solid #fff;
`
const SubTitle = styled.h3`
  margin-bottom: 30px;
  font-size: 1.5em;
`
const WrappperList = styled.ul`
  margin: 0;
  padding-left: 20px;
  padding: 0 0 0 40px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`

const Joblist = styled.li`
  margin-bottom: 20px;
  font-size: 1.2em;
`

const Benefits = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  border-top: 1px solid #fff;
  padding-top: 15px;
  margin-top: 15px;
`

const Jobs = () => {
    return (
      <Wrapper id="Job">
        <div className="container">
          <Title>Jobs</Title>
          <Text>
            If you’re looking for a challenging career with an established and
            growing company, contact us
          </Text>
          <Tester>
            <SubTitle>QA Engineer</SubTitle>
            <WrappperList>
              <Joblist>
                Bachelor’s degree in Computer Science Degree or related fields
              </Joblist>
              <Joblist>Minimum 3 year experiences as QA Engineer</Joblist>
              <Joblist>
                Techniques used include integration testing, unit testing,
                monitoring and load testing, process automation, executable
                documentation, fitness functions, and deployment pipelines.
              </Joblist>
              <Joblist>
                Proficiency in relevant technologies : Cucumber tests (for C#
                and Javascript (web and mobile) backends), Ansible, TeamCity,
                K6.io, Prometheus, Wix Detox, and API Blueprint for specifying
                and mocking services
              </Joblist>
              <Joblist>
                Team player: train and empower developers to rely on testing
              </Joblist>
              <Joblist>
                Ability to research and evaluate technology in a fast-moving
                field
              </Joblist>
              <Joblist>Ability to work independently</Joblist>
              <Joblist>Ability to meet deadlines</Joblist>
            </WrappperList>
          </Tester>
          <div className="row">
            <div className="col-sm-4 text-left">
              <SubTitle>Software Developer</SubTitle>
              <WrappperList>
                <Joblist>C#</Joblist>
                <Joblist>Orchard CMS</Joblist>
                <Joblist>.NET MVC</Joblist>
              </WrappperList>
            </div>
            <div className="col-sm-4 text-left">
              <SubTitle>Frontend Developer</SubTitle>
              <WrappperList>
                <Joblist>ReactJS</Joblist>
                <Joblist>Angular</Joblist>
                <Joblist>Bootstrap, Less, Sass</Joblist>
              </WrappperList>
            </div>
            <div className="col-sm-4 text-left">
              <SubTitle>Mobile Developer</SubTitle>
              <WrappperList>
                <Joblist>React Native</Joblist>
                <Joblist>Cordova</Joblist>
                <Joblist>iOS</Joblist>
                <Joblist>Android</Joblist>
              </WrappperList>
            </div>
          </div>
          <Benefits>
            <SubTitle>Some of the benefits of working with us:</SubTitle>
            <WrappperList>
              <Joblist>
                Competitive salary depending upon work experiences
              </Joblist>
              <Joblist>A private Aetna Health Insurance</Joblist>
              <Joblist>12 holidays per year</Joblist>
              <Joblist>Annual trip (outing) with the team</Joblist>
              <Joblist>
                Working with great colleagues in an international and modern
                work environment
              </Joblist>
              <Joblist>
                Opportunities to learn the cutting edge of development
                technologies
              </Joblist>
              <Joblist>
                Flexible office hours ( start early - leave early )
              </Joblist>
            </WrappperList>
          </Benefits>
        </div>
      </Wrapper>
    )
}

export default Jobs
