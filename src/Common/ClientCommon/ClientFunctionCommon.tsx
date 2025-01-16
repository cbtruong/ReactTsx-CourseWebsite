import { RefObject, useEffect } from "react";

export const useClickOutside = (
	ref: RefObject<HTMLElement>,
	callback: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
};
// Hàm validate email
export const validateEmail = (
    email: string,
    setErrors: React.Dispatch<React.SetStateAction<{ email: string; password: string,confirmPassword?:string }>>
  ): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required." }));
      return false;
    } else if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: "" })); // Xóa lỗi nếu email hợp lệ
    return true;
  };
  
  // Hàm validate password
export const validatePassword = (
    password: string,
    setErrors: React.Dispatch<React.SetStateAction<{ email: string; password: string,confirmPassword?:string }>>
  ): boolean => {
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required." }));
      return false;
    } else if (password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long.",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, password: "" })); // Xóa lỗi nếu mật khẩu hợp lệ
    return true;
  };
  
  export const validateConfirmPassword = (
    confirmPassword: string,
    password: string,
    setErrors: React.Dispatch<React.SetStateAction<{ email: string; password: string; confirmPassword?: string }>>
  ): boolean => {
    if (!confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Confirm password is required." }));
      return false;
    } else if (confirmPassword !== password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match.",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, confirmPassword: "" })); 
    return true;
  };
