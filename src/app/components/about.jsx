import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="relative mt-16 md:mt-32 mb-40 md:mb-48 sm:h-auto h-[95vh] md:[h-65vh]">
        <Image
          src="/circle1.svg"
          alt="image 2"
          width={100}
          height={100}
          className="w-[60%] sm:w-[37%] "
        ></Image>
        <Image
          src="/circle2.svg"
          alt="image 2"
          width={100}
          height={100}
          className="w-[70%] sm:w-[40%] absolute right-[-8%] sm:right-0 sm:top-0 top-[25%]"
        ></Image>
        <Image
          src="/circle3.svg"
          alt="image 2"
          width={100}
          height={100}
          className="w-[55%] sm:w-[25%] absolute right-[-5%] top-[70%] sm:top-[26%] sm:left-[37%]"
        ></Image>
        <Image
          src="/circle4.svg"
          alt="image 2"
          width={100}
          height={100}
          className="w-[50%] sm:w-[23%] absolute max-[640px]:left-[-5%] right-[27%] max-[640px]:top-[68%] top-[73%]"
        ></Image>
        <Image
          src="/circle5.svg"
          alt="image 2"
          width={100}
          height={100}
          className="w-[40%] sm:w-[15%] absolute sm:left-[39%] top-[-2%] sm:top-[-8%] right-[2%]"
        ></Image>
        <Image
          src="/circle6.svg"
          alt="image 2"
          width={100}
          height={100}
          className="w-[45%] sm:w-[15%] absolute left-0 sm:right-[29%] top-[45%] sm:hidden"
        ></Image>
        <Image
          src="/circle6.svg"
          alt="image 2"
          width={100}
          height={100}
          className="w-[15%] absolute left-[30%] top-[75%] max-[640px]:hidden"
        ></Image>
      </div>
      <div className="mt-[10%] text-black3 leading-[24px] lg:leading-[34px] text-[14px] lg:text-[17px]">
        <p className="font-bold  w-[95%] mx-auto my-8">
          It was one of the brightest day in my life, but it ended up as
          one of the most confusing. I turned 23 on June 23rd 2012, what
          a coincidence you will say. Being one of the coolest and most
          popular in my clique of friends and an avowed party boy- a get
          together/chill time was definitely expected. Being a
          quintessential party boy, I was ready!!!Most of the purchases
          for the evening had been made the previous day. The party
          never got to be, as a tackle on the pitch left me bedridden
          for a couple months following a surgery. The ensuing recovery
          period led to a total mental, social, spiritual, intellectual,
          and physical transformation of my being which I now bequeath
          on anyone who crosses my path.
        </p>
        <p className=" w-[90%] mx-auto my-8">
          The Renaissance Gentleman is a community of those men and
          women who seek to maximize their masculine energies in this 3D
          reality. In the past, there had been various descriptors for
          those who went beyond the mundane aspects of life- ‘polymath’,
          ‘genius’ etc. Following my own transformation I observed that
          I had unlocked various aspect of my being which I didn’t know
          was there. As my search continued, I observed that during the
          enlightenment/Renaissance period, there had been a plethora of
          people who led amazing lives but couldn’t be put in a box-
          Leonardo Da, Michelangelo, etc. I went on a quest to discover
          the traits that made these individuals to stand out and how I
          could replicate these tendencies in my own life first and then
          cascade to others- leading to the birth of ‘The Renaissance
          Gentleman’ simply, the reborn man.
        </p>
        <p className="font-bold w-[95%] my-8 mx-auto">
          On my journey, I realized that we have all the tools we
          require, if only we have the patience and perseverance to do
          the minimal work required. As my journey went on, I realized
          that I was being called to assist others find the same path
          that led to me becoming a maverick Attorney, Author, Speaker,
          Trainer and Coach. As part of my journey, I figured that I
          could assist others to level up on some salient aspects of
          life we are hardly taught in school. I narrowed my focus as to
          how people could live lives on the intersection of Social and
          intersexual dynamics, Fitness, Communication and Lifestyle
          design and it is from this expanded psychological, physical
          and spiritual perspective that I share my message.
        </p>
        <p className=" w-[90%] mx-auto my-8">
          TRG, is licensed to practice law in Nigeria. He consults and
          advises globally on a plethora of human and business concerns.
          He has variously been Described as ‘having an acute mind and
          an indescribable quest for adventure, he lives life to the
          fullest’ Whether he is traveling the globe, teaching, working
          out, mentoring, advising, etc TRG brings an uncanny
          perspective to human activities.
        </p>
      </div>
    </>
  );
}

export default About;