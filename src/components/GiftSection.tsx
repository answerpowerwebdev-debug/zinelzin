import { useState } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import GiftModal from "./GiftModal";

export default function GiftSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id='gift' className='relative py-16 sm:py-24'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(253,164,175,0.1),transparent_70%)]' />

        <div className='mx-auto max-w-6xl px-5'>
          <div className='flex flex-col items-center justify-center text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <div className='mb-4 inline-flex rounded-full bg-blush-500/20 px-4 py-2 text-sm font-semibold text-blush-400'>
                ✨ Special Gift
              </div>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
                I have a gift for you
              </h2>
              <p className='text-gray-400 text-lg mb-8 max-w-2xl'>
                Click the button below to reveal something special just for you
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className='inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blush-600 to-blush-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition duration-300'>
                <FaGift size={24} />
                Open Gift
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <GiftModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
