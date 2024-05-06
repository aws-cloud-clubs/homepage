import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Activities from "./Activities";

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

            <Link
              href="/about-us"
              className="2xl:text-2xl flex text-xl items-center mt-4"
            >
              <span className="mr-2">ACC South Korea 알아보기</span>
              <ArrowRightCircleIcon className="w-8 h-8" />
            </Link>
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

      <section className="max-w-screen-lg 2xl:max-w-screen-xl px-8 mt-16 text-white mx-auto">
        <Activities />
      </section>

      {/* <section className="max-w-screen-lg 2xl:max-w-screen-xl px-8 mt-16 text-white mx-auto">
        <h2 className="text-4xl font-bold">최근 발표</h2>
        <div className="grid grid-cols-3 mt-8 gap-8">
          <Link href="#" className="group">
            <div
              className="relative object-cover aspect-[16/9]
                transition-transform duration-200 group-hover:-translate-y-1"
            >
              <Image src="/accscd.jpg" fill alt="" className="rounded-md" />
            </div>

            <p className="mt-3 text-sm text-gray-200">모든 학교 | 2024.04.06</p>
            <p className="font-medium mt-3">ACC Student Community Day 2024 </p>
          </Link>
          <Link href="#" className="group">
            <div
              className="relative object-cover aspect-[16/9]
                transition-transform duration-200 group-hover:-translate-y-1"
            >
              <Image src="/kwu.jpg" fill alt="" className="rounded-md" />
            </div>
            <p className="mt-3 text-sm text-gray-200">
              광운대학교 | 2024.03.28
            </p>
            <p className="font-medium mt-3">
              광운대학교 2024년 1학기 오리엔테이션
            </p>
          </Link>
        </div>
      </section> */}
    </main>
  );
}
