import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Members = () => {
  const { members } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="members">
      <Container>
        <Title title="Members" />
        <div className="members-wrapper">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} distance="30px">
            <div className="members-wrapper__info">
              {members.map((member) => (
                <div className="member-container" key={member.name}>
                  <h2>
                    {member.name} - <span className="members__role">{member.role}</span>
                  </h2>
                  <p className="members-wrapper__info-text">{member.bio}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Members;
