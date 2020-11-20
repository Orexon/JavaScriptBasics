import "./Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	Image,
} from "react-bootstrap";

import Movie from "../movie/Movie";
import Movies from "../../data/MoviesData";

function Main() {
	const movies = Movies.map(movie => <Movie key={movie.id} Title={movie.Title} Text={movie.Text} Url={movie.Url} LinkUrl={movie.LinkUrl}/>);
	return (
		<main>
			<Container>
				<Row>									

					{movies}

					<Col xs={6} md={4}>
						<Card className="mb-3">
							<div className="buttonz pull-right">
								<Button
									variant="outline-dark"
									className="HamburgerButton pull-right"
								>
									<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
								</Button>
								<Button
									variant="outline-dark"
									className="DeleteButton pull-right"
								>
									<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
								</Button>
							</div>
							<Card.Img variant="top" src="./headerbackground.jpg" />
							<Card.Body>
								<Image
									className="datImage"
									src="./EasySocial.png"
									roundedCircle
								></Image>
								<Card.Title className="mt-4">EasySocial</Card.Title>
								<Card.Text>Social Network for Joomla!</Card.Text>
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
												<a
													href="https://stackideas.com/easydiscuss"
													target="_blank"
												>
													View
												</a>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Col>
					<Col xs={6} md={4}>
						<Card className="mb-3">
							<div className="buttonz pull-right">
								<Button
									variant="outline-dark"
									className="HamburgerButton pull-right"
								>
									<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
								</Button>
								<Button
									variant="outline-dark"
									className="DeleteButton pull-right"
								>
									<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
								</Button>
							</div>
							<Card.Img variant="top" src="./headerbackground.jpg" />
							<Card.Body>
								<Image
									className="datImage"
									src="./EasyDiscuss.png"
									roundedCircle
								></Image>
								<Card.Title className="mt-4">EasyDiscuss</Card.Title>
								<Card.Text>Hybrid Solution for Discussion!</Card.Text>
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
												<a
													href="https://stackideas.com/easydiscuss"
													target="_blank"
												>
													View
												</a>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Col>
					<Col xs={6} md={4}>
						<Card className="mb-2">
							<div className="buttonz pull-right">
								<Button
									variant="outline-dark"
									className="HamburgerButton pull-right"
								>
									<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
								</Button>
								<Button
									variant="outline-dark"
									className="DeleteButton pull-right"
								>
									<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
								</Button>
							</div>
							<Card.Img variant="top" src="./headerbackground.jpg" />
							<Card.Body>
								<Image
									className="datImage"
									src="./stackideas.png"
									roundedCircle
								></Image>
								<Card.Title className="mt-4">Stickideas</Card.Title>
								<Card.Text>Joomla! Extensions and Templates</Card.Text>
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
												<a
													href="https://stackideas.com/"
													target="_blank"
												>
													View
												</a>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Col>
					<Col xs={6} md={4}>
						<Card className="mb-3">
							<div className="buttonz pull-right">
								<Button
									variant="outline-dark"
									className="HamburgerButton pull-right"
								>
									<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
								</Button>
								<Button
									variant="outline-dark"
									className="DeleteButton pull-right"
								>
									<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
								</Button>
							</div>
							<Card.Img variant="top" src="./headerbackground.jpg" />
							<Card.Body>
								<Image
									className="datImage"
									src="./komento.png"
									roundedCircle
								></Image>
								<Card.Title className="mt-4">Komento</Card.Title>
								<Card.Text>Elegant and Stunning Comments</Card.Text>
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
												<a
													href="https://stackideas.com/komento"
													target="_blank"
												>
													View
												</a>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Col>
					<Col xs={6} md={4}>
						<Card className="mb-3">
							<div className="buttonz pull-right">
								<Button
									variant="outline-dark"
									className="HamburgerButton pull-right"
								>
									<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
								</Button>
								<Button
									variant="outline-dark"
									className="DeleteButton pull-right"
								>
									<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
								</Button>
							</div>
							<Card.Img variant="top" src="./headerbackground.jpg" />
							<Card.Body>
								<Image
									className="datImage"
									src="./2183.jpg"
									roundedCircle
								></Image>
								<Card.Title className="mt-4">Pay Plans</Card.Title>
								<Card.Text>Membership Extension for Joomla!</Card.Text>
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
												<a
													href="https://stackideas.com/payplans"
													target="_blank"
												>
													View
												</a>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Col>
					<Col xs={6} md={4}>
						<Card className="mb-3">
							<div className="buttonz pull-right">
								<Button
									variant="outline-dark"
									className="HamburgerButton pull-right"
								>
									<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
								</Button>
								<Button
									variant="outline-dark"
									className="DeleteButton pull-right"
								>
									<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
								</Button>
							</div>
							<Card.Img variant="top" src="./headerbackground.jpg" />
							<Card.Body>
								<Image
									className="datImage"
									src="./EasyArticles.png"
									roundedCircle
								></Image>
								<Card.Title className="mt-4">Easy Articles</Card.Title>
								<Card.Text>Powerful articles management.</Card.Text>
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
												<a
													href="https://stackideas.com/easyarticles"
													target="_blank"
												>
													View
												</a>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Col>
					<Col xs={6} md={4}>
						<Card className="mb-3">
							<div className="buttonz pull-right">
								<Button
									variant="outline-dark"
									className="HamburgerButton pull-right"
								>
									<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
								</Button>
								<Button
									variant="outline-dark"
									className="DeleteButton pull-right"
								>
									<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
								</Button>
							</div>
							<Card.Img variant="top" src="./headerbackground.jpg" />
							<Card.Body>
								<Image
									className="datImage"
									src="./ConverseKit.png"
									roundedCircle
								></Image>
								<Card.Title className="mt-4">Converse Kit</Card.Title>
								<Card.Text>Designed to simplify the messaging!</Card.Text>
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
												<a
													href="https://stackideas.com/conversekit"
													target="_blank"
												>
													View
												</a>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Col>
					<Col xs={6} md={4}>
						<Card className="mb-3">
							<div className="buttonz pull-right">
								<Button
									variant="outline-dark"
									className="HamburgerButton pull-right"
								>
									<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
								</Button>
								<Button
									variant="outline-dark"
									className="DeleteButton pull-right"
								>
									<FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
								</Button>
							</div>
							<Card.Img variant="top" src="./headerbackground.jpg" />
							<Card.Body>
								<Image
									className="datImage"
									src="./metaman.jpg"
									roundedCircle
								></Image>
								<Card.Title className="mt-4">Metaman</Card.Title>
								<Card.Text>Joomla! metadata manager</Card.Text>
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
												<a
													href="https://stackideas.com/metaman"
													target="_blank"
												>
													View
												</a>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</main>
	);
}
export default Main;
