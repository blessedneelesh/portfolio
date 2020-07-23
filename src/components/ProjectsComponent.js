import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap'
class Projects extends React.Component {
    render() {
        const project = this.props.projects.map((proj) => {
            return (
                <div>
                    <div className='row'>
                        <div className='col-12 col-sm-10 offset-sm-1'>
                            <div className='row'>
                                <div className='col-12 col-sm-7'>
                                    <div>
                                        <img src={proj.image} height='291px' width='490px' />
                                    </div>
                                </div>
                                <div className='col-12 col-sm-5'>
                                    <div className='row'>
                                        <div className="col-12 col-sm-12"><div className='pnum'>Project | {proj.id}</div> <hr className='bg-dark' /></div>
                                    </div>
                                    <div className='row ml-1'>
                                        <h6>{proj.title}</h6>
                                        <p style={{ fontSize: "95%" }}>
                                            {proj.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr className='bg-dark mt-5' />
                        </div>

                    </div>
                </div>
            )
        })
        return (

            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-10 offset-sm-1'>
                            <div className='project'>
                                PROJECTS <hr className='bg-dark' />
                            </div>
                        </div>
                    </div>
                    {project}
                </div>
            </div>
        )
    }
}

export default Projects