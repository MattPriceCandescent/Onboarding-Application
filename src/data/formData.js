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
            },
            {
              id: "q2",
              type: "radio",
              label: "Do you complete drug screening and/or credit score reviews on potential employees and contractors?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Are your business systems classified according to criticality?",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "radio",
              label: "Is each critical business system assigned an owner?",
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
              label: "Does your risk assessment process include current and evolving industry threats?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Have you performed a risk assessment for all your critical business systems?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Do you perform the risk assessment at least annually?",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "select",
              label: "How often do you perform your Penetration Test?",
              options: ["Annually", "Semi-annually", "Quarterly", "Monthly", "Other"]
            },
            {
              id: "q5",
              type: "textarea",
              label: "What was the date of your last Penetration Test?",
              placeholder: "Please enter the date (e.g., MM/DD/YYYY)"
            },
            {
              id: "q6",
              type: "radio",
              label: "Were there any findings rated critical or high?",
              options: ["Yes", "No"]
            },
            {
              id: "q7",
              type: "radio",
              label: "If so, were the findings remediated?",
              options: ["Yes", "No"]
            },
            {
              id: "q8",
              type: "textarea",
              label: "If not, what is the time frame/policy for remediation?",
              placeholder: "Please describe the time frame or policy"
            },
            {
              id: "q9",
              type: "select",
              label: "How often do you perform your Vulnerability Test?",
              options: ["Annually", "Semi-annually", "Quarterly", "Monthly", "Other"]
            },
            {
              id: "q10",
              type: "textarea",
              label: "What was the date of your last Vulnerability Test?",
              placeholder: "Please enter the date (e.g., MM/DD/YYYY)"
            },
            {
              id: "q11",
              type: "radio",
              label: "Were there any findings rated critical or high?",
              options: ["Yes", "No"]
            },
            {
              id: "q12",
              type: "radio",
              label: "If so, were the findings remediated?",
              options: ["Yes", "No"]
            },
            {
              id: "q13",
              type: "textarea",
              label: "If not, what is the time frame/policy for remediation?",
              placeholder: "Please describe the time frame or policy"
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
              label: "Do you have well-documented, formal change management process and procedures in place?",
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
              label: "Does your organization have a designated Security Officer?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Does your cybersecurity function have a clear reporting line that does not present a conflict of interest?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Do you have an established Security Program?",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "radio",
              label: "Is your security program based on a standard such as SANS or NIST?",
              options: ["Yes", "No"]
            },
            {
              id: "q5",
              type: "textarea",
              label: "If not SANS or NIST, please explain what standard your security program is based on.",
              placeholder: "Please describe the standard"
            },
            {
              id: "q6",
              type: "radio",
              label: "Does your security program include metrics which measure the maturity of your security program?",
              options: ["Yes", "No"]
            },
            {
              id: "q7",
              type: "radio",
              label: "Does the program measure the effectiveness of your security controls?",
              options: ["Yes", "No"]
            },
            {
              id: "q8",
              type: "radio",
              label: "Do you measure the effectiveness of your security program at least annually?",
              options: ["Yes", "No"]
            },
            {
              id: "q9",
              type: "radio",
              label: "Are you using your security program to drive improvements in your security posture?",
              options: ["Yes", "No"]
            },
            {
              id: "q10",
              type: "radio",
              label: "Do you have a program for continuing cybersecurity training and skill development for cybersecurity staff?",
              options: ["Yes", "No"]
            },
            {
              id: "q11",
              type: "radio",
              label: "Do you have an ongoing Security Awareness Training Program for both new and current employees?",
              options: ["Yes", "No"]
            },
            {
              id: "q12",
              type: "radio",
              label: "Does your Security Awareness Training Program include phishing awareness?",
              options: ["Yes", "No"]
            },
            {
              id: "q13",
              type: "radio",
              label: "Does your Security Awareness Training Program include web surfing awareness?",
              options: ["Yes", "No"]
            },
            {
              id: "q14",
              type: "radio",
              label: "Do you have an Employee Acceptable Use Policy for your corporate IT resources?",
              options: ["Yes", "No"]
            },
            {
              id: "q15",
              type: "radio",
              label: "Do you have a program for talent recruitment, retention, and succession planning for the cybersecurity and resilience staffs?",
              options: ["Yes", "No"]
            },
            {
              id: "q16",
              type: "radio",
              label: "Do you perform annual security gap analysis?",
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
              label: "Do you have a Third Party Risk Management program?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Does your internal audit or a third-party conduct independent reviews of your third-party risk management program?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Do you periodically reassess your critical vendors?",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "radio",
              label: "Do you require all of your critical 3rd party vendors to carry insurance (Liability, Property, Cyber)?",
              options: ["Yes", "No"]
            },
            {
              id: "q5",
              type: "radio",
              label: "Have you conducted due diligence to verify whether your 3rd parties have known outstanding issues with regulatory entities or law enforcement agencies?",
              options: ["Yes", "No"]
            },
            {
              id: "q6",
              type: "radio",
              label: "Do you track customer complaints or obtain regular reports of customer complaints regarding your 3rd party vendors?",
              options: ["Yes", "No"]
            },
            {
              id: "q7",
              type: "radio",
              label: "Do you analyze and remediate those complaints?",
              options: ["Yes", "No"]
            },
            {
              id: "q8",
              type: "radio",
              label: "Do you periodically review online activity, publicity, public reports, or social media for adverse events involving your 3rd and 4th party vendors?",
              options: ["Yes", "No"]
            },
            {
              id: "q9",
              type: "radio",
              label: "Do you periodically review externally available cyber risk security ratings (Bitsight, RiskRecon, etc.) for your 3rd and 4th party vendors?",
              options: ["Yes", "No"]
            },
            {
              id: "q10",
              type: "radio",
              label: "Do any of your 3rd party vendors have access to Candescent end user / customer or employee data?",
              options: ["Yes", "No"]
            },
            {
              id: "q11",
              type: "textarea",
              label: "If so, please provide a list of the data and the company names to which the 3rd party vendors have access.",
              placeholder: "Please provide the list"
            },
            {
              id: "q12",
              type: "radio",
              label: "Does the 3rd party have access to Candescent systems?",
              options: ["Yes", "No"]
            },
            {
              id: "q13",
              type: "radio",
              label: "If so, do you log, audit and monitor that access?",
              options: ["Yes", "No"]
            },
            {
              id: "q14",
              type: "radio",
              label: "Does the 3rd party have access to Candescent Intellectual Property?",
              options: ["Yes", "No"]
            },
            {
              id: "q15",
              type: "radio",
              label: "Do the 3rd parties send any type of email communications directly to Candescent Financial Institutions or end users?",
              options: ["Yes", "No"]
            },
            {
              id: "q16",
              type: "radio",
              label: "Are formal contracts that address relevant security and privacy requirements in place for all third parties that process, store, or transmit confidential data or provide critical services?",
              options: ["Yes", "No"]
            },
            {
              id: "q17",
              type: "textarea",
              label: "Please provide the names, locations, and services provided by all 3rd and 4th parties you use to support the products/services provided to Candescent.",
              placeholder: "Please provide the information"
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
              label: "Do you have a formal identity and access management program?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "If yes, does your IAM support automated workflows for access management provisioning and de-provisioning?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Does your IAM support MFA for enhanced user authentication to access internal systems?",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "radio",
              label: "Do you have a clearly defined policy for managing access, including provisioning, de-provisioning, and regular reviews of user access levels and permissions? (This includes physical assets as well.)",
              options: ["Yes", "No"]
            },
            {
              id: "q5",
              type: "radio",
              label: "Do you maintain a list of all privileged accounts and do you audit the use of those accounts?",
              options: ["Yes", "No"]
            },
            {
              id: "q6",
              type: "radio",
              label: "Do employees with privileged account permissions receive additional cybersecurity training commensurate with their levels of responsibility?",
              options: ["Yes", "No"]
            },
            {
              id: "q7",
              type: "radio",
              label: "Are data classification labels used in your role based access control?",
              options: ["Yes", "No"]
            },
            {
              id: "q8",
              type: "radio",
              label: "Do you maintain the principle of least privilege when granting logical access to systems, data or resources for both your employees and subcontractors?",
              options: ["Yes", "No"]
            },
            {
              id: "q9",
              type: "radio",
              label: "Do you track and audit third party or contractor accounts that have access to your system?",
              options: ["Yes", "No"]
            },
            {
              id: "q10",
              type: "radio",
              label: "Is access terminated for third party or contractor relationships the same day the relationship is ended?",
              options: ["Yes", "No"]
            },
            {
              id: "q11",
              type: "radio",
              label: "Are vendor supplied default configurations (including usernames and passwords) changed, and/or disabled before use in production environments?",
              options: ["Yes", "No"]
            },
            {
              id: "q12",
              type: "radio",
              label: "Are staff able to access client data in an unencrypted state?",
              options: ["Yes", "No"]
            },
            {
              id: "q13",
              type: "radio",
              label: "Do access control requests require manager approvals?",
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
              label: "Do you encrypt the data you collect and store from Candescent?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Do you have data owner and data custodian roles defined and assigned to your data?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Do you encrypt all sensitive data at rest?",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "radio",
              label: "Do you have a data handling policy for the data you receive from Candescent which includes data collection, retention and destruction?",
              options: ["Yes", "No"]
            },
            {
              id: "q5",
              type: "radio",
              label: "Do you have a data classification and labeling scheme as part of your Security Program?",
              options: ["Yes", "No"]
            },
            {
              id: "q6",
              type: "radio",
              label: "Do you have a centralized encryption key management system?",
              options: ["Yes", "No"]
            },
            {
              id: "q7",
              type: "radio",
              label: "Do you maintain and audit a list of authorized users with access to encryption keys?",
              options: ["Yes", "No"]
            },
            {
              id: "q8",
              type: "radio",
              label: "Do all of your laptops with access to sensitive data have full disk encryption enabled?",
              options: ["Yes", "No"]
            },
            {
              id: "q9",
              type: "radio",
              label: "Do you deploy MDM on the devices that may have access to corporate data?",
              options: ["Yes", "No"]
            },
            {
              id: "q10",
              type: "radio",
              label: "Do you use publicly available object storage technologies such as AWS S3 to store customer data?",
              options: ["Yes", "No"]
            },
            {
              id: "q11",
              type: "radio",
              label: "If yes, is Candescent data stored in a single or multi-tenant environment?",
              options: ["Yes", "No"]
            },
            {
              id: "q12",
              type: "textarea",
              label: "Please describe the moments you take to ensure the data is not publicly accessible?",
              placeholder: "Please describe..."
            }
          ]
        },
        {
          id: "physical-access-control",
          title: "Physical Access Control (on-prem, hosted, cloud)",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you/your vendor maintain the principle of least privilege when granting physical access to corporate resources, including data center(s)?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Do you/your vendor have procedural and technical controls such as badge readers, security cameras, biometric identification devices, etc. to control physical access of persons to corporate IT resources, including data centers?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Do you/your vendor maintain access logs from badge readers, security cameras, biometric identification devices, etc?",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "radio",
              label: "Are access logs from badge readers, security cameras, biometric identification devices, etc. maintained at least 6 months?",
              options: ["Yes", "No"]
            },
            {
              id: "q5",
              type: "textarea",
              label: "If not, please clarify how long they are maintained.",
              placeholder: "Please specify..."
            },
            {
              id: "q6",
              type: "radio",
              label: "Do you/your vendor conduct periodic access reviews to ensure that only people with the appropriate roles and permissions are accessing your corporate resources, including data centers?",
              options: ["Yes", "No"]
            },
            {
              id: "q7",
              type: "textarea",
              label: "If you provide a hosted service, please provide the location(s) (city and state, or region/country) from which that hosted service is running.",
              placeholder: "Please provide location(s)..."
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
              label: "Does your organization have the capability to detect unauthorized changes to your systems?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Do you have the capability to define normal baseline events as well as the capability to detect and identify any deviations from normal?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Network events?",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "radio",
              label: "Security events?",
              options: ["Yes", "No"]
            },
            {
              id: "q5",
              type: "radio",
              label: "Application events?",
              options: ["Yes", "No"]
            },
            {
              id: "q6",
              type: "radio",
              label: "Infrastructure services?",
              options: ["Yes", "No"]
            },
            {
              id: "q7",
              type: "radio",
              label: "Do you have a SIEM?",
              options: ["Yes", "No"]
            },
            {
              id: "q8",
              type: "radio",
              label: "Do you monitor your own cybersecurity risk based on external cybersecurity vendor reports such as BitSight, RiskRecon, etc.",
              options: ["Yes", "No"]
            },
            {
              id: "q9",
              type: "radio",
              label: "Do you have staff that can review security event data and drive actions based on that data?",
              options: ["Yes", "No"]
            },
            {
              id: "q10",
              type: "radio",
              label: "Do you have comprehensive policies for Logging?",
              options: ["Yes", "No"]
            },
            {
              id: "q11",
              type: "radio",
              label: "Do you have comprehensive policies for Log management?",
              options: ["Yes", "No"]
            },
            {
              id: "q12",
              type: "radio",
              label: "Is multi-factor authentication used when connecting to VPN, cloud interfaces (AWS, Azure, etc.) and/or other critical infrastructure systems?",
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
              label: "Does your organization have a formal Information security incident management process?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Do you have the appropriate processes and procedures to deal with Security threats that affect your services?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "Is there a 24/7 security incident response team with clearly defined and documented roles and responsibilities?",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "radio",
              label: "Do you have adequate cyber insurance to cover damages resulting from critical security incidents?",
              options: ["Yes", "No"]
            },
            {
              id: "q5",
              type: "radio",
              label: "Do you test your response policies/plans at least annually?",
              options: ["Yes", "No"]
            },
            {
              id: "q6",
              type: "radio",
              label: "Do you have the appropriate processes and procedures to deal with Systems failures that affect your services?",
              options: ["Yes", "No"]
            },
            {
              id: "q7",
              type: "radio",
              label: "Do you have the appropriate processes and procedures to deal with Data integrity issues that affect your services?",
              options: ["Yes", "No"]
            },
            {
              id: "q8",
              type: "radio",
              label: "Is there a predefined plan for handling incidents, involving data exposure or violations to data privacy laws?",
              options: ["Yes", "No"]
            },
            {
              id: "q9",
              type: "radio",
              label: "Are you prepared to handle incidents that are a result of emerging technologies (deep fakes, supply chain attacks, etc.)?",
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
              label: "Do you have a ransomware playbook?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "If yes, do you test & update this playbook at least annually?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "radio",
              label: "As part of your ransomware playbook, have you evaluated whether or not your organization will pay ransom in the event of a critical ransomware attack? (Note: we're not asking what that decision is.)",
              options: ["Yes", "No"]
            },
            {
              id: "q4",
              type: "radio",
              label: "Do you have enough coverage in your cyber insurance to meet your RTO/RPO commitments in the event of a catastrophic ransomware event?",
              options: ["Yes", "No"]
            },
            {
              id: "q5",
              type: "radio",
              label: "Do you have a 3-2-1 backup strategy to meet your RTO/RPO commitments in the event of a catastrophic ransomware event?",
              options: ["Yes", "No"]
            },
            {
              id: "q6",
              type: "textarea",
              label: "How do you maintain integrity of your infrastructure in the event of a ransomware attack if your data is constantly replicated and there is no snapshot of your data offsite?",
              placeholder: "Please describe..."
            },
            {
              id: "q7",
              type: "radio",
              label: "Do you have real-time ransomware detection capabilities?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          id: "business-continuity",
          title: "Business Continuity and Disaster Recovery Questions",
          questions: [
            {
              id: "q1",
              type: "radio",
              label: "Do you have a Business Continuity and Disaster Recovery Plan?",
              options: ["Yes", "No"]
            },
            {
              id: "q2",
              type: "radio",
              label: "Do you test your BCP/DR plans at least annually?",
              options: ["Yes", "No"]
            },
            {
              id: "q3",
              type: "textarea",
              label: "What was the date of the last exercise that included actual recovery of all of the application systems that are needed to resume provisioning of the products and services that Candescent receives from you?",
              placeholder: "Please provide the date..."
            },
            {
              id: "q4",
              type: "radio",
              label: "Was RPO/RTO achieved during the last test?",
              options: ["Yes", "No"]
            },
            {
              id: "q5",
              type: "radio",
              label: "Were any issues identified in your last test?",
              options: ["Yes", "No"]
            },
            {
              id: "q6",
              type: "radio",
              label: "If yes, will those issues be resolved before running your next test?",
              options: ["Yes", "No"]
            },
            {
              id: "q7",
              type: "textarea",
              label: "If not, what is your policy regarding the timeframe for resolution?",
              placeholder: "Please describe..."
            },
            {
              id: "q8",
              type: "radio",
              label: "Are your backup and restore procedures part of the global business continuity and disaster recovery plan?",
              options: ["Yes", "No"]
            },
            {
              id: "q9",
              type: "radio",
              label: "Do you maintain a copy of your production data at another physical or logical location?",
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
