import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer(){
    return(
        <footer className="footer py-4 mt-5" expand="lg">
            <Container>
                <div className="text-center mt-4">
                    <p>&copy; 2024 DylanW.co.uk - All rights reserved.</p>
                </div>
            </Container>
        </footer>
  );
};

export default Footer