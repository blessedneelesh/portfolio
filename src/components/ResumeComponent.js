import React from 'react'

class Resume extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-7 offset-sm-1'>
                        <div className='resume ml-3'>
                            RESUME <hr className='bg-dark' />
                        </div>

                    </div>

                </div>
                <div className='row'>
                    <div className='col-12 col-sm-1'></div>
                    <div className='col-12 col-sm-7 ml-3'>
                        <div className='row mb-5'>
                            <div className="col-12 col-sm-3"><div className='aa'> Professional info</div></div>

                            <p className=" col-12 col-sm-9 p mt-3">
                                I am a student from Kantipur Engineering College,dhapakhel.
                                Have sound knowledge of web development tools like PHP and Java.
                                Self-disciplined and programming enthusiast with ability to work in group.

                            </p>

                        </div>
                        <hr className='bg-dark' />
                        <div className='row mb-5'>
                            <div className="col-12 col-sm-3"><div className='aa'>Work experience</div></div>

                            <p className=" col-12 col-sm-9 p mt-3">
                                I am a student from Kantipur Engineering College,dhapakhel.
                                Have sound knowledge of web development tools like PHP and Java.
                                Self-disciplined and programming enthusiast with ability to work in group.

                            </p>

                        </div>
                        <hr className='bg-dark' />
                        <div className='row mb-5'>
                            <div className="col-12 col-sm-3"><div className='aa'>Education</div></div>

                            <p className=" col-12 col-sm-9 p mt-3">
                                I am a student from Kantipur Engineering College,dhapakhel.
                                Have sound knowledge of web development tools like PHP and Java.
                                Self-disciplined and programming enthusiast with ability to work in group.

                            </p>

                        </div>

                    </div>
                    {/* <div className='col-12 col-sm-1 bg-primary'>d</div> */}
                    <div className='col-12 col-sm-2 bg-danger ml-5'>
                        <div>
                            <i class="fa fa-exclamation-circle fa-2x"></i>
                        </div>
                        <div class="e" style={{ fontSize: 25, marginTop: 5 }} >Skills</div>

                    </div>
                </div>



            </div>
        )
    }
}

export default Resume