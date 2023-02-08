import add from '../Assets/Images/add.webp';
export default function ThankYou({setAdd}) {
  return (
    
<div className="bg-gray-50 p-4">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg mx-auto
shadow ">
    
        <img class="rounded-t-lg" src={add} alt="" />
    
    <div class="p-5">
        
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-red-500 ">Minimum Living Cost!</h2>
        
        <p class="mb-3 font-normal tex-black">Thank you! Your property will be added soon.</p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium 
        bg-red-500 text-white text-center text-white  rounded-lg" onClick={(event) => {
          event.preventDefault();
          setAdd(prev => !prev)
        }}>
            Add another property
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
</div>
</div>

  );
}
