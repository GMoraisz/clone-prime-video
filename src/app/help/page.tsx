import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { TiDeviceDesktop } from "react-icons/ti";
import { HiUsers } from "react-icons/hi2";
import { IoMdClock } from "react-icons/io";
import { HiUser } from "react-icons/hi2";
import Image from 'next/image';

export default function Help() {
    return (


        <div className="bg-white mt-12 w-full h-full">
            <div>
                <div className="border-b border-gray-300 bg-gray-100 py-3.5">
                    <h1 className="ml-3.5 font-bold text-lg lg:ml-14 lg:text-xl"> Ajuda </h1>
                </div>


                <div className="ml-2.5 mt-3 lg:ml-40">
                    <h1 className="text-xl font-bold text-start"> Suporte do Prime Video</h1>
                    <div className="relative">
                        <input className="mt-3 border border-gray-300 rounded w-[408px] h-[47px] lg:w-[1350px] lg:h-[54px] text-base mb-2 pl-10 pr-2" placeholder="Pesquisar na Ajuda" />
                        <IoSearch className="size-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                    </div>


                </div>

                <div className="w-[400px] h-[225px]  ml-4 rounded border mt-6 lg:ml-40 lg:h-[314px] lg:w-[250px] lg:mr-1.5 lg:float-left">
                    <ul className="grid gap-2 ml-3 mt-6 text-base font-medium ">

                        <h2 className="text-lg font-bold"> Configurações</h2>

                        <a href="https://www.primevideo.com/region/na/settings?ref_=atv_auth_red_aft" target="_blank">
                            <li> <FaGear className={`inline-block mr-1.5 size-5`} />
                                Detalhes da conta</li>
                        </a>
                        <a href="https://www.primevideo.com/region/na/ontv/code?ref_=atv_auth_red_aft" target="_blank">
                            <li> <TiDeviceDesktop className={`inline-block mr-1.5 size-5`} />
                                Registrar um dispositivo</li>
                        </a>

                        <a href="https://www.primevideo.com/region/na/settings/parental-controls?ref_=atv_auth_red_aft" target="_blank">
                            <li> <HiUsers className={`inline-block mr-1.5 size-6`} />
                                Controle dos pais</li>
                        </a>

                        <a href="https://www.primevideo.com/region/na/settings/watch-history?ref_=atv_auth_red_aft" target="_blank">
                            <li> <IoMdClock className={`inline-block mr-1.5 size-6`} />
                                Histórico de exibição </li>
                        </a>

                        <a href="https://www.primevideo.com/profiles" target="_blank">
                            <li>  <HiUser className={`inline-block mr-1.5 size-6`} />
                                Perfis do Prime Video</li>
                        </a>

                    </ul>
                </div>
            </div>
            <div className="w-[400px] h-full lg:w-[650px] mt-6 rounded border ml-2 lg:float-left">
                <div className='flex justify-center items-center mt-16 text-center'>
                    <Image
                        src="/images/primevideohelp.png"
                        width={215}
                        height={250}
                        alt="Amazon Logo"
                    />
                </div>
                <div className="bg-zinc-100 h-[125px] mt-14 rounded py-2 pl-2">
                    <a href="https://www.primevideo.com/help?nodeId=G3BQ95AL4WZLV9ZG" target="_blank">
                        <h2 className="font-bold text-lg "> Precisa cancelar a assinatura de um canal do Prime Video?</h2>
                    </a>
                    <p className="font-normal mt-1 text-base lg:text-lg">
                        Descubra como cancelar facilmente a assinatura de um canal do Prime Video online.
                    </p>
                </div>
            </div>

            <div className="w-[400px] h-[225px] mt-6 rounded-md border ml-3 lg:float-left lg:w-[419.5px] lg:h-[314px]">
                <ul className="grid gap-4 ml-4 text-base font-medium mt-6 ">

                    <h2 className="text-xl font-bold"> Artigos populares</h2>

                    <a href="https://www.primevideo.com/help?nodeId=GAEJPJ8E5TY8TTNL" target="_blank">
                        <li className="text-blue-500">
                            Cancele uma compra feita por engano
                        </li>
                    </a>
                    <a href="https://www.primevideo.com/help?nodeId=GENY3HHV8GU34P3K" target="_blank">
                        <li className="text-blue-500">
                            Cobranças desconhecidas no Prime Video
                        </li>
                    </a>

                    <a href="https://www.primevideo.com/help?nodeId=GQDJBTL3CFLLKPBV" target="_blank">
                        <li className="text-blue-500">
                            Instale o Prime Video em seus dispositivos
                        </li>
                    </a>

                    <a href="https://www.primevideo.com/help?nodeId=TMwh2aig8aCv0WgwDL" target="_blank">
                        <li className="text-blue-500">
                            O que é a opção sem anúncios do Prime...
                        </li>
                    </a>

                    <a href="https://www.primevideo.com/help?nodeId=GU85HKX66NVFNQ9Y" target="_blank">
                        <li className="text-blue-500">
                            Problemas com a reprodução de títulos d...
                        </li>
                    </a>

                    <a href="https://www.primevideo.com/help?nodeId=GDSGFYXXPCSAGVTH" target="_blank">
                        <li className="text-blue-500">

                            Como faço para transmitir o Prime Video...
                        </li>
                    </a>

                </ul>
            </div>

        </div>

    );
}