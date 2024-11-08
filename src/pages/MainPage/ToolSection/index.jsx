import React, { useMemo, useEffect, useState } from "react";
import { Anchor } from "antd";
import { TOOL_SECTIONS } from "../../../constants/tools";
import { LINKS_CONSTS } from "../../../constants/links";
import Section from "./Section";
import { getName } from "../../../constants/names";
import API from "../../../API";

const getSectionTools = () => {
  const sectionTools = {}
  for (const key in TOOL_SECTIONS) {
    const tools = TOOL_SECTIONS[key].map(tool => ({name: tool, cards: LINKS_CONSTS[tool]}))
    sectionTools[key] = {
      name: key,
      tools
    }
  }
  return sectionTools;
}

const ToolSection = ({ containerRef }) => {
  const [sectionTools, setSectionTools] = useState(getSectionTools())
  const sections = Object.keys(TOOL_SECTIONS);

  useEffect(async () => {
    const {results} = await API.fetchITToolProducts();
    console.log("results", results, sectionTools)
    const updateSectionTools = addIToolProductsToToolSection(results, sectionTools);
    setSectionTools({...updateSectionTools});
  }, []);

  function addIToolProductsToToolSection(iTToolProducts, sectionTools) {
    iTToolProducts.forEach(item => {
        if (sectionTools[item.category.name] && sectionTools[item.category.name].tools) {
          const newTool = {
            cards: 
              {
                demo: item.demo_link,
                // demoExample: [item.file_example],
                link: item.create_link.replace('http://localhost:3000', ''),
                video: '',
              },
            name: item.title
          };
    
          // Add new tool to the tools array of the matched section
          sectionTools[item.category.name].tools= [...sectionTools[item.category.name].tools, newTool];
        }
    });
  
    return sectionTools;
  }

  console.log("sectionsTools",sectionTools)
  

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
        {Object.values(sectionTools).map(({name, tools}) => (
          <div id={name} key={name}>
            <Section tools={tools} name={name} />
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

export default ToolSection;
