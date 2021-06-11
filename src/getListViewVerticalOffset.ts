import { isAndroid, isIOS } from "@nativescript/core/platform";
import { ListView } from "@nativescript/core/ui/list-view";
export function getListViewVerticalOffset(view: ListView): number {
  if (isIOS && view.ios) {
    return view.ios.contentOffset.y;
  } else if (isAndroid && view.android) {
    return view.android.computeVerticalScrollOffset();
  }
  return null;
}
