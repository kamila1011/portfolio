import React from 'react';

export default function App() {
  const workExperience = [
    {
      title: "Laboratory Analyst 1",
      company: "Bureau Veritas",
      duration: "January 2024 - May 2024",
      location: "Montreal, Quebec, Canada",
      description: ["Performed sample preparation and analytical testing per SOPs.","Maintained detailed lab records using LIMS and prepared reagents and solutions.","Supported quality assurance efforts and minimized errors through accurate documentation.","Organized and cleaned workstations, assisting in the setup and teardown of test apparatus."],
    },
    {
      title: "University Instructor (Chemical Engineering)",
      company: "Adamson University",
      duration: "Aug 2018 - Dec 2022",
      location: "Manila, Philippines",
      description: ["Led laboratory courses, supervising the design and execution of chemical experiments.","Developed instructional materials aligned with safety and academic standards.","Oversaw analytical report writing, record compilation, and interpretation of experimental data."],
    },
    {
      title: "Technical Sales Specialist",
      company: "SGS Philippines, Inc.",
      duration: "April 2015 - December 2015",
      location: "Makati City, Philippines",
      description: ["Maximized sales opportunities by showcasing SGS services, including Hazard Analysis and Critical Control Points (HACCP) and Good Manufacturing Practices (GMP) certifications to both new and existing clients."],
    },
    {
      title: "Production Supervisor",
      company: "Pepmaco Manufacturing Corporation",
      duration: "August 2013 - June 2014",
      location: "Calamba City, Philippines",
      description: ["Oversaw chemical production lines, monitored process safety, and enforced hygiene standards.","Compiled production data and contributed to workflow improvement plans."],
    },
    {
      title: "Lead Technician",
      company: "Sunpower Philippines Manufacturing Limited, Inc.",
      duration: "May 2011 - September 2012",
      location: "Sta. Rosa City, Philippines ",
      description: ["Performed in-line monitoring and chemical testing of semiconductor materials using microscopy and surface analysis.","Logged data using SPC tools and followed lean 5S protocols in high-volume settings."],
    },
  ];

  const projects = [
    {
      title: "Removal of N-Nitrosodimethylamine (NDMA) by Modified Magnetic Particle",
      description: "N-nitrosodimethylamine (NDMA), a carcinogenic compound formed during chlorination in drinking water treatment, was targeted in this study using a novel magnetic adsorbent, Fe₂O₃@HZSM5. The adsorbent achieved up to 50.5% NDMA removal at 0.5 g loading and was confirmed to be crystalline through SEM and XRD analyses.",
      link: "https://ir.cnu.edu.tw/handle/310902800/30783",
    },
    {
      title: "Production and characterization of activated carbon from pyrolysis biochar of cellulosic cotton-based textile wastes",
      description: "The study upcycled cotton textile waste through slow pyrolysis and H₃PO₄ activation to produce activated carbon (AC) with high microporosity and acidic surface properties. Characterized by SEM and FTIR, the highest char yield (27.64 wt%) was achieved at 450 °C, and increased impregnation ratios further enhanced micropore volume, making the AC suitable for various applications.",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S2214785323030791",
    },
  ];

  const education = [
    {
    school: "Lambton College - Toronto",
    program: "Post Graduate Diploma Chemical Laboratory Analysis",
    year: "December 14, 2024",
    diplomaImage: "/images/Lambton.jpg",
    },
    {
    school: "Chia Nan University of Pharmacy and Science",
    program: "Master of Science in Environmental Resources Management",
    year: "Sept 2017",
    diplomaImage: "/images/ChiaNan.jpg",
    },
    {
    school: "Adamson University",
    program: "Master of Engineering in Chemical Engineering",
    year: "Oct 2017",
    diplomaImage: "/images/Adamson.jpg",
    },
    {
    school: "Bicol University",
    program: "Bachelor of Science in Chemical Engineering",
    year: "May 2010",
    diplomaImage: "/images/Bicol.jpg",
    },
  ];

 const skills = [
  {
    category: "Analytical Techniques",
    items: ["Chromatography (HPLC, GC)", "Spectroscopy (UV-Vis, MP-AES)", "Wet Chemistry", "Distillation", "Titration"]
  },
  {
    category: "Software & Computer Language",
    items: ["LIMS", "MS Office Suite", "Python", "R", "JavaScript"]
  },
  {
    category: "Standards & Compliance",
    items: ["GMP", "HACCP", "SOPs", "ISO 17025"]
  },
  {
    category: "Documentation",
    items: ["Data analysis", "Record keeping", "Lab reports", "Method validation", "Methods of Research"]
  }
];

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 font-sans">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">Hi, I'm Pinky Joy</h1>
          <p className="text-xl text-gray-700 mb-4 font-medium">
            Laboratory Analyst | Laboratory Technician | Project Enthusiast
          </p>

      <section className="mb-12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          🧾 Professional Summary
        </h2>
        <p className="text-gray-700 text-base leading-relaxed tracking-wide">
          A chemical engineer with a strong foundation in chemical laboratory analysis, research, and quality control. Adept at data analysis, problem-solving, and ensuring regulatory compliance in laboratory environments. A dedicated professional with hands-on experience as a Laboratory Analyst and University Instructor, demonstrating strong technical proficiency and attention to detail. Passionate about applying scientific expertise to support environmental biotechnology and laboratory innovations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">📁 Relevant Work Experience</h2>
        <div className="space-y-6">
          {workExperience.map((job, idx) => (
            <div key={idx} className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-blue-700 font-medium mb-1">{job.company}</p>
              <p className="text-sm text-gray-500 mb-1">{job.duration}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2">
          {job.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-600">📍 Location: <span className="text-blue-600">{job.location}</span></p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">🧰 Additional Experience</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-bold">Product Tester</h3>
            <p className="text-blue-700 font-medium mb-1">Best Buy Canada</p>
            <p className="text-sm text-gray-500 mb-1">Jan – Apr 2025</p>
            <p className="text-sm text-gray-600">📍9250 Airport Road Brampton, ON L6S 6K5</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-bold">Part Time Retail Sales Associate</h3>
            <p className="text-blue-700 font-medium mb-1">Bell Channels Inc.</p>
            <p className="text-sm text-gray-500 mb-1">Aug 2024 – Jan 2025</p>
            <p className="text-sm text-gray-600">📍25 Peel Centre Dr Unit 608 in Brampton, ON L6T 3R5</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-bold">Part Time Cashier</h3>
            <p className="text-blue-700 font-medium mb-1">Whole Foods Market</p>
            <p className="text-sm text-gray-500 mb-1">Sept – Dec 2023</p>
            <p className="text-sm text-gray-600">📍 1860 Bayview Ave, Toronto, ON M4G 3E4</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">🎓 Education</h2>
          <div className="space-y-6">
             {education.map((edu, idx) => (
           <div key={idx} className="flex flex-col md:flex-row items-center gap-6 p-4 bg-white shadow rounded-lg">
          <div className="w-full md:w-1/3">
          <img
            src={edu.diplomaImage}
            alt={`Diploma from ${edu.school}`}
            className="rounded shadow-md transition-transform duration-300 hover:scale-105 w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <p className="text-lg font-semibold">{edu.school}</p>
            <p className="text-base">{edu.program}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
           </div>
            ))}
          </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">💼 Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((group, idx) => (
              <div key={idx} className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-blue-700">{group.category}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              {group.items.map((item, i) => (
              <li key={i}>{item}</li>
               ))}
              </ul>
              </div>
              ))}
          </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">📝 Publication </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-lg font-bold mb-1">{proj.title}</h3>
              <p className="mb-1">{proj.description}</p>
              {proj.tech && (
                <p className="text-sm">
                Tech: <span className="text-purple-600">{proj.tech.join(", ")}</span>
                </p>
              )}
              <div className="mt-2 text-sm">
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">Link</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800 flex items-center gap-2">
          Contact Me
        </h2>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-100 max-w-md space-y-4">
          <div>
            <a href="mailto:janabanpinkyjoy@gmail.com" className="text-gray-700 hover:underline block">
              email: janabanpinkyjoy@gmail.com
            </a>
          </div>

          <div>
            <span className="text-gray-700 block">phone #: +1 647 853 1275</span>
          </div>
        </div>
      </section>

      <div className="mb-12">
        <a href="/cv/PinkyJoyCV.pdf" download className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">📄 Download My CV</a>
      </div>
    </div>
  );
}
