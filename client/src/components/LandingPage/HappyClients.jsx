import React, { useState} from "react";
import { clientName, clientQuotes, clientImages } from "../../assets/data";
import { LuArrowRightCircle } from "react-icons/lu";

const HappyClients = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="clients">
      <h1>Our Happy Clients</h1>
      <p>
        Food may be our love language, but words of affirmation always make us
        ecstatic! Read what our happy clients have to say about how we made
        their day great.
      </p>
      <div className="client-img-text">
        <img src={clientImages[index]} alt="" key={index}></img>
        <div className="client-text">
          <h3>{clientQuotes[index]}</h3>
          <p>{clientName[index]}</p>
          <div className="clients-bottom">
            <div className="buttons">
              <div className={`inner-buttons ${index === 0 ? "client-active" : ""}`} onClick={()=>setIndex(0)}></div>
              <div className={`inner-buttons ${index === 1 ? "client-active" : ""}`} onClick={()=>setIndex(1)}></div>
              <div className={`inner-buttons ${index === 2 ? "client-active" : ""}`} onClick={()=>setIndex(2)}></div>
              <div className={`inner-buttons ${index === 3 ? "client-active" : ""}`} onClick={()=>setIndex(3)}></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                marginTop: "-15px",
              }}
              onClick={() => setIndex((index + 1) % 4)}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "15px",
                  whiteSpace: "nowrap",
                }}
              >
                next testimonial
              </p>
              <LuArrowRightCircle
                style={{ color: "white", fontSize: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
