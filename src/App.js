
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="search">
        <input type="text" placeholder="검색어를 입력하세요."/>
          <button>검색</button>
      </div>
        <div className="menu">
            <div className="mail">메일</div>
            <div className="cafe">카페</div>
            <div className="blog">블로그</div>
            <div className="shopping">쇼핑</div>
            <div className="news">뉴스</div>
            <div className="money">증권</div>
            <div className="house">부동산</div>
            <div className="map">지도</div>
            <div className="webtoon">웹툰</div>
            <div className="chi">치지직</div>
        </div>

    </div>
  );
}

export default App;
