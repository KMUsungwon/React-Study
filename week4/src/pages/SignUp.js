import React, {useState} from 'react';

export function SignUp() {
    const [name, setName] = useState("");
    const [password, setPw] = useState("");
    const [mail, setMail] = useState("");
    const [first_name, setFirst] = useState("");
    const [last_name, setLast] = useState("");

    const setNickname = (event) => {
        setName(event.target.value);
    }
    const setPassword = (event) => {
        setPw(event.target.value);
    }
    const setEmail = (event) => {
        setMail(event.target.value);
    }
    const firstName = (event) => {
        setFirst(event.target.value);
    }
    const lastName = (event) => {
        setLast(event.target.value);
    }


    const getSignUp = async () => {
        const response = await fetch('https://react-js-sample-api.kmuwink.net/user/', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json',},
            body: JSON.stringify({
                username: name,
                email: mail,
                password: password,
                last_name: last_name,
                first_name: first_name
            }),
        });

        const result = await response.json();
        // console.log(result);

    }

    return (

        <>
            <h1 style={styles.title}>SignUp Page</h1>
            <p style={styles.title}>아이디 있으면 위에 로그인 누르세요</p>
            <div style={styles.container}>
                <div style={styles.inner_container}>
                    <span>Nickname</span>
                    <input type="text" value={name} onChange={setNickname}/>
                </div>
                <div style={styles.inner_container}>
                    <span>E-mail</span>
                    <input type="email" value={mail} onChange={setEmail}/>
                </div>
                <div style={styles.inner_container}>
                    <span>Password</span>
                    <input type="password" value={password} onChange={setPassword}/>
                </div>
                <div style={styles.inner_container}>
                    <span>first_name</span>
                    <input type="text" value={first_name} onChange={firstName}/>
                </div>
                <div style={styles.inner_container}>
                    <span>last_name</span>
                    <input type="text" value={last_name} onChange={lastName}/>
                </div>

                <button onClick={getSignUp}>SignUp</button>
            </div>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '60vh',
        justifyContent: 'center',
        alignItems: 'center',
    },

    inner_container: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        textAlign: 'center',
    },

}
