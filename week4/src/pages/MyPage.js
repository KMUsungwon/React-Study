import React from 'react';
import './css/myPageDesign.css'
import user from './images/user.png'
import mail from './images/email.png'
import tel from './images/phone-call.png'
import school from './images/school.png'

export function MyPage(props) {
    return (
        <>
            <div className="container">
                <div className="icon">
                    <img src={user} className='icons'/>
                    <span>
                        임성원(SeongWon Lim) / 1998.03.27
                    </span>
                </div>

                <div className="icon">
                    <img src={mail} className='icons'/>
                    <span>
                        sungwontoto@kookmin.ac.kr
                    </span>
                </div>

                <div className="icon">
                    <img src={tel} className='icons'/>
                    <span>
                        010-7545-5896
                    </span>
                </div>

                <div className="icon">
                    <img src={school} className='icons'/>
                    <span>
                        국민대학교 소프트웨어융합대학 소프트웨어학부
                    </span>
                </div>

            </div>
        </>
    );
}