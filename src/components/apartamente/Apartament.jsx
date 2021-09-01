import React from "react";
import { useParams } from "react-router-dom";
import { Data_c1 } from "./data.js";
import "./Apartament.scss";
import fullParter from "../../images/apartamente/c1/etaj_0/PLAN PARTER C1- CATALOG- V2.png";
import PlanAp from "../../images/apartamente/c1/etaj_0/AP 1-min.png";
import { FaWhatsapp } from "react-icons/fa";


const Apartament = () => {
  const { id } = useParams();

  return (
    <div className="contain">
      <div className="apartament">
        {Data_c1
          // eslint-disable-next-line eqeqeq
          .filter((apartament) => apartament.id == id)
          .map((filteredApartment) => (
            <div className="produs">
              <div className="fler">
                <div className="info-apartament">
                  <h1 className="title">{filteredApartment.title}</h1>
                  <h4>Apartament cu {filteredApartment.camere} camere</h4>
                  <h8>{filteredApartment.descriere}</h8>
                  <p className="firstt">Etaj : {filteredApartment.etaj}</p>
                  <p>Scara : {filteredApartment.scara}</p>
                  <p>Liber : {filteredApartment.liber}</p>

                  <a className="wapp-button" href="https://wa.me/0770258169">
                    <button>
                      <FaWhatsapp /> SUNATI
                    </button>
                  </a>      
                </div>

                <div className="imagine">
                     <img src={fullParter} alt="plan" />
                </div>
              </div>
              
                <div className="plan-detaliat">
                    <h1>Plan detaliat</h1>
                    <img src={PlanAp} alt="plan detaliat" />
                </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Apartament;
