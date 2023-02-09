import { BiError } from "react-icons/bi";

export default function Error() {
  return (
    <aside className="bg-slate-50">
      <div
        className="grid items-center justify-center gap-2 container mx-auto md:max-w-3xl lg:max-w-5xl md:w-3/4 
            py-14"
      >
        <BiError size={100} className="text-yellow-300 mx-auto" />

        <p className="text-xl">Oops! Seems like you got lost</p>
      </div>
    </aside>
  );
}
