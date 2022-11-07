import React from "react";
import GraphicTemplate from "../../assets/Graphic.png";
import PrestigeTemplate from "../../assets/Prestige.png";
import RecommendedTemplate from "../../assets/Recommended.png";
import SpecialTemplate from "../../assets/Special.png";

const templates = [
  {
    id: 1,
    src: GraphicTemplate,
  },
  {
    id: 2,
    src: PrestigeTemplate,
  },
  {
    id: 3,
    src: RecommendedTemplate,
  },
  {
    id: 4,
    src: SpecialTemplate,
  },
];

const AnimateTemplateX = () => {
  return (
    <div className="sliderX">
      <div className="slideX-track">
        {templates.map((template) => (
          <div className="slideX" key={template.id}>
            <img src={template.src} alt="template" />
          </div>
        ))}
        {templates.map((template) => (
          <div className="slideX" key={template.id}>
            <img src={template.src} alt="template" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimateTemplateX;
