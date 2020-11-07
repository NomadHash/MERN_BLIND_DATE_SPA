import axios from 'axios';

// * =======================
// * AUTH_SAGA_MODULE
// * =======================

export async function authUserAsync(formData) {
  const response = await axios.get('/api/users/auth');
  if (!response.data.isAuth) {
    throw new Error('토큰 인증에 실패했습니다.');
  }

  return response.data;
}

export async function logoutAsync() {
  const response = await axios.get('/api/users/logout');
  if (!response.data.success) {
    throw new Error('로그 아웃에 실패했습니다.');
  }
  return response.data;
}
