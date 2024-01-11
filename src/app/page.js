//import Image from 'next/image'//
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Row>
            <Col>
              <p>Neste exemplo, além das classes border e border-primary
                para adicionar uma borda ao redor da imagem e definir a cor como primária, a classe border-3 é usada
                para definir a espessura da borda como 3px. Você pode ajustar esse valor conforme necessário, alterando o
                número após border- para a espessura desejada (por exemplo, border-2 para uma borda de 2px, border-4 para 4px e assim por diante).</p>
                <br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <img id="imagem1" src='imagens/Mesa medicajpg.jpg' />
            </Col>
            <Col>
              <img id="imagem2" src='imagens/teste.png' />
            </Col>
          </Row>
          <Row>
            <br/>
            <Col>
              <h1>Quem Somos</h1>
              <br/>

              <p>
              Para criação do texto institucional, também conhecido como “Quem Somos” (que contém a Missão, Visão e Valores
              do seu negócio), é necessário que se responda algumas questões sobre a empresa, de forma que tanto os 
              funcionários quanto os clientes tenham conhecimento sobre os objetivos do negócio no mercado e no mundo.

              Esse texto é indispensável não só para o site mas também para toda a cultura da empresa, contando 
              sua história, suas conquistas e sua MVV (missão, visão e valores). Resumindo, o texto “Quem Somos” é 
              uma apresentação de sua empresa e por isso precisa ser muito bem elaborado e completo.
              </p><br/>
            </Col>
          </Row>
          <Row>
            <Col>
             <img id="Paciente" src='imagens/Medico e Paciente.jpg'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <br/>
            <img id="Preta" src="imagens/imagem Preta.jpg"/>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
