import { FieldValues, UseFormRegister } from "react-hook-form";
import { TProductData } from "../pages/AddProduct/AddProduct";

export type TChildren = {
  pageName: string;
  page: string;
};

export type TInput<TFormData extends FieldValues> = {
  register: UseFormRegister<TFormData>;
  type: string;
  className?: string;
  label: string;
  placeholder?: string;
  layout?: string;
  req?: boolean;
  name: keyof TFormData; // Ensure name matches the keys of the form data type
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type TUpload = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TTextArea<TFormValues extends FieldValues = FieldValues> = {
  className?: string;
  label: string;
  placeholder: string;
  layout: string;
  req: boolean;
  name: string;
  register?: UseFormRegister<TFormValues>;
};

export type TCollups = {
  question: string;
  answer: string;
};

export type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  profileImage: File | null;
  role: "user" | "admin"; // Handle file upload for profile image
};

export type TChekbox = {
  register?: UseFormRegister<TProductData>;
  name: "quantity";
};

export interface TProduct {
  _id: string;
  image: string;
  name: string;
  description: string;
  price: string; // Price of the product (you can change this to number if you prefer)
  quantity: string[]; // Quantity array (e.g., sizes or volumes)
  category: string;
  review?: Review[];
  rating?: number; // Ensure this matches 'rating' (not 'ratting')
}

export interface Review {
  user: string; // The user who submitted the review
  rating: number; // Rating given by the user (e.g., 1 to 5)
  comment: string; // Optional comment left by the user
  createdAt: string; // Review submission timestamp (ISO 8601 string format)
}
