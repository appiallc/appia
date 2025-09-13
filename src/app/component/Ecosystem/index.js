"use client";

const logos = [
  { name: "html", src: "/technologies/Html.png" },
  { name: "Reactjs", src: "/technologies/Reactjs.png" },
  { name: "angularjs", src: "/technologies/angularjs.png" },
  { name: "mern", src: "/technologies/MernStack.png" },
   { name: "mean", src: "/technologies/MeanStack.png" },
  { name: "nodejs", src: "/technologies/nodeJs.png" },
  { name: "wordPress", src: "/technologies/wordPress.png" },
  { name: "laravel", src: "/technologies/laravel.png" },
  { name: "shoify", src: "/technologies/shopify.png" },
   { name: "java", src: "/technologies/java.png" },
  { name: "drupal", src: "/technologies/drupal.png" },
  { name: "dotnet", src: "/technologies/dotnet.png" },
  { name: "python", src: "/technologies/python.png" },
   { name: "android", src: "/technologies/android.png" },
  { name: "ios", src: "/technologies/ios.png" },
 
  { name: "React-native", src: "/technologies/react-native.png" },
];

export default function Ecosystem() {
  return (
  <section className="bg-white text-black py-16 px-6 lg:px-20 flex flex-col lg:flex-row gap-10 items-center">
      {/* Left text */}
      <div className="w-full lg:w-1/3">
        <p className="text-gray-400 uppercase text-sm mb-2">Our Ecosystem</p>
        <h2 className="text-3xl lg:text-5xl font-bold">We work with <br/> everyone.</h2>
      </div>

      {/* Right vertical marquee */}
      <div className="w-full lg:w-2/3 overflow-hidden h-[560px]">
        {/* animated container must be a column so duplicated groups stack vertically */}
        <div className="flex flex-col animate-vertical-marquee">
          {/* First copy of the grid */}
          <div className="flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pb-6">
            {logos.map((l, i) => (
              <div key={`a-${i}`} className="bg-white rounded-lg h-28 shadow-md flex items-center justify-center">
                <img src={l.src} alt={l.name} className="h-20 object-contain" />
              </div>
            ))}
          </div>

          {/* Second copy (identical) — makes the loop seamless */}
          <div className="flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pb-6">
            {logos.map((l, i) => (
              <div key={`b-${i}`} className="bg-white rounded-lg  shadow-md h-28 flex items-center justify-center">
                <img src={l.src} alt={l.name} className="h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
