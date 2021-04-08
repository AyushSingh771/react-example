import "./App.css";
import Product from "./component/LifeCycle/Product";
import Display from "./component/display";
import Form from "./component/Form/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HttpCall from "./component/HttpCall/HttpCall";
import Context from "./component/Context/CompA";
import UseEffect from "./component/UseEffect/UseEffect";
import { BrowserRouter } from "react-router-dom";
import Routing from "./component/Routing/Routing";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Display></Display>
        <Routing></Routing>
        <UseEffect></UseEffect>
        <Context></Context>
        <Product></Product>
        <Form></Form>
        <HttpCall></HttpCall>
      </BrowserRouter>
    </div>
  );
}

export default App;
