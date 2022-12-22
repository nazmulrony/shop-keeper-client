import { useState } from 'react';
import { AiFillMail, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className=" py-4 z-50 shadow-lg bg-light">
            <div className="flex justify-between items-center w-11/12 mx-auto">
                <div className="grid place-items-center ">
                    <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-brand font-semibold">
                        <Link to="/"> ShopKeeper</Link>
                    </h2>
                </div>
                <ul className="hidden md:flex gap-8 uppercase">
                    <Link to="/">
                        <li className=" hover:border-b border-brand duration-150">
                            Home
                        </li>
                    </Link>
                    <Link to="/add-product">
                        <li className="hover:border-b border-brand duration-150">
                            Add Product
                        </li>
                    </Link>

                    <Link to="/contact">
                        <li className="hover:border-b border-brand duration-150">
                            Contact
                        </li>
                    </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div
                className={
                    nav
                        ? 'fixed top-0 left-0 w-full h-screen bg-black/70 md:hidden'
                        : ''
                }
            >
                <div
                    className={
                        nav
                            ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen p-10 bg-light ease-in duration-500'
                            : 'fixed top-0 left-[-100%]  p-10 bg-light ease-in duration-500'
                    }
                >
                    <div className=" w-full flex justify-between items-center ">
                        <h2 className="text-2xl text-brand font-semibold">
                            ShopKeeper
                        </h2>
                        <div
                            onClick={handleNav}
                            className="p-2 rounded-full bg-brand cursor-pointer"
                        >
                            <AiOutlineClose size={20} />
                        </div>
                    </div>
                    <div className="py-4">
                        <ul className="uppercase">
                            <Link to="/">
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link to="/add-product">
                                <li className="py-4 text-sm">Add Product</li>
                            </Link>
                            <Link to="/contact">
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
