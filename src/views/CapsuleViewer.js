import React from 'react';
// import Button from './IndexSections/Buttons.js';
import { Button } from "reactstrap";
import TextField from '@material-ui/core/TextField';
import Particles from 'react-tsparticles';

import '../assets/scss/capsule-viewer.scss';
import Container from 'reactstrap/lib/Container';

import testPhotoOne from "assets/testphotoone.JPG"
import testPhotoTwo from "assets/testphototwo.JPG"

class CapsuleViewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            capsuleOpened: false,
            particleVisiblity: "hidden"
        }
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    openCapsule() {
        this.setState({
            capsuleOpened: true,
            particleVisiblity: "visible"
        }, () => {
            this.refs.capsi.style.display = "none";
        })
    }

    particlesLoaded(container) {
        console.log(container);
        container.addClickHandler((event, particles) => this.particleClicked(event, particles))
    }

    particleClicked(event, particles) {
        console.log(event, particles)
    }

    particlesInit(main) {
        console.log(main)
    }

    render() {
        return (
            <div style={{maxWidth: "100%", overflow: "hidden"}}>  
                <div ref="capsicumParticles"  style={{overflow: "hidden"}}>
                    <Container style={{}}>
                    {/* <Particles
                    init={(m) => this.particlesInit(m)} 
                    loaded={this.particlesLoaded}
                    options={{
                        particles: {
                            number: {
                                value: 8,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            line_linked: {
                                enable: false
                            },
                            move: {
                                speed: 1,
                                out_mode: "out"
                            },
                            shape: {
                                type: [
                                    "image",
                                ],
                                images: [
                                    {
                                        src: testPhotoOne,
                                        height: 10,
                                        width: 10
                                    },
                                    {
                                        src: testPhotoTwo,
                                        height: 10,
                                        width: 10
                                    }
                                ]
                            },
                            "color": {
                                "value": "#CCC"
                            },
                            "size": {
                                "value": 30,
                                "random": false,
                                "anim": {
                                    "enable": true,
                                    "speed": 4,
                                    "size_min": 10,
                                    "sync": false
                                }
                            }
                        },
                        retina_detect: false
                    }}  */}
                    <Particles 
                        init={(m) => this.particlesInit(m)} 
                        loaded={(c) => this.particlesLoaded(c)}
                        
                        
                        options={{
                        fpsLimit: 60,
                        backgroundMode: {
                        enable: true,
                        zIndex: 0
                        },
                        particles: {
                        number: {
                            value: 80,
                            density: {
                            enable: true,
                            area: 800
                            }
                        },
                        color: {
                            value: "#ff0000",
                            animation: {
                            enable: true,
                            speed: 20,
                            sync: true
                            }
                        },
                        shape: {
                            type: [
                                "image",
                                "circle"
                            ],
                            images: [
                                {
                                    src: testPhotoOne,
                                },
                                {
                                    src: testPhotoTwo,
                                } 
                            ]
                        },
                        stroke: {
                            width: 0
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            animation: {
                                enable: false,
                                speed: 3,
                                minimumValue: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 20,
                            random: true,
                            animation: {
                                enable: false,
                                speed: 10,
                                minimumValue: 0.1,
                                sync: true
                            }
                        },
                        links: {
                            enable: true,
                            distance: 100,
                            color: "#d01717",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            random: false,
                            straight: false,
                            outMode: "out",
                            attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                            }
                        }
                        },
                        interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                            // onHover: {
                            //     enable: true,
                            //     mode: "repulse"
                            // },
                            resize: true
                        },
                        modes: {
                            grab: {
                            distance: 400,
                            links: {
                                opacity: 1
                            }
                            },
                            bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 0.8
                            },
                            repulse: {
                            distance: 200
                            },
                            push: {
                            quantity: 4
                            },
                            remove: {
                            quantity: 2
                            }
                        }
                        },
                        detectRetina: true,
                    }}

                    style={{
                        visibility: this.state.particleVisiblity,
                        position: "absolute",
                        left: "0",
                        top: "0"
                    }}
                    /> 
                    </Container>
                </div>
                {/* style={{
                            visibility: this.state.particleVisiblity,
                            position: "absolute",
                            left: "0",
                            top: "0"
                        }} */}
                <div ref="capsi" style={{display: "visible"}}>
                    <Container onClick={() => this.openCapsule()}>
                        <div class="capsicumPosition" ref="capsicum">
                            <div className="bg capsicumLockedAnim flex" ref="capsicumInner">
                                <div className="c" ref="capsicumOuter"></div>   
                            </div>
                        </div>
                        <br></br>
                        <h1 className="capsicumName">MFHS Graduation 2020</h1>
                        <p className="tapToExpand">Tap to expand</p>
                    </Container> 
                </div>
            </div>
        )
    }
}

export default CapsuleViewer;