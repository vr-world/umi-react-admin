export function setToken(token:string):void {
  localStorage.setItem("token",token);
}
export function getToken() {
  return localStorage.getItem("token")
}
export function clearLogin() {
  localStorage.removeItem("token")
  localStorage.removeItem("userInfo")
  localStorage.removeItem("authority")
}