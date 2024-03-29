import Link from 'next/link';
import { IoSearch } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { TiDeviceDesktop } from "react-icons/ti";
import { HiUsers } from "react-icons/hi2";
import { IoMdClock } from "react-icons/io";
import { HiUser } from "react-icons/hi2";
import Image from 'next/image';
import BigDiv from '../components/helpBigDiv';

export default function HelpX() {
    return (
        <div className="bg-white grid grid-cols-7 gap-4">

            {/* Header ocupando a linha inteira */}
            <div className='bg-slate-100 font-bold text-lg h-[60px] py-4 pl-6 border lg:text-xl col-span-1 mt-12 w-screen'>
                <h1> Ajuda </h1>
            </div>

            {/* Título + Placeholder ocupando a linha inteira */}
            <div className='col-span-7 ml-4'>
                <h1 className="text-xl font-bold text-start pl-1.5 lg:text-2xl"> Suporte do Prime Video</h1>
                <div className="relative">
                    <input className="mt-3 border border-gray-300 rounded-sm w-full h-[47px] lg:w-[1350px] lg:h-[54px] text-base mb-2 pl-10 pr-2" placeholder="Pesquisar na Ajuda" />
                    <IoSearch className="size-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                </div>
            </div>



            <div className="grid grid-cols-3 gap-x-2 gap-y-3">
                
                <div>
                    <div className="w-full h-[250px] rounded-sm border mt-6 lg:h-[322.5px] lg:w-[250px] lg:mr-2.5">
                        <ul className="grid gap-2 ml-2 mt-6 text-base font-medium">
                            <h2 className="text-lg font-bold"> Configurações</h2>
                            <Link href="https://www.primevideo.com/region/na/settings?ref_=atv_auth_red_aft" target="_blank">
                                <li> <FaGear className={`inline-block mr-1.5 size-5`} />
                                    Detalhes da conta</li>
                            </Link>
                            <Link href="https://www.primevideo.com/region/na/ontv/code?ref_=atv_auth_red_aft" target="_blank">
                                <li> <TiDeviceDesktop className={`inline-block mr-1.5 size-5`} />
                                    Registrar um dispositivo</li>
                            </Link>
                            <Link href="https://www.primevideo.com/region/na/settings/parental-controls?ref_=atv_auth_red_aft" target="_blank">
                                <li> <HiUsers className={`inline-block mr-1.5 size-6`} />
                                    Controle dos pais</li>
                            </Link>
                            <Link href="https://www.primevideo.com/region/na/settings/watch-history?ref_=atv_auth_red_aft" target="_blank">
                                <li> <IoMdClock className={`inline-block mr-1.5 size-6`} />
                                    Histórico de exibição </li>
                            </Link>
                            <Link href="https://www.primevideo.com/profiles" target="_blank">
                                <li>  <HiUser className={`inline-block mr-1.5 size-6`} />
                                    Perfis do Prime Video</li>
                            </Link>
                        </ul>
                    </div>



                    <div>
                        <div className="lg:m-0 rounded-sm border lg:mr-2.5 lg:mt-6">
                            <div className="flex justify-center items-center mt-14 text-center ">
                                <Image className="lg:w-[px]" src="/images/primevideohelp.png" width={170} height={170} alt="Amazon Logo" />
                            </div>
                            <div className="bg-zinc-100 h-[150px] mt-12 rounded-sm py-2.5 pl-4">
                                <Link href="https://www.primevideo.com/help?nodeId=G3BQ95AL4WZLV9ZG" target="_blank">
                                    <h2 className="font-bold text-lg "> Precisa cancelar a assinatura de um canal do Prime Video?</h2>
                                </Link>
                                <p className="font-normal mt-2.5 text-base lg:text-lg">
                                    Descubra como cancelar facilmente a assinatura de um canal do Prime Video online.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="h-[325px] rounded-sm border lg:w-[430px] lg:h-[322px]  lg:m-0 lg:mt-6">
                        <ul className="grid gap-4 ml-2 text-sm lg:text-base font-medium mt-6 ">
                            <h2 className="text-lg font-bold"> Artigos populares</h2>
                            <Link href="https://www.primevideo.com/help?nodeId=GAEJPJ8E5TY8TTNL" target="_blank">
                                <li className="text-blue-500">Cancele uma compra feita por engano</li>
                            </Link>
                            <Link href="https://www.primevideo.com/help?nodeId=GENY3HHV8GU34P3K" target="_blank">
                                <li className="text-blue-500">Cobranças desconhecidas no Prime Video</li>
                            </Link>
                            <Link href="https://www.primevideo.com/help?nodeId=GQDJBTL3CFLLKPBV" target="_blank">
                                <li className="text-blue-500">Instale o Prime Video em seus dispositivos</li>
                            </Link>
                            <Link href="https://www.primevideo.com/help?nodeId=TMwh2aig8aCv0WgwDL" target="_blank">
                                <li className="text-blue-500 truncate">O que é a opção sem anúncios do Prime Video?</li>
                            </Link>
                            <Link href="https://www.primevideo.com/help?nodeId=GU85HKX66NVFNQ9Y" target="_blank">
                                <li className="text-blue-500 truncate">Problemas com a reprodução de títulos do Prime Video</li>
                            </Link>
                            <Link href="https://www.primevideo.com/help?nodeId=GDSGFYXXPCSAGVTH" target="_blank">
                                <li className="text-blue-500 truncate">Como faço para transmitir o Prime Video na TV?</li>
                            </Link>
                        </ul>
                    </div>

                </div>

            </div>


            <div className='col-span-7'>
                <BigDiv />
            </div>


            <div className='col-span-7'>
                <div className="mt-3 bg-slate-100 h-full grid justify-center lg:grid-cols-2 ">
                    <div className="relative">
                        <input className="mt-3 border border-gray-300 rounded-md w-full h-[47px] lg:w-[275px] lg:h-[54px] text-base mb-2 pl-10 pr-2 lg:mt-5" placeholder="Pesquisar na Ajuda" />
                        <IoSearch className="size-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                    </div>
                    <button className='font-medium text-white bg-hover text-sm py-3.5 rounded-md pl-5 w-[260px] lg:w-[160px] lg:h-[55px] lg:text-lg text-start mt-6'> Fale conosco </button>
                </div>
            </div>

        </div >
    );
}
