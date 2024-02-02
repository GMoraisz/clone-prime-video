import Link from 'next/link';
import { HiOutlineSearch } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";

export default function SMNav() {
    return (
        <div className='fixed top-0 py-2 left-0 right-0 z-50 bg-black'>
            <div className='text-primary flex shadow'>
                <ul className='flex text-center font-medium'>
                    <li className='mr-6 text-base ml-3'>
                        <Link href={'/'}>
                            Menu
                        </Link>
                    </li>

                    <li className='text-lg ml-14' >
                        <Link href={'/'}> prime video</Link>
                    </li>

                    <li className='ml-20 mr-9'>
                        <Link href={'/'}> <HiOutlineSearch className='size-7 text-secondary' /></Link>
                    </li>


                    <li>
                        <Link href={'/'}>  <Avatar className='size-6'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>Perfil</AvatarFallback>
                        </Avatar> </Link>
                    </li>
                </ul>

            </div>

            <div className='mt-5'>
                <ul className='flex text-center gap-5 ml-8 font-medium text-secondary'>
                    <li>
                        <Link href={'/home'}>
                            Todos
                        </Link>
                    </li>

                    <li>
                        <Link href={'/films'}> Filmes </Link>
                    </li>

                    <li>
                        <Link href={'/series'}> Séries </Link>
                    </li>


                    <li>
                        <Link href={'/live'}> Esportes </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}