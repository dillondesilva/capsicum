import React from 'react';
import Particle from './Particle';

// Returns a particle with given properties
const DecorativeParticle = () => {
    return (
        <div>
            <div 
            style={{width: "5vh", height: "5vh", backgroundColor: "#000", borderRadius: "50%"}}>
            </div>
        </div>
    )
}

class Quanta extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: this.props.images,
            particles: []
        }

        this.numParticles = 80
    }

    // Returns a particle with given properties
    ImageParticle() {
        const selectedImage = Math.floor(Math.random() * this.state.images.length);
        return (
            <div>
                <img alt="" src={selectedImage}/>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.state.images)
        let particles = []
        // Generate particles
        for (let i = 0; i < this.numParticles; i++) {
            const randomImage = Math.floor(Math.random() * this.state.images.length);
            particles.push(this.state.images[randomImage]);
        }

        this.setState({
            particles: particles
        })
    }

    render() {
        return (
            <div style={this.props.style}>
                {
                    this.state.particles.map((particleImage) => {
                        return (
                            <Particle image={particleImage}></Particle>
                        )
                    })
                }
                {/* <DecorativeParticle/> */}
            </div>
        )
    }
}

export default Quanta