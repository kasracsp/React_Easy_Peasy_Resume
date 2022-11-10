import React from "react";

const templates = [
  {
    id: 1,
    src: "https://www.uplooder.net/img/image/27/7a3895c3b9a908f523f1b0aab1b17301/Graphic.png",
  },
  {
    id: 2,
    src: "https://www.uplooder.net/img/image/50/a06cffdd1dbde86d3eddc28697d0aa5b/Prestige.png",

  },
  {
    id: 3,
    src: "https://www.uplooder.net/img/image/3/b67254180a92eaaadc3bbcdee901283c/Recommended.png",

  },
  {
    id: 4,
    src: "https://www.uplooder.net/img/image/33/e33549cce31ad27a68d5557a4049c7b0/Special.png",

  },
];

const AnimateTemplateY = () => {
  return (
    <div className="sliderY">
      <div className="slideY-track">
        {templates.map((template) => (
          <div className="slideY" key={template.id}>
            <img src={template.src} alt="template" />
          </div>
        ))}
        {templates.map((template) => (
          <div className="slideY" key={template.id}>
            <img src={template.src} alt="template" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimateTemplateY;
