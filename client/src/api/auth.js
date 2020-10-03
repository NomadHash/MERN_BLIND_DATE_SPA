import axios from "axios";

export async function authUserAsync(formData) {
  const response = await axios.get("/api/users/auth");
  console.log("auth test");
  if (!response.data.isAuth) {
    throw new Error("토큰 인증에 실패했습니다.");
  }

  return response.data;
}
