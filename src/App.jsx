import { useEffect, useState } from "react";
import "./App.css";
import Docs from "./docs";
import Menu from "./menu";

function App() {
  const [currentDoc, setCurrentDoc] = useState({
    title: "",
    doc: null,
    navigation: [],
  });

  useEffect(() => {
    setCurrentDoc({
      title: "Introduction",
      doc: DocsList["Introduction"].text,
      navigation: DocsList["Introduction"].path,
    });
  }, []);

  const DocsList = {
    Introduction: {
      text: [
        {
          heading: "Overview of the Website",
          paragraph: [
            {
              info: "Welcome to Propertyease.in, your ultimate destination for finding, buying, selling, and renting real estate properties across the India. Our platform offers a comprehensive marketplace where users can explore a wide range of residential and commercial properties, connect with top real estate agents, and access valuable market insights to make informed decisions.",
            },
          ],
        },
        {
          heading: "Purpose and Objectives",
          paragraph: [
            {
              info: "Propertyease is designed to simplify the property search and transaction process, making it easier for buyers, sellers, and renters to navigate the real estate market. Our mission is to provide a user-friendly platform that offers accurate property listings, effective communication tools, and up-to-date market data.",
            },
          ],
        },
        {
          heading: "Target Audience",
          paragraph: [
            {
              info: "Propertyease serves prospective homebuyers, real estate investors, renters, property owners, and real estate agents. Our platform is tailored to meet the needs of each group, offering specific tools and resources to help them achieve their real estate goals.",
            },
          ],
        },
      ],
      path: [null, "Getting Started"],
    },
    "Getting Started": {
      text: [
        {
          heading: "How to Access the Website",
          paragraph: [
            {
              info: "You can access Propertyease by visiting www.Propertyease.in. The website is optimized for use on both desktop and mobile devices, with support for modern web browsers such as Chrome, Firefox, and Safari.",
            },
          ],
        },
        {
          heading: "User Registration and Login Process",
          paragraph: [
            {
              info: "To start using Propertyease, click on the ‘Get Started’ button located at the top right corner of the homepage. You will need to provide your email address, and verify your email through a six digit OTP. Existing users can log in using their registered email",
            },
          ],
        },
      ],
      path: ["Introduction", "Website Structure"],
    },
    "Website Structure": {
      text: [
        {
          heading: "Navigation Overview",
          paragraph: [
            {
              info: "The top navigation bar of Propertyease includes links to the following sections: Buy Property, Sell Property, Post Property Requirement, Contact Us,  Get Started and List Property (For Free). A search bar is also available on every page, allowing users to quickly search for properties.",
            },
          ],
        },
        {
          heading: "Key Sections",
          paragraph: [
            {
              info: "Home : The homepage highlights featured properties, popular locations, and recent market trends. Users can also begin their property search directly from the homepage.",
            },
            {
              info: "See all properties : This section displays all available properties, with options to filter by location, property type, and more.",
            },
            {
              info: "Post Requirement: If you are looking for a specific type of property, this section allows you to post a requirement. You can specify whether you are looking to rent or buy, the type of property (e.g., apartment, house, commercial), desired location and any other preferences.",
            },
            {
              info: "Dashboard : It provides users with a comprehensive overview of their account activities and access to key features. It is designed for both individual buyers, sellers, and real estate agents to manage their interactions, listings, and personal information efficiently.",
            },
            {
              info: "Contact Us : Users can reach out to our support team for assistance via email, phone, or by filling out the contact form.",
            },
            {
              info: "List Property : It allows users (property owners, agents, and landlords) to post their properties for sale or rent directly on the platform. This section provides an easy-to-use interface for listing properties with detailed descriptions, images, and pricing, making them visible to potential buyers and renters.",
            },
          ],
        },
      ],
      path: ["Getting Started", "Property Listings"],
    },
    "Property Listings": {
      text: [
        {
          heading: "Types of Properties Listed",
          paragraph: [
            {
              info: "Propertyease offers a variety of property types, including single-family homes, condos, townhouses, commercial spaces, and rental properties. Users can filter their search to find exactly what they’re looking for.",
            },
          ],
        },
        {
          heading: "How to Browse and Search for Properties",
          paragraph: [
            {
              info: "To search for properties, enter a location, ZIP code, or address into the search bar on the homepage or Property Listings page. Use filters to narrow down results by property type (e.g., Residential, Commercial, Land), purchase type (e.g., rent, sale), property sub type, Possession availability, Parking Available and more.",
            },
          ],
        },
        {
          heading: "Property Details Page",
          paragraph: [
            {
              info: "Each property has a dedicated details page featuring high-resolution images, a detailed description, price, square footage, number of bedrooms and bathrooms, year built, and additional features like a pool or garage. The page also includes a map showing the property's location, nearby amenities, and the agent’s contact information.",
            },
          ],
        },
        {
          heading: "Filtering and Sorting Options",
          paragraph: [
            {
              info: "Users can filter search results by property type (e.g., Residential, Commercial, Land), purchase type (e.g., rent, sale), property sub type, Possession availability, Parking Available and more. Results can be sorted by newest listings, most popular, and relevance.",
            },
          ],
        },
      ],
      path: ["Website Structure", "User Interactions"],
    },
    "User Interactions": {
      text: [
        {
          heading: "Contacting Property Owners or Agents",
          paragraph: [
            {
              info: "On the property details page, users can contact the listing agent by clicking the ‘Contact Agent’ button. This opens a contact form where users can send a message directly to the agent. The agent’s phone number is also provided for those who prefer to call.",
            },
          ],
        },
        {
          heading: "Property Details Sharing Options",
          paragraph: [
            {
              info: "On the Property Details page, users can easily share listings with others via Facebook and WhatsApp.",
            },
          ],
        },
        {
          heading: "Shortlist Properties",
          paragraph: [
            {
              info: "To shortlist a property, click the star icon on the property details page. Saved properties can be accessed anytime under the ‘Shortlist’ section in the user’s account dashboard.",
            },
          ],
        },
        {
          heading: "View Near By Properties",
          paragraph: [
            {
              info: "On the Property Details page, users can view nearby locations on an interactive map. This feature highlights key points of interest around the property, such as schools, hospitals, markets, public transport, and recreational areas. Users can explore the proximity of essential services and amenities, helping them make informed decisions about the convenience and livability of the property’s location. The map allows for zooming in and out to get a better view of the surrounding area.",
            },
          ],
        },
      ],
      path: ["Property Listings", "User Account Management"],
    },
    "User Account Management": {
      text: [
        {
          heading: "Dashboard Overview",
          paragraph: [
            {
              info: "Users can manage their profiles by clicking on ‘Dashboard’ button after logging in. This section allows users to update personal information, change their password, subscriptions, my listed properties, add property, insights and user logout option.",
            },
          ],
        },
        {
          heading: "Key Sections",
          paragraph: [
            {
              info: "Add Property : This section allows users (property owners or agents) to list a new property for rent or sale. Users can fill out details such as the property’s location, type, price, and features, and upload photos and videos to create a comprehensive listing. Once submitted, the property is made available to potential buyers or renters on the platform.",
            },
            {
              info: "View All Properties : Users can browse through all the available properties listed on the website for both sale and rental. Filters such as location, price range, property type, and amenities allow users to narrow their search. This section is designed for buyers or renters to explore options and find properties that match their criteria.",
            },
            {
              info: "My Listed Properties: This section shows a user’s personal listings, whether they are a property owner or agent. It provides an overview of all active, pending, and archived properties they have listed. Users can edit property details, track performance metrics like views and inquiries, and manage any active or expired listings.",
            },
            {
              info: "Subscription : Users can manage their subscription plans for premium features like promoting listings, accessing advanced property insights, or unlocking exclusive features. It includes details about the current subscription, payment history, and options to upgrade or renew the subscription for enhanced services.",
            },
            {
              info: "Shortlisted :The Shortlisted section contains properties that a user has saved or favorited during their search. It helps buyers or renters keep track of the properties they are most interested in. Users can review their shortlists, compare them, and take action (e.g., schedule a visit or contact the agent) when they are ready.",
            },
            {
              info: "Insights : This section provides data and analytics related to the user's properties, whether they are listed for sale or rent. Insights include property views, inquiries, interest levels, and comparative market data to help users understand how their listings are performing and what improvements can be made.",
            },
            {
              info: "My Profile : The My Profile section allows users to update their personal information, such as contact details, preferences, and account security settings. For real estate agents, this section also includes professional details, such as certifications, agency information, and a portfolio of properties they manage",
            },
            {
              info: "Log Out : The Log Out button securely logs the user out of their account, ensuring their personal information and account details are protected after using the platform.",
            },
          ],
        },
      ],
      path: ["User Interactions", "Agent/Owner Features"],
    },
    "Agent/Owner Features": {
      text: [
        {
          heading: "How to List a Property",
          paragraph: [
            {
              info: "Agents and property owners can list a property by logging in and navigating to the ‘List Property’ section. Here, they can fill out a form with property details, upload images, and set a price. Once submitted, the listing will be reviewed by our team before going live on the site. ",
            },
          ],
        },
        {
          heading: "Steps to List a Property",
          paragraph: [
            {
              info: "Get Started: In this section, you need to select the Ad Type (either Sale or Rent) and specify the User Type (either Agent or Owner).",
            },
            {
              info: "Location Details: Here, you will need to provide the property location details, including Property Type, Plot Number, State, District, Sub-District, Locality, Complete Address, and Area Pincode.",
            },
            {
              info: "Property Details: In this section, define the property details, such as Property Age, Property Facing, Possession Availability, Plot Size, Road Width in Front, Plot Width, Plot Length, and upload Property Photos.",
            },
            {
              info: "Pricing and Other Information: Here, you will specify Pricing and other details, including Ownership Type (either Ownership or Power of Attorney), Authority Approval, a Property Description, the Price, and Price Negotiability.",
              related: [
                "Essential Terms Explained",
                [
                  {
                    heading: "Age of Property",
                    text: "It refers to the number of years since the property was constructed or completed. It helps buyers and renters assess the condition of the building, potential wear and tear, and maintenance needs. Properties are typically categorized as new, relatively new, or old based on their age.",
                  },
                  {
                    heading: "Property Facing",
                    text: "It refers to the direction in which the main entrance or facade of the property is oriented. It indicates which way the property is positioned relative to the cardinal directions (North, South, East, or West). This factor is often important in real estate, as it affects sunlight exposure, ventilation, and can have cultural or Vastu (Indian architecture principles) significance.",
                  },
                  {
                    heading: "Possession Availability",
                    text: "It refers to the status of a property in terms of when the buyer or tenant can take physical possession of it. This term indicates whether the property is ready for immediate occupancy or if there is a waiting period due to construction, legal issues, or other factors.",
                  },
                  {
                    heading: "Plot Size",
                    text: "It refers to the total area of land on which a property is situated. It is typically measured in square feet (sq ft), square meters (sqm), or acres, depending on the region. The plot size is an essential factor in real estate, as it impacts the property's value, potential usage, and the overall layout of the building or structure.",
                    sizes: [
                      ,
                      {
                        type: "Acres",
                        description:
                          "An acre is a unit of area commonly used in the U.S. and other countries for measuring large plots of land",
                        formula:
                          "e.g : [1 Acre = 43,560 square feet], [1 Acre ≈ 4,047 square meters]",
                      },
                      {
                        type: "Marla",
                        description:
                          "A marla is a traditional unit of area measurement used primarily in South Asia, particularly for residential plots.",
                        formula:
                          "e.g : [1 Marla ≈ 272.25 square feet], [1 Marla ≈ 25.29 square meters (Note: In some regions, it can also be considered as 225 square feet)]",
                      },
                      {
                        type: "Square Yards",
                        description:
                          " A square yard is a unit of area measurement used mainly in the U.S. and the UK, particularly for land and floor space.",
                        formula:
                          "e.g : [1 Square Yard = 9 square feet], [1 Square Yard ≈ 0.836 square meters]",
                      },
                      {
                        type: "Square Meters",
                        description:
                          "A square meter is the standard metric unit of area measurement used worldwide for land and property dimensions.",
                        formula:
                          "e.g : [1 Square Meter = 10.764 square feet], [1 Square Meter ≈ 1.196 square yards]",
                      },
                    ],
                  },
                  {
                    heading: "Road Width in Front",
                    text: "It refers to the measurement of the width of the road or street directly in front of a property. This dimension is crucial in real estate as it can impact various aspects of the property, including accessibility, traffic flow, and overall value.",
                  },
                  {
                    heading: "Plot Width",
                    text: "It refers to the measurement of the horizontal dimension of a property or land parcel, typically taken from one side boundary to the other. It is an essential metric in real estate that can influence various aspects of property use, design, and value.",
                  },
                  {
                    heading: "Plot Length",
                    text: "It refers to the measurement of the vertical dimension of a property or land parcel, typically taken from the front boundary to the rear boundary. It is a key dimension in real estate that, along with plot width, defines the overall shape and size of a plot.",
                  },
                ],
              ],
            },
            {
              heading: "Managing Listings",
              paragraph: [
                {
                  info: "All active listings are displayed in the ‘My listed properties’ section of the agent’s or owner’s dashboard. From here, users can edit listing details, update photos, adjust pricing, or remove a listing if the property is no longer available.",
                },
              ],
            },
          ],
        },
      ],
      path: ["User Account Management", "Admin Panel"],
    },

    "Admin Panel": {
      text: [
        {
          heading: "Managing Users and Listings",
          paragraph: [
            {
              info: "The admin panel allows administrators to manage user accounts, approve or reject new property listings, and monitor site activity. Admins can suspend accounts, remove inappropriate content, and manage roles and permissions.",
            },
          ],
        },
        {
          heading: "Key Sections",
          paragraph: [
            {
              info: "Dashboard : Admin can browse through all the available properties listed on the website for both sale and rental. Filters such as location, price range, property type, and amenities allow users to narrow their search. This section is designed for buyers or renters to explore options and find properties that match their criteria.",
            },
            {
              info: "All Users : The All Users section of the Admin Dashboard provides a comprehensive view of all registered users on the platform, including property owners, agents, and potential buyers or tenants",
            },
            {
              info: "Post Requirements : This section provides a centralized view of all property-related requirements posted by users. These requirements typically include user requests for properties they are looking to buy or rent, such as preferred property type, budget, location, and other specific criteria.",
            },
            {
              info: "Ads : The Ads section in the Admin Dashboard allows administrators to manage and oversee all advertisements on the platform. This section is crucial for managing promotional content, featured listings, and third-party ads that may appear on the website.",
              related: [
                "Key features",
                [
                  {
                    heading: "View Active Ads",
                    text: "Display all active advertisements, including promoted properties, banner ads, and third-party sponsored content.",
                  },
                  {
                    heading: "Manage Ad Campaigns",
                    text: "Admins can create, edit, or remove ads, set durations for campaigns, and allocate specific ad spaces on the platform.",
                  },
                  {
                    heading: "Ad Placement Control",
                    text: "Determine where ads appear on the platform (e.g., homepage, property details page), ensuring optimal visibility.",
                  },
                ],
              ],
            },
            {
              info: "Interested Properties : The Interested Properties section displays a list of properties that have attracted user attention on the platform. This feature helps identify high-demand properties and enhances platform efficiency by highlighting user preferences and engagement trends.",
            },
            {
              info: "Property Listing Plans : The Property Listing Plans section allows the admin to manage premium listing plans and related features for property owners and agents on the platform. This section is designed to facilitate the creation, modification, and management of paid plans and offers, enhancing the platform’s monetization and promotional strategies.",
              related: [
                "Key features",
                [
                  {
                    heading: "Create Premium Plans",
                    text: "Admins can create new premium listing plans that offer enhanced visibility and additional features for property listings (e.g., featured listings, extended duration).",
                  },
                  {
                    heading: "Modify Current Plans",
                    text: "Easily edit or update existing plans to adjust pricing, features, or duration based on platform needs or market demand.",
                  },
                  {
                    heading: "View All Plans",
                    text: "Get a comprehensive overview of all available listing plans, including active, expired, or upcoming plans.",
                  },
                  {
                    heading: "View All Transactions",
                    text: "Track all transactions related to property listings, including payments made for premium plans, ensuring smooth financial operations.",
                  },
                  {
                    heading: "Add Discount Coupons",
                    text: "Admins can create discount coupons to offer users promotional pricing on listing plans, driving more engagement and purchases.",
                  },
                  {
                    heading: "View Coupons",
                    text: "Monitor all active or expired coupons to keep track of usage and effectiveness.",
                  },
                  {
                    heading: "Make Offer Coupons",
                    text: "Create special offer coupons for limited-time promotions or targeted campaigns to boost property listing purchases.",
                  },
                ],
              ],
            },
            {
              info: "City Maps : The City Maps section displays detailed maps of Kurukshetra city, focusing on its sectors. Admins can manage these maps by adding or removing maps of different locations as needed",
            },
            {
              info: "Mail : The Mail section provides a feature-rich interface, similar to Gmail, that allows the admin to send emails to multiple users directly from the dashboard. This tool simplifies communication with property owners, agents, and potential buyers or renters",
              related: [
                "Key features",
                [
                  {
                    heading: "Send Emails to Multiple Users",
                    text: "Admins can compose and send bulk emails to multiple recipients at once, facilitating mass communication.",
                  },
                  {
                    heading: "Gmail-like Interface",
                    text: "The user-friendly interface resembles popular email platforms like Gmail, making it easy to compose, format, and manage emails.",
                  },
                  {
                    heading: "Advanced Email Options",
                    text: "Admins can add attachments, format text, and include links, images, or other content for professional and informative emails.",
                  },
                  {
                    heading: "Email Templates",
                    text: "Pre-defined templates can be used for common communication needs, such as announcements, promotions, or reminders.",
                  },
                ],
              ],
            },
            {
              info: "Shortlisted : The Shortlisted section contains properties that a user has saved or favorited during their search. It helps buyers or renters keep track of the properties they are most interested in. Users can review their shortlists, compare them, and take action (e.g., schedule a visit or contact the agent) when they are ready.",
            },
            {
              info: "Settings : The Settings section allows the admin to configure various email broadcast options and manage email-related settings for the platform. This feature ensures effective communication with users through tailored email notifications and marketing campaigns",
              related: [
                "Key features",
                [
                  {
                    heading: "Email Broadcast Configuration",
                    text: "Admins can set up and manage email broadcasts to ensure timely and effective communication with users.",
                  },
                  {
                    heading: "Subscription Email Schedule",
                    text: "Define the schedule for sending subscription-related emails, such as newsletters, promotions, and updates.",
                  },
                  {
                    heading: "Subscribers List Management",
                    text: "Admins can view and manage the list of subscribers, including adding or removing subscribers and segmenting them based on preferences.",
                  },
                  {
                    heading: "Email Host Configuration",
                    text: "Specify the email host for sending emails, ensuring that the platform is set up to communicate reliably.",
                  },
                  {
                    heading: "Email Port Number Settings",
                    text: " Configure the email port number to facilitate smooth email transmission and enhance security.",
                  },
                ],
              ],
            },
            {
              info: "Log Out : The Log Out button securely logs the user out of their account, ensuring their personal information and account details are protected after using the platform.",
            },
          ],
        },
        {
          heading: "Website Analytics and Reports",
          paragraph: [
            {
              info: "Admins can access detailed reports on website performance, including metrics like user registrations, property views, and conversion rates. Reports can be generated for specific time periods, and data can be exported for further analysis.",
            },
          ],
        },
        {
          heading: "Content Management",
          paragraph: [
            {
              info: "Admins can manage all content on the site, including blog posts, articles, and resource pages. The CMS allows for easy editing, scheduling of posts, and media management. Admins can also create new pages and update existing ones.",
            },
          ],
        },
      ],
      path: ["Agent/Owner Features", "APIs and Integrations"],
    },
    "APIs and Integrations": {
      text: [
        {
          heading: "Description of Any External APIs Used",
          paragraph: [
            {
              info: "Propertyease integrates several external APIs to enhance user experience. Leaflet Maps API is used for displaying property locations and nearby amenities. Razorpay API handles secure payment processing for premium listings.",
            },
          ],
        },
        {
          heading: "Integration with Third-Party Services",
          paragraph: [
            {
              info: "The platform is integrated with social media platforms like Facebook and Whatsapp for easy sharing of property listings.",
            },
          ],
        },
      ],
      path: ["Admin Panel", "Security Measures"],
    },
    "Security Measures": {
      text: [
        {
          heading: "User Data Protection",
          paragraph: [
            {
              info: "User data is protected using advanced encryption protocols both at rest and in transit. Regular security audits are conducted to identify and mitigate potential vulnerabilities. We comply with GDPR and other data protection regulations to ensure the privacy and security of user information.",
            },
          ],
        },
        {
          heading: "Secure Transactions",
          paragraph: [
            {
              info: "All financial transactions on Propertyease are processed through Stripe, which is PCI DSS compliant. We use SSL certificates to encrypt data during transmission, and users have the option to enable two-factor authentication for added security during login and transactions.",
            },
          ],
        },
        {
          heading: "Role-Based Access Control",
          paragraph: [
            {
              info: "Propertyease uses Role-Based Access Control (RBAC) to manage user permissions. Admins have full control over the platform, while agents and property owners can only manage their own listings. Access to sensitive features is restricted based on user roles, ensuring that only authorized users can perform certain actions.",
            },
          ],
        },
      ],
      path: ["APIs and Integrations", "FAQs and Troubleshooting"],
    },

    Appendix: {
      text: [
        {
          heading: "Glossary of Terms",
          paragraph: [
            {
              info: "This section defines common real estate terms used in the Indian market, such as RERA (Real Estate Regulatory Authority), Carpet Area (net usable area of a property), and Sale Deed (legal transfer of ownership). It helps users understand important legal and market concepts. These terms are crucial for buyers, sellers, and agents navigating Indian real estate.",
            },
          ],
        },
        {
          heading: "Contact Information for Support",
          paragraph: [
            {
              info: "For further assistance, you can reach our support team at propertyease.in@gmail.com or call us at +91 99967 16787. Our support hours are Monday to Friday, 9 AM to 5 PM.",
            },
          ],
        },
      ],
      path: ["FAQs and Troubleshooting", null],
    },
  };

  const setDoc = (doc) => {
    setCurrentDoc({
      title: doc,
      doc: DocsList[doc].text,
      navigation: DocsList[doc].path,
    });
  };

  return (
    <div id="App">
      <Menu setDoc={setDoc} />
      <Docs currentDoc={currentDoc} setDoc={setDoc} />
    </div>
  );
}

export default App;
