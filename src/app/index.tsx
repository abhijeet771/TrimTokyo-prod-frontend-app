import { useEffect, useState } from "react";

import IntroSection from "../screens/IntroSection";
import AuthScreen from "../screens/AuthScreen";

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <IntroSection />;
  }

  return <AuthScreen />;
}