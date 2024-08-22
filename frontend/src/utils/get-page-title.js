import defaultSettings from "@/settings";

const title = defaultSettings.title || "南开大学用电管理平台";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
