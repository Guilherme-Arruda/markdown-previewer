import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export const Footer = () => {
  return (
    <Container fluid className="bg-dark text-center position-fixed bottom-0">
      <Badge>❤️ This project was coded by Guilherme Arruda ❤️</Badge>
    </Container>
  );
};
