import { useEffect, useState } from "react";

import LoadingLogo from "@/assets/dsc-images/SCLogo_loadingscreen.png";
import LoadingIcon from "@/assets/dsc-images/loader-icon.png";

/**
 * Renders the preloader
 */
const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 500); // Show for 500ms (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null; // Hide loader after timeout

  return (
    <div className="loading-screen">
      <div className="loader-content">
        <img src={LoadingLogo} alt="Logo" className="loader-logo" />
        <img src={LoadingIcon} alt="Logo" className="loader-icon" />
      </div>
    </div>
  );
};

export default Loader;
