import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const login = async (email: string, password: string) => {
	try {
        // when call api change users to login
		const response = await apiClient.get("/users");
        const user = response.data.find(
            (user: { email: string; password: string }) =>
              user.email === email && user.password === password
          );
          if (user) {
            // Trả về thông tin người dùng nếu tìm thấy
            return user;
          } else {
            // Nếu không tìm thấy, ném ra lỗi
            throw new Error("Invalid email or password");
          }
	} catch (error) {
		throw error;
	}
};
