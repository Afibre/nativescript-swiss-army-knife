import { View } from "@nativescript/core/ui/core/view";
import { LayoutBase } from "@nativescript/core/ui/layouts/layout-base";
/**
 * Takes a layout and removes all the child Views and returns them in an Array<View>
 */
export function pluckChildViewsFromLayout(parent: LayoutBase): Array<View> {
  const returnViews: View[] = [];
  parent.eachLayoutChild((child: View) => {
    returnViews.push(child);
  });
  parent.removeChildren();
  return returnViews;
}
