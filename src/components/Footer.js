import { EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer id="contato" className="w-full bg-purple-600 p-3 py-5">
      <div className="flex justify-center">
        <a
          href="mailto:contato@gilbert.satecnologia.com.br"
          className="flex text-md md:text-2xl text-white"
        >
          <EnvelopeFill size={35} />
          <p className="ml-2">contato@gilbert.satecnologia.com.br​</p>
        </a>
      </div>
      <div className="flex justify-center mt-2">
        <a href="tel:+5581983643267" className="flex text-md md:text-2xl text-white">
          <TelephoneFill size={35} />
          <p className="ml-2 text-white">+55 (81) 9 8364-3267</p>
        </a>
      </div>
      <br className='md:hidden py-5'/>
      <br className='md:hidden py-5'/>
    </footer>
  );
}
