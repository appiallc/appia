"use client";
import {
    Briefcase,
  CheckCircle,
  File,
  FileText,
  Handshake,
  HeartHandshake,
  House,
  LaptopMinimalCheck,
  Lightbulb,
  MonitorCog,
  Users,
} from "lucide-react";
import Header from "../component/header";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Footer from "../component/footer";
import { useRouter } from "next/navigation";

export default function StaffingRecruitment() {
      const router = useRouter();
  const service = [
    {
      title: "IT Hiring",
      desc: "Identifying and attracting top IT talent to meet your technical needs, ensuring optimal performance and scalability.",
      icon: <LaptopMinimalCheck className="text-5xl text-green-600" />,
    },
    {
      title: "Permanent Staffing",
      desc: "Expertly matching candidates with permanent roles that provide a solid foundation for long-term success.",
      icon: <File className="text-5xl text-green-600" />,
    },
    {
      title: "Contract-to-Hire Staffing",
      desc: "Providing a trial period for candidates before making a permanent hiring decision, ensuring the right fit for your organization.",
      icon: <FileText className="text-5xl text-green-600" />,
    },
    {
      title: "Project-Based Staffing",
      desc: "Delivering specialized talent for specific projects, ensuring expertise and efficiency in project execution.",
      icon: <Users className="text-5xl text-green-600" />,
    },
    {
      title: "Remote Staffing",
      desc: "Offering remote staffing solutions to access a global talent pool, providing flexibility and cost-effectiveness.",
      icon: <House className="text-5xl text-green-600" />,
    },
    {
      title: "Outplacement Services",
      desc: "Supporting employees in their transition to new career opportunities, ensuring a smooth and respectful offboarding process.",
      icon: <HeartHandshake className="text-5xl text-green-600" />,
    },
  ];
 const steps = [
  {
    icon: <Users className="w-8 h-8 text-green-700" />,
    step: "Talent Network",
    title:
      "We have built a vast network of talented professionals, allowing us to quickly and effectively match candidates with the right opportunities.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-green-700" />,
    step: "Customized Solutions",
    title:
      "We tailor our staffing and recruitment solutions to meet your unique requirements, ensuring a perfect fit for your organization.",
  },
  {
    icon: <MonitorCog className="w-8 h-8 text-green-700" />,
    step: "Advanced Tools",
    title:
      "Utilizing the latest tools and technologies, we streamline the recruitment process, making it more efficient and effective.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-green-700" />,
    step: "Industry Knowledge",
    title:
      "Our team has deep expertise across multiple industries, enabling us to understand your specific needs and deliver tailored recruitment strategies.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-green-700" />,
    step: "Client-Centric Approach",
    title:
      "We focus on building long-term partnerships with our clients, ensuring satisfaction and continuous support throughout the hiring process.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green-700" />,
    step: "Proven Results",
    title:
      "With a strong record of successful placements, we consistently help organizations find the right talent to drive growth and success.",
  },
];

  return (
    <div className="font-inter min-h-screen  overflow-x-hidden ">
      <Header />
      <main className="mb-4">
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white py-24 md:py-32"
          style={{ backgroundImage: "url('/staffing.jpg')" }}
        >
          {/* Overlay (optional for readability) */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative container mx-auto px-6 md:px-12  ">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Staffing & Recruitment
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Elevate your business with our expert staffing and recruitment
              services, tailored to meet your unique needs. Reyna Solutions
              delivers innovative, robust, and scalable staffing solutions that
              drive operational excellence and growth.
            </p>
          </div>
        </section>
        <section className="py-16 bg-white text-center px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Innovative Staffing & Recruitment Services Tailored for Your
              Success
            </h2>
            <p className="text-gray-600 mb-12">
              From IT Hiring to Outplacement Services, we deliver a variety of
              unique staffing and recruitment services tailored for your
              success.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.map((card, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-red-500 rounded-2xl p-6 flex flex-col items-start text-left hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-row items-center">
                    <div className="bg-white text-red-500 text-3xl rounded-full p-3 mb-4 mr-4">
                      {card.icon}
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed text-white">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="relative bg-cover bg-center bg-no-repeat h-85 text-white"
          style={{
            backgroundImage: "url('/chess.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" /> {/* dark overlay */}
          <div className="relative z-10 flex flex-col items-start justify-center px-6 py-20 sm:px-10 md:px-20 lg:px-32 xl:px-32">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Find Talent That Drives Success
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-gray-200">
              Your trusted partner in sourcing top talent tailored to meet your
              unique business needs.
            </p>

            <button className="mt-6 bg-white text-red-500 px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:opacity-90 transition"
            onClick={() => router.push('/contact')}
            >
              Tell Us About Your Project →
            </button>
          </div>
        </section>
        <section className="py-16 bg-white text-center">
          {/* Section Title */}
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Proven Staffing & Recruitment Process
            </h2>
            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Experience seamless staffing and recruitment with our structured,
              efficient, and quality-driven approach.
            </p>
          </div>

          {/* Steps */}
          <div
            className="relative bg-cover bg-center bg-no-repeat text-white h-108 py-28 mx-8 my-8 md:py-36 lg:block hidden"
            style={{ backgroundImage: "url('/staffing-process.png')" }}
          ></div>
          <Image
            src="/staffing-process.png"
            height={100}
            width={100}
            alt="staff"
            className="h-45 w-full block lg:hidden object-contain"
          />
        </section>
        <section className="py-8 bg-white text-center overflow-hidden">
          {/* Heading */}
          <div className="max-w-3xl mx-auto px-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Staffing & Recruitment Expertise
            </h2>
            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Discover the unique expertise we bring to ensure efficient and
              high-quality staffing and recruitment.
            </p>
          </div>

          {/* Swiper Section */}
          <div className="px-6 md:px-16 py-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1.1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1.8 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {steps.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="border rounded-2xl shadow-sm bg-white p-6 h-full flex flex-col items-center text-center hover:shadow-md   py-16">
                    <div className="flex flex-row items-center justify-start">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mr-2">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.step}
                    </h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed h-24 ">
                      {item.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
