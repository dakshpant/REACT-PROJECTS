import React from 'react'
import BgNavP from '../Common Module/Section1/BgNav'
import purpleBackground from "../../assets/images/bgP.png"
import NavBar from '../Common Module/Header/NavBar'
// import arrow from "./Components/images/mi_arrow-up.png"
import { MdOutlineArrowOutward } from "react-icons/md";
import Wave from 'react-wavify'
import Card from './Components/Card/Card';
import Arrow from './Components/images/Vector.png'
import ClickMe from './Components/images/Click Here.png'
import Card2 from './Components/Card2/card';
import { useEffect, useState } from 'react'
import faceSwap from './Components/images/fluent_people-swap-28-regular.png'
import lipSync from './Components/images/lip-sync.svg'
import speechToText from './Components/images/speech-to-text-rounded.svg'
import Groups from './Components/images/Group.svg'
import waves from './Components/images/Vector-waveLines.png'
import FaqCard from './Components/FAQ/faqCard'
import ellipse1 from './Components/images/Ellipse 1.png'
import ellipse2 from './Components/images/Ellipse 2.png'
import ellipse3 from './Components/images/Ellipse 3.png'
import ellipse4 from './Components/images/Ellipse 4.png'
import strike from './Components/images/Image-underline.png'
import Video from './Components/images/section3Video.mp4'
const Home = () => {
  const [paused1, setPaused1] = useState(true);
  const [paused2, setPaused2] = useState(true);

  const qna1 = [
    {
      question1: 'How does your AI-powered lip- syncing ',
      question2: 'technology work?',
      answer: "Our lip-syncing technology leverages advanced machine learning algorithms to analyze audio and video data, mapping speech to precise mouth movements in real time. By studying language nuances and the unique facial structures of performers, the system creates seamless, natural-looking sync between dialogue and visual expression. This is particularly valuable for multilingual productions, enabling content creators to adapt content quickly while preserving the emotional tone and context of the original performance. With continuous improvements through deep learning, our system refines its output over time, ensuring that each project meets the highest quality standards expected by modern audiences."
    },
    {
      question1: "Which industries can benefit from your AI-driven ", question2: "creative solutions?",
      answer: "Our services have broad applications across a diverse range of industries. For example, entertainment and media companies can use our lip syncing and face swap tools to create dynamic and visually engaging content. Marketing and advertising agencies benefit from enhanced localization and multilingual campaigns that captivate global audiences. Moreover, e-learning platforms, corporate communications, and social media firms can leverage our text-to-speech and translation services to enhance engagement and accessibility. Ultimately, any business that relies on high-quality, engaging content to connect with its audience can see substantial benefits from our innovative solutions."
    },
    {
      question1: "What makes your face swap technology stand out ",
      question2: "from others?",
      answer: "Our face swap solution is designed with precision and realism at its core. By using sophisticated artificial intelligence and neural networks, the tool captures minute facial details and textures to produce highly accurate results. It isn't just about swapping faces—it's about maintaining natural expressions, lighting consistency, and fluid animations that integrate seamlessly with the surrounding visual elements. This technology is beneficial for creative storytelling, cinematic productions, or personalized experiences where authenticity is key. Regular updates, rigorous testing, and feedback integration ensure our face swap service remains at the cutting edge of visual innovation."
    },
    {
      question1: "What is the typical turnaround time for projects",
      question2: "using your services?",
      answer: "Turnaround times can vary based on the scope and complexity of the project. However, our automated systems are designed to handle tasks with remarkable speed without sacrificing quality. For standard tasks like text-to-speech synthesis or simple translations, you can expect results within minutes. More complex tasks, such as fine-tuning face swaps or handling extensive multilingual video projects, may take longer, although our process is optimized to deliver high-quality outputs faster than traditional methods. We also offer customizable project timelines and priority processing for enterprise clients, ensuring that your deadlines are consistently met. "
    },
    {
      question1: "How accurate and natural is the text-to-speech",
      question2: "(TTS) output?",
      answer: "Our text-to-speech system is engineered to replicate human-like intonation, emotion, and clarity. By analyzing vast datasets of natural speech patterns and refining voice synthesis through advanced deep learning models, our TTS solution produces voices that are not only clear and articulate but also emotionally resonant. Whether it's for narration, interactive voice applications, or customer support, our technology adapts its speech cadence and inflection to suit the context, ensuring that audiences experience communication that feels warm and authentic. Continuous model training and quality testing guarantee that our output meets a high standard of naturalness and reliability."
    }
  ]
  const qna2 = [
    {
      question1: "How do you ensure the privacy and security of my ",
      question2: "creative projects and data?",
      answer: "We understand that data privacy and security are paramount for our clients. Our systems implement state-of-the-art encryption protocols and secure data storage practices to safeguard your intellectual property and sensitive project details. Furthermore, access controls and regular security audits ensure that only authorized personnel can access your data. We adhere to strict regulatory standards and industry best practices, which means your creative work is protected at every stage of the process. Transparent security policies and commitment to data integrity are fundamental pillars of our operation."
    },
    {
      question1: "How does your translation service handle multiple ",
      question2: "languages and cultural nuances?",
      answer: "Our translation service is built on a robust AI engine that goes beyond literal word-for-word conversion. It takes into account context, idiomatic expressions, and cultural subtleties to deliver translations that are both accurate and culturally relevant. By using a combination of neural machine translation and human-in-the-loop verification, we ensure that the localized content resonates with target audiences while preserving the original tone and intent. This dual-layer approach allows businesses to expand their reach globally, providing content that feels authentically local even when produced at scale. Regular updates and integration with linguistic databases further enhance accuracy and relevancy."
    },
    {
      question1: "Do you provide support and training for new users of ",
      question2: "your AI tools?",
      answer: "Absolutely. We believe in empowering our users to fully harness the potential of our technology. Our support ecosystem includes comprehensive onboarding sessions, detailed documentation, video tutorials, and dedicated customer service that's available to assist you throughout the integration process. Whether you are a seasoned professional or a newcomer to AI-driven solutions, our training and support are tailored to meet your needs, ensuring you achieve maximum efficiency and creative freedom with our tools. We also offer periodic webinars and Q&A sessions to keep you updated on new features and best practices."
    },
    {
      question1: "Can these AI-driven tools integrate with existing",
      question2: " creative workflows and platforms?",
      answer: "Yes, our suite of AI tools is designed with versatility and integration in mind. Whether you are operating with traditional video editing software, leveraging digital asset management systems, or using modern cloud-based platforms, our solutions can be seamlessly integrated to enhance your existing workflow. APIs and SDKs are available to ensure smooth connectivity, allowing for automation, customization, and effortless scaling. Our technical support team is also on hand to help with integration challenges, ensuring that implementation is straightforward and tailored to your specific creative environment."
    },
    {
      question1: "How do you stay ahead of the curve in an ever-",
      question2: "evolving technological landscape?",
      answer: "Innovation is at the heart of everything we do at Dojiwa. Our team of experts continually researches and integrates the latest advancements in AI, machine learning, and creative automation. We engage with industry thought leaders, gather feedback from our clients, and invest significantly in R&D to ensure that our tools not only meet current market demands but also anticipate future trends. This proactive approach allows us to deliver solutions that are not only state-of-the-art today but also remain relevant as technology evolves. Our commitment to continuous improvement ensures that your creative workflow is always enhanced by the latest and most effective AI innovations."
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setPaused1(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPaused2(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const App = () => (
    <Wave fill='#000'
      paused={false}
      style={{ display: 'flex' }}
      options={{
        height: 30,
        amplitude: 50,
        speed: 0.15,
        points: 3
      }}
    />
  )

  return (
    <>
      <div>
        <div className="h-[751px] object-cover bg-center relative pt-6 " style={{ backgroundImage: `url(${purpleBackground}` }}>

          {/* Nav bar */}
          <div className='sticky top-0 left-0 right-0 z-50 '>
            <NavBar />
          </div>
          {/* Section 1 */}

          <div className='flex-col flex justify-center items-center my-20'>
            <div>
              <button className='text-btn-text-orange shadow-2xl border-[0.5px] font-medium border-btn-text-orange px-4 py-1.5 rounded-full'>AI-Powered Services</button>
            </div>
            <div className='my-10'>
              <h1 className='gradientColor font-extrabold text-6xl text-center'>AI Solutions That <br />
                Redefine Creative <br />
                Workflows</h1>
            </div>
            <div>
              <p className='textMon text-white text-center'>Create smarter. Localize faster. Elevate effortlessly — <br />with the power of next-gen AI. </p>
            </div>
            <div className='my-10'>
              <button className='text-white text-xl bg-btn-text-orange items-center inline-flex rounded-full px-5 py-1.5 hover:bg-transparent hover:text-btn-text-orange transition-all duration-1000 hover:border-1 hover:border-btn-text-orange'>Connect With Us <MdOutlineArrowOutward className='ms-1.5' /> </button>
            </div>
          </div>
        </div>
        {/* Section 1 wave section */}
        <div className='relative mb-55'>
          <div className='absolute top-0 left-0 right-0 z-20'>
            <Wave
              fill='#3B0D4A'
              paused={false}
              options={{
                height: 40,
                amplitude: 60,
                speed: 0.25,
                points: 5
              }}
              className='rotate-180'>
            </Wave>
          </div>
          <div className='absolute top-0 left-0 right-0 -z-20'>
            <Wave
              fill='#630E82'
              paused={paused1}
              options={{
                height: 40,
                amplitude: 60,
                speed: 0.25,
                points: 5
              }}
              className='rotate-180'>
            </Wave>
          </div>
          <div className='absolute top-0 left-0 right-0 -z-30'>
            <Wave
              fill='#E78CFF'
              paused={paused2}
              options={{
                height: 40,
                amplitude: 60,
                speed: 0.25,
                points: 5
              }}
              className='rotate-180'>
            </Wave>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <div className='container mx-auto'>
            <div className='flex-col flex justify-center items-center my-20'>
              <div className='mb-8'>
                <h2 className='text-sec2-h2 text-[32px] font-bold font-Montserrat'>Where Innovation Meets Imagination</h2>
              </div>
              <div className='mb-8'>
                <p className='text-[20px]/[28.8px]  text-center font-Montserrat font-light'>At Dojiwa, we don't just build tools — we design intelligent experiences that revolutionize how content is created,
                  <br />
                  adapted, and shared.
                  <br />
                  Whether it's syncing lips across languages, generating lifelike voiceovers, translating in real time, or transforming faces with

                  stunning realism, our AI-driven suite empowers creators to tell global stories with local impact.
                  <br />
                  Backed by precision, scalability, and a commitment to innovation, we enable brands, studios, and creative teams to break free from traditional constraints and produce content that’s faster, smarter, and more immersive.</p>
              </div>
              <div className='mb-15'>
                <span className='text-[20px] text-center font-[700] font-Montserrat capitalize'>With Dojiwa, creativity meets its most powerful ally — intelligence.</span>
              </div>
              <div className='flex justify-around items-center gap-x-12'>
                <Card
                  Heading='For Sales & Marketing Teams'
                  Desc1='Deliver hyper-personalized, multilingual'
                  Desc2='campaigns that convert and resonate—'
                  Desc3='anywhere in the world.' />
                <Card
                  Heading='for Agencies'
                  Desc1='Accelerate production with intelligent '
                  Desc2='tools built for speed, scale, and '
                  Desc3='creative freedom.' />
                <Card
                  Heading='For Businesses'
                  Desc1='Simplify localization. Maximize impact.'
                  Desc2='Engage customers globally with'
                  Desc3='tailored content at scale.' />

              </div>
              <div className='mt-20 relative'>
                <button className='border text-[16px] font-[700] fonyt-Montserrat capitalize border-btn-text-orange rounded-full text-btn-text-orange px-8 py-1.5 hover:bg-btn-text-orange hover:text-white transition-all duration-1000'>Contact Us For Services</button>

                <img
                  className='h-12 absolute top-px left-65 '
                  src={Arrow}
                  alt="" />
                <img
                  className='h-12 absolute top-10 left-71 '
                  src={ClickMe}
                  alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div className=''>
          <Wave
            fill='#2A0335'
            paused={false}
            options={{
              height: 50,
              amplitude: 40,
              speed: 0.22,
              points: 5,
            }}
            className='mb-[-8px] p-0'>
          </Wave>
          <div className='pt-10 pb-20' style={{ background: `url(${waves}) rgba(42, 3, 53, 1)`, backgroundSize: "cover", height: "auto" }}>
            <div className='container mx-auto'
            >
              <div className='flex flex-col justify-center items-center'>
                <div className='my-8 text-center'>
                  <h1 className='text-[#56C3E8] shadow-2xl font-Montserrat text-[32px] capetalize font-[700] mb-4'>Our Services</h1>
                  <p className='text-[#FFF0E1] text-center font-Montserrat text-[18px] font[400]'>Unleash brilliance—our state-of-the-art AI empowers you to craft, translate, and <br /> transform your content into a global masterpiece."</p>
                </div>
                {/* Mid Card section */}
                <div className='flex flex-row gap-12'>
                  <div className='flex flex-col justify-center items-center gap-y-12'>
                    <div className='flex justify-center items-center gap-x-12'>
                      <Card2 img={faceSwap} heading='Face Swap' desc='Experience realistic transformations with our advanced face-swap technology.' />
                      <Card2 img={lipSync} heading='Lip Syncing' desc='Bring your videos to life with perfectly synchronized lip movements' />
                    </div>
                    <div className='flex justify-center items-center gap-x-12'>
                      <Card2 img={speechToText} heading='Speech to Text' desc='Transform text into immersive, natural-sounding audio.' />
                      <Card2 img={Groups} heading='Translation' desc='Break language barriers with our real-time translation services.' />
                    </div>

                  </div>
                  <div className='h-[565px] w-[671px] rounded-4xl'>
                    <video 
                    className='h-[565px] w-[671px] rounded-4xl'
                    autoPlay
                    loop
                    muted
                      src={Video}></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Wave
            fill='#2A0335'
            paused={paused1}
            options={{
              height: 50,
              amplitude: 40,
              speed: 0.22,
              bones: 3,
              points: 5,
            }}
            className='mb-[-7px] p-0 rotate-180 bg-[#FEF8F1] '>
          </Wave>
        </div>
        {/* Section 4 */}
        <div className='bg-[#FEF8F1] pb-20'>
          <div className='container mx-auto w-[1149px] '>
            <div className='flex flex-col items-center justify-center gap-y-10 '>
              <h1 className='text-[32px] text-sec2-h2 capitalize font-Montserrat font-[700]'>
                Frequently asked Questions
              </h1>
              <div className='container mx-auto flex flex-wrap gap-7'>
                <div className='flex flex-col gap-10 '>
                  {
                    qna1.map((items, index) => {
                      return (
                        <div className=''>
                          <FaqCard key={index} question1={items.question1} question2={items.question2} answer={items.answer} />
                        </div>
                      )
                    })
                  }
                </div>
                <div className='flex flex-col gap-10 '>
                  {
                    qna2.map((items, index) => {
                      return (
                        <div className=''>
                          <FaqCard key={index} question1={items.question1} question2={items.question2} answer={items.answer} />
                        </div>
                      )
                    })
                  }
                </div>

              </div>

            </div>
          </div>
          {/* Section 4 end */}

          <div className='mt-15 m-auto py-15 rounded-[40px] section4End w-[1240px] flex flex-row items-center justify-center relative'>
            <img className='absolute bottom-0 right-0' src={ellipse1} alt="" />
            <img className='absolute top-0 left-0' src={ellipse2} alt="" />
            <img className='absolute bottom-0 left-28' src={ellipse3} alt="" />
            <img className='absolute bottom-40 right-65 z-0' src={ellipse4} alt="" />
            <img className='absolute bottom-39 right-60 z-0' src={strike} alt="" />
            <div className='my-8 items-center z-1'>
              <h1 className='text-[48px] capitalize font-Montserrat font-[700] text-white'>Experience the Next Era of Creativity</h1>

              <button className='px-8 py-2 mt-4 rounded-full bg-btn-text-orange text-white text-[18px] font-Montserrat font-[700] flex justify-center m-auto'>Contact Us For Services</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home