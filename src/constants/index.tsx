export const nameRegex = /^[A-Z][a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
export const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const descriptionRegex = /^[A-Z][A-Za-z\s,.-]*$/;
export const phoneRegex = /^\d{10}$/;
export const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM|am|pm)$/;
export const BASE_URL = "http://localhost:5000/api/";
export const SERVER_URL = "http://localhost:5000/"
// export const USER_API = BASE_URL + "user";
export const USER_API = BASE_URL ;
export const DOCTOR_API = BASE_URL + "doctor";
export const ADMIN_API = BASE_URL + "admin";
export const TOKEN_API = BASE_URL + "token";
export const CHAT_API = BASE_URL + "chat";
export const CLOUDINARY_UPLOAD_API =
  "https://api.cloudinary.com/v1_1/dys8ghqvq/upload";
export const cloudinaryUploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET

export const NavbarItems = [
    {to:"/",label:"Home"},
    {to:"/about", label:"About"},
    {to:"/contactUs", label:"COntact Us"},
];