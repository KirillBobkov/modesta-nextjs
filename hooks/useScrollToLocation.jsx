import { useRouter } from "next/router";
import React from "react";

export const useScrollToLocation = () => {
  const scrolledRef = React.useRef(false);
  const { quary } = useRouter();
  const hashRef = React.useRef(quary);

  React.useEffect(() => {
    if (quary) {
      // We want to reset if the hash has changed
      if (hashRef.current !== quary) {
        hashRef.current = quary;
        scrolledRef.current = false;
      }

      if (hashRef.current === quary) {
        scrolledRef.current = false;
      }

      // only attempt to scroll if we haven't yet (this could have just reset above if hash changed)
      if (!scrolledRef.current) {
        const id = quary.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          scrolledRef.current = true;
        }
      }
    }
  });
};
