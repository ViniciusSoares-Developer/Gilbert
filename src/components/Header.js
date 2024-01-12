import { Container, Row, Col, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Link from "next/link";

const links = [
  {
    link: '#valor',
    title: 'Valor Agregado',
  },
  {
    link: '#triagem',
    title: 'Triagem'
  },
  {
    link: '#sobre',
    title: 'Sobre'
  },
  {
    link: '/equipe',
    title: 'Equipe'
  },
  {
    link: '#contato',
    title: 'Contato'
  },
]

export default function Header() {
  return (
    <header className="w-full p-3">
      <Container>
        <Row>
          <Col sm lg="6"  className='flex md:block justify-center'>
            <Link href='/' className="block w-1/2 sm:2/3 md:w-1/3">
                <Image src="/gilbert-logo.png" className="w-full"/>
            </Link>
          </Col>
          <Col sm lg="6" className="flex justify-center flex-wrap sm:justify-end mt-3 sm:mt-0">
            {
              links.map((e, i) => 
                <Link href={e.link} className="m-2" key={i}>
                    <Button variant="outline-primary">{e.title}</Button>
                </Link>
              )
            }
          </Col>
        </Row>
      </Container>
    </header>
  );
}
