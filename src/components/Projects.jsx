import React from "react";
import ProjectCard from "./ProjectCard";
import StudyHiveImg from "../assets/studyhive.png"
import CrowdImg from "../assets/crowd.png"
import gadgetImg from "../assets/gadget.png"

const Projects = () => {
  return (
    <div id="projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="StudyHive: Online Group-Study Platform"
          main="StudyHive is a web application designed to facilitate online group study with friends. Registered users can create assignments, submit and complete assignments, Grade their friend's assignments. This application fosters a collaborative learning environment by allowing users to interact, share knowledge, and grow together."
          liveLink="https://studyhive-896d8.web.app/"
          code="https://github.com/ammar-bin-quddus/studyHive-client"
          bannerImg={StudyHiveImg}
        />
        <ProjectCard
          title="Crowdcube: Crowd Funding Application"
          main="Crowd funding application is about donate in various campaign. User can create his own campaign and people can donate through this application"
          liveLink="https://crowd-donation.web.app/"
          code="https://github.com/ammar-bin-quddus/crowd-donation-client"
          bannerImg={CrowdImg}
        />
        <ProjectCard
          title="Gadget Heaven"
          main="Gadget Heaven is a online based e-commerce website. Its a gadget shop. Here all gadgets are available like mobile, accessories, laptop, watches etc."
          liveLink="https://my-gadget-shop.netlify.app/"
          code="https://github.com/ammar-bin-quddus/gadget-heaven-shop"
          bannerImg={gadgetImg}
        />
      </div>
    </div>
  );
};

export default Projects;
