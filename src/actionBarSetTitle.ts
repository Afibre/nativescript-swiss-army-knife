import { topmost } from "@nativescript/core/ui/frame";
/** ActionBar Utilities */
/**
 * Programmatically set title
 */
export function actionBarSetTitle(title: string) {
  const actionBar = topmost().currentPage.actionBar;
  actionBar.title = title;
}
