import './App.css';
import back from './assets/back.png';
import mainlogo from './assets/mainImg.png'
import star from './assets/star.png'
import emptyStar from './assets/emptyStar.png'
import food from './assets/food.png'
import camera from './assets/camera.png'
import renz from './assets/renz.png'
import cButton from './assets/closeButton.png'
function Header() {
  return(
      <div style={hStyle.mainImg}>
        <div style={hStyle.content}>소융대 비빔면+삼겹살</div>
        <div style={hStyle.date}>B-1</div>
      </div>
  );
}
function Section() {
  return(
      <div style={bStyle.container}>
        <div style={bStyle.starContent}>
          <img src={star} alt="star" style={bStyle.marginStar}/>
          <img src={star} alt="star" style={bStyle.marginStar}/>
          <img src={star} alt="star" style={bStyle.marginStar}/>
          <img src={star} alt="star" style={bStyle.marginStar}/>
          <img src={emptyStar} alt="emptyStar"/>
        </div>
        <div style={bStyle.review}><span style={bStyle.reviewContent}>솔직한 리뷰를 작성해주세요!</span></div>
        <div style={bStyle.addImg}>
          <img src={camera} alt="camera" style={bStyle.camera}/>
          <img src={renz} alt="renz" style={bStyle.renz}/>
          <span style={bStyle.addContent}>사진 추가</span>
        </div>
        <div style={bStyle.setImg}>
          <img src={cButton} alt="close" style={bStyle.closeButton}/>
        </div>
        <div style={bStyle.setImg2}>
          <img src={cButton} alt="close" style={bStyle.closeButton}/>
        </div>

        <div style={bStyle.addReview}><span style={bStyle.buttonContent}>리뷰작성</span></div>
      </div>
  );
}

function App() {
  return (
      <div className="App" style={temp.wrap}>
        <div className="inner-title" style={temp.header}>
          <img src={back} style={temp.imgStyle} alt="back"/>
          <span style={temp.title}>리뷰 남기기</span>
        </div>
        <Header></Header>
        <Section></Section>
      </div>
  );
}

export default App;

const temp = {
  wrap : {
    position: 'relative', backgroundColor: "#f4f4f4", width: "375px", height: "775px", border: '1px solid black',
  },

  imgStyle: {
    width: "15px", height: "17px", position: 'absolute', left: '20px',
  },

  header: {
    position: 'relative', backgroundColor: '#fff', padding: '15px', textAlign: 'center',
  },
  title: {
    fontSize: '18px', fontWeight: 'bold',
  }
}

const hStyle = {
  mainImg: {
    position: 'relative', width: 375, height: 219, backgroundImage: `url(${mainlogo})`,
  },
  content: {
    position: 'absolute', width: '100%', color: '#fff', fontWeight: 'bold',
    fontSize: 24, textAlign: 'center', top: '50%', transform: 'translateY(-50%)',
  },
  date: {
    position: 'absolute', color: '#fff', fontSize: 14, fontWeight: 'bold',
    bottom: 10, left: '50%', transform: 'translateX(-50%)',
  }
}

const bStyle = {
  container: {
    position: 'absolute', bottom: 0, width: 375, height: 478, backgroundColor: '#fff',
  },
  starContent: {
    textAlign: 'center', marginTop: 30,
  },
  marginStar: {
    marginRight: 12.8,
  },
  review: {
    position: 'absolute', width: 327, height: 142, backgroundColor: '#f9f9f9',
    borderRadius: '10px', left: 24, top: 82,
  },
  reviewContent: {
    display: 'block', fontWeight: 'normal', fontSize: 14, color: '#938E8E', padding: 5,
  },
  addImg: {
    position: 'absolute', width: 102, height: 102, backgroundColor: '#fff',
    border: '1px solid #DDD', borderRadius: 3, top: 249, left: 24,
  },
  setImg: {
    position: 'absolute', width: 101, height: 102, left: 137, top: 249, backgroundImage: `url(${food})`
  },
  setImg2: {
    position: 'absolute', width: 101, height: 102, left: 250, top: 249, backgroundImage: `url(${food})`
  },
  camera: {
    position : 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
  },
  renz:{
    position : 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
  },
  addContent: {
    fontWeight: 500, fontSize: 12, color: '#333', position : 'absolute',
    left: '50%', bottom:0, transform: 'translate(-50%,-100%)',
  },
  closeButton: {
    position: 'absolute', right:7, top:6,
  },
  addReview: {
    position:'absolute', width:326, height:43, left:25, top:381,
    background: 'linear-gradient(94.03deg, #82C3FF 0%, #C464FF 100%)',
    boxShadow: '0px 1px 14px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
  },
  buttonContent: {
    position: 'absolute', left: '50%', top:'50%',transform: 'translate(-50%,-50%)',
    color: '#fff', fontSize:18, fontWeight:500,
  }
}