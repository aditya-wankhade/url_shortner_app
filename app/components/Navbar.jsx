import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between p-5 bg-purple-700 text-white'>
            <Link href={'/'}>
                <h1 className='text-3xl font-bold first-letter:text-red-400 hover:text-red-400 hover:first-letter:text-white duration-500 transition-all '>URL Shortener</h1>
            </Link>
            <div className='flex gap-3 items-center'>
                <ul className='navbar-links flex gap-6 items-center'>
                    <Link href={'/home'}><li>Home</li></Link>
                    <Link href={'/generate'}><li>About</li></Link>
                    <Link href={'/contact'}><li>Contact</li></Link>
                </ul>
                <Link href={'/shorten'}> <button className='bg-purple-300 rounded-lg p-3 py-1 text-black font-semibold text-sm shadow-lg'>Try Now</button> </Link>
                <Link href={'/github'}> <button className='bg-purple-300 rounded-lg p-3 py-1 text-black font-semibold text-sm shadow-lg'>GitHub</button> </Link>
            </div>
        </nav>
    );
};

export default Navbar;