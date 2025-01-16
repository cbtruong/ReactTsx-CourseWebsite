import React, { RefObject, useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../../Common/ClientCommon/ClientFunctionCommon";
import Logo from "../../../Common/Logo";
import { IoChatbubbles } from "react-icons/io5";
// icon
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
//page
import LoginPage from "../../../Pages/ClientPage/LoginPage/LoginPage";
import SigninPage from "../../../Pages/ClientPage/SigninPage/SigninPage";
import { useAuthContext } from "../../../Context/AuthContext";
import MyCourses from "./MyCoursesDropdown";
import UserDropdown from "./UserDropdown";
import OpenAi from "../../../Components/Client/OpenAi";

const Header = () => {
	const { isLoggedIn, userInfo } = useAuthContext();
	const [isAuthForm, setIsAuthForm] = useState<number>(0);
	const [isMyCourses, setIsMyCourses] = useState<boolean>(false);
	const [isAccount, setIsAccount] = useState<boolean>(false);
	const [isOpenAi, setIsOpenAi] = useState<boolean>(false);
	const menuRef=useRef<HTMLDivElement>(null);
	const userRef=useRef<HTMLDivElement>(null);

	useClickOutside(menuRef,()=>setIsMyCourses(false));
	useClickOutside(userRef,()=>setIsAccount(false));

	useEffect(() => {
		if (isOpenAi) 
		  document.body.style.overflow = "hidden";
		else 
		  document.body.style.overflow = "";
		
		// Cleanup để đảm bảo khôi phục trạng thái gốc khi component bị tháo
		return () => {
		  document.body.style.overflow = "";
		};
	  }, [isOpenAi]);

	return (
		<div className="w-full relative flexCenter h-header border-b-1">
			{/* Page absolute start*/}
			<LoginPage isAuthForm={(isAuthForm === 1 ? 1 : 0)} setIsAuthForm={setIsAuthForm} />
			<SigninPage isAuthForm={(isAuthForm === 2 ? 2 : 0)} setIsAuthForm={setIsAuthForm} />
			{/* Page absolute end*/}
			<div className="w-11/12 flex-y-between">
				<Logo className="flexCenter">
					Programming is not challenging
				</Logo>
				<div className="flex items-center gap-2 border-2 border-lightGray rounded-full overflow-hidden px-4">
					<IoSearch className="text-xl text-lightGray" />
					<input
						className="w-60 py-2 text-sm outline-none bg-transparent"
						type="text"
						placeholder="Search course ..."
					/>
				</div>
				{isLoggedIn ? (
					<div className="flexCenter gap-5">
						<IoChatbubbles
							onClick={() => setIsOpenAi(!isOpenAi)}
							className="text-2xl cursor-pointer text-darkGray"
						/>
						<OpenAi isActive={isOpenAi} setIsActive={setIsOpenAi} />
						<div className="relative" ref={menuRef}>
							<button
								onClick={() => setIsMyCourses(!isMyCourses)}
								className="font-semibold"
							>
								My Course
							</button>
							<MyCourses
								className=""
								isActive={isMyCourses}
								setIsActive={setIsMyCourses}
							/>
						</div>
						<FaBell className="text-xl text-darkGray hover:text-black cursor-pointer" />
						<div
							ref={userRef}
							onClick={() => setIsAccount(!isAccount)}
							className="relative cursor-pointer"
						>
							<img
								src={userInfo?.picture || "https://tse2.mm.bing.net/th?id=OIP.yJG2mHObj-YsewT_WuYE5AHaE7&pid=Api&P=0&h=180"}
								alt=""
								className="w-10 h-full rounded-full"
							/>
							<UserDropdown
								className=""
								isActive={isAccount}
								setIsActive={setIsAccount}
							/>
						</div>
					</div>
				) : (
					<div className="flex">
						<button 
						onClick={() => setIsAuthForm(2)}
						className="px-6 py-2 font-medium">
							Signup
						</button>
						<button
							onClick={() => setIsAuthForm(1)}
							className="px-6 py-2 bg-gradient-custom text-white font-medium rounded-full"
						>
							Login
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
