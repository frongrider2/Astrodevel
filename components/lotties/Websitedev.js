import * as loadingData from "./websitedev.json";

import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Websitedev() {
  return (
    <div className="web-lottie-contain">
      <Lottie options={defaultOptions} width={"80%"} />
    </div>
  );
}
