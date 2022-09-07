
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function LoremPage(props) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>LOREM!</Alert.Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus asperiores commodi consequuntur deleniti eaque eius fugiat
                    impedit incidunt laboriosam minima natus odit,
                    quas, quia repellendus similique tempore temporibus vel voluptatum.
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Lorem</Button>;
}


export default LoremPage;