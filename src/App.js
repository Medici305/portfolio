import Container from "@material-ui/core/Container";
import "fontsource-roboto";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <Container style={{ color: "white" }}>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route
            path="/contact-
        
        me"
          >
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </Container>
  );
}

export default App;
