import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonial({ name, title, photo, format }) {
  return (
    <div className="bg-red-50 px-4 py-12">
      <div className="relative p-2">
        <RiDoubleQuotesL
          className="text-red-500 opacity-40 absolute -top-3 -left-3"
          size={50}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img
          src={photo}
          className="rounded-full w-14 border-2 border-red-500 border-solid"
        />
        <div className="grid">
          <small className="text-red-500 font-bold">{name}</small>
          <small className="text-xs">{title}</small>
        </div>
      </div>
    </div>
  );
}
