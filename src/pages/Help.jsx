import React, { useState } from 'react'

const Help = () => {
  const [activeTab, setActiveTab] = useState("faq")
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "How do I add a new food item to track?",
      answer:
        "Click the 'Add Food' button on your navbar, enter the food name, select the category, and set the expiry date. You can also add additional details .",
    },
    {
      question: "How do I get notified about expiring items?",
      answer:
        "The app automatically shows notifications for items expiring within 5 days. ",
    },
    {
      question: "Can I edit an item after adding it?",
      answer:
        "Yes! Click on any item in my items page  edit its details including name, expiry date and category. Changes are saved automatically.",
    },
   
    {
      question: "What do the different color codes mean?",
      answer:
        "Green: Fresh , Red: Expired . This helps you prioritize which items to use first.",
    },
    {
      question: "Can I categorize my food items?",
      answer:
        "Yes! You can organize items by categories like Fruits, Vegetables, Dairy, Meat, Pantry items, etc. This helps you find items quickly and manage your inventory better.",
    },
    {
      question: "How do I delete an item?",
      answer:
        "Go to my items page and click on the delete button to  to delete. You'll be asked to confirm the deletion to prevent accidental removals.",
    },
    {
      question: "Is my data saved automatically?",
      answer:
        "Yes, all your data is automatically saved .",
    },
  ]

  const features = [
    {
      title: "Adding Food Items",
      steps: [
        "Click the 'Add Food' button on your navbar",
        "Enter the food item name",
        "Select the appropriate category from the dropdown",
        "Set the expiry date using the date picker",
        "Click 'Save' to add the item to your tracker",
      ],
    },
   
    {
      title: "Organizing by Categories",
      steps: [
        "Use the category filter on your fridge page",
        "Click on any category to view only those items",
        
      ],
    },
    {
      title: "Viewing Expiry Status",
      steps: [
        "Check the color-coded status of each item",
      
        "View detailed expiry information by clicking on items",
      
      ],
    },
  ]

  const troubleshooting = [
    {
      issue: "Items not saving properly",
      solution:
        "Check if your browser allows local storage. Clear your browser cache and try again. Make sure you're not in incognito/private mode.",
    },
   
    {
      issue: "Date picker not working",
      solution:
        "Try refreshing the page. If the issue persists, try using a different browser or update your current browser to the latest version.",
    },
    
    {
      issue: "App running slowly",
      solution:
        "Clear your browser cache and cookies. If you have many items (500+), consider archiving old consumed items to improve performance.",
    },
  ]

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <div className=" text-black">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2 text-center">Help & Support</h1>
          <p className="text-lg opacity-80 text-center">Get the most out of your Food Expiry Tracker</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="tabs tabs-boxed mb-8 bg-base-200">
          <button
            className={`tab ${activeTab === "faq" ? "tab-active bg-amber-300 text-black" : ""}`}
            onClick={() => setActiveTab("faq")}
          >
            FAQ
          </button>
          <button
            className={`tab ${activeTab === "guides" ? "tab-active bg-amber-300 text-black" : ""}`}
            onClick={() => setActiveTab("guides")}
          >
            How-to Guides
          </button>
          <button
            className={`tab ${activeTab === "troubleshooting" ? "tab-active bg-amber-300 text-black" : ""}`}
            onClick={() => setActiveTab("troubleshooting")}
          >
            Troubleshooting
          </button>
          <button
            className={`tab ${activeTab === "contact" ? "tab-active bg-amber-300 text-black" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
          </button>
        </div>

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            {faqData.map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-base-200">
                <input
                  type="radio"
                  name="faq-accordion"
                  checked={openFaq === index}
                  onChange={() => toggleFaq(index)}
                />
                <div className="collapse-title text-xl font-medium">{faq.question}</div>
                <div className="collapse-content">
                  <p className="text-base-content/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* How-to Guides Section */}
        {activeTab === "guides" && (
          <div>
            <h2 className="text-3xl font-bold mb-6">How-to Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="card bg-base-200 shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title text-xl mb-4 flex items-center">
                      <span className="badge badge-lg bg-amber-300 text-black mr-2">{index + 1}</span>
                      {feature.title}
                    </h3>
                    <ol className="list-decimal list-inside space-y-2">
                      {feature.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-base-content/80">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Troubleshooting Section */}
        {activeTab === "troubleshooting" && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>
            <div className="space-y-4">
              {troubleshooting.map((item, index) => (
                <div key={index} className="alert alert-info">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Problem: {item.issue}</h3>
                    <p className="text-base-content/80">
                      <strong>Solution:</strong> {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Still having issues?</h3>
                <p className="text-base-content/80 mb-4">
                  If you're still experiencing problems after trying these solutions, here are some additional steps:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base-content/80">
                  <li>Try using the app in a different browser</li>
                  <li>Disable browser extensions temporarily</li>
                  <li>Check if your browser is up to date</li>
                  <li>Clear all browser data for this website</li>
                  <li>Contact our support team using the contact form</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === "contact" && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

            <div>
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-300 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold">@</span>
                      </div>
                      <div>
                        <p className="font-semibold">Email Support</p>
                        <p className="text-base-content/80">support@foodtracker.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-300 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold">?</span>
                      </div>
                      <div>
                        <p className="font-semibold">Response Time</p>
                        <p className="text-base-content/80">Within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-300 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold">★</span>
                      </div>
                      <div>
                        <p className="font-semibold">Feedback</p>
                        <p className="text-base-content/80">feedback@foodtracker.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            
          </div>
        )}
      </div>

      
    </div>
  )
}


export default Help
