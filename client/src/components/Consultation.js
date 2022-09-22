// import React, { Component } from "react";

// export default class Consultation extends Component {
//   constructor(props) {
//     this.state = [
//       (fname = ""),
//       (lname = ""),
//       (email = ""),
//       (age = ""),
//       (date = ""),
//     ];
//   }
//   handleSubmit(){
//       const [fname,lname,email,age,date] = this.state;
//       console.log(fname,lname,email,age,date);
//   }
//   render() {
//     return (
//       <div className="Consultation">
//         <h1>Consultation</h1>
//         <div className="infos" onSubmit={this.handleSubmit}>
//           <div className="infos1">
//             <table>
//               <tr>
//                 <td>
//                   <span>Nom De Famille *</span>
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="input"
//                     value={fname}
//                     onChange={ e =>this.setState({fname:e.target.value})}
//                     placeholder="Name"
//                   />
//                 </td>
//               </tr>
//               <br />
//               <tr>
//                 <td>
//                   <span>Prénoms *</span>
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="input"
//                     value={lname}
//                     onChange={ e =>this.setState({lname:e.target.value})}
//                     // onChange={(e) => setName(e.target.value)}
//                     placeholder="firstName"
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <span>Email</span>
//                 </td>
//                 <td>
//                   <input
//                     type="email"
//                     className="input"
//                     value={email}
//                     onChange={ e =>this.setState({email:e.target.value})}
//                     // onChange={(e) => setName(e.target.value)}
//                     placeholder="Email"
//                   />
//                 </td>
//               </tr>
//               <br />
//               <tr>
//                 <td>
//                   <span>Age *</span>
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     className="input"
//                     value={age}
//                     onChange={ e =>this.setState({age:e.target.value})}
//                     // onChange={(e) => setName(e.target.value)}
//                     placeholder="Age"
//                   />
//                 </td>
//               </tr>
//               <br />
//               <tr>
//                 <td>
//                   <span>Jours du rendez-vous * :</span>
//                 </td>
//                 <td>
//                   <input
//                     type="date"
//                     className="input"
//                     value={date}
//                     onChange={ e =>this.setState({date:e.target.value})}
//                     // onChange={(e) => setName(e.target.value)}
//                     placeholder="Jour"
//                     style={{ width: "100%" }}
//                   />
//                 </td>
//               </tr>
//             </table>
//           </div>
//           <div className="infos2">
//             <button>EN LIGNE</button>
//             <button>Présentiel</button>
//           </div>
//           <div className="infos3">
//             <span>NB : </span>
//             <span>les noms demandé sont celles de vos certificats</span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

import "../CSS/Consultation.css";

// const navigate = useNavigate();

const Consultation = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [rdv, setRdv] = useState("");
  const saveUser = async (e) => {
    e.preventDefault();
    alert("alert");
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        firstName,
        email,
        age,
        date,
        rdv,
      });
      navigate("/");
    } catch (error) {
      console.log;
    }
  };

  return (
    <div className="Consultation">
      <h2>Consultation</h2>
      <form action="" onSubmit={saveUser}>
        <div className="infos">
          <div className="infos1">
            <table>
              <tr>
                <td>
                  <span>Nom De Famille *</span>
                </td>
                <td>
                  <input
                    type="text"
                    required
                    className="input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <span>Prénoms *</span>
                </td>
                <td>
                  <input
                    type="text"
                    className="input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="firstName"
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <span>Email</span>
                </td>
                <td>
                  <input
                    type="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <span>Age</span>
                </td>
                <td>
                  <input
                    type="number"
                    className="input"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                  />
                </td>
              </tr>
              <br />

              <br />
              <tr>
                <td>
                  <span>Jours du rendez-vous * :</span>
                </td>
                <td>
                  <input
                    type="date"
                    className="input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Jour"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="infos2">
            <button onClick={() => setRdv("en ligne")}>En_Ligne</button>
            <button onClick={() => setRdv("en presentiel")}>Présentiel</button>
          </div>
          <div className="infos3">
            <span>NB : </span>
            <span>les noms demandé sont celles de vos certificats</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Consultation;
