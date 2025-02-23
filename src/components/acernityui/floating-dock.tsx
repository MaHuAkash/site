"use client";
import { cn } from "../../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 right-0 flex flex-col gap-2 bg-gradient-to-b from-gray-900 via-purple-900/80 to-gray-900 p-2 rounded-2xl border border-purple-400/30 shadow-xl"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-900/40 to-amber-900/20 backdrop-blur-lg border border-purple-400/30 flex items-center justify-center shadow-lg p-2"
                >
                  {/* Centered icon container */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white w-6 h-6 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-900/70 to-amber-900/40 backdrop-blur-lg border border-purple-400/30 flex items-center justify-center shadow-lg"
      >
        <IconLayoutNavbarCollapse className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl",
        "bg-gradient-to-b from-gray-900/90 via-purple-900/80 to-gray-900/90",
        "backdrop-blur-lg border border-purple-400/30 px-4 pb-3 shadow-xl",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gradient-to-br from-purple-900/40 to-amber-900/20 backdrop-blur-sm flex items-center justify-center relative shadow-md p-2"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 rounded-md bg-gradient-to-br from-purple-900/70 to-amber-900/40 backdrop-blur-sm border border-purple-400/30 text-white absolute left-1/2 -translate-x-1/2 -top-8 text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Centered icon container */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-white w-6 h-6 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}