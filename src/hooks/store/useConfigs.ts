import { useCallback } from "react";
import { ConfigsState, setConfig } from "../../store/slices/configs.slice";
import { useAppDispatch } from "../useAppDispatch";
import { useAppSelector } from "../useAppSelector";

export function useConfigs() {
	const configs = useAppSelector(state => state.configs);
	const dispatch = useAppDispatch();

	const updateConfigs = useCallback(
		(data: Partial<ConfigsState>) => {
			dispatch(setConfig(data));
		},
		[dispatch]
	);

	return { state: configs, functions: { updateConfigs } };
}
