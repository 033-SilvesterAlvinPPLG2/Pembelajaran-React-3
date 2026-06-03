// import { useRef, useEffect } from "react";
// /**
//  * useRef adalah salah satu react hook
//  * untuk menyimpan nilai tanpa menyebabkan
//  * re-render
//  */
// export default function App() {
//   // inisialisasi useRef
//   //const ref = useRef (initialValue)
//   const focusInput = useRef(0);
//   // .current => akses nilai di userRef

//   useEffect(() => {
//     focusInput.current.focus()
//   }, [])

//   return (
//     <div>
//       <input ref={focusInput} placeholder="isi disini" />
//     </div>
//   )
// }


// import { useRef, useState } from "react";

// export default function App() {
  
//   const [time, setTime] = useState(0);
//   const intervalRef = useRef(null)

//   //function mulai
//   const mulai = () => {
//     if (intervalRef.current)return;

//     // interval timenya
//     intervalRef.current = setInterval(() => {
//       setTime(prev => prev + 1);
//     }, 1000)
//   }

//   //function stop
//   const berhenti = () => {
//     clearInterval(intervalRef.current)
//     intervalRef.current = null;
//   }

//   return (
//     <div>
//       <h1>{time}</h1>
//       <button style={{margin: "5px"}} onClick={mulai}>Start</button>
//       <button style={{margin: "5px"}} onClick={berhenti}>Stop</button>
//     </div>
//   )
// }


import { useContext } from "react";
import UserContext from "./Context/UserContext";

export default function App() {
  const dataUser = useContext(UserContext)

  return (
    <div>
      <p>Nama dari context: {dataUser}</p>
    </div>
  )
}