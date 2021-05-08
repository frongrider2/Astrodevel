import * as loadingData from "./astronaut.json";

import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Astronoute() {
  return (
    <div className="web-lottie-contain">
      <Lottie options={defaultOptions} width={"60%"} />
    </div>
  );
}
