import React, { useMemo } from "react";
import Section from "./Section";
import { getName } from "../../../constants/names";

import { SHOWCASES_SECTIONS } from "../../../constants/showcases";

const ShowcasesSection = ({ containerRef }) => {
  const sections = Object.keys(SHOWCASES_SECTIONS);

  const items = useMemo(() => {
    return sections.map((section) => ({
      title: getName(section),
      key: section,
      href: `#${section}`,
    }));
  }, [sections]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        {sections.map((section) => (
          <div id={section} key={section}>
            <Section tools={SHOWCASES_SECTIONS[section]} name={section} />
          </div>
        ))}
      </div>
      {/* <div>
        <Anchor
          getContainer={() => containerRef.current}
          style={{
            position: "fixed",
            top: "50vh",
            transform: "translate(0, -50%)",
            right: "30px",
            width: "180px",
            insetInlineEnd: 0,
            margin: "0px 30px 12px",
            padding: "8px 0",
            paddingInline: "4px 8px",
            backdropFilter: "blur(8px)",
            borderRadius: "6px",
            boxSizing: "border-box",
            zIndex: 1000,
          }}
          items={items}
        />
      </div> */}
    </div>
  );
};

export default ShowcasesSection;
