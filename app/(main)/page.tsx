import Image from "next/image";
import Link from "next/link";
import Activities from "./Activities";
import Universities from "./Universities";
// import Activities from "./Activities";

import BgBlurImage from "/public/images/bg-blur.svg";

export default function Home() {
  return (
    <main className="bg-neutral-900 pb-16 min-h-screen">
      <section className="min-h-96 h-[90vh] relative px-8 py-24 text-white">
        <video
          muted
          autoPlay
          loop
          playsInline
          className="min-h-96 absolute inset-0 h-[90vh] object-cover w-full"
        >
          <source src="/main_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute flex items-center inset-0 bg-neutral-900/75 z-10">
          <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-8 basis-full">
            <Image
              src="/logo.svg"
              width={160}
              height={160}
              alt=""
              className=""
            />
            <h1 className="text-5xl 2xl:text-7xl font-bold !leading-tight">
              학교를 넘어서,
              <br /> 지식과 경험을 확장해요.
            </h1>

            {/* <Link
              href="/about-us"
              className="2xl:text-2xl flex text-xl items-center mt-4"
            >
              <span className="mr-2">ACC South Korea 알아보기</span>
              <ArrowRightCircleIcon className="w-8 h-8" />
            </Link> */}
            {/* <Link
              href="/subscribe"
              className="flex 2xl:text-2xl text-xl items-center mt-2"
            >
              <span className="mr-2">다음 모집 알림 신청하기</span>
              <ArrowRightCircleIcon className="w-8 h-8" />
            </Link> */}
          </div>
        </div>
      </section>

      <section className="max-w-screen-lg 2xl:max-w-screen-xl px-8 mt-48 text-white mx-auto text-center">
        <h2 className="text-4xl font-bold">
          더 많은 학생들이, 더 클라우드에 익숙해지도록
        </h2>
        <p className="mt-16 text-xl text-gray-200">
          AWS Cloud Club은 AWS에서 지원하는 공식 대학생 커뮤니티 프로그램이에요.
        </p>
        <p className="mt-4 text-2xl font-semibold">
          대학생들이 클라우드에 대한 지식과 경험을 쌓고, <br />
          어떤 개발 분야에서도 클라우드를 활용할 수 있게 만들어요.
        </p>
      </section>

      <section className="bg-white mt-48">
        <div className="w-full bg-gradient-to-b from-white to-[#F4F3F6]">
          <div className="max-w-screen-lg 2xl:max-w-screen-xl py-24 px-8 mx-auto">
            <Activities />
          </div>
        </div>
      </section>

      <section className="max-w-screen-lg 2xl:max-w-screen-xl px-8 mt-48 text-white mx-auto text-center">
        <div className="relative">
          <Image
            src={BgBlurImage}
            alt=""
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
          />
          <Universities />
        </div>
      </section>
    </main>
  );
}
