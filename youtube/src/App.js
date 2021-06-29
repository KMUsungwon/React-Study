import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display";
import './env/config'
import {YOUTUBE_API_KEY} from "./env/config";


function App() {
  const [search, setValue] = useState("");

  const [images, setImg] = useState("");
  const [titles, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const getValue = (e) => {
    setValue(e.target.value);
  }

  const getContent = async () => {
    await fetch(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&key=${YOUTUBE_API_KEY}&q=${search}&maxResults=1&`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
        .then((res) => res.json())
        .then((res) => {
          setImg(res.items[0].snippet.thumbnails.high.url);
          setTitle(res.items[0].snippet.title);
          setDesc(res.items[0].snippet.description);
          console.log(res.items[0].snippet);
        })
        .catch(err => alert("없음"));

  }

  return (
      <div style={styles.container}>
        <h1>유튜브 정보 가져오기</h1>
        <input type='text' placeholder='검색어를 입력해 주세요' style={styles.inputText} onChange={getValue}/>
        <input type='button' value='Click' style={styles.getButton} onClick={getContent}/>
        <Display
            image = {images}
            title = {titles}
            desc = {desc}
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
  inputText: {
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
