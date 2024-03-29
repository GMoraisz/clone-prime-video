import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col  max-h-screen w-screen">
      <div className="flex-grow"></div>
      <footer className="text-center text-footer py-6 font-medium text-sm w-full bg-black lg:text-base"> 
        <div className='flex justify-center items-center text-center ml-6'>
          <Image
            src="/images/primevideo.png"
            width={190}
            height={200}
            alt="Amazon Logo"
          />
        </div>

        <ul className="lg:flex space-x-4 justify-center">
          <li>
            <a href="https://www.primevideo.com/-/pt/help/ref=atv_ftr_ter?nodeId=202064890"
              target="_blank"
              className="text-blue-400 hover:text-hover2">
              Termos e aviso de privacidade
            </a>
          </li>
          <li>
            <a href="https://www.primevideo.com/-/pt/region/na/help/contact-us?ref_=atv_auth_red_aft"
              target="_blank"
              className="text-blue-400 hover:text-hover2">
              Enviar feedback
            </a>
          </li>
          <li>
            <a href="https://www.primevideo.com/-/pt/help/ref=atv_ftr_hp"
              target="_blank"
              className="text-blue-400 hover:text-hover2">
              Ajuda
            </a>
          </li>
          <li className='font-normal'>
            © 1996-2024, Amazon.com, Inc. ou suas afiliadas
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
