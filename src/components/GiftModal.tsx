import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function GiftModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className='relative w-full max-w-md rounded-3xl bg-gradient-to-br from-gray-900 to-black p-8 shadow-2xl border border-gray-700'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-white transition z-10'>
          <FaTimes size={24} />
        </button>

        {/* GIF Container */}
        <div className='relative flex items-center justify-center'>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src='/flower.gif'
            alt='Flower animation'
            className='w-full h-auto'
          />
        </div>

        {/* Message */}
        <div className='text-center mt-6'>
          <h2 className='text-2xl font-bold text-white mb-2'>
            🎁 A Special Gift
          </h2>
          <p className='text-gray-300'>
            For the most beautiful person on their special day
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
