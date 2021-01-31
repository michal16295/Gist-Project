import { useEffect, useState } from "react";

const useVisible = () => {
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    setVisible(!visible);
  }, []);
  return visible;
};
export default useVisible;
