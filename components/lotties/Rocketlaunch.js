import { useState } from "react";
import * as loadingData from "./spaceshiplaunch.json";
import { CSSTransition } from "react-transition-group";

import Lottie from "react-lottie";

export default function Rocketlaunch() {
  const [pause, setPause] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="web-lottie-contain2">
      <Lottie
        isStopped={pause}
        eventListeners={[
          {
            eventName: "loopComplete",
            callback: () => {
              setPause(true);
              setTimeout(() => {
                setPause(false);
              }, 6000);
            },
          },
        ]}
        speed={0.6}
        options={defaultOptions}
        width={600}
      />
      <CSSTransition in={pause} timeout={250} classNames="fade" unmountOnExit>
        <div className="moon-div">
          <h1>Let's work together!! 🌕🌕🌕</h1>
        </div>
      </CSSTransition>
    </div>
  );
}
