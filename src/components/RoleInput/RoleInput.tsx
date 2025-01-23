// RoleInput.tsx
import React from "react";

type RoleInputProps = {
  value: "user" | "admin"; // Only allow "user" or "admin"
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string; // The name of the input field for the form
};

const RoleInput: React.FC<RoleInputProps> = ({ value, onChange, name }) => {
  return (
    <div className="col-span-2 lg:col-span-1">
      <label className="block text-[14px] font-poppins font-medium">Role</label>
      <div className="flex space-x-4 mt-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="user"
            name={name}
            value="user"
            checked={value === "user"}
            onChange={onChange}
            className="text-primary focus:ring-0"
          />
          <label htmlFor="user" className="ml-2">
            User
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="admin"
            name={name}
            value="admin"
            checked={value === "admin"}
            onChange={onChange}
            className="text-primary focus:ring-0"
          />
          <label htmlFor="admin" className="ml-2">
            Admin
          </label>
        </div>
      </div>
    </div>
  );
};

export default RoleInput;
