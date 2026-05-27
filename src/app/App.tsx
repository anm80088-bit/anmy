import { Button } from "./components/ui/button";
import confetti from "canvas-confetti";
import { Sparkles } from "lucide-react";

export default function App() {
  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    // Fire multiple bursts with different colors and spreads
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#ff0000", "#ff69b4", "#ffd700", "#00ff00", "#00bfff", "#9370db"],
    });

    fire(0.2, {
      spread: 60,
      colors: ["#ff1493", "#ffff00", "#00ff7f", "#1e90ff", "#ff4500"],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#ff69b4", "#ffb6c1", "#ffd700", "#98fb98", "#87ceeb", "#dda0dd"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#ff0000", "#ffa500", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#ffb6c1", "#ffe4e1", "#ffd700", "#e0ffff", "#e6e6fa"],
    });
  };

  return (
    <div className="size-full flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-4 max-w-md px-6">
        <h1 className="text-4xl tracking-tight">
          🎉 Celebration Time! 🎊
        </h1>
        <p className="text-muted-foreground">
          Click the button below to trigger a spectacular confetti burst with colorful particles!
        </p>
      </div>
      
      <Button
        size="lg"
        onClick={triggerConfetti}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
      >
        <Sparkles className="size-5" />
        Launch Confetti!
      </Button>
    </div>
  );
}