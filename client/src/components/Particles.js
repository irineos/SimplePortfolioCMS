import React, { Component } from 'react';
import Particles from 'react-particles-js';



class ParticlesBackground extends Component {

    render() {
        return (
            <Particles
                params={{
                    particles: {
						number: {
							value: 40,
							density:{
								enable: true,
								value_area: 900
							}
						},	
						shape: {
							type: 'circle',
							stroke: {
								width: 6,
								color: '#006699'
							}
						}
                },
                }}/>
           
            )
    }
}

export default ParticlesBackground;