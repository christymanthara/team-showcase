import { motion } from "framer-motion";
import Image from "next/image";
import dragonImg from "@/assets/dragon.png"; // Replace with your dragon image

export default function AnimatedDragon() {
  return (
    <motion.div
      className="absolute bottom-10 left-0 w-32"
      animate={{ x: [0, 1000, 0] }} // Moves left to right and back
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <Image src={dragonImg} alt="Dragon" width={150} height={100} />
    </motion.div>
  );
}
