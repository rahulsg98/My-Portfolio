import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const SectionHeading = ({ index, sub, title, center = false }) => (
  <motion.div variants={textVariant()} className={center ? "text-center" : ""}>
    <p className={styles.sectionSubText}>
      <span className="text-fuchsia-400">{index}</span> // {sub}
    </p>
    <h2 className={styles.sectionHeadText}>{title}</h2>
  </motion.div>
);

export default SectionHeading;
