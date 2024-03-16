'use client';
import { useState } from "react";
import { validationConfig } from '@/utils/validator';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { login } from "@/redux/slices/authSlice";
const LoginModal = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [openModal, setOpenModal] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const userData = {
        name: name,
        email: email,
        password: password,
    }
    const validateForm = () => {
        let valid = true;
        if (!name.trim()) {
            setErrors((prevErrors) => ({ ...prevErrors, name: validationConfig.name.required }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setErrors((prevErrors) => ({ ...prevErrors, email: validationConfig.email.required }));
            valid = false;
        } else if (!emailRegex.test(email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: validationConfig.email.invalid }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
        if (!password.trim()) {
            setErrors((prevErrors) => ({ ...prevErrors, password: validationConfig.password.required }));
            valid = false;
        } else if (password.length < 6) {
            setErrors((prevErrors) => ({ ...prevErrors, password: validationConfig.password.minLength }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        }
        if (password !== confirmPassword) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: validationConfig.confirmPassword.match }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
        }
        return valid;
    };
    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
        setIsRegister(false);
    }
    const handleNameChange = (e: any) => {
        setName(e.target.value);
    }
    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e: any) => {
        setConfirmPassword(e.target.value);
    }
    const handleLogin = (e: any) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    }
    const handleRegister = (e: any) => {
        e.preventDefault()
        if (validateForm()) {
            console.log({ name, email, password })
        } else {
            console.log('err');
        }
    }
    return (
        <>
            <div onClick={() => setOpenModal(true)} className='mx-5 border border-spacing-1 border-white p-4 rounded-xl flex items-center cursor-pointer'>
                <div className='text-1xl font-bold'>Đăng Ký</div>
                <div className='mx-2'>
                    /
                </div>
                <div className='text-1xl font-bold'>Đăng Nhập</div>
            </div>
            {openModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
                    <div className="backdrop-blur-md bg-gray-100/10 rounded-2xl p-4 min-w-[28rem]">
                        {isRegister ? (
                            <>
                                <div className='flex items-end justify-end'>
                                    <svg onClick={() => setOpenModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div className="space-y-6">
                                    <div className="w-fit flex">
                                        <div className="flex items-center mr-2">
                                            <p className="font-bold text-lime-200 text-2xl">Đ</p>
                                            <p className="font-bold text-lime-300 text-2xl">ă</p>
                                            <p className="font-bold text-teal-300 text-2xl">n</p>
                                            <p className="font-bold text-teal-500 text-2xl">g</p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="font-bold text-indigo-300 text-2xl">K</p>
                                            <p className="font-bold text-pink-300 text-2xl">ý</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="my-2 block">
                                            <span className='text-md'>Họ Và Tên</span>
                                        </div>
                                        <input
                                            className='p-2 w-full backdrop-blur-md bg-gray-100/10 rounded-md outline-none focus:outline-black'
                                            id="name"
                                            placeholder="abc..."
                                            value={name}
                                            onChange={handleNameChange}
                                            required
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                        <div className="my-2 block">
                                            <span className='text-md'>Email</span>
                                        </div>
                                        <input
                                            className='p-2 w-full backdrop-blur-md bg-gray-100/10 rounded-md outline-none focus:outline-black'
                                            id="email"
                                            placeholder="abc@gmail.com"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            required
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <div className="my-2 block">
                                            <span className='text-md'>Mật Khẩu</span>
                                        </div>
                                        <input
                                            className='p-2 w-full backdrop-blur-md bg-gray-100/10 rounded-md outline-none focus:outline-black'
                                            id="password"
                                            placeholder="********"
                                            type="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                        <div className="my-2 block">
                                            <span className='text-md'>Nhập lại mật khẩu</span>
                                        </div>
                                        <input
                                            className='p-2 w-full backdrop-blur-md bg-gray-100/10 rounded-md outline-none focus:outline-black'
                                            id="password"
                                            placeholder="********"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={handleConfirmPassword}
                                            required
                                        />
                                    </div>
                                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                    <div className="flex  backdrop-blur-md bg-gray-100/10 rounded-2xl p-3 w-full">
                                        <button className='flex-1 text-xl rounded-xl font-extrabold' onClick={handleRegister}>Đăng ký ngay</button>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Bạn đã có tài khoản?&nbsp;
                                        <button onClick={() => setIsRegister(false)} className=" hover:underline">
                                            Đăng Nhập Ngay
                                        </button>
                                    </div>
                                </div>


                            </>
                        ) : (
                            <>
                                <div className='flex items-end justify-end'>
                                    <svg onClick={() => setOpenModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div className="space-y-6">
                                    <div className="w-fit flex">
                                        <div className="flex items-center mr-2">
                                            <p className="font-bold text-lime-200 text-2xl">Đ</p>
                                            <p className="font-bold text-lime-300 text-2xl">ă</p>
                                            <p className="font-bold text-teal-300 text-2xl">n</p>
                                            <p className="font-bold text-teal-500 text-2xl">g</p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="font-bold text-indigo-300 text-2xl">N</p>
                                            <p className="font-bold text-pink-300 text-2xl">h</p>
                                            <p className="font-bold text-pink-400 text-2xl">ậ</p>
                                            <p className="font-bold text-amber-500 text-2xl">p</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="my-2 block">
                                            <span className='text-md'>Email</span>
                                        </div>
                                        <input
                                            className='p-2 w-full backdrop-blur-md bg-gray-100/10 rounded-md outline-none focus:outline-black'
                                            id="email"
                                            placeholder="abc@gmail.com"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            required
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <div className="my-2 block">
                                            <span className='text-md'>Mật Khẩu</span>
                                        </div>
                                        <input
                                            className='p-2 w-full backdrop-blur-md bg-gray-100/10 rounded-md outline-none focus:outline-black'
                                            id="password"
                                            placeholder="********"
                                            type="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                    </div>
                                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                    <div className="flex backdrop-blur-md bg-gray-100/10 rounded-2xl p-3 w-full">
                                        <button className='flex-1 text-xl rounded-xl font-extrabold' onClick={handleLogin}>Đăng Nhập</button>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Bạn đã có tài khoản?&nbsp;
                                        <button onClick={() => setIsRegister(!isRegister)} className=" hover:underline">
                                            Đăng Ký Ngay
                                        </button>
                                    </div>
                                </div>

                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
export default LoginModal;