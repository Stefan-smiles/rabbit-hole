import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
          Learn More About The Creators
        </h2>

        {/* Stefan Cooke */}
        <section className="mb-6 border-b border-gray-700 pb-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/stefan.png"
              height={200}
              width={200}
              alt="Image of a member in the DREAMTEAM"
              className="rounded-full shadow-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-2">
            Stefan Cooke
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Stefan wants to be the very best that no one ever was. To catch them
            is his real quest; to code them is his cause.
          </p>
        </section>

        {/* Liam Allgood */}
        <section className="mb-6 border-b border-gray-700 pb-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/liam.png"
              height={200}
              width={200}
              alt="Image of a member in the DREAMTEAM"
              className="rounded-full shadow-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-2">
            Liam Allgood
          </h3>
          <p className="text-gray-300 leading-relaxed">
            This is Liam, writing his "About Me" section like it’s some grand
            literary endeavor. He knows no one will read past the first line,
            yet here he is, agonizing over how to make his hobbies sound
            interesting. Should he mention the guitar? The games he swears he’ll
            finish? No, he thinks, this is important. And so, he types, fully
            aware that he’s overthinking it, but unable to stop himself.
          </p>
        </section>

        {/* Adam */}
        <section className="mb-6 border-b border-gray-700 pb-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/adam.png"
              height={200}
              width={200}
              alt="Image of a member in the DREAMTEAM"
              className="rounded-full shadow-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-2">Adam Pink</h3>
          <p className="text-gray-300 leading-relaxed italic">
            No details provided... yet.
          </p>
        </section>

        {/* Nick Fearon */}
        <section className="mb-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/nick.png"
              height={200}
              width={200}
              alt="Image of a member in the DREAMTEAM"
              className="rounded-full shadow-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-2">
            Nick Fearon
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Where focus goes, energy flows. That’s why I lock my phone away when
            coding.
          </p>
        </section>
      </div>
    </main>
  );
}