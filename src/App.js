import './App.css';
import ProductDescriptionLayout  from './components/ProductDescriptionLayout';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';

function App() {
  return (
    <BrowserRouter className="app-style">
      <Helmet>
        <title>Ecommerce website</title>
      </Helmet>
      <Switch>
        <Route path='/' component={ProductDescriptionLayout}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
