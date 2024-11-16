import { Container, Nav, Row, Tab, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/simon.png";
import projImg2 from "../assets/img/todo.png";
import projImg3 from "../assets/img/uv.png";
import projImg4 from "../assets/img/keeper.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';


export const Projects = () => {

    const projects = [
        {
            title: "Simon game",
            description: "Play a Game",
            imgUrl: projImg1,
            githubLink:"https://github.com/basantadharala/simon-game",
            websiteURL:""
        },
        {
            title: "To-do List",
            description: "list",
            imgUrl: projImg2,
            githubLink:"https://github.com/basantadharala/simon-game",
            websiteURL:""
        },
        {
            title: "UV Index",
            description: "UV Index",
            imgUrl: projImg3,
            githubLink:"https://github.com/basantadharala/UV-index-checker",
            websiteURL:""
        },
        {
            title: "keeper App",
            description: "Take a note",
            imgUrl: projImg4,
            githubLink:"https://github.com/basantadharala/keeper",
            websiteURL:"https://kw4hgg.csb.app/"
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>All of my Projects.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" disabled>
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className="background-img-right" src={colorSharp2} />
        </section>

    )

}