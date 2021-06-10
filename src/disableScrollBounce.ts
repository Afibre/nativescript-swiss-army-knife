import { isAndroid, isIOS } from "@nativescript/core/platform";
import { ListView } from "@nativescript/core/ui/list-view";
import { ScrollView } from "@nativescript/core/ui/scroll-view";
export function disableScrollBounce(view: ScrollView | ListView): void {
  // no ui bounce. causes problems
  if (isIOS) {
    view.ios.bounces = false;
  } else if (isAndroid && view.android != null) {
    view.android.setOverScrollMode(2);
  }
}
