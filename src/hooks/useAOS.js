import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (loading, data) => {
  useEffect(() => {
    if (!loading && Object.keys(data).length > 0) {
      AOS.refresh();
    }
  }, [loading, data]);
};

export default useAOS;
