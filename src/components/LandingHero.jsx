import Link from "next/link";

export default function LandingHero() {
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col md:flex-row md:gap-12 ">
        <img
          src="/pinksuitcase.jpg"
          // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold">Packer Hacker</h1>
          <div className="py-6">Stress-free packing starts here.</div>
          <div className="">
            <Link href="/user">
              <button className="btn btn-primary md:mt-8">Let's Go</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
