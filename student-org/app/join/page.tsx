import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function JoinPage() {
  return (
    <main>
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Join QCF Group</h1>
          <p className="max-w-2xl mx-auto mb-8">
            We're always looking for talented and passionate students to join our team. Fill out the form below to
            express your interest.
          </p>

          <div className="max-w-md mx-auto bg-white text-black p-6 rounded-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input id="name" placeholder="Your full name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>

              <div>
                <label htmlFor="major" className="block text-sm font-medium mb-1">
                  Major
                </label>
                <Input id="major" placeholder="Your major" />
              </div>

              <div>
                <label htmlFor="year" className="block text-sm font-medium mb-1">
                  Year
                </label>
                <Input id="year" placeholder="Freshman, Sophomore, Junior, Senior, Graduate" />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-1">
                  Area of Interest
                </label>
                <Input id="interest" placeholder="Trading, Quantitative Analysis, Statistical Predictions" />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-1">
                  Relevant Experience
                </label>
                <Textarea
                  id="experience"
                  placeholder="Tell us about your relevant experience"
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <label htmlFor="why" className="block text-sm font-medium mb-1">
                  Why do you want to join QCF?
                </label>
                <Textarea id="why" placeholder="Tell us why you want to join" className="min-h-[100px]" />
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mailing List</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Stay updated with our events, projects, and application deadlines by joining our mailing list.
          </p>

          <div className="max-w-md mx-auto flex gap-2">
            <Input placeholder="Your email address" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
