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
          <h2 className="text-2xl font-bold">
            뉴스레터로 새로운 소식을 받아보세요.
          </h2>
        </div>
      </section>
    </main>
  );
}
