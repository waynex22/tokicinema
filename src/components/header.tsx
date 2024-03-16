'use client';
import Link from 'next/link';
import LoginModal from './loginModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppDispatch } from '@/redux/store';
import { getUser } from '@/redux/slices/authSlice';
import { logOut } from '@/redux/slices/authSlice';
const Header = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: any) => state.auth.user);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleMenuClose = () => {
        setMenuOpen(false);
      };
    // console.log(user);
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch])
    return (
        <>
            <div className="w-full h-[80px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
                <div className='flex justify-between items-center'>
                    <Link href='/' className='mx-10'>
                        <div className="w-fit h-[110px] flex">
                            <div className="flex items-center">
                                <p className="font-bold text-lime-200 text-2xl">T</p>
                                <p className="font-bold text-lime-300 text-2xl">O</p>
                                <p className="font-bold text-teal-300 text-2xl">K</p>
                                <p className="font-bold text-teal-500 text-2xl">I</p>
                            </div>
                            <div className="flex items-center mx-2">
                                <p className="font-bold text-indigo-300 text-md">c</p>
                                <p className="font-bold text-pink-300 text-md">i</p>
                                <p className="font-bold text-pink-400 text-md">n</p>
                                <p className="font-bold text-amber-500 text-md">e</p>
                                <p className="font-bold text-amber-400 text-md">m</p>
                                <p className="font-bold text-orange-600 text-md">a</p>
                            </div>
                        </div>
                    </Link>
                    <div className="flex justify-start items-center w-[25%]">
                        <Link href="/movies" className='text-1xl font-bold mx-5'>Phim Đang Chiếu</Link>
                        {user ? (
                            <div className="relative inline-block text-left">
                                <button
                                    type="button"
                                    onClick={() => setMenuOpen(!isMenuOpen)}

                                    className="inline-flex items-center justify-center p-2 border border-transparent text-base leading-6 font-medium  transition ease-in-out duration-150"
                                >
                                    <p className="font-bold mr-3">Tài khoản</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[36px] h-[36px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                                {isMenuOpen && (
                                    <div className="origin-top-right absolute right-[-100px] mt-2 w-56 backdrop-blur-md bg-gray-100/10 rounded-2xl p-4">
                                        <div className="rounded-2xl">
                                            <div className="py-1 cursor-pointer" onMouseLeave={handleMenuClose}>
                                                <div className="flex flex-col pb-4 justify-center items-center">
                                                    <p>Xin chào: {user.name}</p>
                                                </div>
                                                {user.role === 'Admin' && (
                                                    <div
                                                        className="block px-4 py-2 w-full text-md text-white hover:underline transition duration-150 ease-in-out"
                                                    >
                                                        Quản lí Admin
                                                    </div>
                                                )}
                                                <div 
                                                    className="block px-4 py-2 w-full text-md text-white hover:underline transition duration-150 ease-in-out"
                                                >
                                                    Thông tin cá nhân
                                                </div>
                                                <div 
                                                    className="block px-4 py-2  w-full text-md text-white hover:underline transition duration-150 ease-in-out"
                                                >
                                                    Lịch sử mua hàng
                                                </div>
                                                <div
                                                    onClick={() =>logOut(dispatch)}
                                                    className="block px-4 py-2 text-md text-white hover:underline transition duration-150 ease-in-out"
                                                >
                                                    Đăng xuất
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <LoginModal />
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};
export default Header;