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


        <div className="bg-white mt-24 w-full h-full ">
            <div>
                <div className="border-b border-gray-300 bg-gray-100 py-3.5">
                    <h1 className="ml-3.5 font-bold text-lg"> Ajuda </h1>
                </div>


                <div className="ml-2.5 mt-3">
                    <h1 className="text-xl font-bold"> Suporte do Prime Video</h1>
                    <div className="relative">
                        <input className="mt-3 border border-gray-300 rounded w-[408px] h-[47px] text-base mb-2 pl-10 pr-2" placeholder="Pesquisar na Ajuda" />
                        <IoSearch className="size-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                    </div>


                </div>

                <div className="w-[400px] h-[225px] ml-4 rounded border mt-6">
                    <ul className="grid gap-2 ml-2.5 mt-2 text-base font-medium">

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
            <div className="w-[400px] h-full mt-6 rounded border ml-2">
                <div className='flex justify-center items-center mt-16 text-center'>
                    <Image
                        src="/images/primevideohelp.png"
                        width={215}
                        height={250}
                        alt="Amazon Logo"
                    />
                </div>
                <div className="bg-gray-100 h-[125px] mt-14 rounded py-2 pl-2">
                    <a href="https://www.primevideo.com/help?nodeId=G3BQ95AL4WZLV9ZG" target="_blank">
                        <h2 className="font-bold text-lg "> Precisa cancelar a assinatura de um canal do Prime Video?</h2>
                    </a>
                    <p className="font-normal mt-1 text-base">
                        Descubra como cancelar facilmente a assinatura de um canal do Prime Video online.
                    </p>
                </div>
            </div>

            <div className="w-[400px] h-[225px] mt-6 rounded-md border ml-4">

            </div>

        </div>

    );
}