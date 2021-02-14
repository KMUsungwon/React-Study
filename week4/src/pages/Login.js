import React, {useState} from 'react';

export function Login() {
    const [name, setName] = useState("");
    const [password, setPw] = useState("");

    const setNickname = (event) => {
        setName(event.target.value);
    }
    const setPassword = (event) => {
        setPw(event.target.value);
    }

    const getLogin = async () => {
        const response = await fetch("https://react-js-sample-api.kmuwink.net/api-token-auth/", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username: name,
                password: password
            }),
        });
        const result = await response.json();
        localStorage.setItem("token", result.token);
    }

    return (

        <>
            <h1 style={styles.title}>Login Page</h1>
            <p style={styles.title}>아이디 없으면 위에 회원가입 누르세요</p>
            <div style={styles.container}>
                <div style={styles.inner_container}>
                    <span>Nickname</span>
                    <input type="text" value={name} onChange={setNickname}/>
                </div>
                <div style={styles.inner_container}>
                    <span>Password</span>
                    <input type="password" value={password} onChange={setPassword}/>
                </div>
                <button onClick={getLogin}>login</button>
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
