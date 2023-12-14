// import { Routes, Route, Navigate } from "react-router-dom";
// import { Navbar } from "./widgets/layout";
// import routes from "./routes";

// function App() {
//   return (
//     <>
//       <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
//         <Navbar routes={routes} />
//       </div>
//       <Routes>
//         {routes.map(
//           ({ path, element }, key) =>
//             element && <Route key={key} exact path={path} element={element} />
//         )}
//         <Route path="*" element={<Navigate to="/home" replace />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Logo, Slide1, Slide2 } from "./pages";

function App() {
  const maxSecond = 15;
  const [seconds, setSeconds] = useState(0);
  let intervalId;

  // start the inerval every seconds
  useEffect(() => {
    intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // clear interval after max second
  useEffect(() => {
    if (seconds === maxSecond) {
      clearInterval(intervalId);
    }
  }, [seconds]);

  if (seconds <= 4) {
    return <Logo />;
  } else if (seconds > 4 && seconds <= 8) {
    return <Slide1 />;
  } else if (seconds > 8 && seconds <= 12) {
    return <Slide2 />;
  }
  return <>Slide end</>;
}

export default App;
