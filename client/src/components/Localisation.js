import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HospitalImage } from "../Data/Photo_du_centre";

// import acctof from "../images/pexels-ivan-samkov-4989168.jpg"
// import acctof2 from "../images/pexels-cottonbro-7585026.jpg"
// import acctof3 from "../images/logo.png"
import acctof4 from "../images/pexels-pavel-danilyuk-5998516.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "../CSS/Localisation.css";
// import { Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import {
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";

const Localisation = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content:
        "Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      title: "Title 4",
      content: "Contenido de tab 4.",
    },
  ];
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value = "string") => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  return (
    <div className="urgence">
      <h1>URGENCES</h1>
      <Tabs>
        <div className="hopitaux">
          <div className="hopitaux_left">
            <h3>HOPITAUX PROCHES</h3>

            <TabList className="hopitaux_left">
              <div
                className="different"
                style={{
                  backgroundImage: `url(${acctof4})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Tab>
                  <div className="card">
                    <span>Hopital de bé</span>
                    <p>à 1 km de chez vous</p>
                  </div>
                </Tab>
                <Tab>
                  <div className="card">
                    <span>Hopital de bé</span>
                    <p>à 1 km de chez vous</p>
                  </div>
                </Tab>
                <Tab>
                  <div className="card">
                    <span>Hopital de bé</span>
                    <p>à 1 km de chez vous</p>
                  </div>
                </Tab>
              </div>
            </TabList>
          </div>

          <div className="hopitaux_right">
            <h3>HOPITAL DE BÉ</h3>
            <TabPanel>
              <p>
                <div className="info_hopital">
                  <div className="visuel">
                    <div className="visuel1">
                      <h4>VISUEL DU CENTRE</h4>
                      <div className="card_visuel">
                        {HospitalImage.map((post) => {
                          return (
                            <div className="card">
                              <img
                                src={post.img}
                                style={{ width: "100%", height: "100%" }}
                                alt=""
                              />
                            </div>
                          );
                        })}
                        {/* <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
        </div> */}
                      </div>
                    </div>

                    <div className="spécialités">
                      <h4>SPÉCIALITÉS</h4>
                      <div className="info">
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                      </div>
                    </div>
                    <div className="map_director">
                      <div className="message">
                        clique pour réserver une place -------
                      </div>
                      {/* <Link to="/Home"> */}
                      <button>REJOINDRE</button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <div className="info_hopital">
                  <div className="visuel">
                    <div className="visuel1">
                      <h4>VISUEL DU CENTRE</h4>
                      <div className="card_visuel">
                        {HospitalImage.map((post) => {
                          return (
                            <div className="card">
                              <img
                                src={post.img}
                                style={{ width: "100%", height: "100%" }}
                                alt=""
                              />
                            </div>
                          );
                        })}
                        {/* <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
        </div> */}
                      </div>
                    </div>

                    <div className="spécialités">
                      <h4>SPÉCIALITÉS</h4>
                      <div className="info">
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                        <span>Lorem ipsum dolor sit amet.</span>
                        <br />
                      </div>
                    </div>
                    <div className="map_director">
                      <div className="message">
                        clique pour réserver une place -------
                      </div>
                      {/* <Link to="/Home"> */}
                      <button>
                        {" "}
                        <a href="https://goo.gl/maps/X6FpHN354HfT5n1p8">
                          REJOINDRE
                        </a>
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </p>
            </TabPanel>
            <TabPanel>1</TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Localisation;
