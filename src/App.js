import React, { useState } from "react";
import "fontsource-roboto";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import GlobalStyle from "./components/GlobalStyle";
import Container from "@material-ui/core/Container";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FooterSection from "./components/FooterSection";
import ProjectDetail from "./pages/ProjectDetail";
import data from "./data";

function App() {
  const location = useLocation();
  const [siteInfo, setSiteInfo] = useState(data());
  return (
    <>
      <GlobalStyle />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home siteInfo={siteInfo} setSiteInfo={setSiteInfo} />
          </Route>
          <Route path="/:id">
            <Container>
              <ProjectDetail siteInfo={siteInfo} setSiteInfo={setSiteInfo} />
            </Container>
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
      </AnimatePresence>
      <FooterSection />
    </>
  );
}

export default App;
