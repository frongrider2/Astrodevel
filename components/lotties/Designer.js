import * as loadingData from "./designer.json";

import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Designer() {
  return (
    <div className="web-lottie-contain">
      <div>
        <Lottie options={defaultOptions} width={"100%"} />
      </div>
    </div>
  );
}
