import './App.css';
import Header from './component/Header.js'
import Body from './component/Body1.js' 
import Footer from './component/Footer.js'  
import BodyState from './component/BodyState.js'
import BodyEvent from './component/BodyEvent.js'
import BodyState2 from './component/BodyState2.js';  



function ChildComp() {
  return <div>child component</div>
}


function App() {

  // const name = "홍길동";
  const BodyProp = {
    name: "홍길순",
    location: "부산"
    //favorList: ["파스타","빵","떡뽂이"]
  }

  return (
    <div className="App"> 
      <Header />
      {/* <Body name={name} location={"부산"}  /> */}
      {/* <Body {...BodyProp} /> */}

      {/* Pros로 컴포넌트 전달 */}
      {/* <Body  {...BodyProp} > 
        <ChildComp />
      </Body> */}

      <hr />
      {/* <BodyEvent /> */}
      <BodyState2 />

      <Footer />
    </div>

  );
}

export default App;