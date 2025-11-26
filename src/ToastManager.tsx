import { useImperativeHandle, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "./components/ToastContainer";
import { ToastContext } from "./contexts/ToastContext";
import { useContainerSwipeGesture } from "./hooks/useContainerSwipeGesture";
import { useLayout } from "./hooks/useLayout";
import type { Toast, ToastManagerProps, ToastShowParams } from "./typings";

export const ToastManager = ({
	ref,
	useSafeArea,
	displayFromBottom = false,
	ToastComponent,
}: ToastManagerProps) => {
	const [toasts, setToasts] = useState<Toast[]>([]);
	const { onLayout } = useLayout();
	const WrapperComponent = useSafeArea ? SafeAreaView : View;

	useImperativeHandle(ref, () => ({
		show: _show,
		hide: _hide,
		update: _update,
	}));

	const _show = (options: ToastShowParams) => {
		const id = uuidv4();

		setToasts((prev) => [...prev, { ...options, id }]);
		return id;
	};

	const _hide = (id: string) => {
		setToasts((prev) => prev.filter((e) => e.id !== id));
	};

	const _update = (id: string, options: Partial<ToastShowParams>) => {
		setToasts((prev) =>
			prev.map((currentToast) => {
				if (currentToast.id === id) {
					return { ...currentToast, ...options };
				}

				return currentToast;
			}),
		);
	};

	const _hideAll = () => {
		setToasts([]);
	};

	const { panGesture, translationY } = useContainerSwipeGesture({
		displayFromBottom,
		activeOffsetY: [-10, 10],
		onFinish: () => {
			_hideAll();
		},
	});

	return (
		<ToastContext.Provider value={toasts}>
			<WrapperComponent
				style={[
					StyleSheet.absoluteFillObject,
					{
						transform: [
							displayFromBottom ? { rotate: "180deg" } : { rotate: "0deg" },
						],
					},
				]}
				pointerEvents="box-none"
			>
				<GestureDetector gesture={panGesture}>
					<View onLayout={onLayout}>
						{[...toasts].reverse().map((toast) => {
							return (
								<ToastContainer
									key={toast.id}
									displayFromBottom={displayFromBottom}
									translationY={translationY}
								>
									{ToastComponent}
								</ToastContainer>
							);
						})}
					</View>
				</GestureDetector>
			</WrapperComponent>
		</ToastContext.Provider>
	);
};
