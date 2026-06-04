import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";

export default function LetterSection({ letter }: { letter: string }) {
  return (
    <section id='letter' className='mx-auto max-w-6xl px-5 py-16 sm:py-20'>
      <SectionHeading
        eyebrow='Birthday Letter'
        title='A note from my heart'
        subtitle='Take your time reading this — it’s written with all my love.'
      />

      <Reveal>
        <div className='rounded-3xl border border-gray-700 bg-black/80 p-6 shadow-soft backdrop-blur-md sm:p-10'>
          <p className='whitespace-pre-line font-display text-base leading-relaxed text-gray-100 sm:text-lg'>
            {letter}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
