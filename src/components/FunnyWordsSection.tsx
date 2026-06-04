import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";

export default function FunnyWordsSection({ words }: { words: string[] }) {
  return (
    <section id='funny-words' className='mx-auto max-w-6xl px-5 py-16 sm:py-20'>
      <SectionHeading
        eyebrow='Funny Words'
        title='The things you say that make me laugh'
        subtitle='These moments are my favorite.'
      />

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {words.map((word, idx) => (
          <Reveal key={word} delay={idx * 0.03}>
            <div className='h-full rounded-3xl border border-gray-700 bg-black/70 p-6 shadow-soft backdrop-blur-md'>
              <p className='text-sm leading-relaxed text-gray-300 sm:text-base'>
                {word}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
