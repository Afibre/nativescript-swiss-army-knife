import { ActionItem } from "@nativescript/core/ui/action-bar";
import { topmost } from "@nativescript/core/ui/frame";
/**
 * Programmatically add button to the ActionBar
 * NOTE: This MUST be called BEFORE actionBarSetTitle on start
 */
export function actionBarAddButton(button: ActionItem) {
  topmost().currentPage.actionBar.actionItems.addItem(button);
}
