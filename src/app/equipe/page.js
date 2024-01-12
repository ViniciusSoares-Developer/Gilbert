import { Container, Row, Col, Image } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Linkedin } from "react-bootstrap-icons";

const equipe = [
  {
    nome: "Laiza Vieira",
    imageUrl: "/img/laiza.jpeg",
    descricao: "CEO - Chief Executive Officer",
    socialMidia: {
      instagram: "https://www.instagram.com/laizavieira49/",
      linkedin: "https://www.linkedin.com/in/laiza-vieira-611b2754/",
    },
  },
  {
    nome: "Rogerio Alencar Filho",
    imageUrl: "/img/rogerio.png",
    descricao: "CTO - Chief Technology Officer",
    socialMidia: {
      instagram: "https://www.instagram.com/rogerioalencarfilho/",
      facebook: "https://www.facebook.com/rogerioalencar",
      linkedin: "https://www.linkedin.com/in/rogeriofilho/",
    },
  },
  {
    nome: "Thiago Silva",
    imageUrl: "/img/thiago.jpeg",
    descricao: "COO - Chief Operating Officer",
    socialMidia: {
      instagram: "https://www.instagram.com/thiagosilvatj_/",
      linkedin: "https://www.linkedin.com/in/thiagosilvatj/",
    },
  },
];

const sizeIcon = 30;

export default function Home() {
  return (
    <Container className="p-3">
      <Row>
        {equipe.map((e) => (
          <Col className="flex justify-center my-3" md={6} lg key={e.nome}>
            <div>
              <label className="text-xl font-bold flex justify-center">
                {e.nome}
              </label>
              <Image
                src={e.imageUrl}
                className="w-[200px] h-[200px]"
                roundedCircle
              />
              <label className="text-md font-bold flex justify-center text-purple-400">
                {e.descricao}
              </label>
              <div className="flex justify-center mt-2">
                {Object.keys(e.socialMidia).map((key) => (
                  <p key={key} className="m-1">
                    <a href={e.socialMidia[key]} className="hover:text-purple-500">
                      {key === "facebook" && <Facebook size={sizeIcon} />}
                      {key === "twitter" && <Twitter size={sizeIcon} />}
                      {key === "instagram" && <Instagram size={sizeIcon} />}
                      {key === "linkedin" && <Linkedin size={sizeIcon} />}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
