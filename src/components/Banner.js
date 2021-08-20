import { Container, Image } from 'react-bootstrap';
import logo from '../images/floqastLogo.png';

export default function Banner(){
	return(
		<Container className="bannerContainer">
			<div className="whiteBg"></div>
			<Image className="logo" src={logo}/>
			<span className="the">The</span>
			<span className="fast">Fastest, Most Accurate</span>
			<span className="way">Way to Close Your Books!</span>

		</Container>
	)
}