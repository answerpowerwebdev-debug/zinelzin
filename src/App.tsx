import { useCallback } from "react";
import HeroSection from "./components/HeroSection";
import LetterSection from "./components/LetterSection";
import CouplePhotoSection from "./components/CouplePhotoSection";
import ReasonsCardsSection from "./components/ReasonsCardsSection";
import WishesSection from "./components/WishesSection";
import FunnyWordsSection from "./components/FunnyWordsSection";
import Footer from "./components/Footer";

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
  const navigate = useCallback((id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className='relative'>
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
      </main>

      <Footer herName={HER_NAME} />
    </div>
  );
}
