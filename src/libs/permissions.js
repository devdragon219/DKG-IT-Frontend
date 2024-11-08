import {PERMISSION_FREE_CHARTS} from "../constants/diagram";

export const hasChartPermission = (permissions, chartName, type="view") => {
  if (PERMISSION_FREE_CHARTS.map(c => c.toLowerCase()).indexOf(chartName.toLowerCase()) !== -1) {
    return true
  }

  // fallback
  if (permissions.length < 1) {
    return true
  }

  return permissions.some(p => p.indexOf(`auth.${type}_${chartName.toLowerCase()}`) !== -1);
}
