import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Password(){
	return (
		<div>
		 <InputGroup className="mb-3">
        <InputGroup.Text>name</InputGroup.Text>
        <InputGroup.Text>last name</InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>
      <InputGroup>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
        <InputGroup.Text>Password</InputGroup.Text>
        <InputGroup.Text></InputGroup.Text>
      </InputGroup>

		</div>
	)
}
