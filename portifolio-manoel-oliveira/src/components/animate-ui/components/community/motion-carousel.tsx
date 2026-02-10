'use client';

import * as React from 'react';
import { motion, type Transition } from 'framer-motion';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/animate-ui/components/buttons/button";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from "@/lib/utils"; 

type PropType = {
  slides: (string | React.ReactNode)[];
  options?: EmblaOptionsType;
};

type EmblaControls = {
  selectedIndex: number;
  scrollSnaps: number[];
  prevDisabled: boolean;
  nextDisabled: boolean;
  onDotClick: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

type DotButtonProps = {
  selected?: boolean;
  label: string;
  onClick: () => void;
};

const transition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
};

const useEmblaControls = (
  emblaApi: EmblaCarouselType | undefined,
): EmblaControls => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  const onDotClick = React.useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateSelectionState = React.useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  }, []);

  const onInit = React.useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
    updateSelectionState(api);
  }, [updateSelectionState]);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    updateSelectionState(api);
  }, [updateSelectionState]);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on('reInit', onInit).on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit).off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  };
};

function MotionCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  return (
    <div className="w-full space-y-4 [--slide-height:25rem] md:[--slide-height:30rem] [--slide-spacing:1.5rem] [--slide-size:85%] md:[--slide-size:60%]">
      <div className="overflow-visible" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex;

            return (
              <motion.div
                key={index}
                className="h-[var(--slide-height)] mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                <motion.div
                  className={cn(
                    "size-full relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl",
                    isActive ? "ring-2 ring-blue-500/20" : ""
                  )}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={transition}
                >
                  {typeof slide === 'string' ? (
                    <img 
                      src={slide} 
                      alt={`Slide ${index + 1}`} 
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                       {slide}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center px-4">
        <Button variant="outline" size="icon" onClick={onPrev} disabled={prevDisabled} className="rounded-full bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800">
          <ChevronLeft className="size-5" />
        </Button>

        <div className="hidden md:flex flex-wrap justify-center items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              label={`${index + 1}`}
              selected={index === selectedIndex}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={onNext} disabled={nextDisabled} className="rounded-full bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800">
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

function DotButton({ selected = false, label, onClick }: DotButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      className={cn(
        "flex cursor-pointer select-none items-center justify-center rounded-full border-none text-sm font-medium transition-colors",
        selected ? "bg-white text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
      )}
      animate={{
        width: selected ? 32 : 12, 
        height: selected ? 32 : 12,
        borderRadius: 999
      }}
      transition={transition}
    >
      {selected && ( 
        <motion.span
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="block whitespace-nowrap"
        >
          {label}
        </motion.span>
      )}
    </motion.button>
  );
}

export { MotionCarousel };