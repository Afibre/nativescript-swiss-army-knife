import { isIOS } from "@nativescript/core/platform";
import { ListView } from "@nativescript/core/ui/list-view";
import { ScrollView } from "@nativescript/core/ui/scroll-view";
/**
 * Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS
 */
export function removeHorizontalScrollBars(view: ScrollView | ListView): void {
  if (isIOS) {
    view.ios.showsHorizontalScrollIndicator = false;
  } else {
    view.android.setHorizontalScrollBarEnabled(false);
  }
}
