import React, {useState, useEffect} from 'react';
import './css/myPageDesign.css'
import user from './images/user.png'
import mail from './images/email.png'
import tel from './images/phone-call.png'
import school from './images/school.png'

export function MyPage() {
    const [myInfo, setInfo] = useState({
        nickname: '',
        email: '',
        last_name: '',
        first_name: '',
    });

    useEffect(() => {
        const server = async () => {
            const response = await fetch('https://react-js-sample-api.kmuwink.net/user/', {
                method: 'GET',
                headers: {
                    Authorization : 'Token ' + localStorage.getItem("token"),
                },
            }).then(res => res.json());

            for(let i=0; i<response.length; i++) {
                if(response[i].username === 'limsw') {
                    setInfo({
                        nickname: response[i].username,
                        email: response[i].email,
                        last_name: response[i].last_name,
                        first_name: response[i].first_name,
                    });
                }
            }
        }
        server();
    });
    return (
        <>
            <div className="container">
                <div className="icon">
                    <img src={user} className='icons'/>
                    <span>
                        {myInfo.nickname} / 1998.03.27
                    </span>
                </div>

                <div className="icon">
                    <img src={mail} className='icons'/>
                    <span>
                        {myInfo.email}
                    </span>
                </div>

                <div className="icon">
                    <img src={tel} className='icons'/>
                    <span>
                        {myInfo.first_name} / (성)
                    </span>
                </div>

                <div className="icon">
                    <img src={school} className='icons'/>
                    <span>
                        {myInfo.last_name} / (이름)
                    </span>
                </div>

            </div>
        </>
    );
}
