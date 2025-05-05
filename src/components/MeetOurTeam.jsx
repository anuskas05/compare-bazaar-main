import React from 'react';

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "JEFF HOOGENDAM",
      title: "CEO",
      logo: "/images/jeanne.jpg", // Replace with actual image path
      id: 1
    },
    {
      name: "CHRIS COTTAM",
      title: "VP of Operations",
      logo: "/images/chris.jpg", // Replace with actual image path
      id: 2
    },
    {
      name: "DAVE SAATHOFF",
      title: "Finance",
      logo: "/images/dave.jpg", // Replace with actual image path
      id: 3
    },
    {
      name: "SANDY POWERS",
      title: "Senior HR Manager",
      logo: "/images/sandy.jpg", // Replace with actual image path
      id: 4
    },
    {
      name: "JENNY DEBAKEY",
      title: "HR Operations Manager",
      logo: "/images/jenny.jpg", // Replace with actual image path
      id: 5
    },
    {
      name: "JEANNE FORTNEY",
      title: "Staff Accountant",
      logo: "/images/jeanne.jpg", // Replace with actual image path
      id: 6
    },
    {
      name: "KIM MOTQUIN",
      title: "Product Manager",
      logo: "/images/kim.jpg", // Replace with actual image path
      id: 7
    },
    {
      name: "BRENT NOEL",
      title: "Office Manager / Operations Specialist",
      logo: "/images/brent.jpg", // Replace with actual image path
      id: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h1>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-12 border-b pb-4">
            360Connect Team
          </h2>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <div className="mb-4 relative">
                  <div className="bg-blue-100 rounded-full w-32 h-32 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                    {member.logo ? (
                      <img 
                        src={member.logo} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-gray-500 text-sm">No Image</div>
                    )}
                  </div>
                </div>
                <h3 className="text-base font-bold text-blue-600 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Content or Sections */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">About Our Team</h3>
          <p className="text-gray-600">
            Our dedicated team of professionals works together to ensure 360Connect delivers exceptional service and innovative solutions to our clients. With expertise across multiple domains including operations, finance, human resources, and product development, we're committed to excellence in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;