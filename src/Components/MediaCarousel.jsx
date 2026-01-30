import { useEffect, useMemo, useRef, useState } from "react";
import "../Styles/MediaCarousel.css";

/**
 * media item shape:
 * {
 *   type: "image" | "video",
 *   src: string,
 *   alt?: string,
 *   poster?: string,
 *   caption?: string
 * }
 */

function clampIndex(i, len) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

export default function MediaCarousel({
  media = [],
  initialIndex = 0,
  showThumbnails = true,
  showDots = true,
  className = "",
}) {
  const items = useMemo(() => (Array.isArray(media) ? media : []), [media]);
  const [active, setActive] = useState(clampIndex(initialIndex, items.length));

  // keep a ref to all video elements so we can pause them on slide change
  const videoRefs = useRef([]);

  // Ensure refs array length matches items
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, items.length);
  }, [items.length]);

  const goTo = (idx) => setActive(clampIndex(idx, items.length));
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  // Pause any playing video when slide changes
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i !== active && !v.paused) v.pause();
      if (i !== active) v.currentTime = 0; // optional: reset when leaving slide
    });
  }, [active]);

  // Keyboard navigation (left/right)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (items.length <= 1) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, items.length]);

  if (!items.length) return null;
  const current = items[active];

  return (
    <div className={`MediaCarousel ${className}`}>
      <div className="MediaCarousel__stage" aria-roledescription="carousel">
        <button
          type="button"
          className="MediaCarousel__nav MediaCarousel__nav--prev"
          onClick={prev}
          aria-label="Previous media"
          disabled={items.length <= 1}
        >
          ‹
        </button>

        <div className="MediaCarousel__viewport">
          <div className="MediaCarousel__frame">
            {current.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[active] = el)}
                className="MediaCarousel__media"
                controls
                preload="metadata"
                poster={current.poster}
                autoPlay={true}
              >
                <source src={current.src} type="video/mp4" />
                Sorry, your browser does not support embedded video.
              </video>
            ) : (
              <img
                className="MediaCarousel__media"
                src={current.src}
                alt={current.alt || ""}
                loading="lazy"
                draggable="false"
              />
            )}
          </div>

          {(current.caption || current.type) && (
            <div className="MediaCarousel__caption">
              {current.caption ? current.caption : null}
            </div>
          )}
        </div>

        <button
          type="button"
          className="MediaCarousel__nav MediaCarousel__nav--next"
          onClick={next}
          aria-label="Next media"
          disabled={items.length <= 1}
        >
          ›
        </button>
      </div>

      {showDots && items.length > 1 && (
        <div className="MediaCarousel__dots" role="tablist" aria-label="Media slides">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`MediaCarousel__dot ${i === active ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? "true" : "false"}
            />
          ))}
        </div>
      )}

      {showThumbnails && items.length > 1 && (
        <div className="MediaCarousel__thumbs" aria-label="Media thumbnails">
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              className={`MediaCarousel__thumb ${i === active ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Select media ${i + 1}`}
            >
              {item.type === "video" ? (
                <div className="MediaCarousel__thumbVideo">
                  {item.poster ? (
                    <img src={item.poster} alt="" loading="lazy" />
                  ) : (
                    <div className="MediaCarousel__thumbFallback">VIDEO</div>
                  )}
                  <span className="MediaCarousel__playBadge">▶</span>
                </div>
              ) : (
                <img src={item.src} alt="" loading="lazy" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
