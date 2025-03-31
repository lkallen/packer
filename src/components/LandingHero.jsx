import Link from "next/link";

export default function LandingHero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/pinksuitcase.jpg"
          // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Packer Hacker</h1>
          <p className="py-6">Packing for vacation just got easier!</p>
          <Link href="/user">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
