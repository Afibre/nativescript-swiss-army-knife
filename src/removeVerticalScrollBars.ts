import { isIOS } from "@nativescript/core/platform";
import { ListView } from "@nativescript/core/ui/list-view";
import { ScrollView } from "@nativescript/core/ui/scroll-view";
/**
 * Hides vertical scrollbars for scrollViews or ListViews on Android and iOS
 */
export function removeVerticalScrollBars(view: ScrollView | ListView): void {
  if (isIOS) {
    view.ios.showsVerticalScrollIndicator = false;
  } else {
    view.android.setVerticalScrollBarEnabled(false);
  }
}
