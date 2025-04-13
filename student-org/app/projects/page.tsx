export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-2">Current Projects</h1>
        <h2 className="text-2xl font-bold text-center mb-12">Winter 2025</h2>

        {/* Educational Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Educational</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-xl font-bold">*project name*</h3>
                <p className="text-sm">*project description*</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technical</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-xl font-bold">*project name*</h3>
                <p className="text-sm">*project description*</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Notice */}
        <div className="bg-[#c25b56] text-center p-6 my-12">
          <p className="font-bold mb-2">Project applications are currently closed.</p>
          <p>If you're interested in future opportunities, we encourage you to join our mailing list—</p>
          <p>you'll be sent an email when applications reopen.</p>
        </div>

        {/* Past Projects */}
        <section>
          <h1 className="text-4xl font-bold text-center mb-12">Past Projects</h1>

          <h2 className="text-2xl font-bold mb-6">Fall 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-4">
                <div className="bg-[#4338ca] text-white p-8 text-center">
                  <p className="font-bold">*PROJECT SLIDES*</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">*project name*</h3>
                  <p className="text-sm">*project description*</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
