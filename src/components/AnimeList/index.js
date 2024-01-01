import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const AnimeList = ({ title, images, id }) => {
    return (
        <Link href={`/@{id}`} className="cursor-pointer">
            <div className=''>
                <Image src={images} alt='...' width={350} height={350}
                    className='w-full max-h-64 object-cover'></Image>
                <h3 className='font-bold md:text-xl text-sm p-4'>{title}</h3>
            </div>
        </Link>

    )

}
export default AnimeList