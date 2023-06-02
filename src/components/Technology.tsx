import Image from "next/image";
import React from "react";
import webdesign from "../utils/logos/webdesign.png";
import frontend from "../utils/logos/frontend.svg";
import backend from "../utils/logos/backend.webp";
import tools from "../utils/logos/tools.svg";
import database from "../utils/logos/database.svg";
import UI from "../utils/logos/UI.svg";
import version from "../utils/logos/version.svg";
const Technology = (props: any) => {
  const tech = [
    {
      image: webdesign,
      title: "Web Design",
      technologies: "HTML, CSS, Tailwind Css, Bootstrap, JS, Ts",
    },
    {
      image: frontend,
      title: "Front-End FrameWork",
      technologies: "React JS, Angular JS, Next JS",
    },
    {
      image: backend,
      title: "Back-End FrameWork",
      technologies: "Node JS, Express JS",
    },
    {
      image: database,
      title: "DataBase Management",
      technologies: "MongoDb, MOngoose, PostGres, MySQL",
    },
    {
      image: webdesign,
      title: "UI Libraries",
      technologies: "Material UI, Daisy UI, Symmentic UI, Chakra UI",
    },
    {
      image: UI,
      title: "UI/UX",
      technologies: "Figma, Adobe",
    },
    {
      image: version,
      title: "Version Controle",
      technologies: "GIT, Github, GitLab, BitBucket",
    },
    {
      image: tools,
      title: "Tools and other",
      technologies:
        "Visual Studio Code, Postman, Swagger, Slack, MS Teams, Jira",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        {tech.map((item: any, index: any) => {
          return (
            <div
              className="flex flex-col justify-center items-center border rounded p-3 m-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
              key={index}
            >
              <div className="w-8 h-8 self-center">
                <Image src={item.image} alt={item.image} />
              </div>
              <div className=" flex flex-col justify-center items-center ml-2">
                <p className="font-semibold text-xl">{item.title}</p>
                <p className="ml-1">({item.technologies})</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
