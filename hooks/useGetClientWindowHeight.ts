import { useEffect, useState } from "react";

const useGetClientWindowHeight = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return { clientWindowHeight: clientWindowHeight };
};

export default useGetClientWindowHeight;
