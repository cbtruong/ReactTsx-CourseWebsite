import React from "react";
import { CommonProps } from "../../../Types/ClientTypes";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../Context/AuthContext";

const UserDropdown: React.FC<CommonProps> = ({ className, isActive }) => {
    const {userInfo,setIsLoggedIn}=useAuthContext();
	return (
		<div
			className={`
        ${isActive ? "translate-y-0 opacity-100 scale-100" : "-translate-y-2 opacity-0 scale-0"}
        ${className} absolute top-10 right-0 w-60 bg-white rounded-xl shadow-custom transitionHight px-6 origin-top-right`}
		>
			<div className="flex gap-4 border-b-1 py-3">
				<div className="w-1/3 ">
					<img
                        className="rounded-full"
						src="https://tse2.mm.bing.net/th?id=OIP.2RJqhQYbdgRUprcC-X5zkgHaHa&pid=Api&P=0&h=180"
						alt=""
					/>
				</div>
				<div className="w-2/3 flex flex-col ">
                    <h1 className="font-semibold text-lg">{userInfo?.name}</h1>
                    <p className="text-darkGray text-sm">@chubatruong</p>
                </div>
			</div>
            <div className="border-b-1 py-3">
                <p className="text-sm text-darkGray hover:text-darkPurple hover:font-medium">Trang cá nhân</p>
            </div>
            <div className="flex flex-col gap-3 border-b-1 py-3">
                <p className="text-sm text-darkGray hover:text-darkPurple hover:font-medium">Writing blog</p>
                <p className="text-sm text-darkGray hover:text-darkPurple hover:font-medium">My blog</p>
            </div>
            <div className="flex flex-col gap-3 border-b-1 py-3">
                <p className="text-sm text-darkGray hover:text-darkPurple hover:font-medium">Setting</p>
                <p 
                onClick={()=>setIsLoggedIn(false)}
                className="text-sm text-darkGray hover:text-darkPurple hover:font-medium">Log out</p>
            </div>
		</div>
	);
};

export default UserDropdown;
