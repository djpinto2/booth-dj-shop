"use client";

import { useEffect, useRef } from "react";

const GESTURES = ["touchstart", "touchend", "click", "keydown"] as const;

// Los celulares en modo ahorro de batería / datos bloquean el autoplay aunque el
// video esté muteado: forzamos play() y reintentamos con la primera interacción.
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      if (video.paused) video.play().catch(() => {});
    };
    const removeGestures = () => GESTURES.forEach((e) => window.removeEventListener(e, tryPlay, true));
    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    GESTURES.forEach((e) => window.addEventListener(e, tryPlay, { capture: true, passive: true }));
    video.addEventListener("playing", removeGestures);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", onVisible);
    tryPlay();

    return () => {
      removeGestures();
      video.removeEventListener("playing", removeGestures);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="bg-video absolute inset-0 h-full w-full object-cover"
      src="/media/hero-720.mp4"
      poster="/media/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
