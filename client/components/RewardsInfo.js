import { Form, Container, Row, Col } from 'react-bootstrap'


export default ({ rewardRate, totalRewardsPaid }) => (
  <Container className="border border-primary" >
      <Form.Group as={Row} controlId="lpTokenBalance">
        <Form.Label column  style={{minWidth:250}} className="text-start">Rewards Rate</Form.Label>
        <Col />
        <Form.Label column  style={{minWidth:200}} className="text-end">
          {rewardRate * 60 * 60 * 24} TRX / day
        </Form.Label>
      </Form.Group>
      <Form.Group as={Row} controlId="WHXTokenBalance">
        <Form.Label column  style={{minWidth:250}} className="text-start">Total Rewards Paid</Form.Label>
        <Col />
        <Form.Label column  style={{minWidth:200}} className="text-end">
          {totalRewardsPaid} TRX
        </Form.Label>
      </Form.Group>
  </Container>
  )


