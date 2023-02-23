import { RootBottomTabParamList } from "../../Routes/app.bottomTab.routes";
import { AppStackRoutesParams } from "../../Routes/app.stack.routes";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends AppStackRoutesParams, RootBottomTabParamList {}
	}
}
