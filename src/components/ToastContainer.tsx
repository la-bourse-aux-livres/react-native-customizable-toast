import { memo } from "react";
import Animated, {
  Extrapolation,
  FadeIn,
  FadeOut,
  interpolate,
  LinearTransition,
  useAnimatedStyle
} from "react-native-reanimated";

import { useLayout } from "../hooks/useLayout";
import { useToast } from "../hooks/useToast";
import type { ToastContainerProps } from "../typings";

export const ToastContainer = memo(
	({
		displayFromBottom = false,
		entering = FadeIn,
		exiting = FadeOut,
		layout = LinearTransition.springify(),
		translationY,
		children,
	}: ToastContainerProps) => {
		const { y, onLayout } = useLayout();
		const { loading } = useToast();

		console.log("before", loading);

		const animatedStyle = useAnimatedStyle(() => {
			return {
				transform: [
					// {
					// 	translateY: clamp(translationY.value, -y.value, 0),
					// },
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
					{
						rotate: displayFromBottom ? "-180deg" : "0deg",
					},
				],
			};
		});

		return (
			<Animated.View
				style={[animatedStyle]}
				entering={entering}
				exiting={exiting}
				layout={layout}
				onLayout={onLayout}
			>
				{children}
			</Animated.View>
		);
	},
);
