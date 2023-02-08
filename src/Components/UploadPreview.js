import { AiFillDelete } from "react-icons/ai";
import { motion } from "framer-motion";
export default function UploadPreview({ file, id, handleDeleteImage, key }) {
  return (
    <motion.div key={key}
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}>
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
    </motion.div>
  );
}
