import { AiFillDelete } from "react-icons/ai";

export default function UploadPreview({ file, id, handleDeleteImage, key }) {
  return (
    <div key={key}>
      <div className="flex justify-between items-center bg-red-50 p-2">
        <div className="grid gap-2 items-center">
          <div className="flex gap-2 items-center">
            <img src={URL.createObjectURL(file)} alt="" className="w-8" />
            <p className="text-xs text-gray-400">{file.name}</p>
          </div>
        </div>
        <div>
          <button
            className="flex items-center"
            onClick={(event) => {
              handleDeleteImage(id, event);
            }}
          >
            <AiFillDelete className="text-red-500" size="19" />
          </button>
        </div>
      </div>
    </div>
  );
}
