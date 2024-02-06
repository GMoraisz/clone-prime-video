"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { HiOutlineSearch } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";




interface DropdownLinkProps {
    text: string;
    href: string;
}

const DropdownLink: React.FC<DropdownLinkProps> = ({ text, href, }) => (
    <Link href={href} className="block pr-3.5 text-base py-2.5 text-secondary hover:bg-primary hover:text-black hover:w-full whitespace-nowrap">
        {text}

    </Link>
);

const InicioDropdown: React.FC = () => (
    <div className="hidden group-hover:block absolute bg-hover rounded-md text-center">
        <DropdownLink text="Todos" href="/home" />
        <DropdownLink text="Filmes" href="/mainCarousel" />
        <DropdownLink text="Séries" href="/series" />
        <DropdownLink text="Esportes" href="/live" />
    </div>
);

const LojaDropdown: React.FC = () => (
    <div className="hidden group-hover:block absolute bg-hover rounded-md">
        <DropdownLink text="Todos" href="/todos" />
        <DropdownLink text="Alugar ou comprar" href="/alugar-comprar" />
        <DropdownLink text="Canais" href="/canais" />
    </div>
);

const MinhaAreaDropdown: React.FC = () => (
    <div className="hidden group-hover:block absolute bg-hover rounded-md text-center">
        <DropdownLink text="Todos" href="/todos" />
        <DropdownLink text="Sua Lista" href="/sua-lista" />
        <DropdownLink text="Compras e Aluguéis" href="/compras-alugueis" />
    </div>
);

const PerfilDropdown: React.FC = () => (
    <div className="hidden group-hover:block absolute bg-hover rounded-md text-center">
        <h2 className='text-2xl mt-6 mb-4'> Sua conta</h2>
        <DropdownLink text="Ajuda" href="/help" />
        <DropdownLink text="Assista onde quiser" href="/sua-lista" />
        <DropdownLink text="Conta e configurações" href="/compras-alugueis" />
        <DropdownLink text="Benefícios Prime" href="/compras-alugueis" />


        <h2 className='text-2xl mb-2 mt-4'> Perfis</h2>
        <DropdownLink text="(+) Adicionar novo perfil" href="/todos" />
        <DropdownLink text="Editar perfis" href="/sua-lista" />
        <DropdownLink text="Saiba mais" href="/compras-alugueis" />

    </div>

);

const CategoriasDropdown: React.FC = () => (
    <div className="hidden group-hover:block absolute bg-hover rounded-md text-center">
        <div>
            <h2 className="text-2xl mt-3.5 mb-2">Gêneros</h2>
            <DropdownLink text="Ação e aventura" href="/" />
            <DropdownLink text="Anime" href="/anime" />
            <DropdownLink text="Comédia" href="/" />
            <DropdownLink text="Documentário" href="/" />
            <DropdownLink text="Drama" href="/" />
            <DropdownLink text="Fantasia" href="/" />
            <DropdownLink text="Terror" href="/" />
        </div>
        <div>
            <h2 className="text-2xl mb-2">Coleções em destaque</h2>
            <DropdownLink text="Esportes" href="/" />
            <DropdownLink text="Vozes negras" href="/" />
            <DropdownLink text="LGBTQIAP+" href="/" />
            <DropdownLink text="Lançamentos Direto do Cinema" href="/" />
            <DropdownLink text="Aproveite episódios gratuitos" href="/" />
        </div>
    </div>
);


const Header: React.FC = () => {
    const [searchHovered, setSearchHovered] = useState(false);
    const [chevronRotated, setChevronRotated] = useState<boolean>(false);
    const [dropdownHovered, setDropdownHovered] = useState<boolean>(false);

    const navLinkWithDropdown = (text: string, href: string, excludeDropdown = false, marginRight: string = 'mr-5') => {
        const [hovered, setHovered] = useState(false);

        return (
            <div
                className={`relative group ${text === 'prime video' ? `mr-${marginRight}` : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => {
                    if (!dropdownHovered) {
                        setHovered(false);
                    }
                }}
            >
                <Link href={href} className={`pr-3 pl-3 pt-2.5 pb-2.5 ${excludeDropdown ? '' : hovered ? 'hover:bg-hover linkHover' : ''} ${marginRight}`}>
                    {text === 'Search' ? (
                        <HiOutlineSearch className={`inline-block mr-2 text-3xl mt-1 text-secondary`} />
                    ) : (
                        <>
                            {text === 'Menu' || text === 'Loja' || text === 'Categorias' || text === 'Minha área' ? (
                                <>
                                    {text}
                                    <IoChevronDown
                                        className={`inline-block ml-1 chevronIcon transition-transform ${hovered ? 'rotate-180' : ''}`}
                                    />
                                </>
                            ) : (
                                text
                            )}
                        </>
                    )}
                </Link>
                {!excludeDropdown && (
                    <>
                        {text === 'Menu' && <InicioDropdown />}
                        {text === 'Loja' && <LojaDropdown />}
                        {text === 'Minha área' && <MinhaAreaDropdown />}
                        {text === 'User' && <PerfilDropdown />}
                        {text === 'Categorias' && <CategoriasDropdown />}
                    </>
                )}
            </div>
        );
    };

    return (
        <header className="text-primary font-medium">
            <div className={`bg-background items-center grid grid-flow-col fixed top-0 right-0 w-full shadow-md rounded-md py-3 text-nowrap`}>
                {navLinkWithDropdown('Menu', '/home', false, '')}
                {navLinkWithDropdown('prime video', '/home', true, 'font-semibold ')}
                    <div className='flex mr-8'>
                    {navLinkWithDropdown('Search', '/', false, 'mr-2')}
                    <Avatar className='size-7 mt-1'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Perfil</AvatarFallback>
                    </Avatar>
                </div>
            </div>

        </header>
    );
};

export default Header;
