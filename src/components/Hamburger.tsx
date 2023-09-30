import { motion } from "framer-motion";

export default function Hamburger({
  onClick,
  state,
}: {
  onClick: () => void;
  state: boolean;
}) {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 25 }}
      transition={{ delay: 0.35 }}
      onClick={onClick}
      className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
  `}
    >
      <motion.span
        animate={{ rotateZ: state ? 45 : 0, y: state ? 8 : 0 }}
        className="line-1 block h-0.5 w-8 bg-content"
      ></motion.span>

      <motion.span
        animate={{ width: state ? 0 : 24 }}
        className="line-2 block h-0.5 w-6 bg-content"
      ></motion.span>
      <motion.span
        animate={{
          rotateZ: state ? -45 : 0,
          y: state ? -8 : 0,
          width: state ? 32 : 24,
        }}
        className="line-3 block h-0.5 w-4 bg-content"
      ></motion.span>
    </motion.div>
  );
}
