// import React, { useState } from "react";

// import UiComponents from "../UiComponents";

// function TutoApp() {
//   const [name, setName] = useState("");
// //   const [firstName, setFirstName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [age, setAge] = useState("");
// //   const [date, setDate] = useState("");

//   const inputHandler = (e)=>{
//     setInput(e.target.value)
//   };
//   const submitHandler = (e)=>{
//     e.preventDefault();
//     if(input){
//         console.log(input);
//     }
//   };


//   return (
//     <div className="Consultation">
//       <h1>Consultation</h1>
//       <div className="infos" >
//         <div className="infos1">
//           <table onSubmit={submitHandler}>
//             <form>

//             <tr>
//               <td>
//                 <span>Nom De Famille *</span>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   className="input"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Name"
//                   />
//               </td>
//             </tr>

//             <br />
//             {/* <tr>
//               <td>
//               <span>Prénoms *</span>
//               </td>
//               <td>
//               <input
//               type="text"
//               className="input"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="firstName"
//               />
//               </td>
//               </tr>
//               <tr>
//               <td>
//               <span>Email</span>
//               </td>
//               <td>
//               <input
//               type="email"
//               className="input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               />
//               </td>
//               </tr>
//               <br />
//               <tr>
//               <td>
//               <span>Age *</span>
//               </td>
//               <td>
//               <input
//               type="number"
//               className="input"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               placeholder="Age"
//               />
//               </td>
//               </tr>
//               <br />
//               <tr>
//               <td>
//               <span>Jours du rendez-vous * :</span>
//               </td>
//               <td>
//               <input
//               type="date"
//               className="input"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               placeholder="Jour"
//               style={{ width: "100%" }}
//               />
//               </td>
//             </tr> */}
//             </form>
//           </table>
//         </div>
//         <div className="infos2">
//           <button>EN LIGNE</button>
//           <button>Présentiel</button>
//         </div>
//         <div className="infos3">
//           <span>NB : </span>
//           <span>les noms demandé sont celles de vos certificats</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TutoApp;
