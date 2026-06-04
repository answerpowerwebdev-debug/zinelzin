import { FaHeart } from "react-icons/fa";

export default function Footer({ herName }: { herName: string }) {
  return (
    <footer className='border-t border-gray-700 bg-black/50'>
      <div className='mx-auto max-w-6xl px-5 py-10 text-center'>
        <p className='text-sm text-gray-400'>Happy birthday, zin el zin.</p>
        <p className='mt-3 text-sm font-semibold text-gray-300'>
          Made with <FaHeart className='inline text-blush-500' /> for{" "}
          <span className='text-blush-400'>{herName}</span>
        </p>
      </div>
    </footer>
  );
}
