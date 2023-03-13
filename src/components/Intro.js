import { Col, Container, Row, Button } from 'react-bootstrap';

const intro = () => {
    return (
        <div className='intro'>
      <Container className='text-white text-center d-flex justify-content-center 
      align-items-center'>
        <Row>
        <Col>
          <div className='title'>NONTON GRATIS</div>
          <div className='title'>GA PAKE KARCIS</div>
          <div className='IntroButton mt-4 text-center'>
            <Button variant='dark'>Lihat semua list</Button>
          </div>
        </Col>
        </Row>
      </Container>
      </div>
    )

}

export default intro