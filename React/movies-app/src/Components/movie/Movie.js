import "./Movie.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	Row,
	Col,
	Card,
	Button,
	Image,
} from "react-bootstrap";

function Movie(props) {
	return (
		<Col xs={6} md={4}>
			<Card className="mb-3">
				<div className="buttonz pull-right">
					<Button variant="outline-dark" className="HamburgerButton pull-right">
						<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
					</Button>
					<Button variant="outline-dark" className="DeleteButton pull-right">
						<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
					</Button>
				</div>
				<Card.Img variant="top" src="./headerbackground.jpg" />
				<Card.Body>
					<Image className="datImage" src={props.Url} roundedCircle></Image>
					<Card.Title className="mt-4">{props.Title}</Card.Title>
                    <Card.Text>{props.Text}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Row>
						<Col md={3}>
							<Row className="line">
								<Col sm={12} className="breadcline1">
									Version
								</Col>
								<Col sm={12} className="breadcline2">
									V3.99.3
								</Col>
							</Row>
						</Col>
						<Col md={6}>
							<Row className="line">
								<Col sm={12} className="breadcline1">
									Source Control
								</Col>
								<Col sm={12} className="breadcline2">
									CodebaseHQ
								</Col>
							</Row>
						</Col>
						<Col md={3}>
							<Row>
								<Col sm={12} className="breadcline1">
									Hosted
								</Col>
								<Col sm={12} className="breadcline2">
									<a href={props.LinkUrl} target="_blank">
										View
									</a>
								</Col>
							</Row>
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		</Col>
	);
}

export default Movie;