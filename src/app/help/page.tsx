import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { TiDeviceDesktop } from "react-icons/ti";
import { HiUsers, HiUser } from "react-icons/hi2";
import { IoMdClock } from "react-icons/io";
import BigDiv from '../components/helpBigDiv';

export default function Help() {
    return (
        <div >
            <header className='w-screen mt-12 bg-quarternary min-h-[55px] border border-gray-300'>
                <h1 className='text-xl font-semibold pt-3 pl-3 lg:pl-12 '> Ajuda </h1>
            </header>
            <article className='lg:ml-32'>
                <h1 className="text-2xl font-bold pl-3 mt-4"> Suporte do Prime Video</h1>
                <div className="relative">
                    <input className="mt-3 border border-gray-300 rounded-sm w-full text-base mb-2 pl-10 pr-2 h-[55px] lg:w-[90%] hover:border-green-700"
                        placeholder="Pesquisar na Ajuda" />
                    <IoSearch className="size-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                </div>
            </article>

            <main className='grid gap-6 lg:grid-cols-3 lg:ml-32 mt-4'>

                <div className='border rounded-sm h-[250px] lg:h-[350px] lg:w-[55%] w-[425px]'>
                    <ul className='pl-3 pt-4 grid gap-3'>
                        <h2 className="text-xl font-bold"> Configurações</h2>
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

                <div className='border rounded-sm  lg:ml-[-225px]'>

                    <div className='grid justify-center items-center h-[200px]'>
                        <Image className="" src="/images/primevideohelp.png" width={230} height={170} alt="Amazon Logo" />
                    </div>

                    <div className='pl-6 bg-quarternary lg:p-10 p-3 h-fit grid justify-center gap-4'>
                        <Link href="https://www.primevideo.com/help?nodeId=G3BQ95AL4WZLV9ZG" target="_blank">
                            <h2 className='text-lg font-bold'> Precisa cancelar a assinatura de um canal do Prime Video?</h2>
                        </Link>
                        <p >
                            Descubra como cancelar facilmente a assinatura de um canal do Prime Video online.
                        </p>
                    </div>


                </div>

                <div className='border rounded-sm h-[350px] lg:w-[361px]'>

                    <ul className="grid gap-4 pl-2 text-base font-normal mt-6 truncate">
                        <h2 className="text-lg font-bold pb-3"> Artigos populares</h2>
                        <Link href="https://www.primevideo.com/help?nodeId=GAEJPJ8E5TY8TTNL" target="_blank">
                            <li className="text-blue-500 ">Cancele uma compra feita por engano</li>
                        </Link>
                        <Link href="https://www.primevideo.com/help?nodeId=GENY3HHV8GU34P3K" target="_blank">
                            <li className="text-blue-500">Cobranças desconhecidas no Prime Video</li>
                        </Link>
                        <Link href="https://www.primevideo.com/help?nodeId=GQDJBTL3CFLLKPBV" target="_blank">
                            <li className="text-blue-500">Instale o Prime Video em seus dispositivos</li>
                        </Link>
                        <Link href="https://www.primevideo.com/help?nodeId=TMwh2aig8aCv0WgwDL" target="_blank">
                            <li className="text-blue-500">O que é a opção sem anúncios do Prime Video?</li>
                        </Link>
                        <Link href="https://www.primevideo.com/help?nodeId=GU85HKX66NVFNQ9Y" target="_blank">
                            <li className="text-blue-500">Problemas com a reprodução de títulos do Prime Video</li>
                        </Link>
                        <Link href="https://www.primevideo.com/help?nodeId=GDSGFYXXPCSAGVTH" target="_blank">
                            <li className="text-blue-500">Como faço para transmitir o Prime Video na TV?</li>
                        </Link>
                    </ul>
                </div>

                <div className='lg:col-span-4 lg:w-[90%]'>
                    <BigDiv />
                </div>



            </main>

            <div className='bg-chitenarian grid justify-center py-6 border border-gray-300 mt-8'>
                <ul className='grid grid-cols-1 lg:flex gap-8'>
                    <li className=''>
                        <div className="relative">
                            <IoSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black" size={26} />
                            <input className="pl-12 py-2 border border-gray-300 rounded-md w-full h-[55px] 
                            " placeholder="Pesquisar na Ajuda" />
                        </div>
                    </li>
                    <li className='flex items-center justify-center font-medium text-base lg:text-lg
                    '>
                        <button className='py-2 px-4 bg-hover text-primary rounded-sm w-full h-[45px] lg:w-[165px] lg:h-[55px]
                        '>Fale conosco</button>
                    </li>
                </ul>
            </div>

        </div>
    );
}
