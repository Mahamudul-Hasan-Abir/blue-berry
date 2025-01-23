import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import {
  UseFormRegister,
  UseFormSetValue,
  FieldValues,
  Path,
} from "react-hook-form";

interface ImageUploadProps<TFormData extends FieldValues> {
  name: Path<TFormData>;
  register: UseFormRegister<TFormData>;
  setValue: UseFormSetValue<TFormData>;
}

const ImageUpload = <TFormData extends FieldValues>({
  name,
  register,
  setValue,
}: ImageUploadProps<TFormData>) => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("No selected file");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file) {
      setImage(URL.createObjectURL(file)); // Preview image
      setFileName(file.name); // Display file name
      setValue(name, file as unknown as TFormData[typeof name]); // Update form value with file
    } else {
      setImage(null);
      setFileName("No selected file");
      setValue(name, null as unknown as TFormData[typeof name]); // Clear form value
    }
  };

  return (
    <div
      className="flex flex-col col-span-1 lg:col-span-2 justify-center items-center border-2 border-dashed border-[#6c80d4] h-72 w-full cursor-pointer rounded-md"
      onClick={() =>
        document.querySelector<HTMLInputElement>(".input-field")?.click()
      }
    >
      <input
        type="file"
        className="input-field hidden"
        accept="image/*"
        {...register(name)}
        onChange={handleFileChange}
      />
      {image ? (
        <img
          src={image}
          alt="Uploaded Preview"
          className="h-52 w-52 object-cover rounded-full"
        />
      ) : (
        <div className="flex flex-col items-center">
          <MdCloudUpload className="text-4xl text-[#6c80d4]" />
          <p className="text-gray-500 mt-2">Browse File to Upload</p>
        </div>
      )}
      <p className="text-gray-700 mt-2">{fileName}</p>
    </div>
  );
};

export default ImageUpload;
