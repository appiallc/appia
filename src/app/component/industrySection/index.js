import {
  Users,
  Shield,
  Globe,
  GraduationCap,
  Hospital,
  Truck,
  Zap,
  Cog,
} from "lucide-react";

export default function IndustrySection() {
  const industries = [
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Consumer",
      desc: "We assist businesses in delivering engaging customer experiences, optimizing operations and staying ahead of evolving market trends to reach larger audience.",
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Financial services · FinTech",
      desc: "We assist financial institutions in enhancing security, improving customer interactions and streamlining processes to foster trust and accessibility.",
    },
    {
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: "Technology · Media · Telecom",
      desc: "We work with technology-driven businesses to enhance efficiency, improve collaboration and accelerate growth in a competitive digital landscape.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-red-500" />,
      title: "Education",
      desc: "We work with educational institutions and EdTech providers to make learning more accessible, engaging and efficient for students, educators and administrators alike.",
    },
    {
      icon: <Hospital className="w-6 h-6 text-red-500" />,
      title: "Healthcare",
      desc: "We support healthcare providers in improving patient care, optimizing administrative processes and maintaining compliance with industry standards.",
    },
    {
      icon: <Truck className="w-6 h-6 text-red-500" />,
      title: "Transportation",
      desc: "We help transportation and logistics companies improve operational efficiency, enhance coordination and optimize movement across global supply chains.",
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: "Energy",
      desc: "We help energy organizations improve operational efficiency, manage resources effectively and meet evolving industry and environmental standards.",
    },
    {
      icon: <Cog className="w-6 h-6 text-red-500" />,
      title: "Manufacturing",
      desc: "Our service for manufacturers helps them optimize production workflows, enhance supply chain coordination and improve overall efficiency to meet growing industry demands.",
    },
  ];

  return (
    <section className="bg-white text-black py-16 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-red-500">Industry</span> focused <br />
          Targeted outcomes
        </h2>
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          We know your business, enabling us to add value with proven industrial
          solutions to targeted sector challenges.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 max-w-7xl mx-auto">
        {industries.map((item, index) => (
          <div
            key={index}
            className="border-l-2 border-red-500 pl-4 flex flex-col justify-start"
          >
            <div className="mb-3">{item.icon}</div>
            <h2 className="text-xl font-extrabold mb-2">{item.title}</h2>
            <p className="text-black text-md leading-relaxed font-normal">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
