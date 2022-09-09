import {useEffect} from 'react';

export default function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className='relative'>
      

      
      <button className='fixed bottom-8 right-8 bg-gradient-to-r from-purple-900 to-violet-800 px-3 py-3 shadow-lg rounded-full'
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      
      >
        <img className='w-8 h-8 -rotate-90' src="/Assets/backtotop.gif" alt="" />
      </button>
    </div>
  );
}
