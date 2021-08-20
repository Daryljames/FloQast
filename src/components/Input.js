import { useState } from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function Input(){

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	function registerUser(e){
		e.preventDefault();
		alert('We will reach out to you soon')
		setName('');
		setEmail('');
	}

	return (
		<Container className="formContainer">
			<div className="formBg">
					<p className="how">Learn How FloQast Can <span className="improve">Improve Your Month-End</span></p>

					<Form onSubmit={ (e) => registerUser(e)}>
					  <Row>
					    <span>
					      <Form.Control className="formName" type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="First name*" required/>
					    </span>
					    <span>
					      <Form.Control className="formName" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email*" required/>
					    </span>
					    <Button type="submit" className="btn">SCHEDULE NOW</Button>
					  </Row>
					</Form>
			</div>
			<div className="greenBg">
				<p className="demo">SCHEDULE A DEMO</p>
				<p className="learn">Learn More About FloQast.</p>
			</div>
			
		</Container>
	)
}