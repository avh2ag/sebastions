import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects, photos, videos } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    setActiveVideo(videos[0]);
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          {projects.map((project) => {
            const { title, info, info2, url, id, section } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text" id={section}>
                      <h3 className="project-wrapper__text-title accent">
                        {title || 'Project Title'}
                      </h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade right={isDesktop} bottom={isMobile} duration={1000} distance="30px">
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <iframe
                              src="https://open.spotify.com/embed/artist/2llQYWpEsMBFJDxFd3Tgx6"
                              width="500"
                              height="500"
                              frameBorder="0"
                              allowtransparency="true"
                              allow="encrypted-media"
                              title="Spotify Web Player"
                            />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
          <Row>
            <Col lg={12} sm={12}>
              <Fade right={isDesktop} bottom={isMobile} duration={1000} distance="30px">
                <div className="project-wrapper__text" id="videos">
                  <h3 className="project-wrapper__text-title accent">Videos</h3>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  {videos.map((video) => (
                    <button
                      style={{ fontSize: '1.5rem' }}
                      className="cta-btn cta-btn--hero"
                      key={video.name}
                      type="button"
                      onClick={() => {
                        setActiveVideo(video);
                        setPlaying(true);
                      }}
                    >
                      {video.name}
                    </button>
                  ))}
                </div>
                <div style={{ padding: '1rem' }}>
                  <ReactPlayer
                    controls
                    className="react-player"
                    playing={isPlaying}
                    url={activeVideo?.url}
                  />
                </div>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={12}>
              <Fade right={isDesktop} bottom={isMobile} duration={1000} distance="30px">
                <div className="project-wrapper__text" id="photos">
                  <h3 className="project-wrapper__text-title accent">Photos</h3>
                </div>
                <Carousel>
                  {photos.map(({ filename, alt }) => {
                    return (
                      <Carousel.Item key={filename}>
                        <ProjectImg alt={alt} filename={filename} />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
