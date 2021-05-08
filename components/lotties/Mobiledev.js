import * as loadingData from "./mobiledev.json";

import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Mobiledev() {
  return (
    <div className="web-lottie-contain">
      <Lottie options={defaultOptions} width={"100%"} />
    </div>
  );
}
