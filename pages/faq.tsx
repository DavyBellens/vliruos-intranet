import Header from "@/components/navigation/Header";

const FAQ: React.FC = () => {
  return (
    <>
      <Header title="FAQ" />
      <main className="bg-v-light-green p-5 pl-24 min-h-screen">
        <section className="bg-v-light-green p-5">
          <h1 className="text-4xl font-bold text-white text-center p-5">
            Frequently Asked Questions
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-v-green rounded-lg m-2 col-span-2">
              <h1 className="text-2xl font-bold text-white text-center col-span-3">
                What is the purpose of this website?
              </h1>
              <p className="col-span-3 text-white text-center">
                This website is designed to help you learn about the world of
                programming and web development. We provide resources and
                tutorials to help you get started on your journey.
              </p>
            </div>
            <div className="p-5 bg-v-green rounded-lg m-2 col-span-2">
              <h1 className="text-2xl font-bold text-white text-center col-span-3">
                How can I get involved?
              </h1>
              <p className="col-span-3 text-white text-center">
                You can get involved by joining our community and participating
                in our events. You can also contribute to our website by
                submitting your own tutorials and resources.
              </p>
            </div>
            <div className="p-5 bg-v-green rounded-lg m-2 col-span-2">
              <h1 className="text-2xl font-bold text-white text-center col-span-3">
                How can I contact you?
              </h1>
              <div className="flex flex-col items-center">
                <p className="col-span-3 text-white text-center">
                  You can contact us by sending an email to
                </p>
                <a
                  href="mailto:info@vliruos.be"
                  className="text-white bg-v-lighter-green rounded-lg p-1 m-1 text-center hover:bg-v-light-green"
                >
                  info@vliruos.be
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
