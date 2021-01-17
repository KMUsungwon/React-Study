import React, {useState} from 'react';
import './App.css';
import {Weather} from "./components/Weather";

function App() {
    const [cityName, setCity] = useState("");
    const [weathers, setWeathers] = useState("");
    const [images, setImg] = useState("");
    const [postCityName, setPostCity] = useState("");

    const getCity = (e) => {
        setCity(e.target.value);
    }

    const getWeather = async () => {
        await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=90148420274ab156a4b372cb991d351f')
            .then((res) => res.json())
            .then((res) => {
                setPostCity(res.name);
                setWeathers(res.weather[0].main);
                setImg('http://openweathermap.org/img/w/'+res.weather[0].icon+'.png');
            })
            .catch(err => alert("없는 도시입니다."));

    }

    return (
        <div style={styles.container}>
            <h1>나라별 도시 날씨 정보 받아오기~!</h1>
            <input type='text' placeholder='도시 이름 입력(영어로)' style={styles.inputCity} onChange={getCity}/>
            <input type='button' value='Click' style={styles.getButton} onClick={getWeather}/>
            <Weather
                postCity = {postCityName}
                weather = {weathers}
                image = {images}
            />
        </div>
    );
}

export default App;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputCity: {
        marginTop: 50,
        width: 300,
        height: 30,
        borderRadius: 5,
        textAlign: 'center',
        display: 'block'
    },
    getButton: {
        marginTop: 5,
        width: 100,
        height: 30,
        borderRadius: 5,
    },
}
