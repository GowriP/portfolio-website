import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[30px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-0'>
          <div className='w-5 h-5 rounded-full bg-[#047AD7] '>
            <div className='w-1 sm:h-80 h-40 mx-2 blue-gradient items-center justify-center'/>
          </div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-lg`}>Hi, I'm 
            <span className='text-[#047AD7]'> Gowri</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a recent MBA graduate with a background<br className='sm:block hidden'/>
             in full stack software development
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className=' absolute xs:bottom-20 bottom-64 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate = {{
                y : [0, 24, 0]
              }}
              transition = {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop' 
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              >
            </motion.dev>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero