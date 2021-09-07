import './App.css';
import ProductDescriptionLayout  from './components/ProductDescriptionLayout';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';
import ToastComponent from './components/ToastComponent';

function App() {
  return (
    <BrowserRouter className="app-style">
      <Helmet>
        <title>Ecommerce website</title>
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
        <meta name="keywords" content="shoes, sport, fitness, best-quality, online, shop"></meta>
      </Helmet>
      <ToastComponent></ToastComponent>
      <Switch>
        <Route path='/' component={ProductDescriptionLayout}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
