export const isLogin = !localStorage.getItem('accessToken');
export const logOut = () => localStorage.clear();
