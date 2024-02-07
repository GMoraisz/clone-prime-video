"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { IoChevronDown } from "react-icons/io5";
import { HiOutlineHome, HiOutlineShoppingBag, HiOutlineDesktopComputer, HiOutlineSearch } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { MdOutlineVideoLibrary } from "react-icons/md";


interface DropdownLinkProps {
    text: string;
    href: string;
    icon?: React.ReactNode;
    subMenu?: React.ReactNode;
}

const DropdownLink: React.FC<DropdownLinkProps> = ({ text, href, icon, subMenu }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleSubMenuToggle = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <div className="relative">
            <div className="flex items-center text-base text-secondary hover:bg-gray-500 whitespace-nowrap py-2 pl-3" onClick={handleSubMenuToggle}>
                {icon && <span className="mr-2">{icon}</span>}
                {text}
            </div>
            {isSubMenuOpen && subMenu && (
                <div className="absolute top-full left-0 bg-hover  rounded-md shadow-md pl-3" style={{ zIndex: 9999 }}>
                    {subMenu}
                </div>
            )}
        </div>
    );
};

const CategoriasDropdown: React.FC = () => (
    <div className="grid justify-center pr-2"
    >
        
        <DropdownLink
            text="Gêneros"
            href="/generos"
            subMenu={<GenerosDropdown />}
            icon={<IoChevronDown />}
        />
        <DropdownLink
            text="Coleções em destaque"
            href="/colecoes"
            subMenu={<ColecoesDropdown />}
            icon={<IoChevronDown />}
        />
    </div>
);


const GenerosDropdown: React.FC = () => (
    <div className="absolute top-full left-0 bg-hover  rounded-md shadow-md w-screen" style={{ zIndex: 9999 }}>
        <DropdownLink text="Ação e aventura" href="/" />
        <DropdownLink text="Anime" href="/anime" />
        <DropdownLink text="Comédia" href="/" />
        <DropdownLink text="Documentário" href="/" />
        <DropdownLink text="Drama" href="/" />
        <DropdownLink text="Fantasia" href="/" />
        <DropdownLink text="Terror" href="/" />
        <DropdownLink text="Infantis" href="/" />
        <DropdownLink text="Suspense e mistério" href="/" />
        <DropdownLink text="Romance" href="/" />
        <DropdownLink text="Ficção Científica" href="/" />

    </div>
);
const ColecoesDropdown: React.FC = () => (
    <div className="absolute top-full left-0 bg-hover rounded-md shadow-md w-screen" style={{ zIndex: 9999 }}>
        <DropdownLink text="Esportes" href="/live" />
        <DropdownLink text="Vozes Negras" href="/" />
        <DropdownLink text="LGBTQIAP+" href="/" />
        <DropdownLink text="Documentário" href="/" />
        <DropdownLink text="Lançamentos Direto do Cinema" href="/" />

    </div>
);

const MenuDropdown: React.FC = () => (
    <div className="hidden group-hover:block absolute bg-hover rounded-md text-center mt-2 w-screen ">
        <DropdownLink text="Início" href="/home" icon={<HiOutlineHome className='mt-0.5 mr-1' />} />
        <DropdownLink text="Loja" href="/mainCarousel" icon={<HiOutlineShoppingBag className='mt-0.5 mr-1' />} />
        <DropdownLink text="TV ao vivo" href="/series" icon={<HiOutlineDesktopComputer className='mt-0.5 mr-1' />} />
        <DropdownLink
            text="Categorias"
            href="/categorias"
            icon={<BiCategory className='mt-0.5 mr-1' />}
            subMenu={<CategoriasDropdown />}
        />
        <DropdownLink text="Minha área" href="/live" icon={<MdOutlineVideoLibrary className='mt-0.5 mr-1' />} />
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
                        {text === 'Menu' && <MenuDropdown />}
                        {text === 'Generos' && <GenerosDropdown />}
                        {text === 'Colecoes' && <ColecoesDropdown />}
                        {text === 'User' && <PerfilDropdown />}

                    </>
                )}
            </div>
        );
    };

    return (
        <header className="text-primary font-medium">
            <div className={`bg-background items-center grid grid-flow-col fixed top-0 right-0 w-full shadow-md rounded-md text-nowrap py-1.5`}>
                {navLinkWithDropdown('Menu', '/home', false, '')}
                {navLinkWithDropdown('prime video', '/home', true, 'font-semibold ')}
                <div className='flex'>
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
