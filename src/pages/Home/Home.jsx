import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import StartCoursesImg from "../../utils/images/start-courses-img.jpg";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.jpg";
import Blog3Img from "../../utils/images/blog3-img.jpg";

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "Yangilik 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 2,
    img: [Blog2Img],
    title: "Yangilik 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 3,
    img: [Blog3Img],
    title: "Yangilik 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
];

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Xush kelibsiz!</h2>
          <h1 className="text-center fw-semibold">
            Bizning bilim dargohimizga
          </h1>
          <p>
            Bizning bilim dargohimizda sizning farzandingiz kelajagi uchun zarur
            bo'lgan bilimi, ko'nikmali, malakali va albatta jamiyatimiz uchun
            yetuk shaxs bo'lib yetishib chiqishiga biz kafolot beramiz va bu
            yo'ldagi har qanday to'siqlarni birgalikda yengib o'tishga yordam
            beramiz. Biz bilan farzandingiz kelajagini quring.{" "}
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button
                type="button"
                className="btn_light_blue btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Barcha bo'limlar
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Biz bilan aloqa
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">
                Bizning bilim dargohimiz Derektorining nutqi
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, placeat.
              </p>
              <Link to="/courses">
                <button
                  type="button"
                  className="btn_light_blue btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Bundan tashqari
                </button>
              </Link>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <iframe
                width="439"
                height="325"
                src="https://www.youtube.com/embed/mEqJwJwu80A"
                title="Sambutan Kepala Sekolah &amp; Profil SMP DU 1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* <img src={StartCoursesImg} className="img-fluid" alt="" /> */}
            </div>
          </div>  
        </div>
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center mb-5">Yangiliklar va kun tartibi</h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button
              type="button"
              className="btn_light_blue btn-danger btn-lg mt-5"
            >
              Ko'proq yangilik
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
