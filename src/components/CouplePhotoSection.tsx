import { Reveal } from "./Reveal";

export default function CouplePhotoSection({ photoUrl }: { photoUrl: string }) {
  return (
    <section id='couple' className='mx-auto max-w-3xl px-5 py-16 sm:py-20'>
      <Reveal>
        <div className='rounded-3xl border border-gray-700 bg-black/80 p-6 shadow-soft backdrop-blur-md sm:p-10 overflow-hidden'>
          <img
            src={photoUrl}
            alt='Us together'
            className='w-full h-auto rounded-2xl object-cover'
            loading='lazy'
          />
        </div>
      </Reveal>
    </section>
  );
}
