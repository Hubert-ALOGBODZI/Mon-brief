// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AddUser = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [gender, setGender] = useState("Male");

//   const saveUser = async(e)=>{
//     e.preventDefault();
//     try{
//       await axios.post('http://localhost:5000/users',{
//         name,
//         email,
//         gender,
//       });
//       navigate("/");
//     }catch(error){
//       console.log(error);
//     }
//   }

//   const navigate = useNavigate();
//   return (
//     <div className="columns">
//       <div className="column is-half">
//         <form onSubmit={saveUser}>
//           <div className="field">
//             <label className="label">Name</label>
//             <div className="control">
//               <input
//                 type="text"
//                 className="input"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Email</label>
//             <div className="control">
//               <input
//                 type="email"
//                 className="input"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">GENDER</label>
//             <div className="control">
//               <div className="select is-fullwidth">
//                 <select
//                   value={gender}
//                   onChange={(e) => setGender(e.target.value)}
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Email</label>
//             <div className="control">
//               <input type="submit" value="Send" />
//               {/* <button className="button is-success">Save</button> */}
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddUser;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../CSS/Consultation.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [rdv, setRdv] = useState("");
  // const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    
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
      console.log(error);
    }
  };

  return (
    <div className="Consultation">
      <h1>Consultation</h1>
      <div className="infos">
        <form action="" onSubmit={saveUser}>
          <div className="infos1">
            <table>
              <tr>
                <td>
                  <span>Nom De Famille *</span>
                </td>
                <td>
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
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
                  <span>Age *</span>
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
            <button onClick={(e) => setRdv("En ligne")}>EN LIGNE</button>
            <button onClick={(e) => setRdv("En Presentiel")}>Présentiel</button>
          </div>
        </form>
        <div className="infos3">
          {saveUser ? "EN cours de sauvegarde " : ""}
          <span>NB : </span>
          <span>les noms demandé sont celles de vos certificats</span>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
