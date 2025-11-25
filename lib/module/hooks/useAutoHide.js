"use strict";

import { useEffect } from "react";
import { useToast } from "./useToast.js";
export const useAutoHide = () => {
  const {
    hide,
    timeout = 7000
  } = useToast();
  useEffect(() => {
    let n = null;
    if (timeout) {
      n = setTimeout(() => {
        hide();
      }, timeout);
    }
    return () => {
      if (n) {
        clearTimeout(n);
      }
    };
  }, []);
};
//# sourceMappingURL=useAutoHide.js.map