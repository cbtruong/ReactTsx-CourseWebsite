import React, { useState } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Logo from "../../../Common/Logo";
// icon
import { AiOutlineClose } from "react-icons/ai";
import { FaEye } from "react-icons/fa6";
// type
import { AuthFormProps, ErrorsAuthProps, UserInfoProps } from "../../../Types/ClientTypes";
import { useAuthContext } from "../../../Context/AuthContext";
import { validateEmail, validatePassword } from "../../../Common/ClientCommon/ClientFunctionCommon";
import { login } from "../../../Services/ClientServices/ClientServices";

const clientId = import.meta.env.VITE_GOOGLE_API_URL;

const LoginPage: React.FC<AuthFormProps> = ({ isAuthForm, setIsAuthForm }) => {
  const { setIsLoggedIn, setUserInfo } = useAuthContext();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorsAuthProps>({
    email: "",
    password: ""
  });

  // Hàm tổng hợp validate
  const validateInput = (): boolean => {
    const emailError = validateEmail(email, setErrors);
    const passwordError = validatePassword(password, setErrors);
    return emailError && passwordError;
  };

  const handleLogin =async () => {
    if (!validateInput()) return;
    try {
      // Gọi API để đăng nhập
      const response = await login(email, password);
      if (response) {
        setUserInfo(response);
        setIsLoggedIn(true);
        console.log("Login successful!", response);
        setIsAuthForm?.(0);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrors((prev) => ({
        ...prev,
        password: "Invalid email or password",
      }));
    }
  };

  const onSuccess = (response: CredentialResponse) => {
    if (!response.credential) {
      console.error("No credential returned!");
      return;
    }

    const decodedUser: UserInfoProps = jwtDecode(response.credential);
    setUserInfo(decodedUser);
    setIsLoggedIn(true);
    console.log(decodedUser.picture);
    setIsAuthForm?.(0);
  };

  return (
    <div
      className={`${isAuthForm === 1 ? "bg-opacity-40 z-10" : "bg-opacity-0 -z-10"} flexCenter absolute top-0 left-0 w-full h-screen bg-black transitionHight`}
    >
      <div
        className={`${isAuthForm ? "scale-100" : "scale-0"}  relative w-1/3 min-w-[22rem] rounded-xl bg-white py-6 transitionHight origin-center`}
      >
        <AiOutlineClose
          onClick={() => setIsAuthForm?.(0)}
          className="absolute right-4 top-4 p-2 text-3xl bg-lightGray bg-opacity-50 rounded-full cursor-pointer"
        />
        <div className="w-8/12 m-auto mt-8">
          <Logo className="m-auto mb-4 flexCenter" />
          <h1 className="text-3xl font-bold text-center mb-10">Login to CB</h1>
          <div className="flex flex-col gap-3 mb-3">
            <div className="w-full">
              <input
                type="text"
                className="w-full px-4 py-2 border-1 rounded-full outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="w-full relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="w-full px-4 py-2 border-1 rounded-full outline-none"
                placeholder="Password"
              />
              <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-darkGray bg-transparent cursor-pointer" />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <input type="checkbox" />
            <span>remember login</span>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-custom rounded-full py-2 text-white font-bold mb-2"
          >
            Login
          </button>
          <div
            className="relative w-full text-center mb-2 before:absolute before:contents-[''] 
            before:top-1/2 before:left-0 before:w-full before:h-[1.5px] before:bg-lightGray before:z-0"
          >
            <span className="relative bg-white px-2 z-10 text-sm">OR</span>
          </div>
          <div className="mb-4">
            <GoogleOAuthProvider clientId={clientId}>
              <GoogleLogin
                onSuccess={onSuccess}
                onError={() => console.log("Login Failed")}
              />
            </GoogleOAuthProvider>
          </div>
          <div className="mb-4 text-center">
            <p>
              Bạn chưa có tài khoản?{" "}
              <span
                className="text-lightPurple font-normal hover:decoration-line hover:font-medium cursor-pointer transitionMedium"
                onClick={() => setIsAuthForm?.(2)}
              >
                Signin
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
