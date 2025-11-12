import { Extrapolation, interpolate, withClamp } from "react-native-reanimated";
import type { ToastItemProps } from "./typings";

// const clamp = (value: number, lowerBound: number, upperBound: number) => {
//   "worklet";
//   return Math.min(Math.max(lowerBound, value), upperBound);
// };

export const defaultStyleWorklet = ({
	itemLayout: { y },
	gesture: { translationY },
	properties: { loading },
	displayFromBottom,
}: ToastItemProps) => {
	"worklet";

	return {
		transform: [
			{
				translateY: withClamp({ min: -y.value, max: 0 }, translationY.value),
			},
			{
				scale: loading
					? 1
					: interpolate(
							-translationY.value - y.value,
							[0, 100],
							[1, 0],
							Extrapolation.CLAMP,
						),
			},
			displayFromBottom ? { rotate: "-180deg" } : { rotate: "0deg" },
		],
	};
};
