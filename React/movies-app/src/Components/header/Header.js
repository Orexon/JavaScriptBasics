import "./Header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch
} from "@fortawesome/free-solid-svg-icons";
import {
	Container,
	Row,
	Col,
	InputGroup,
	FormControl
} from "react-bootstrap";


function Header () {
    return(
        <header>
			<Container>
            	<Row>
					<Col md={7}>
						<InputGroup className="mb-3 mt-3">
							<FormControl
								placeholder="Search"
								aria-label="Search"
								aria-describedby="basic-addon1"
							/>
							<InputGroup.Prepend>
								<InputGroup.Text id="Icon">
									<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
								</InputGroup.Text>
							</InputGroup.Prepend>
						</InputGroup>
					</Col>
				</Row>
			</Container>
        </header>
    )
}

export default Header;