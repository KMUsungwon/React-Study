import React from 'react';
import {TimeLinePage} from './pages/TimeLinePage';
import {MyPage} from './pages/MyPage';
import {MainPage} from './pages/MainPage'
import {Route, Switch, Link} from "react-router-dom";
import './App.css'


function App() {
  return (
      <div>
          <ul className='gnb'>
              {/*Link는 페이지 리로드 없이 바로 이동*/}
              <li className='inner-gnb'><Link to="/" style={{textDecoration: 'none', color: 'black'}}>메인페이지</Link></li>
              <li className='inner-gnb'><Link to="/timeLine" style={{textDecoration: 'none', color: 'black'}}>타임라인</Link></li>
              <li className='inner-gnb'><Link to="/myPage" style={{textDecoration: 'none', color: 'black'}}>마이페이지</Link></li>
          </ul>
          <Switch>
              <Route exact path="/"><MainPage></MainPage></Route>
              <Route path="/timeLine"><TimeLinePage></TimeLinePage></Route>
              <Route path="/myPage"><MyPage></MyPage></Route>
              <Route path="/">404 Not Found</Route>
          </Switch>


      </div>

  );
}

export default App;
