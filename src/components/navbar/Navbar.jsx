import React from 'react'
import Logo from '../../assets/Logo.jpg'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'


const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/"
    }, {
        id: 2,
        name: "Top-rated",
        link: "/"
    }, {
        id: 3,
        name: "Kid's wear",
        link: "/"
    }, {
        id: 4,
        name: "Men's wear",
        link: "/"
    }, {
        id: 5,
        name: "Electronics",
        link: "/"
    }
]

const dropdownlinks = [
    {
        id: 1,
        name: "Trending",
        link: "/"
    }, {
        id: 2,
        name: "Best-selling",
        link: "/"
    }, {
        id: 3,
        name: "Top-rated",
        link: "/"
    }
]

const Navbar = ({handleOrderPopup}) => {

    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white 
        duration-200 relative z-40'>
            {/* navbar-top */}
            <div className='bg-primary/40 py-2'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <a href="/"
                            className='font-bold text-2xl sm:text-3xl flex gap-2'
                        >
                            <img src={Logo} alt="Logo"
                                className='w-10 uppercase'
                            />
                            Shop
                        </a>
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input
                                type="text"
                                placeholder='Search'
                                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-1000
                                rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary
                                dark:border-gray-500 dark:bg-gray-800'
                            />
                            <IoMdSearch
                                className='text-gray-500 
                            group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                        </div>
                        <button
                            onClick={() => { console.log("order fn not available yet");
                                handleOrderPopup();
                             }}
                            className='bg-gradient-to-r from-primary to-secondary transition-all duration-200
                            text-white py-1 px-4 rounded-full flex items-center gap-3 group'
                        >
                            <span
                                className='group-hover:block hidden transition-all duration-200'
                            >Order</span>
                            <FaCartShopping
                                className='text-xl text-white drop-shadow-sm cursor-pointer'
                                onClick={(e) => {
                                    alert("cart function is yet to be added");
                                    e.stopPropagation();
                                }}
                            />
                        </button>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar-bottom */}
            <div className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {
                        Menu.map((data) => {
                            return <li key={data.id}>
                                <a
                                    className='inline-block px-4 hover:text-primary duration-200'
                                    href={data.link}>
                                    {data.name}
                                </a>
                            </li>
                        })
                    }

                    <li className='group relative cursor-pointer '>
                        <a
                            className='flex items-center gap-[2px] py-2'
                            href="/">
                            Trending
                            <span>
                                <FaCaretDown
                                className='transition-all duration-200 group-hover:rotate-180'
                                />
                            </span>
                        </a>

                        <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md
                        bg-white text-black shadow-md'>
                            <ul>
                                {
                                    dropdownlinks.map((data)=>(
                                        <li key={data.id}>
                                            <a href={data.link}
                                            className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                                            >
                                                {data.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar