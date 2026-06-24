import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center lg:mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-[0.12em] text-[#c01130] sm:text-3xl lg:text-4xl">
            About Apex Innovations, Inc.
          </h2>
        </div>

        <div className="hidden min-h-[320px] grid-cols-[1.35fr_1.35fr_0.9fr] items-stretch gap-8 lg:grid xl:min-h-[340px] xl:gap-10">
          <div className="relative overflow-hidden rounded-sm bg-white">
            <Image
              src="/img/sample-pic.jpg"
              alt="Apex Innovations company photo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 1280px) 36vw, 440px"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-3 text-3xl font-extrabold leading-[0.95] text-gray-900">
              Driving Innovation.
              <br />
              Delivering Excellence.
            </h3>
            <p className="mb-5 text-xs leading-5 text-gray-600 xl:text-sm xl:leading-6">
              Our team is composed of technical experts who have extensive
              hands-on experience in business operations and providing solutions
              from various industries, delivering the latest information,
              equipment, and data communication to meet the unfolding and
              evolving needs of businesses in the country.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="mb-2 text-xs font-bold text-gray-900 xl:text-sm">
                  Our Mission
                </h3>
                <p className="text-xs leading-5 text-gray-600">
                  Our purpose is to provide products, services, and solutions of
                  superior quality and value that improve the business of the
                  customers we serve.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xs font-bold text-gray-900 xl:text-sm">
                  Our Vision
                </h3>
                <p className="text-xs leading-5 text-gray-600">
                  A company that best satisfies the products, services, and
                  solutions needs of businesses, and apply this extraordinary
                  technology for partner&apos;s success.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-[#c01130] p-8 text-white">
            <div className="mb-1 select-none font-serif text-6xl font-bold leading-[0.75] text-white">
              &ldquo;
            </div>
            <p className="mb-5 text-base font-bold uppercase tracking-normal text-white">
              Message from our GM
            </p>
            <p className="text-lg leading-7 text-white">
              Our commitment is to deliver innovative solutions that empower
              our clients to succeed in a rapidly changing digital world.
            </p>

            <div className="mt-auto pt-5">
              <p className="text-lg font-bold text-white">Lemuel Pondevida</p>
              <p className="mt-0.5 text-sm font-semibold text-white/80">
                GM and CTO
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:hidden">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/img/sample-pic.jpg"
              alt="Apex Innovations company photo"
              width={1200}
              height={900}
              className="block h-auto w-full"
              sizes="100vw"
            />
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
              Driving Innovation. Delivering Excellence.
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Our team is composed of technical experts who have extensive
              hands-on experience in business operations and providing solutions
              from various industries, delivering the latest information,
              equipment, and data communication to meet the unfolding and
              evolving needs of businesses in the country.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="mb-1.5 text-xs font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">
                  Our purpose is to provide products, services, and solutions of
                  superior quality and value that improve the business of the
                  customers we serve.
                </p>
              </div>
              <div>
                <h3 className="mb-1.5 text-xs font-bold text-gray-900">
                  Our Vision
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">
                  A company that best satisfies the products, services, and
                  solutions needs of businesses, and apply this extraordinary
                  technology for partner&apos;s success.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-[#c01130] p-7 text-white">
            <div className="select-none font-serif text-5xl font-bold leading-[0.75] text-white">
              &ldquo;&ldquo;
            </div>
            <p className="text-base font-bold uppercase tracking-normal text-white">
              Message from our GM
            </p>
            <p className="text-lg leading-7 text-white">
              Our commitment is to deliver innovative solutions that empower
              our clients to succeed in a rapidly changing digital world.
            </p>
            <div className="border-t border-white/25 pt-4">
              <p className="text-lg font-bold text-white">Lemuel Pondevida</p>
              <p className="mt-0.5 text-sm text-white/70">GM and CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
