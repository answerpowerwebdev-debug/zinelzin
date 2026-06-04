import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
      <Reveal>
        <div>
          {eyebrow && (
            <div className='mb-2 inline-flex rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold tracking-wide text-blush-400'>
              {eyebrow}
            </div>
          )}
          <h2 className='font-display text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            {title}
          </h2>
          {subtitle && (
            <p className='mt-2 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base'>
              {subtitle}
            </p>
          )}
        </div>
      </Reveal>

      {right ? <div className='sm:pb-1'>{right}</div> : null}
    </div>
  );
}
