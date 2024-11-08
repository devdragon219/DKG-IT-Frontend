import * as FIIcons from "react-icons/fi";
import * as FAIcons from "react-icons/fa";
// import * as FA6Icons from "react-icons/fa6";
import * as AIIcons from "react-icons/ai";
import * as FCIcons from "react-icons/fc";
import * as VSCIcons from "react-icons/vsc";
// import * as BIIcons from "react-icons/bi";
// import * as TBIcons from "react-icons/tb";
// import * as IOIcons from "react-icons/io5";
// import * as PIIcons from "react-icons/pi";
// import * as MDIcons from "react-icons/md";
// import * as GIIcons from "react-icons/gi";
// import * as SIIcons from "react-icons/si";
// import * as LUIcons from "react-icons/lu";

const iconLibraries = {
  fi: FIIcons,
  fa: FAIcons,
  ai: AIIcons,
  fc: FCIcons,
  vsc: VSCIcons,
  // bi: BIIcons,
  // tb: TBIcons,
  // io5: IOIcons,
  // pi: PIIcons,
  // md: MDIcons,
  // gi: GIIcons,
  // si: SIIcons,
  // lu: LUIcons,
  // fa6: FA6Icons,
};

const getIconComponent = (iconName) => {
  let selectedLibrary = "fa";

  if ((iconName || "").startsWith("Fi")) {
    selectedLibrary = "fi";
  } else if ((iconName || "").startsWith("Ai")) {
    selectedLibrary = "ai";
  } else if ((iconName || "").startsWith("Fc")) {
    selectedLibrary = "fc";
  } else if ((iconName || "").startsWith("Vsc")) {
    selectedLibrary = "vsc";
  } else if ((iconName || "").startsWith("Bi")) {
    selectedLibrary = "bi";
  } else if ((iconName || "").startsWith("Fa")) {
    selectedLibrary = "fa";
  }
  // } else if ((iconName || "").startsWith("Io")) {
  //   selectedLibrary = "io5";
  // } else if ((iconName || "").startsWith("Pi")) {
  //   selectedLibrary = "pi";
  // } else if ((iconName || "").startsWith("Md")) {
  //   selectedLibrary = "md";
  // } else if ((iconName || "").startsWith("Gi")) {
  //   selectedLibrary = "gi";
  // } else if ((iconName || "").startsWith("Si")) {
  //   selectedLibrary = "si";
  // } else if ((iconName || "").startsWith("Lu")) {
  //   selectedLibrary = "lu";
  // }
  return iconLibraries[selectedLibrary][iconName];
};

export default getIconComponent;
