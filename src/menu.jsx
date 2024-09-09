export default function Menu({ setDoc }) {
  let menuList = [
    "Introduction",
    "Getting Started",
    "Website Structure",
    "Property Listings",
    "User Interactions",
    "User Account Management",
    "Agent/Owner Features",
    "Admin Panel",
    "APIs and Integrations",
    "Security Measures",
    "FAQs and Troubleshooting",
    "Appendix",
  ];

  const handleMenuItem = (menuItem) => setDoc(menuItem);

  return (
    <div className="docs-menu">
      <ul className="docs-menu-list">
        {menuList.map((e, i) => (
          <li key={i} className="menu-item" onClick={() => handleMenuItem(e)}>
            {e}
          </li>
        ))}
      </ul>
      <a href="/">
        <img src="https://propertyease.in/images/logo.png" alt="site-logo" />
      </a>
    </div>
  );
}
