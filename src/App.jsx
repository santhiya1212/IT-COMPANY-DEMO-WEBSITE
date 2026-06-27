import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Industries from "./components/Industries";
import Technologies from "./components/Technologies";
import Careers from "./components/Careers";
import Queries from "./components/Queries";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/products" element={<Products />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/technologies" element={<Technologies />} />

        <Route path="/careers" element={<Careers />} />

        <Route path="/queries" element={<Queries />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
