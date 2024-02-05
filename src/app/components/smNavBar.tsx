"use client";
import { useState, ReactNode } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { GoHome } from "react-icons/go";
import { RiShoppingBagLine } from "react-icons/ri";
import { PiTelevisionSimpleLight, PiVideo } from "react-icons/pi";
import { LiaThListSolid } from "react-icons/lia";
import Link from 'next/link';



interface NavLinkProps {
    href: string;
    text: string;
    icon?: ReactNode;
}

const DropdownLink: React.FC<NavLinkProps> = ({ href, text, icon }) => (
    <div className="block pr-3.5 text-sm ml-4 py-2.5 text-secondary hover:bg-primary hover:text-black hover:w-full whitespace-nowrap">
        <Link href={href}>
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
        </Link>
    </div>
);

export default function SMNav() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 py-2.5 left-0 right-0 bg-black">
            <div className="text-primary flex shadow">
                <ul className={`text-center font-medium grid ${isMenuOpen ? 'grid-cols-1' : 'grid-cols-4'} gap-16   `}>
                    <li className="ml-2 text-base cursor-pointer relative text-start">
                        <span onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <div className='grid gap-2'>
                                    <DropdownLink href="/home" text="Início" icon={<GoHome className='inline-block mr-1' />} />
                                    <DropdownLink href="/" text="Loja" icon={<RiShoppingBagLine className='inline-block mr-1' />} />
                                    <DropdownLink href="/live" text="TV ao vivo" icon={<PiTelevisionSimpleLight className='inline-block mr-1' />} />
                                    <DropdownLink href="/" text="Categorias" icon={<LiaThListSolid className='inline-block mr-1' />} />
                                    <DropdownLink href="/" text="Minha área" icon={<PiVideo className='inline-block mr-1' />} />

                                </div>
                            ) : (
                                <span>Menu</span>
                            )}
                            {isMenuOpen && (
                                <div className="absolute left-0 bottom-full">
                                    <DropdownLink href="/home" text="Todos" />
                                    <DropdownLink href="/mainCarousel" text="Filmes" />
                                    <DropdownLink href="/series" text="Séries" />
                                    <DropdownLink href="/live" text="Esportes" />
                                </div>
                            )}
                        </span>
                    </li>

                    <li className='text-lg whitespace-nowrap font-semibold'>
                        <Link href={'/'}>
                            <h1>prime video</h1>
                        </Link>
                    </li>
                    <li className='ml-12'>
                        <Link href={'/'}>
                            <HiOutlineSearch className='size-7 text-secondary' />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <Avatar className='size-6'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>Perfil</AvatarFallback>
                            </Avatar>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
