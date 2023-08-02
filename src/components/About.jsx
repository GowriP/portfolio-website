import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ( {index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={(fadeIn("right", "spring", index * 0.5, 0.75))}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            options = {{
              max: 45,
              scale: 1,
              speed: 450,
            }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img src={icon} alt={title}
              className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1, 1)}
        className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am an aspiring Product Manager with an enthusiasm for continuous learning and a passion for crafting effective product strategies. I completed my MBA at Schulich School of Business in April, 2021.
        <br /><br />
        As a Full Stack Web Developer, my experiences have led me to deliver significant business outcomes and drive technology strategy on a large scale. Before pursuing my MBA, I worked at EFI as a web developer, where I developed applications to facilitate clients in printing and reproducing brand colors.
        <br /><br />
        Some noteworthy hobbies include exploring and cooking various cuisines, board games and hiking!
        Connect with me on <a href="https://www.linkedin.com/in/gowri-prakash/" className="underline text-[#00cea8] text-400">LinkedIn</a> or email me at prakashgowri72@gmail.com
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )  
}

export default SectionWrapper(About, "about")