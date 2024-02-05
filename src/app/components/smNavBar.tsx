"use client";
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    text: string;
    dropdown?: React.ReactNode;
}

const DropdownLink: React.FC<NavLinkProps> = ({ href, text }) => (
    <div className="block pr-3.5 text-xl py-2.5 text-secondary hover:bg-primary hover:text-black hover:w-full whitespace-nowrap">
        <Link href={href}>
            <span>{text}</span>
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
                <ul className={`text-center font-medium grid ${isMenuOpen ? 'grid-cols-1' : 'grid-cols-4'} gap-10`}>
                    <li className="ml-2 text-base cursor-pointer relative">
                        <span onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <>
                                    <DropdownLink href="/home" text="Início" />
                                    <DropdownLink href="/" text="Loja" />
                                    <DropdownLink href="/live" text="TV ao vivo" />
                                    <DropdownLink href="/" text="Categorias" />
                                    <DropdownLink href="/" text="Minha área" />
                                </>
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
                    <li className='ml-10'>
                        <Link href={'/'}>
                            <HiOutlineSearch className='size-7 text-secondary' />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <Avatar className='size-6 '>
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
