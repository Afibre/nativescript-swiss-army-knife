import { Color } from "@nativescript/core/color";
import { device, isAndroid } from "@nativescript/core/platform";
import { _androidActivity, _getBarColor } from "./functions";
/**
 * Sets the Android NavigationBar color, accepts either a string color or a Color object
 * Android API >= 21 only
 */
export function setAndroidNavBarColor(color: string | Color): void {
  if (isAndroid && device.sdkVersion >= "21") {
    const barColor = _getBarColor(color);
    const LayoutParams = <any>android.view.WindowManager.LayoutParams;
    let window: any;
    if (_androidActivity() != null) {
      window = _androidActivity().getWindow();
    } else {
      window = _androidActivity().getWindow();
    }
    window.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
    window.setNavigationBarColor(barColor.android);
  }
}
