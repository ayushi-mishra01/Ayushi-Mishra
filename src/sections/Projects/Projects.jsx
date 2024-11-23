import styles from "./ProjectsStyles.module.css";
import form from "../../assets/form-gen.png";
import skinMetrix from "../../assets/skin-metrix.avif";
import quiz from "../../assets/quiz.jpeg";
import movie from "../../assets/movie.jpeg";
import chat from "../../assets/chat.jpg";
import vtrack from "../../assets/vtrack.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={skinMetrix}
          link="https://github.com/ayushi-mishra01/Skin-Metrics"
          h3="Skin Metrics"
          p="Skin Analysis System"
        />
        <ProjectCard
          src={form}
          link="https://github.com/ayushi-mishra01/DynamicFormGeneration"
          h3="Dynamic Form Generator"
          p="Dynamic Form Generator"
        />
        <ProjectCard
          src={vtrack}
          link="https://github.com/ayushi-mishra01/VTrack"
          h3="VTrack"
          p="Vehicle Tracking System"
        />
        <ProjectCard
          src={quiz}
          link="https://github.com/ayushi-mishra01/Quiz-Application-Brainiac-Challenge"
          h3="Brainiac Challenge"
          p="Quiz Application"
        />
        <ProjectCard
          src={movie}
          link="https://github.com/ayushi-mishra01/Movie-Review-App-MovieMaestro"
          h3="Movie Maestro"
          p="Movie Review Application"
        />
        <ProjectCard
          src={chat}
          link="https://github.com/ayushi-mishra01/LiveChat"
          h3="LiveChat"
          p="Chat Application"
        />
      </div>
    </section>
  );
}

export default Projects;
