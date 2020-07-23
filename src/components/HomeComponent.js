import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='row home'>
                    {/* <div className='col-12 col-sm-1'>

                    </div> */}
                    <div className='col-12 col-sm-4 order-sm-first order-last offset-sm-1 mt-5'>
                    <img src="assets/images/ass.jpg" style={{borderRadius: "50%", height: "400px"}} class="mt-3" />

                    </div>
                    <div className='col-12 col-sm-5 right mt-5'>
                        <div className='row one'>
                        Hello,
                        </div>
                        <div className='row two'>
                        a bit about me:
                        </div>
                        <div className='row three'>
                        <Link to='/resume' className='three1 col-3'>MY RESUME</Link>
                        <Link to='/projects' className='three2 col-3'>MY WORK</Link>
                        <Link to='/resume' className='three3 col-3'>MY SKILLS</Link>
                        </div>
                        <div className='row '>
                            <p className='four'>lorem klsadfjakdlsf lks ajfdlksa jflkdasj flksadj dslka jfklsdafj ll ksdfj alsdfj lsd ka;fj
                                dksalfj aklsdjfaklsdfjksladfjslad;fjasldf  sdlkfjdslkf;ja klj kdsjf klsdjflksadjf;lasdfj
                                dsakfjksdlafjdslkfjaslkdfjjj esdkfj lksdjalkfjeoiuqpoiwfjsakldfjapfoaksdl jfalsdkfjasldkj
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-2'></div>
                </div>
            </div>
        )
    }

}

export default  Home