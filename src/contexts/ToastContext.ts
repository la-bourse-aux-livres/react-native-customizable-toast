import { createContext, useContext } from "react";
import type { Toast } from "src/typings";

export const ToastContext = createContext<Toast[]>([]);

export const useToast = () => {
	return useContext<Toast[]>(ToastContext);
};
