import { Container, Row, Col, Image } from "react-bootstrap";
import {
  HourglassSplit,
  ChatLeftTextFill,
  ExclamationCircleFill,
  LightbulbFill,
} from "react-bootstrap-icons";

const valoresAgregados = [
  {
    titulo: "Valorização do tempo",
    descricao: "Seu atendimento é mais rápido no momento que ele mais precisa",
    icon: HourglassSplit,
    iconSize: 30,
  },
  {
    titulo: "Sigilo e descrição",
    descricao:
      "Por ser uma interação virtual e em uma cabine, casos desconfortáveis serão mais fáceis de serem informados. Ampliando interesse do público pelo plano de saúde",
    icon: ChatLeftTextFill,
    iconSize: 50,
  },
  {
    titulo: "Redução de Contágio",
    descricao:
      "Reduzindo tempo de pessoas na emergência, reduz número quantitativo. Em caso de epidemia, menos pessoas aglomeradas. Menos possibilidades de contaminação",
    icon: ExclamationCircleFill,
    iconSize: 50,
  },
  {
    titulo: "White label",
    descricao: "Ser um produto com nome da empresa",
    icon: LightbulbFill,
    iconSize: 30,
  },
];

export default function Home() {
  return (
    <Container className="text-purple-800">
      <Row>
        <Col>
          <div className="sm:px-20 my-5">
            <h1 className="text-2xl mb-3 font-bold">
              <span className="text-orange-500 text-bold">•</span> Triagem,
              emergência, saúde e tecnologia
            </h1>
            <p className="indent-2 text-lg mb-5">
              Uma solução embarcada que facilita a triagem correta de pacientes
              em situações de emergência e urgência. Nossa solução inclui um Kit
              de medição e um sistema tecnológico que usa o protocolo de
              Manchester e uma interação com o paciente (via chatbot) para
              definir a prioridade e necessidade de atendimento de forma
              autônoma. Conheça mais sobre o nosso projeto e como podemos
              impactar a saúde do Brasil e do mundo.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm md={6}>
          <h1 id="valor" className="text-2xl font-bold text-center">Valor Agregado</h1>
          {valoresAgregados.map((e, i) => (
            <div className="flex mt-3" key={i}>
              {<e.icon size={e.iconSize} />}
              <div className="ml-2">
                <p className="text-lg font-bold">{e.titulo}</p>
                <p className="text-md">{e.descricao}</p>
              </div>
            </div>
          ))}
        </Col>
        <Col className="flex justify-center" sm md={6}>
          <Image id="triagem" src="/img/protocolo-manchester.png" className="w-full md:w-2/3 mt-5 sm:mt-0" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="md:px-40 lg:px-60">
          <h1 id="sobre" className="text-4xl font-bold text-center mt-5 mb-3">
            Quem Somos
          </h1>
          <p className="indent-8 mt-3">
            A pandemia de COVID-19 aumentou a importância dos serviços de
            urgência e emergência. Dados mostram que, na Europa, cerca de 40%
            dos atendimentos de emergência não são realmente urgentes. Isso é
            ainda mais evidente no setor pediátrico francês, onde essa proporção
            varia entre 28% e 76%. No Brasil, temos números semelhantes aos dos
            EUA, chegando a 82% nos adultos.
          </p>
          <p className="indent-8">
            É aí que entra o Projeto Gilbert, que homenageia Sarah Gilbert,
            criadora da vacina AstraZeneca. Nós criamos uma solução embarcada,
            que pode ser instalada em um toten, cabine ou móvel. Ela é composta
            por um Kit de medição (esfigmomanômetro, estetoscópio, termômetro e
            oxímetro) e um sistema tecnológico que usa o protocolo de Manchester
            e uma interação com o paciente (via chatbot) para definir a
            prioridade e necessidade de atendimento de forma autônoma. Além
            disso, também oferecemos equipamentos de impressão de pulseiras de
            atendimento.
          </p>

          <h1 className="mt-5 font-bold text-2xl">
            <span className="text-orange-500 text-bold">•</span> Sarah Gilbert
          </h1>
          <p className="indent-8">
            Demos o nome ao projeto de Gilbert em homenagem a Sarah Catherine
            Gilbert, especialista e professora vacinologia na Universidade de
            Oxford. Ela é especializada no desenvolvimento de vacinas contra o
            vírus influenza e patógenos virais emergentes. Em 30 de dezembro de
            2020, a vacina desenvolvida pela Universida de Oxford, liderada por
            Sarah, foi aprovada para uso no Reino Unido. É uma das 100 Mulheres
            da lista da BBC de 2020.
          </p>
          <div className="w-full flex justify-center mt-3">
            <Image src="/img/sarahgilbert.jpeg" className="w-full md:w-2/3" rounded />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 mb-5">
          <h1 id="pitch" className="text-3xl font-bold text-center mt-5">Pitch</h1>
          <div className="w-full flex justify-center mt-3">
            <iframe
              className="w-full sm:w-1/2 h-60 sm:h-96"
              src="https://www.youtube.com/embed/2s4KEcKRGa4?si=GqdsmCxq1QoaZ7cW"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className="indent-8 md:px-40 lg:px-60 mt-2">
            O Thiago Silva explica que Identificamos que cerca de 40% dos
            atendimentos de emergência na Europa não são urgentes. No Brasil,
            essa proporção é semelhante aos EUA, chegando a 82% nos adultos.
            Para resolver esse problema, criamos a Solução Gilbert, um sistema
            embarcado que pode funcionar em um toten, cabine ou móvel. Ele
            possui um equipamento de impressão de pulseiras de atendimento e um
            sistema de triagem baseado em protocolos de Manchester e interação
            com pacientes. Além de emergências e urgências, ele pode ser
            utilizado em shoppings e outros locais para marcação de consultas e
            coleta de dados. Como proposta de valor, geramos comodidade para
            pacientes e planos de saúde, além de redução de glosa hospitalar e
            autonomia dos pacientes.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
