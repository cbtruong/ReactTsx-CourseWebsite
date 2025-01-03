import React from "react";
// types
import { AuthFormProps } from "../../../Types/ClientTypes";
// API
import { AiOutlineClose } from "react-icons/ai";
import {
	CredentialResponse,
	GoogleLogin,
	GoogleOAuthProvider,
} from "@react-oauth/google";
// component
import Logo from "../../../Common/Logo";
//icon
import { FaEye } from "react-icons/fa6";

const clientId =`${process.env.GOOGLE_API_URL}`;

const SigninPage: React.FC<AuthFormProps> = ({ isAuthForm, setIsAuthForm }) => {
	const onSuccess = (response: CredentialResponse) => {
		console.log("Need loading code ...");
	};
	return (
		<div
			className={`${
				isAuthForm === 2 ? "bg-opacity-40 z-10" : "bg-opacity-0 -z-10"
			} flexCenter absolute top-0 left-0 w-full h-screen bg-black transitionHight`}
		>
			<div
				className={`${
					isAuthForm ? "scale-100" : "scale-0"
				}  relative w-1/3 min-w-[22rem] rounded-xl bg-white py-6 transitionHight origin-center`}
			>
				<AiOutlineClose
					onClick={() => {
						if (setIsAuthForm) {
							setIsAuthForm(0);
						}
					}}
					className="absolute right-4 top-4 p-2 text-3xl bg-lightGray bg-opacity-50 rounded-full cursor-pointer"
				/>
				<div className="w-8/12 m-auto mt-8 ">
					<Logo className="m-auto mb-4 flexCenter" />
					<h1 className="text-3xl font-bold text-center mb-10">
						Signin to CB
					</h1>
					<div className="flex flex-col gap-3 mb-3">
						<div className="w-full">
							<input
								type="text"
								className="w-full px-4 py-2 border-1 rounded-full outline-none"
								placeholder="Enter your email"
							/>
						</div>
						<div className="w-full relative">
							<input
								type="text"
								className="w-full px-4 py-2 border-1 rounded-full outline-none"
								placeholder="Password"
							/>
						</div>
						<div className="w-full relative">
							<input
								type="text"
								className="w-full px-4 py-2 border-1 rounded-full outline-none"
								placeholder="Re-enter password"
							/>
							<FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-darkGray bg-transparent cursor-pointer" />
						</div>
					</div>
					<button className="w-full bg-gradient-custom rounded-full py-2 text-white font-bold mb-2">
						Signin
					</button>
					<div
						className="relative w-full text-center mb-2 before:absolute before:contents-[''] 
                    before:top-1/2 before:left-0 before:w-full before:h-[1.5px] before:bg-lightGray before:z-0"
					>
						<span className="relative bg-white px-2 z-10 text-sm">
							OR
						</span>
					</div>
					<div className="w-full mb-8">
						<GoogleOAuthProvider clientId={clientId}>
							<GoogleLogin
								onSuccess={onSuccess}
								onError={() => console.log("Login Failed")}
							/>
						</GoogleOAuthProvider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SigninPage;
