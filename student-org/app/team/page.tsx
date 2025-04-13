import Image from "next/image"

export default function TeamPage() {
  return (
    <main className="bg-black text-white">
      {/* Team Hero */}
      <section className="relative">
        <div className="w-full h-[400px] relative">
          <Image src="/images/team-photo.png" alt="Our Team" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold">Our Team</h1>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Board Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-200 aspect-square rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Managers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Project Managers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-200 aspect-square rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Alumni</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="text-center">
                <p>Bravo Pang</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
