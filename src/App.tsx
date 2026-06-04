import { useCallback, useRef } from "react";
import HeroSection from "./components/HeroSection";
import LetterSection from "./components/LetterSection";
import CouplePhotoSection from "./components/CouplePhotoSection";
import ReasonsCardsSection from "./components/ReasonsCardsSection";
import WishesSection from "./components/WishesSection";
import FunnyWordsSection from "./components/FunnyWordsSection";
import GiftSection from "./components/GiftSection";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

import {
  HER_NAME,
  FAVORITE_PHOTO_URL,
  COUPLE_PHOTO_URL,
  LETTER_TO_HER,
  REASONS_I_LOVE_YOU,
  WELCOME_SENTENCE,
  BIRTHDAY_WISHES,
  FUNNY_WORDS,
  YOUR_NAME,
} from "./data";

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const navigate = useCallback((id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className='relative'>
      {/* Background Music */}
      <audio ref={audioRef} autoPlay loop className='hidden'>
        <source src='/music.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>

      <MusicPlayer audioRef={audioRef} />

      <main>
        <HeroSection
          herName={HER_NAME}
          sentence={WELCOME_SENTENCE}
          photoUrl={FAVORITE_PHOTO_URL}
          message={`From ${YOUR_NAME} — with all my love.`}
          onStart={() => navigate("letter")}
        />
        <LetterSection letter={LETTER_TO_HER} />
        <CouplePhotoSection photoUrl={COUPLE_PHOTO_URL} />
        <ReasonsCardsSection items={REASONS_I_LOVE_YOU} />
        <FunnyWordsSection words={FUNNY_WORDS} />
        <WishesSection wishes={BIRTHDAY_WISHES} />
        <GiftSection />
      </main>

      <Footer herName={HER_NAME} />
    </div>
  );
}
