import { Col } from "react-bootstrap";
import github from "../assets/img/github.png";
import web from "../assets/img/web.jpg";

export const ProjectCard = ({ title, description, imgUrl, githubLink, websiteURL }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="links">
                        {github && (<a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub Logo" /> GitHub

                        </a>)}
                        {websiteURL && (<a href={websiteURL} target="_blank" rel="noopener noreferrer">
                            <img src={web} alt="Website Logo" /> Website
                        </a>)}

                    </div>
                </div>
            </div>
        </Col>
    )

}
