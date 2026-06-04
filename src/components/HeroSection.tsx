import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function HeroSection({
  herName,
  message,
  photoUrl,
  sentence,
  onStart,
}: {
  herName: string;
  message: string;
  photoUrl: string;
  sentence: string;
  onStart: () => void;
}) {
  return (
    <section
      id='hero'
      className='relative min-h-[100svh] overflow-hidden pt-12'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(244,63,134,0.05),transparent_60%),radial-gradient(circle_at_bottom,rgba(253,164,175,0.05),transparent_55%)]' />

      <div className='mx-auto flex max-w-6xl flex-col items-center px-5 pb-14 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='mt-10 w-full max-w-3xl overflow-hidden rounded-[32px] border border-gray-700 bg-black/80 shadow-soft backdrop-blur-md'>
          <div className='p-7 sm:p-10'>
            <div className='mx-auto mb-5 inline-flex rounded-full bg-gray-800 px-4 py-1 text-xs font-semibold tracking-wide text-blush-400'>
              Welcome
            </div>

            <h1 className='font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl'>
              Happy Birthday <span className='text-blush-500'>❤️</span>
            </h1>
            <p className='mt-3 text-lg font-semibold text-gray-300 sm:text-xl'>
              {herName}
            </p>

            <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base'>
              {sentence}
            </p>

            <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <button
                onClick={onStart}
                className='inline-flex items-center justify-center gap-2 rounded-2xl bg-blush-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-blush-700 focus:outline-none focus:ring-2 focus:ring-blush-500'>
                Continue <FaArrowDown className='opacity-90' />
              </button>

              <div className='text-xs text-gray-500'>Scroll to continue</div>
            </div>
          </div>

          <div className='border-t border-gray-700 bg-gradient-to-b from-black/80 to-gray-900/60 p-5 sm:p-6'>
            <div className='grid items-center gap-4 sm:grid-cols-[140px,1fr] sm:gap-5'>
              <img
                src={photoUrl}
                alt='Favorite photo'
                className='mx-auto h-40 w-40 rounded-3xl object-cover shadow-soft ring-1 ring-black/5 sm:mx-0 sm:h-36 sm:w-36'
                loading='lazy'
              />
              <div className='text-left'>
                <div className='text-sm font-semibold text-white'>
                  A favorite photo
                </div>
                <p className='mt-1 text-sm leading-relaxed text-gray-400'>
                  {message}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
