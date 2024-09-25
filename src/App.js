import logo from "./logo.svg";
import "./App.css";
import imgPersonal from "../src/images/personal.jpg";
import imgPersonal01 from "../src/images/personal-01.png";
import imgLine from "../src/images/Line.png";
import imgFace from "../src/images/facebook.png";
import imgInstagram from "../src/images/Instagram.png";
import imgTiktok from "../src/images/tiktok.png";
import { Image } from "react-bootstrap";

function App() {
  const data = [
    {
      title: "Instagrams",
      url: "www.instargrams.com",
      img: `${imgInstagram}`,
    },
    {
      title: "Facebook",
      url: "www.facebook.com",
      img: `${imgFace}`,
    },
    {
      title: "Line",
      url: "www.line.com",
      img: `${imgLine}`,
    },
    {
      title: "Tiktok",
      url: "www.tiktok.com",
      img: `${imgTiktok}`,
    },
  ];
  return (
    <>
      <div
        // className="bg-white"
        style={{
          backgroundColor: "#608b9c",
          height: "200px",
        }}
      >
        <div className=" cover-img">
            <Image className="img-personal" 
            // src={imgPersonal} 
            src={imgPersonal01}
            />
        </div>
      </div>
      <div className="">
        <div className="background-black">
          <div className="contain-black">
            <div className="d-flex justify-content-center">
              <h5 className="text-name">Titawan Udhayananandh</h5>
            </div>
            <p className="text-secondary text-center text-position mt-0 mb-2">
              Content Creator
            </p>
            <div className="d-flex justify-content-center ">
              {data.map((d, i) => (
                <>
                  <a href={d.url}>
                    <Image className="img-social" src={d.img} />
                  </a>
                </>
              ))}
            </div>
            {data.map((d, i) => (
              <div className="items-box w-100 text-social">{d.title}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
