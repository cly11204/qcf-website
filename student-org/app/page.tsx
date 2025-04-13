import Image from "next/image"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-black text-white">
        <div className="absolute inset-0 opacity-70">
          <Image src="/images/hero-background.png" alt="Financial charts background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="mb-4">
            <Image src="/images/qcf-logo.svg" alt="QCF GROUP" width={120} height={60} className="mx-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">The University of Michigan's</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Quantitative & Computational</h2>
          <h2 className="text-2xl md:text-3xl font-bold">Finance Group</h2>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-white" style={{ borderRadius: "100% 100% 0 0" }}></div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#c25b56] mb-6">Who we are</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum fermentum faucibus. Donec et
                venenatis risus, ut consectetur dolor. Vivamus dictum elit augue, in porttitor quam pellentesque vel.
                Integer interdum vel nunc eu elementum. Mauris pellentesque, odio quis faucibus hendrerit, nulla elit
                dictum odio, et eleifend mi lectus quis nunc.
              </p>
              <p>
                Proin eget magna velit. In laoreet consectetur mi ac feugiat. Ut eu porttitor magna, ut rutrum nisi.
                Integer congue nibh eu felis finibus iaculis. Curabitur efficitur tincidunt enim eu tincidunt. In at
                accumsan felis, sit amet porta ligula. Morbi elementum condimentum orci, sed varius dolor mattis ac.
                Donec at vulputate quam.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/images/team-photo.png" alt="QCF Team" width={500} height={300} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">We work across 3 critical domains</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-6 h-6 flex-shrink-0 mr-4 bg-gray-300"></div>
              <div>
                <h3 className="text-xl font-bold">Trading</h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 flex-shrink-0 mr-4 bg-gray-300"></div>
              <div>
                <h3 className="text-xl font-bold">Quantitative Analysis</h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 flex-shrink-0 mr-4 bg-gray-300"></div>
              <div>
                <h3 className="text-xl font-bold">Statistical Predictions</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
            <div>
              <h3 className="text-5xl font-bold">35+</h3>
              <p className="text-xl text-[#c25b56]">Members</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">20+</h3>
              <p className="text-xl text-[#c25b56]">Alumni</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="text-xl text-[#c25b56]">Majors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">OUR COMMUNITY</h2>
          <p className="max-w-3xl mx-auto mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum fermentum faucibus. Donec et
            venenatis risus, ut consectetur dolor. Vivamus dictum elit augue, in porttitor quam pellentesque vel.
            Integer interdum vel nunc eu elementum. Mauris pellentesque, odio quis faucibus hendrerit, nulla elit dictum
            odio, et eleifend mi lectus quis nunc.
          </p>
          <p className="max-w-3xl mx-auto">
            Proin eget magna velit. In laoreet consectetur mi ac feugiat. Ut eu porttitor magna, ut rutrum nisi. Integer
            congue nibh eu felis finibus iaculis. Curabitur efficitur tincidunt enim eu tincidunt. In at accumsan felis,
            sit amet porta ligula. Morbi elementum condimentum orci, sed varius dolor mattis ac. Donec at vulputate
            quam.
          </p>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider mb-2">EXPLORE</p>
          <h2 className="text-3xl font-serif mb-4">Join our journey</h2>
          <p className="max-w-2xl mx-auto mb-12">
            Whether you're a potential collaborator, institutional trader or talented graduate, we're always looking for
            people to join us on our mission and make us better.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-5xl font-bold mb-2">&gt;1,900</h3>
              <p className="text-xl mb-2">Work with us</p>
              <p className="text-sm">Our teams work with in startup, technology, and finance.</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">100+</h3>
              <p className="text-xl mb-2">Trade with us</p>
              <p className="text-sm">We provide liquidity to institutional partners on 7+ exchanges globally.</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">16</h3>
              <p className="text-xl mb-2">Team up with us</p>
              <p className="text-sm">
                Working with entrepreneurs and businesses across the financial market is key to our mission to improve
                the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#c25b56] text-center mb-12">Words From Our Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <p className="italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum fermentum faucibus. Donec et
                  venenatis risus, ut consectetur dolor. Vivamus dictum elit augue, in porttitor quam pellentesque vel.
                  Integer interdum vel nunc eu elementum. Mauris pellentesque, odio quis faucibus hendrerit, nulla elit
                  dictum odio, et eleifend mi lectus quis nunc."
                </p>
                <p className="text-[#c25b56]">— [NAME], [CONNECTION]</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
