export const About = () => {
  return (
    <div className="about flex py-24 px-20 justify-between items-center bg-gray-50">
      <div className="container flex flex-col gap-22 items-center ">
        <div className="row1 flex flex-col gap-4 items-start border rounded-xl bg-gray-600 mb-[30px]">
          <div className="row flex flex-col justify-center items-center ">
            <p className="flex py-1 px-5 justify-center items-center bg-gray-200 border rounded-xl ">
              About me
            </p>
          </div>
        </div>

        <div className="row2 flex items-center gap-12 w-[1216px] h-[770px]">
          <div className="left flex min-w-96 w-[584px] h-[694px] flex-col items-start text-gray-50">
            <div className="image absolute z-10 mr-[30px]">
              <img
                className="w-[400px] h-[480px] border-solid border-[white] border-[8px]"
                src="/alexa.webp "
                alt=""
                width={400}
                height={480}
              />
            </div>
            <div className="shadow w-[400px] h-[480px] ml-[-40px] mt-[30px] bg-gray-200"></div>
          </div>
          <div className="right flex w-[584px] h-[694px] flex-col items-start gap-6 ">
            <h1 className="text-3xl not-italic font-semibold leading-9">
              Curious about me? Here you have it:
            </h1>
            <div className="flex flex-col gap-4 items-start">
              <p className="text-gray-600">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="text-gray-600">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="text-gray-600">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="text-gray-600">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p className="text-gray-600">
                Finally, some quick bits about me.
              </p>
              <div className="text-gray-600 flex gap-[10px] items-start ">
                <ul className="flex flex-col gap-[10px] items-start list-disc pl-[13px]">
                  <li className="text-base leading-6 w-[287px] h-[24px]">
                    B.E. in Computer Engineering
                  </li>
                  <li className="text-base leading-6 w-[287px] h-[24px]">
                    Full time freelancer
                  </li>
                </ul>
                <ul className="flex flex-col gap-[10px] items-start list-disc pl-[10px]">
                  <li className="text-base leading-6 w-[287px] h-[24px]">
                    Avid learner
                  </li>
                  <li className="text-base leading-6 w-[287px] h-[24px]">
                    Aspiring indie hacker
                  </li>
                </ul>
              </div>
              <p className="text-gray-600">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
