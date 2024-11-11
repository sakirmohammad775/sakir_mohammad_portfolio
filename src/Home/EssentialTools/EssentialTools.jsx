
import { DiRedis } from "react-icons/di";
import { FaNode, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion"
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Technologies = () => {
    return (
        <>
            <div className="border-b bg-black border-neutral-800 pb-24">
                <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-center text-white"><span className='text-orange-400'>Essential</span > Tools I Use</h2>
                    <p className="text-gray-200">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
                </div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaReact className="text-7xl text-cyan-400" />
                    </motion.div>
                    <motion.div variants={iconVariants(6)}
                        initial="initial"
                        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiNextdotjs className="text-7xl text-white" />
                    </motion.div>
                    <motion.div variants={iconVariants(2)}
                        initial="initial"
                        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNode className="text-7xl text-green-400" />
                    </motion.div>
                    <motion.div variants={iconVariants(3)}
                        initial="initial"
                        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoJavascript className="text-7xl  bg-yellow-400  text-gray-800" />
                    </motion.div>
                    <motion.div variants={iconVariants(6)}
                        initial="initial"
                        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaPython className="text-7xl text-yellow-400" />
                    </motion.div>
                    <motion.div variants={iconVariants(5)}
                        initial="initial"
                        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiRedis className="text-7xl text-red-600" />
                    </motion.div>

                </motion.div>
            </div>
        </>
    );
};

export default Technologies;