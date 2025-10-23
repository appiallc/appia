export default function TechnologyROISection() {
  const sections = [
    {
      title: "SALESFORCE",
      items: [
        "Marketing Cloud and Pardot",
        "Commerce Cloud",
        "Experience Cloud",
        "Analytics Cloud/Agentforce AI",
        "Financial Services Cloud",
        "Force.com",
        "AppExchange Apps",
        "Lightning Experience",
      ],
    },
    {
      title: "CLOUD",
      items: [
        "Amazon Web Services",
        "Google App Engine",
        "Snowflake",
        "Atlassian",
        "Microsoft Azure",
        "Dell Boomi",
        "MuleSoft",
      ],
    },
    {
      title: "AI AND ANALYTICS",
      items: [
        "Artificial Intelligence",
        "Tableau",
        "Informatica",
        "Pentaho/Hitachi Vantara",
        "Hadoop Big Data Solutions",
      ],
    },
     {
      title: "WEB",
      items: [
        "Java/J2EE",
        ".Net",
        "PHP",
        "Python",
        "MEAN Stack",
      ],
    },
    {
      title: "MOBILE",
      items: [
        "iOS",
        "Android",
        "React Native",
        "Flutter",
        ".NET MAUI",
        "HTML5",
        "Angular",
        "ReactJS",

      ],
    },
    {
      title: "DEVOPS",
      items: [
        "CI/CD automation",
        "Serverless",
        "Cloud computing",
      ],
    },
  ];

  return (
    <section className="bg-white text-black py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Maximize <span className="text-red-500">technology</span> ROI
          <br />
          with a human touch
        </h2>
        <p className="text-black mt-4 text-base md:text-lg">
          We advance your technology with a relentless focus on your bottom line.
        </p>
      </div>

      {/* Columns */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold border-l-2 border-red-500 pl-3 mb-4">
              {section.title}
            </h3>
            <ul className=" pl-4 space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="text-black text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
