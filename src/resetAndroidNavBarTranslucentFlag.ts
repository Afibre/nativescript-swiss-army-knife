import { device, isAndroid } from "@nativescript/core/platform";
import { _androidActivity } from "./functions";
/**
 * Clears the Android Translucent NavigationBar flag
 */
export function resetAndroidNavBarTranslucentFlag(): void {
  if (isAndroid && device.sdkVersion >= "19") {
    const window = _androidActivity().getWindow();
    const LayoutParams = <any>android.view.WindowManager.LayoutParams;
    window.clearFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
  }
}
