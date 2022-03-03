// /* global React ReactDOM */
import React from "react";
import { render } from "react-dom"; // or import ReactDOM
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

const App = () => {
  const theme = useState("#0000FF");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="" element={<SearchParams />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

// not JSX
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Crys",
//       animal: "Dog",
//       breed: "Terrier",
//     }),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Blah",
//       animal: "Bird",
//       breed: "Parrot",
//     }),
//   ]);
// };

// call createElement multiple times but only call render one time
// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));

// render will be called createRoot in v18

// react - one way data flow via props (from parent to child), data doesn't flow up
// - if i have a bug in my parent i know the child didn't cause it and i can rule out the child
