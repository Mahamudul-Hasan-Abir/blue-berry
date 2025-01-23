import { MdCloudUpload } from "react-icons/md";
import { TUpload } from "../../Types/randomTypes";

const Upload = ({ onChange }: TUpload) => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <MdCloudUpload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={onChange} // Handle file input change
        />
      </label>
    </div>
  );
};

export default Upload;
