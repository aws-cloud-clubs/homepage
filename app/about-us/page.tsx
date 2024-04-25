import Image from "next/image";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export default function AboutUsPage() {
  return (
    <main className="bg-neutral-900 py-16 text-white">
      <nav className="max-w-screen-lg px-8 text-white mx-auto">
        <Link href="/" className="flex text-xl items-center mt-4">
          <ArrowLeftCircleIcon className="w-8 h-8 mr-2" />
          <span>메인 페이지로 이동하기</span>
        </Link>
      </nav>

      <section className="max-w-screen-lg px-8 py-16 mx-auto">
        <div className="bg-white text-gray-900 rounded-xl p-8">
          <h2 className="text-2xl font-bold">11개의 대학교와 함께해요.</h2>
          <p className="mt-2">
            AWS Cloud Club in South Korea는 대학 내에서 AWS(아마존 웹 서비스)
            또는 클라우드 기술에 관심있는 개발자 또는 IT업계 지망생들이 모여
            클라우드 기술을 공부하고 전파하는 연합 동아리예요.
          </p>
          <Image
            src="/map.svg"
            width={863}
            height={890}
            alt=""
            className="mt-4"
          />
        </div>
      </section>
    </main>
  );
}
