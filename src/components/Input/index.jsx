import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./style.css";

export const Input = () => {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const style = {
    resize: "none",
    height: "calc(100vh - 107px)",
  };

  return (
    <Container fluid>
      <Row>
        <Col className="p-0" sm={12} md={6}>
          <h6 className="text-center py-1 text-light bg-primary m-0">Editor</h6>
          <Form>
            <Form.Control style={style} as="textarea" onChange={handleChange} />
          </Form>
        </Col>
        <Col className="p-0" md={6}>
          <h6 className="text-center py-1 text-light bg-primary m-0">
            Preview
          </h6>
          <div className="output">{input}</div>
        </Col>
      </Row>
    </Container>
  );
};
