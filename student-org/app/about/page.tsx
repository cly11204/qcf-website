import Image from "next/image"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-black text-white">
        <div className="absolute inset-0 opacity-70">
          <Image src="/images/hero-background.png" alt="Financial charts background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold mb-4">About QCF Group</h1>
          <p className="max-w-2xl">
            The University of Michigan's premier student organization dedicated to quantitative and computational
            finance
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum fermentum faucibus. Donec et
              venenatis risus, ut consectetur dolor. Vivamus dictum elit augue, in porttitor quam pellentesque vel.
              Integer interdum vel nunc eu elementum. Mauris pellentesque, odio quis faucibus hendrerit, nulla elit
              dictum odio, et eleifend mi lectus quis nunc.
            </p>
            <p>
              Proin eget magna velit. In laoreet consectetur mi ac feugiat. Ut eu porttitor magna, ut rutrum nisi.
              Integer congue nibh eu felis finibus iaculis. Curabitur efficitur tincidunt enim eu tincidunt. In at
              accumsan felis, sit amet porta ligula. Morbi elementum condimentum orci, sed varius dolor mattis ac. Donec
              at vulputate quam.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum fermentum faucibus. Donec et
              venenatis risus, ut consectetur dolor. Vivamus dictum elit augue, in porttitor quam pellentesque vel.
              Integer interdum vel nunc eu elementum. Mauris pellentesque, odio quis faucibus hendrerit, nulla elit
              dictum odio, et eleifend mi lectus quis nunc.
            </p>
            <p>
              Proin eget magna velit. In laoreet consectetur mi ac feugiat. Ut eu porttitor magna, ut rutrum nisi.
              Integer congue nibh eu felis finibus iaculis. Curabitur efficitur tincidunt enim eu tincidunt. In at
              accumsan felis, sit amet porta ligula. Morbi elementum condimentum orci, sed varius dolor mattis ac. Donec
              at vulputate quam.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum fermentum faucibus.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p>Donec et venenatis risus, ut consectetur dolor. Vivamus dictum elit augue, in porttitor quam.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p>Integer interdum vel nunc eu elementum. Mauris pellentesque, odio quis faucibus hendrerit.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
