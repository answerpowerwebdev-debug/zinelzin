import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";

export default function WishesSection({ wishes }: { wishes: string[] }) {
  return (
    <section id='wishes' className='mx-auto max-w-6xl px-5 py-16 sm:py-20'>
      <SectionHeading
        eyebrow='Birthday Wishes'
        title='Everything I’m wishing for you'
        subtitle='All the good things — today, tomorrow, and always.'
      />

      <div className='grid gap-4 sm:grid-cols-2'>
        {wishes.map((w, idx) => (
          <Reveal key={w} delay={idx * 0.03}>
            <div className='rounded-3xl border border-gray-700 bg-black/70 p-6 shadow-soft backdrop-blur-md'>
              <p className='text-sm leading-relaxed text-gray-300 sm:text-base'>
                {w}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
