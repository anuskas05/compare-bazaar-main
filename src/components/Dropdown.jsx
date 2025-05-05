import React from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown = ({ activeDropdown, isMobile, setActiveDropdown }) => {
  // All sections content to display in any dropdown
  const allSectionsContent = [
    {
      title: "Marketing",
      items: [
        { name: "Best CRM Software", link: "/BestCRMSoftware" },
        { name: "Best Email Marketing Services", link: "/EmailMarketing" },
        { name: "Best Website Building Platforms", link: "/BestWebsiteBuildingPlatform" }
      ]
    },
    {
      title: "Technology",
      items: [
        { name: "Business Phone Systems", link: "/phone-systems" },
        { name: "GPS Fleet Management Software", link: "/GpsFleetMangement" },
        { name: "Best Employee Management Software", link: "/BestEmployeeMangementSoftware" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "WhitePaper", link: "/WhitePaperList" },
        { name: "Blogs", link: "/BestCRMSoftware" }
      ]
    },
    {
      title: "Sales",
      items: [
        { name: "Best CRM Software", link: "/BestCRMSoftware" },
        { name: "Best Call Center Management Software", link: "/Callcenter"},
        { name: "Best Project Management Software", link: "/BestProjectManagement"}
      ]
    },
    {
      title: "Contact Us",
      items: [
        { name: "Contact", link: "/contact-sales" },
        { name: "About us", link: "/About us" },
        { name: "Careers", link: "/Careers" }
      ]
    }
  ];

  // Check if any dropdown other than "findSuppliers" (Home) is active
  const isAnyNonHomeDropdownActive = activeDropdown !== null && activeDropdown !== 'home';

  return (
    <>
      {/* Combined content for any active dropdown (except Home) for desktop */}
      {!isMobile && isAnyNonHomeDropdownActive && (
        <div 
          className="mega-dropdown"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="mega-dropdown-inner">
            <div className="mega-dropdown-sections">
              {allSectionsContent.map((section, idx) => (
                <div key={idx} className="mega-dropdown-section">
                  <h3 className="mega-dropdown-other-title">{section.title}</h3>
                  <ul className="mega-dropdown-items">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link to={item.link} className="mega-dropdown-item">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;