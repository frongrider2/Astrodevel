import * as loadingData from "./developmentAnimation.json";

import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function WebLottie() {
  return (
    <div className="web-lottie-contain">
      <div className="home-lottie">
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}
