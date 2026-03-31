import React from 'react';

export const Education: React.FC = () => {
  return (
    <section className="py-24 bg-white min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-black">Education <span className="text-neo-pink">Journey</span></h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            { year: "2023 – Present", degree: "B.Sc. (Hons.) in Computer Science", school: "Creative Techno College, Angul" },
            { year: "2021 – 2023", degree: "Higher Secondary Education (Science)", school: "Kendriya Vidyalaya, Deogarh" },
            { year: "2011 – 2021", degree: "Schooling (CBSE)", school: "Belpahar English Medium School" },
          ].map((edu, idx) => (
            <div 
              key={idx}
              data-aos="fade-right"
              className="skeuo p-8 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="md:w-1/4">
                <span className="text-neo-pink font-bold text-lg">{edu.year}</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-gray-600 font-medium">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
