import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { AboutUS } from "./about-us";
import { Navbar } from "./navbar";
import { Header } from "./header";

const Index = () => {
  return (
    <div>
      {/*<Navbar />*/}
      <h1>This is the index page</h1>

      <Link to="/entry/amilcar">Entry de Amilcar</Link>
      <br />
      <Link to="/entry/lorena">
        <button>Entry Lorena</button>
      </Link>
      <br />

      <a href="/entry/josue">Entry a Josue</a>

      <a href="https://wikipedia.org" target="_blank">
        Ir a wikipedia
      </a>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Link to="/">Go to index</Link>
      <h1>This is the About page</h1>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div>
      <Link to="/">Go to index</Link>
      <h1>This is the contact us Page</h1>
    </div>
  );
};

const Entry = (props) => {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go to back
      </button>
      <h1>Yo me llamo {props.match.params.entry_name}</h1>
    </div>
  );
};

const AnotherEntry = () => {
  return (
    <div>
      <Link to="/">Go to index</Link>
      <h1>Another Entry</h1>

      <div>
        <h2>Nuestras entradas son</h2>
        <Link to="/entry/amilcar">Entry de Amilcar</Link>
        <br />
        <Link to="/entry/lorena">
          <button>Entry Lorena</button>
        </Link>
        <br />

        <a href="/entry/josue">Entry a Josue</a>
      </div>
    </div>
  );
};

//create your first component
export function Home() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route path="/about/us" component={AboutUS} />
          <Route path="/contact-us" component={ContactUs} />
          <Route exact path="/entry" component={AnotherEntry} />
          <Route path="/entry/:entry_name" component={Entry} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
