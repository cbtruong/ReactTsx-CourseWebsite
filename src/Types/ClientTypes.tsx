import React, { Dispatch, SetStateAction } from "react";

export interface UserInfoProps {
  email: string; 
  password:string,
  name: string; 
  picture: string; 
}

export interface CommonProps {
	className?: string;
	children?: React.ReactNode;
	isActive?: boolean;
	setIsActive?: Dispatch<SetStateAction<boolean>>;
}

export interface AuthFormProps extends CommonProps {
	isAuthForm: number;
	setIsAuthForm?: Dispatch<SetStateAction<number>>;
}
export interface CourseProps {
	id: string;
	title: string;
	sections?: Section[];
	url:string,
	view:number,
}
export interface Lesson {
	id: string;
	sectionId:string;
	title: string;
	type: string;
	status: string;
	content?: string;
	questions?: {
		id: string;
		question: string;
		options: string[];
		correct_answer: string;
	}[];
}

export interface Section {
	id: string;
	title: string;
	lessons: Lesson[];
}
