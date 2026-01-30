import "../Styles/Projects.css";
import data from "../Data/projects.json";
import ProjectItem from "./ProjectItem.jsx";

function ProjectsSection() {
  return (
    <div className="ProjectsSection">
      {data.projects.map((project, index) => (
        <ProjectItem
          key={index}
          name={project.name}
          description={project.description}
          keywords={project.keywords}
          media={project.media}
          publicationLink={project.publicationLink}
          publishedIn={project.publishedIn}
        />
      ))}
    </div>
  );
}

export default ProjectsSection;
