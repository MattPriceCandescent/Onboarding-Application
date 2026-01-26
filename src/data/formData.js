// Form data structure - placeholder questions will be replaced by user-provided questions

export const formData = {
  step1: {
    page1: {
      title: "Risk Management Strategies and Processes Questions",
      subtitle: "Complete this section of the application to get access to developer tools.",
      formBlocks: [
        {
          id: "data-history",
          title: "Data History",
          questions: [
            {
              id: "q1",
              type: "textarea",
              label: "If as part of the product/service you provide, you have access to Candescent systems, please describe that access."
            },
            {
              id: "q2",
              type: "radio",
              label: "Has your company suffered a data loss or security breach within the last 3 years?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Have any of your Third Party vendors suffered a data loss or security breach within the last 3 years?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "asset-management",
          title: "Asset Management",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have an asset management program for all your assets which tracks hardware and software throughout its life cycle?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Do you have an asset classification scheme?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Are assets classified according to function and criticality?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "business-environment",
          title: "Business Environment",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you conduct thorough background checks on employees and subcontractors with access to critical systems or confidential information?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "risk-assessment",
          title: "Risk Assessment and Mitigation",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have a formal risk assessment process?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "select",
              label: "How often do you conduct risk assessments?",
              options: ["Answer A", "Answer B", "Answer C"]
            }
          ]
        },
        {
          id: "change-management",
          title: "Change Management",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have a formal change management process?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "security-program",
          title: "Security Program",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have a documented information security program?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "third-party-vendors",
          title: "3rd Party vendors / 4th Parties to Candescent",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you use third-party vendors that have access to Candescent data?",
              options: ["Yes", "No"]
            }
          ]
        }
      ]
    },
    page2: {
      title: "Operational Strategies and Processes Questions",
      subtitle: "Complete this section to continue with the onboarding process.",
      formBlocks: [
        {
          id: "access-control",
          title: "Access Control",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have role-based access control (RBAC) implemented?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Do you regularly review and update user access permissions?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "data-security",
          title: "Data Security",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you encrypt data at rest?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Do you encrypt data in transit?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "physical-access",
          title: "Physical Access Controls",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have physical security controls for your facilities?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "operations",
          title: "Operations",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have documented operational procedures?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "incident-response",
          title: "Incident Response",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have an incident response plan?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "ransomware",
          title: "Ransomware",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have ransomware protection measures in place?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "business-continuity",
          title: "Business Continuity",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have a business continuity plan?",
              options: ["Yes", "No"]
            }
          ]
        }
      ]
    },
    page3: {
      title: "Certifications and Documentation",
      subtitle: "Upload required documentation to complete Step 1.",
      formBlocks: [
        {
          id: "files-to-upload",
          title: "Files to upload",
          questions: [
            {
              id: "q1",
              type: "file",
              label: "Annual Financial Statement",
              description: "Upload your most recent annual financial statement"
            },
            {
              id: "q2",
              type: "file",
              label: "Security Certification",
              description: "Upload your security certification document"
            },
            {
              id: "q3",
              type: "file",
              label: "Compliance Documentation",
              description: "Upload relevant compliance documentation"
            }
          ]
        }
      ]
    }
  }
}
