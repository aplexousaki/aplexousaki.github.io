import "../Styles/Projects.css";
import MediaCarousel from "./MediaCarousel.jsx";

export default function ProjectItem({
  name,
  description,
  keywords,
  media,
  publicationLink,
  publishedIn,
}) {
  return (
    <article
      className="ProjectItem"
      id={name.replace(/\s+/g, "-").toLowerCase()}
    >
      <div className="TopSection">
        <h3>{name}</h3>
        <hr />
        <div>
          <p>{description}</p>
          <div className="Info">
            {publishedIn && (
              <p>
                {publishedIn}{" "}
                <a href={publicationLink} target="_blank" rel="noreferrer">
                  Read more
                </a>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="BottomSection">
        <MediaCarousel media={media} />

        <ul className="Keywords">
          {keywords?.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
