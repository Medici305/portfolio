import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import "fontsource-roboto";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Blog from "./pages/Blog";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FooterSection from "./components/FooterSection";
import ProjectDetail from "./pages/ProjectDetail";
import data from "./data";

function App() {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [siteInfo, setSiteInfo] = useState(data());
  return (
    <>
      <GlobalStyle />
      <Nav toggle={toggle} setToggle={setToggle} />
      <Container>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio siteInfo={siteInfo} setSiteInfo={setSiteInfo} />
            </Route>
            <Route path="/portfolio/:id">
              <ProjectDetail siteInfo={siteInfo} setSiteInfo={setSiteInfo} />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route path="/contact-me">
              <ContactMe />
            </Route>
          </Switch>
        </AnimatePresence>
      </Container>
      <FooterSection />
    </>
  );
}

export default App;
