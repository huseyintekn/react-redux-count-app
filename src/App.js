import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import IncreaseConter from "./components/IncreaseConter";
import DecreaseConter from "./components/DecreaseConter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import {Row, Col} from "react-bootstrap"
function App() {
  return (
    <div className="App d-flex justify-content-md-center h-100">
      <Row>
          <Col md={12} className="mt-5">
              <Counter/>
          </Col>
          <div className="d-flex justify-content-md-center">
              <IncreaseConter/>
              <DecreaseConter/>
              <IncreaseByTwoCounter/>
          </div>
      </Row>
    </div>
  );
}

export default App;
