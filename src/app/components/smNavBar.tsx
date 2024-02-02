import Link from 'next/link';
import { HiOutlineSearch } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";

export default function SMNav() {
    return (
        <div className='fixed top-0 py-2.5 left-0 right-0 bg-black'>
            <div className='text-primary flex shadow'>
                <ul className='flex text-center font-medium'>
                    <li className='mr-6 text-base ml-3'>
                        <Link href={'/'}>
                            Menu
                        </Link>
                    </li>

                    <li className='text-lg ml-10 whitespace-nowrap' >
                        <Link href={'/'}> prime video</Link>
                    </li>

                    <li className='ml-12 mr-8'>
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


        </div>
    );
}