import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Pricing from "./page/Pricing";
import Compareplan from "./page/Compareplan";
import Courses from "./page/Courses";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import SingleCourse from "./page/SingleCourse";
import SingleBlog from "./page/SingleBlog";
import Privacypolicy from "./page/Privacypolicy";
import Mantor from "./page/Mantor";
import Faq from "./page/Faq";
import ScrollToTops from "./components/ScrollToTops";
import AdmissionForm from "./page/AdmissionForm";
import Index from "./views/index";

//scss
import "./assets/scss/hope-ui.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/customizer.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="singlecourse" element={<SingleCourse />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="singleblog" element={<SingleBlog />} />
          <Route path="privacypolicy" element={<Privacypolicy />} />
          <Route path="mantor" element={<Mantor />} />
          <Route path="faq" element={<Faq />} />
          <Route path="admissionform" element={<AdmissionForm />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/dashboard" element={<Index />} />
        </Routes>
        <ScrollToTops />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
