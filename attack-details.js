// ==========================================
// CYBER AWARENESS - ATTACK DETAILS
// ==========================================

const attackData = {

    phishing: {
        title: "Phishing Attack",
        intro: "Don't take the bait! Learn to identify fake messages and websites.",
        what: "Phishing is a cyberattack where criminals pretend to be trusted people or organisations to trick you into revealing passwords, bank details or OTPs.",
        how: [
            "You receive a fake email, SMS or message.",
            "It may claim your bank account will be blocked.",
            "It asks you to click a link or open an attachment.",
            "A fake website collects your personal information.",
            "The criminal may misuse your information or money."
        ],
        attackers: "Cybercriminals, organised fraud groups and scammers who impersonate banks, companies or government organisations.",
        victims: "Anyone who uses email, SMS, messaging apps, online banking or social media.",
        effects: ["Loss of money", "Stolen passwords and accounts", "Identity theft", "Misuse of personal information"],
        prevention: [
            "Check the sender's address carefully.",
            "Never click unexpected suspicious links.",
            "Never share OTPs, PINs or passwords.",
            "Visit websites by typing their official address.",
            "Enable multi-factor authentication."
        ],
        response: [
            "Stop communicating with the sender.",
            "Change affected passwords using the official website.",
            "Contact your bank immediately if money is involved.",
            "Call 1930 quickly for financial cyber fraud.",
            "Save screenshots and report at cybercrime.gov.in."
        ],
        laws: "Depending on the facts, provisions of the Information Technology Act, 2000 and relevant cheating, impersonation or identity-related provisions of the Bharatiya Nyaya Sanhita, 2023 may apply.",
        challenge: "You receive an email asking you to verify your bank account through an unfamiliar link. What should you do?",
        options: [
            "Click immediately",
            "Enter your OTP",
            "Open the official bank website separately",
            "Forward it to friends"
        ],
        answer: 2,
        incidents: [{
            source: "Hyderabad City Police – Official Press Note",
            text: "On 24 January 2022, AP Mahesh Co-operative Urban Bank reported a cyberattack involving phishing emails disguised as genuine messages. Employees opened malicious emails, compromising systems and allowing attackers to siphon approximately ₹12.48 crore.",
            url: "https://www.hyderabadpolice.gov.in/assets/news/2023/07july/01072023.pdf"
        }]
    },

    smishing: {
        title: "Smishing Attack",
        intro: "SMS + Phishing = Smishing. Learn to recognise dangerous text messages.",
        what: "Smishing is phishing carried out through SMS or text messages. Criminals send fake delivery, banking, KYC or prize messages.",
        how: [
            "A text message arrives unexpectedly.",
            "It creates urgency or fear.",
            "It includes a suspicious link or phone number.",
            "You enter details or install a harmful application.",
            "Your account or information may be misused."
        ],
        attackers: "Scammers impersonating banks, delivery companies, telecom providers or government services.",
        victims: "Mobile phone users, especially people who trust urgent messages.",
        effects: ["Financial loss", "Stolen credentials", "Malware infection", "Identity theft"],
        prevention: [
            "Do not trust unexpected SMS links.",
            "Verify delivery or banking messages using official apps.",
            "Never install APK files sent by strangers.",
            "Never share OTPs."
        ],
        response: [
            "Do not click further links.",
            "Uninstall suspicious applications safely.",
            "Change exposed passwords.",
            "Contact your bank if payment details were shared.",
            "Report financial fraud through 1930."
        ],
        laws: "The Information Technology Act, 2000 and relevant Bharatiya Nyaya Sanhita, 2023 provisions may apply depending on the conduct and evidence.",
        challenge: "An SMS says your SIM will be blocked unless you complete KYC through a link. What is safest?",
        options: [
            "Click the link",
            "Share Aadhaar details",
            "Verify directly with your telecom provider",
            "Reply with OTP"
        ],
        answer: 2,
        incidents: [{
            source: "Cybercrime Awareness",
            text: "Smishing messages commonly impersonate banks, delivery services and telecom providers to trick users into sharing sensitive information.",
            url: "https://cybercrime.gov.in/"
        }]
    },

    vishing: {
        title: "Vishing Attack",
        intro: "Voice + Phishing = Vishing. A phone call can be a cyber threat.",
        what: "Vishing is a voice-based scam in which criminals call people pretending to be bank staff, police officers or customer support representatives.",
        how: [
            "A stranger calls pretending to be an official.",
            "They create fear or urgency.",
            "They ask for OTP, PIN, remote access or money.",
            "The victim follows their instructions.",
            "The criminal steals money or information."
        ],
        attackers: "Fraudsters impersonating bank employees, police, telecom staff or other officials.",
        victims: "Anyone with a phone, particularly people unfamiliar with common phone scams.",
        effects: ["Bank account theft", "Identity theft", "Loss of savings", "Emotional stress"],
        prevention: [
            "Do not share OTPs or PINs over calls.",
            "Never install remote-access apps at a caller's request.",
            "Disconnect suspicious calls.",
            "Call the official number independently."
        ],
        response: [
            "End the call.",
            "Contact your bank through its official number.",
            "Block affected cards or accounts if needed.",
            "Call 1930 for financial fraud.",
            "Report the incident online."
        ],
        laws: "Depending on evidence, cheating, impersonation and identity-related provisions under the Bharatiya Nyaya Sanhita, 2023 and Information Technology Act, 2000 may apply.",
        challenge: "A caller says they are from your bank and asks for your OTP. What should you do?",
        options: [
            "Share it",
            "Disconnect and contact the bank officially",
            "Send it by SMS",
            "Tell your UPI PIN"
        ],
        answer: 1,
        incidents: [{
            text: "I4C advisories describe impersonation and intimidation scams.",
            url: "https://cybercrime.gov.in/pdf/Advisories/ADVISORYTAU-ADV-003DigitalArrest06.03.2025.pdf",
            source: "I4C Digital Arrest Advisory"
        }]
    },

    "upi-fraud": {
        title: "UPI Payment Fraud",
        intro: "Understand how payment requests and fake payment proofs can trick you.",
        what: "UPI fraud involves criminals manipulating people or exploiting accounts and devices to steal money through digital payment systems.",
        how: [
            "A fraudster contacts the victim.",
            "They may send a collect request or fake payment screenshot.",
            "They tell the victim to enter a UPI PIN to receive money.",
            "The victim unknowingly authorises a payment.",
            "Money is transferred to the criminal."
        ],
        attackers: "Online payment scammers, impersonators and organised financial fraud groups.",
        victims: "UPI users, shopkeepers, students, families and small businesses.",
        effects: ["Unauthorised transactions", "Loss of savings", "Misuse of bank accounts"],
        prevention: [
            "You do not need a UPI PIN to receive money.",
            "Check the amount and recipient before approving.",
            "Never scan an unknown QR code to receive money.",
            "Do not trust payment screenshots; check your bank app."
        ],
        response: [
            "Contact your bank immediately.",
            "Call 1930 as soon as possible.",
            "Report at cybercrime.gov.in.",
            "Save transaction IDs, screenshots and messages."
        ],
        laws: "The applicable provisions depend on the facts and may include cheating and identity-related offences under the Bharatiya Nyaya Sanhita, 2023 and relevant provisions of the Information Technology Act, 2000.",
        challenge: "A buyer asks you to enter your UPI PIN to receive payment. What is correct?",
        options: [
            "Enter PIN",
            "Share OTP",
            "Never enter PIN to receive money",
            "Scan their QR code"
        ],
        answer: 2,
        incidents: [{
            text: "Government of India information on financial cyber fraud complaints and response.",
            url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2226441&lang=1&reg=1",
            source: "Press Information Bureau, Ministry of Home Affairs"
        }]
    },

    "identity-theft": {
        title: "Identity Theft",
        intro: "Your identity is valuable. Protect your personal information.",
        what: "Identity theft happens when someone steals and misuses another person's personal information, such as identity documents, account credentials or financial details.",
        how: [
            "A criminal obtains personal information.",
            "They use stolen details to impersonate the victim.",
            "They may create accounts, request services or attempt financial fraud.",
            "The victim may discover the misuse later."
        ],
        attackers: "Identity thieves, scammers and criminals using stolen personal data.",
        victims: "Anyone whose personal, financial or identity information is exposed.",
        effects: ["Fraudulent accounts", "Financial loss", "Reputation damage", "Misuse of identity documents"],
        prevention: [
            "Share identity documents only when necessary.",
            "Use strong unique passwords.",
            "Secure your email and phone number.",
            "Be careful with public Wi-Fi and suspicious forms."
        ],
        response: [
            "Contact the affected bank or service provider.",
            "Secure your email and accounts.",
            "Preserve evidence.",
            "Report suspected identity misuse to police or the cybercrime portal."
        ],
        laws: "Section 66C of the Information Technology Act, 2000 addresses identity theft. Other provisions may apply depending on the conduct.",
        challenge: "Someone asks you to send your Aadhaar and OTP over WhatsApp for a prize. What should you do?",
        options: [
            "Send both",
            "Send only OTP",
            "Do not share and verify independently",
            "Post them publicly"
        ],
        answer: 2,
        incidents: [{
            text: "I4C advisories on cybercrime and identity-related fraud patterns.",
            url: "https://cybercrime.gov.in/Webform/Advisory.aspx",
            source: "National Cyber Crime Reporting Portal"
        }]
    },

    ransomware: {
        title: "Ransomware",
        intro: "One infected file can lock important data. Learn how to stay protected.",
        what: "Ransomware is malicious software that encrypts or blocks access to files and demands payment to restore access.",
        how: [
            "A malicious file, link or vulnerable system is used to gain access.",
            "The malware runs on the device.",
            "Files may be encrypted or systems disrupted.",
            "A ransom message demands payment."
        ],
        attackers: "Cybercriminal groups and malware operators, sometimes working in organised networks.",
        victims: "Individuals, hospitals, schools, companies and government organisations.",
        effects: ["Loss of access to files", "Business disruption", "Data exposure", "Financial and recovery costs"],
        prevention: [
            "Keep software updated.",
            "Maintain offline or separate backups.",
            "Use trusted security software.",
            "Avoid unknown attachments.",
            "Use multi-factor authentication."
        ],
        response: [
            "Disconnect the infected device from networks.",
            "Do not rush to pay the ransom.",
            "Contact your organisation's IT/security team.",
            "Preserve evidence and seek professional help.",
            "Report the incident to appropriate authorities."
        ],
        laws: "Depending on the incident, provisions of the Information Technology Act, 2000 may apply, including unauthorised access and damage to computer resources.",
        challenge: "Your computer displays a ransom message. What should you do first?",
        options: [
            "Pay immediately",
            "Disconnect it from the network and seek help",
            "Forward the malware",
            "Ignore all backups"
        ],
        answer: 1,
        incidents: [{
            text: "CERT-In publishes alerts and advisories about malware and ransomware threats.",
            url: "https://www.cert-in.org.in/",
            source: "CERT-In"
        }]
    },

    malware: {
        title: "Malware",
        intro: "Malware is software designed to harm, spy on or misuse devices.",
        what: "Malware means malicious software. It includes viruses, worms, Trojans, spyware, ransomware and other harmful programs.",
        how: [
            "A malicious file or application reaches a device.",
            "A user opens it or a vulnerability is exploited.",
            "The software runs without proper permission.",
            "It may steal information, damage files or spy on activity."
        ],
        attackers: "Malware developers, cybercriminal groups and people distributing malicious software.",
        victims: "Phone and computer users, organisations and networks.",
        effects: ["Stolen information", "Slow or damaged devices", "Unauthorised access", "Financial loss"],
        prevention: [
            "Download apps from trusted stores.",
            "Keep operating systems updated.",
            "Avoid unknown attachments.",
            "Use reputable security software.",
            "Review app permissions."
        ],
        response: [
            "Disconnect suspicious devices from networks if necessary.",
            "Run a trusted security scan.",
            "Remove suspicious applications.",
            "Change passwords from a clean device.",
            "Seek expert help if important data is affected."
        ],
        laws: "Unauthorised access, data damage and related acts may fall under relevant provisions of the Information Technology Act, 2000.",
        challenge: "Which of these is a type of malware?",
        options: [
            "Firewall",
            "Trojan",
            "Password manager",
            "Operating system update"
        ],
        answer: 1,
        incidents: [{
            text: "CERT-In security alerts and advisories.",
            url: "https://www.cert-in.org.in/",
            source: "CERT-In"
        }]
    },

    cyberbullying: {
        title: "Cyberbullying",
        intro: "Online harassment is serious. You deserve to feel safe online.",
        what: "Cyberbullying is the use of digital platforms to repeatedly harass, threaten, humiliate or target another person.",
        how: [
            "Someone sends abusive or threatening messages.",
            "They may share embarrassing content or rumours.",
            "Harassment may continue through multiple accounts.",
            "The victim experiences fear, stress or isolation."
        ],
        attackers: "Individuals or groups using social media, messaging apps, gaming platforms or other online services to harass others.",
        victims: "Children, teenagers, adults, students and anyone using online platforms.",
        effects: ["Stress and fear", "Loss of confidence", "Reputation damage", "Impact on studies and relationships"],
        prevention: [
            "Use privacy settings.",
            "Do not share sensitive personal details publicly.",
            "Block and report abusive accounts.",
            "Think before posting or forwarding content."
        ],
        response: [
            "Do not retaliate.",
            "Save screenshots, URLs and dates.",
            "Block and report the account.",
            "Tell a trusted adult or appropriate authority.",
            "Report serious threats or abuse to the police or cybercrime portal."
        ],
        laws: "Depending on the behaviour and victim, relevant provisions of the Bharatiya Nyaya Sanhita, 2023 and Information Technology Act, 2000 may apply.",
        challenge: "Someone repeatedly sends threatening messages. What should you do?",
        options: [
            "Threaten them back",
            "Save evidence, block and report",
            "Share your password",
            "Ignore immediate danger"
        ],
        answer: 1,
        incidents: [{
            text: "National Cyber Crime Reporting Portal provides reporting options, including for women and children.",
            url: "https://cybercrime.gov.in/",
            source: "Government of India"
        }]
    },

    "fake-profile": {
        title: "Fake Social Media Profiles",
        intro: "Not every online identity is genuine. Learn to spot impersonation.",
        what: "A fake profile is an account created using false information or another person's identity to deceive, harass or scam people.",
        how: [
            "A criminal copies photos or personal details.",
            "They create an account pretending to be someone else.",
            "They contact friends or followers.",
            "They may request money, information or private content."
        ],
        attackers: "Impersonators, scammers, harassers and people misusing stolen photographs.",
        victims: "Social media users, students, public figures and ordinary families.",
        effects: ["Reputation damage", "Financial scams", "Harassment", "Privacy violations"],
        prevention: [
            "Make accounts private where appropriate.",
            "Avoid sharing personal photos and details publicly.",
            "Verify unusual requests through another channel.",
            "Enable two-factor authentication."
        ],
        response: [
            "Take screenshots and save the profile URL.",
            "Report impersonation to the platform.",
            "Warn friends and family.",
            "Report threats, extortion or financial loss to authorities."
        ],
        laws: "Impersonation and cheating provisions under the Bharatiya Nyaya Sanhita, 2023 and relevant Information Technology Act, 2000 provisions may apply depending on the case.",
        challenge: "A new account using your friend's photo asks you for money. What should you do?",
        options: [
            "Send money",
            "Verify with your friend using another method",
            "Share your OTP",
            "Forward the request"
        ],
        answer: 1,
        incidents: [{
            text: "I4C advisories on impersonation and online fraud.",
            url: "https://cybercrime.gov.in/Webform/Advisory.aspx",
            source: "I4C advisories"
        }]
    },

    ddos: {
        title: "DDoS Attack",
        intro: "Learn how attackers can overwhelm websites and online services.",
        what: "A Distributed Denial-of-Service attack attempts to make a website or online service unavailable by overwhelming it with traffic from many devices.",
        how: [
            "Attackers control or misuse many internet-connected devices.",
            "Those devices send large volumes of requests.",
            "The target service becomes overloaded.",
            "Legitimate users may be unable to access it."
        ],
        attackers: "Cybercriminal groups, extortionists or actors seeking to disrupt online services.",
        victims: "Websites, businesses, public services and online platforms.",
        effects: ["Website downtime", "Service disruption", "Financial losses", "Loss of customer trust"],
        prevention: [
            "Use DDoS protection services.",
            "Monitor unusual traffic.",
            "Use rate limiting and traffic filtering.",
            "Prepare an incident response plan."
        ],
        response: [
            "Contact the hosting provider or network team.",
            "Activate DDoS mitigation.",
            "Preserve logs and evidence.",
            "Inform affected users when appropriate.",
            "Report serious incidents to relevant authorities."
        ],
        laws: "Unauthorised access or disruption may involve relevant provisions of the Information Technology Act, 2000. The exact legal position depends on the facts.",
        challenge: "A website becomes unavailable due to huge traffic from many devices. What attack may be occurring?",
        options: [
            "DDoS",
            "Phishing",
            "Identity theft",
            "Password reset"
        ],
        answer: 0,
        incidents: [{
            text: "CERT-In publishes cyber incident alerts and security advisories.",
            url: "https://www.cert-in.org.in/",
            source: "CERT-In"
        }]
    },

    "sim-swap": {
        title: "SIM Swapping",
        intro: "Your mobile number can be a target. Protect your SIM and accounts.",
        what: "SIM swapping is a fraud in which criminals trick or manipulate a telecom provider into transferring a victim's phone number to a SIM they control.",
        how: [
            "The criminal gathers personal information.",
            "They impersonate the mobile number's owner.",
            "They attempt to obtain a replacement SIM.",
            "The victim's original SIM may lose network service.",
            "The criminal may receive calls and SMS, including some OTPs."
        ],
        attackers: "Identity thieves and organised financial fraudsters.",
        victims: "Mobile subscribers who use phone numbers for banking and account recovery.",
        effects: ["Loss of mobile service", "Account takeover attempts", "Financial fraud", "Privacy loss"],
        prevention: [
            "Never share personal details with unknown callers.",
            "Protect email and banking accounts.",
            "Contact your telecom provider if service suddenly stops unexpectedly.",
            "Use authenticator apps where supported."
        ],
        response: [
            "Contact your telecom provider immediately.",
            "Ask them to block the unauthorised SIM.",
            "Contact banks and secure accounts.",
            "Change passwords from a trusted device.",
            "Report suspected financial fraud to 1930."
        ],
        laws: "Depending on the facts, identity theft, cheating and unauthorised access provisions under the Information Technology Act, 2000 and Bharatiya Nyaya Sanhita, 2023 may apply.",
        challenge: "Your phone suddenly loses network service and you did not request a SIM replacement. What should you do?",
        options: [
            "Ignore it",
            "Contact your telecom provider immediately",
            "Share your OTP",
            "Post your number publicly"
        ],
        answer: 1,
        incidents: [{
            text: "Government of India information on blocking SIM cards linked to cyber fraud.",
            url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2176146&lang=2&reg=48",
            source: "Press Information Bureau"
        }]
    },

    deepfake: {
        title: "Deepfake Scams",
        intro: "AI can imitate faces and voices. Learn to verify before you trust.",
        what: "A deepfake is AI-generated or manipulated audio, image or video that can make someone appear to say or do something they did not.",
        how: [
            "A criminal collects publicly available voice or video samples.",
            "AI tools generate or manipulate media.",
            "The fake media is sent to a victim.",
            "The criminal may demand money or spread misinformation."
        ],
        attackers: "Scammers, impersonators and people misusing AI tools.",
        victims: "Families, students, employees, public figures and businesses.",
        effects: ["Financial fraud", "Reputation damage", "Emotional harm", "Misinformation"],
        prevention: [
            "Verify urgent money requests through a separate call.",
            "Agree on a family verification phrase.",
            "Check suspicious media carefully.",
            "Limit public sharing of sensitive recordings."
        ],
        response: [
            "Do not forward the fake content.",
            "Save the original message and account details.",
            "Warn the person being impersonated.",
            "Report the content to the platform.",
            "Report fraud or threats to the cybercrime portal."
        ],
        laws: "The legal provisions depend on the use of the deepfake. Relevant provisions may include cheating, impersonation, privacy or IT Act offences. There is no single law section covering every deepfake.",
        challenge: "You receive a voice message that sounds exactly like a relative asking for emergency money. What should you do?",
        options: [
            "Transfer immediately",
            "Verify by calling their known number",
            "Share your bank PIN",
            "Forward to everyone"
        ],
        answer: 1,
        incidents: [{
            text: "Government of India cybercrime advisories and reporting resources.",
            url: "https://cybercrime.gov.in/Webform/Advisory.aspx",
            source: "National Cyber Crime Reporting Portal"
        }]
    }
};


// ==========================================
// UNIQUE ACTIVITIES FOR ALL 12 ATTACKS
// ==========================================

const activityData = {

    phishing: {
        example: "Imagine receiving an email pretending to be from your bank. It asks you to verify your account through an unfamiliar website.",

        scenarioTitle: "The Fake Bank Email",
        scenario: "You receive an email claiming your bank account will be suspended unless you verify your details immediately.",
        message: "URGENT BANK NOTICE! Your account will be blocked today. Verify your details immediately: http://bank-verify-example.com",
        options: [
            "Click the link and enter my password",
            "Reply with my OTP",
            "Open my bank's official website separately",
            "Forward the email to everyone"
        ],
        answer: 2,
        feedback: [
            "Dangerous! The link may lead to a fake website.",
            "Never share OTPs. Criminals can misuse them.",
            "Correct! Always verify through official channels.",
            "Forwarding suspicious emails can expose others."
        ],

        visual: [
            ["📧", "Fake email arrives", "An attacker impersonates a trusted organisation."],
            ["🔗", "Suspicious link", "The email directs you to a fake website."],
            ["🔓", "Information stolen", "Your credentials may be captured."]
        ],

        detectiveTitle: "Investigate the Suspicious Email",
        detectiveMessage: "From: security-bank-example@gmail.com\nSubject: URGENT! Account suspension\nMessage: Verify your password immediately using this unfamiliar link.",
        clues: [
            ["⚠️", "Creates fear and urgency", true],
            ["🔗", "Contains an unfamiliar website link", true],
            ["📧", "Uses a suspicious sender address", true],
            ["✅", "It is safe because it uses the word bank", false]
        ]
    },

    smishing: {
        example: "Imagine receiving a text message claiming that your parcel cannot be delivered until you pay a small redelivery fee.",

        scenarioTitle: "The Fake Delivery SMS",
        scenario: "A text message says your parcel is waiting and asks you to pay a small fee through an unfamiliar link.",
        message: "DELIVERY FAILED! Your parcel is on hold. Pay ₹25 redelivery fee now: http://parcel-redelivery-example.com",
        options: [
            "Pay the fee immediately",
            "Enter my card details",
            "Check the delivery through the official courier app",
            "Send the message to friends"
        ],
        answer: 2,
        feedback: [
            "Be careful! The payment link may be fraudulent.",
            "Never enter card details on an unverified website.",
            "Correct! Verify delivery information through the official service.",
            "Do not spread suspicious messages."
        ],

        visual: [
            ["📱", "Unexpected SMS", "A fake delivery notification arrives."],
            ["📦", "Fake payment request", "The message demands a small redelivery fee."],
            ["💳", "Payment details at risk", "Your card or personal information may be stolen."]
        ],

        detectiveTitle: "Investigate the Delivery Message",
        detectiveMessage: "DELIVERY ALERT! Your parcel is waiting. Pay ₹25 immediately using this unfamiliar link.",
        clues: [
            ["⏰", "Pressures you to act immediately", true],
            ["🔗", "Uses an unfamiliar payment link", true],
            ["💳", "Requests payment through an unverified page", true],
            ["📦", "Every delivery SMS is automatically genuine", false]
        ]
    },

    vishing: {
        example: "Imagine receiving a phone call from someone claiming to be a bank employee. They say your account has a security problem.",

        scenarioTitle: "The Fake Bank Phone Call",
        scenario: "A caller claims to be from your bank and says your account will be blocked unless you share your OTP.",
        message: "CALLER: I am calling from your bank security department. Tell me your OTP immediately to protect your account.",
        options: [
            "Share the OTP",
            "Tell the caller my UPI PIN",
            "Disconnect and contact the bank using its official number",
            "Install the remote-access app they recommend"
        ],
        answer: 2,
        feedback: [
            "Dangerous! Never share an OTP over a phone call.",
            "Never reveal your UPI PIN.",
            "Correct! End suspicious calls and independently verify.",
            "Remote-access apps can allow criminals to misuse your device."
        ],

        visual: [
            ["📞", "Unknown caller", "A stranger claims to represent your bank."],
            ["🗣️", "Pressure and manipulation", "The caller demands an OTP or PIN."],
            ["🏦", "Account at risk", "Sharing sensitive information can enable fraud."]
        ],

        detectiveTitle: "Investigate the Suspicious Phone Call",
        detectiveMessage: "CALLER: I am a bank officer. Your account has a problem. Share your OTP and install this support application immediately.",
        clues: [
            ["📞", "Caller identity is not independently verified", true],
            ["🔐", "Requests an OTP or PIN", true],
            ["📲", "Pressures you to install an app", true],
            ["🏦", "Real bank employees need your OTP", false]
        ]
    },

    "upi-fraud": {
        example: "Imagine someone sends you a payment request and tells you to enter your UPI PIN to receive money.",

        scenarioTitle: "The Fake Payment Request",
        scenario: "A buyer says they have sent you money, but asks you to approve a UPI collect request to receive it.",
        message: "PAYMENT PENDING! Approve this request and enter your UPI PIN to receive ₹5,000.",
        options: [
            "Enter my UPI PIN",
            "Approve the request without checking",
            "Reject the request and verify my bank balance",
            "Share my UPI PIN with the buyer"
        ],
        answer: 2,
        feedback: [
            "Dangerous! Entering your PIN can authorise a payment.",
            "Always check what a UPI request is asking you to approve.",
            "Correct! You do not need a UPI PIN to receive money.",
            "Never share your UPI PIN."
        ],

        visual: [
            ["💬", "Buyer contacts you", "A stranger claims to have sent money."],
            ["📲", "Collect request arrives", "You receive a request asking for approval."],
            ["💸", "Money may leave your account", "Entering your PIN can authorise a debit."]
        ],

        detectiveTitle: "Investigate the UPI Request",
        detectiveMessage: "REQUEST: Receive ₹5,000. Action required: Approve payment and enter your UPI PIN.",
        clues: [
            ["🔐", "Asks you to enter your UPI PIN to receive money", true],
            ["💸", "An approval may authorise a payment", true],
            ["⚠️", "The request should be independently verified", true],
            ["✅", "A UPI PIN is always needed to receive money", false]
        ]
    },

    "identity-theft": {
        example: "Imagine discovering that someone has used your personal identity details to apply for a service without your permission.",

        scenarioTitle: "Someone Is Using Your Identity",
        scenario: "You receive a message about a loan application that you never submitted. It contains your personal details.",
        message: "LOAN APPLICATION RECEIVED! Your application has been submitted successfully. If this was not you, contact this unknown number immediately.",
        options: [
            "Ignore the message",
            "Share more identity documents with the sender",
            "Contact the financial institution through its official channel",
            "Post my identity documents online"
        ],
        answer: 2,
        feedback: [
            "Ignoring possible identity misuse may allow it to continue.",
            "Do not send more sensitive information to an unknown sender.",
            "Correct! Verify with the institution and report unauthorised activity.",
            "Never publish identity documents publicly."
        ],

        visual: [
            ["🪪", "Personal data exposed", "A criminal obtains identity information."],
            ["👤", "Identity impersonated", "The criminal pretends to be the victim."],
            ["📄", "Unauthorised activity", "Accounts or applications may be created."]
        ],

        detectiveTitle: "Investigate the Identity Misuse",
        detectiveMessage: "NOTICE: A financial account application has been submitted using your identity details. You did not submit it.",
        clues: [
            ["🪪", "Your identity details may have been misused", true],
            ["📄", "An application exists that you did not submit", true],
            ["⚠️", "You should contact the institution officially", true],
            ["📤", "Sending more documents to unknown people is safe", false]
        ]
    },

    ransomware: {
        example: "Imagine opening your computer and finding that your important files are locked with a message demanding money.",

        scenarioTitle: "Your Files Have Been Locked",
        scenario: "Your computer displays a warning that your documents have been encrypted and demands payment to restore them.",
        message: "YOUR FILES ARE ENCRYPTED! Pay the requested ransom to receive a decryption key. Do not turn off your computer.",
        options: [
            "Pay immediately without checking",
            "Forward the message to colleagues",
            "Disconnect the affected device from the network and contact security support",
            "Connect all backup drives"
        ],
        answer: 2,
        feedback: [
            "Paying does not guarantee that your files will be restored.",
            "Do not spread suspicious files or messages.",
            "Correct! Isolate the device and seek professional assistance.",
            "Connecting backups may expose them to infection."
        ],

        visual: [
            ["📂", "Malicious file or access", "An attacker gains a way into the system."],
            ["🔒", "Files encrypted", "Ransomware prevents access to data."],
            ["💰", "Ransom demand", "A message demands payment."]
        ],

        detectiveTitle: "Investigate the Locked Computer",
        detectiveMessage: "SCREEN ALERT: Your documents are encrypted. A ransom payment is demanded. Your files are no longer accessible.",
        clues: [
            ["🔒", "Files have become inaccessible", true],
            ["💰", "A ransom payment is demanded", true],
            ["⚠️", "The device should be isolated from networks", true],
            ["💳", "Payment guarantees file recovery", false]
        ]
    },

    malware: {
        example: "Imagine installing an unknown wallpaper application that secretly accesses your contacts, messages and other device information.",

        scenarioTitle: "The Suspicious Mobile App",
        scenario: "A free wallpaper application asks for access to your contacts, microphone, messages and other unnecessary permissions.",
        message: "FREE PREMIUM WALLPAPERS! Install this APK now. Allow all permissions to unlock special features.",
        options: [
            "Allow every permission",
            "Install the APK from the unknown link",
            "Avoid installing it and use trusted app stores",
            "Share the APK with friends"
        ],
        answer: 2,
        feedback: [
            "Excessive permissions can expose private information.",
            "Unknown APK files may contain malware.",
            "Correct! Use trusted sources and review app permissions.",
            "Sharing an unsafe application can put others at risk."
        ],

        visual: [
            ["📥", "Unknown app downloaded", "A suspicious application reaches the device."],
            ["📱", "App requests permissions", "It may request access it does not need."],
            ["🕵️", "Private data at risk", "Malware may spy on or misuse information."]
        ],

        detectiveTitle: "Investigate the Suspicious Application",
        detectiveMessage: "APP: FREE WALLPAPER PRO. Permissions requested: Contacts, SMS, Microphone, Camera and Location.",
        clues: [
            ["📲", "Downloaded from an unknown source", true],
            ["🔐", "Requests unnecessary permissions", true],
            ["⚠️", "Could expose private information", true],
            ["✅", "Every free app is safe", false]
        ]
    },

    cyberbullying: {
        example: "Imagine a group repeatedly posting insulting comments about a student and sharing edited pictures without permission.",

        scenarioTitle: "The Hurtful Group Chat",
        scenario: "A group chat repeatedly shares insulting messages and an edited picture targeting one student.",
        message: "GROUP CHAT: Everyone laugh at this edited picture! Keep sharing it. Let's embarrass this student.",
        options: [
            "Join the harassment",
            "Forward the picture",
            "Save evidence, report the content and support the victim",
            "Threaten the group members"
        ],
        answer: 2,
        feedback: [
            "Joining harassment can cause further harm.",
            "Forwarding humiliating content spreads the abuse.",
            "Correct! Preserve evidence, report and support the victim.",
            "Threatening people may escalate the situation."
        ],

        visual: [
            ["💬", "Abusive messages", "Hurtful content appears online."],
            ["📸", "Content shared", "Images or rumours spread to others."],
            ["😟", "Emotional impact", "The victim may experience fear and stress."]
        ],

        detectiveTitle: "Investigate the Online Harassment",
        detectiveMessage: "GROUP CHAT: Repeated insults, humiliating edited pictures and pressure to share the content.",
        clues: [
            ["💬", "Repeated insulting messages", true],
            ["📸", "Humiliating content shared without permission", true],
            ["🚨", "Evidence should be preserved and reported", true],
            ["👍", "Sharing the content helps the victim", false]
        ]
    },

    "fake-profile": {
        example: "Imagine finding an account using your friend's photograph and asking people in their contact list for emergency money.",

        scenarioTitle: "The Copycat Social Profile",
        scenario: "A new social media account uses your friend's photo and sends you a message requesting urgent financial help.",
        message: "HELLO! I changed my account. Please send ₹3,000 urgently. I will return it later. Don't call me now.",
        options: [
            "Transfer the money",
            "Share my bank details",
            "Verify with my friend using their known phone number",
            "Send the request to everyone"
        ],
        answer: 2,
        feedback: [
            "The account may be impersonating your friend.",
            "Never share banking details with an unverified account.",
            "Correct! Verify through a separate trusted communication channel.",
            "Do not spread unverified requests."
        ],

        visual: [
            ["🖼️", "Photo copied", "Someone takes another person's public photograph."],
            ["👤", "Fake account created", "The attacker impersonates that person."],
            ["💬", "Friends targeted", "The fake account asks contacts for money."]
        ],

        detectiveTitle: "Investigate the Fake Profile",
        detectiveMessage: "NEW ACCOUNT: Uses your friend's photograph. Requests urgent money. Refuses to answer a phone call.",
        clues: [
            ["🖼️", "Uses a copied photograph", true],
            ["💰", "Requests urgent money", true],
            ["📞", "Avoids independent identity verification", true],
            ["✅", "A familiar profile photo proves identity", false]
        ]
    },

    ddos: {
        example: "Imagine a college website becoming unavailable because it receives an unusually large amount of traffic from many devices.",

        scenarioTitle: "The College Website Outage",
        scenario: "Students cannot access the college website. The server is receiving an unusually high volume of requests from many devices.",
        message: "SYSTEM ALERT: Unusual traffic detected. Website response time is increasing. Legitimate users are unable to access the service.",
        options: [
            "Keep refreshing the website repeatedly",
            "Launch another attack in response",
            "Inform the technical team and activate traffic protection",
            "Share administrator passwords"
        ],
        answer: 2,
        feedback: [
            "Repeated refreshing may add unnecessary traffic.",
            "Never respond to an attack with another attack.",
            "Correct! The technical team should investigate and mitigate the traffic.",
            "Never share administrator credentials."
        ],

        visual: [
            ["🤖", "Many devices send requests", "Large volumes of traffic target a service."],
            ["🌐", "Server overloaded", "The service struggles to respond."],
            ["🚫", "Website unavailable", "Legitimate users cannot access the website."]
        ],

        detectiveTitle: "Investigate the Website Outage",
        detectiveMessage: "SERVER REPORT: Very high traffic from many sources. Website response time is extremely slow. Genuine users cannot connect.",
        clues: [
            ["📈", "Unusually high traffic volume", true],
            ["🌐", "Requests come from many devices or sources", true],
            ["🚫", "Legitimate users cannot access the service", true],
            ["🔐", "This automatically proves a password theft attack", false]
        ]
    },

    "sim-swap": {
        example: "Imagine your phone suddenly loses mobile network service even though you did not request a replacement SIM.",

        scenarioTitle: "The Unexpected SIM Disconnection",
        scenario: "Your phone suddenly shows no network. You receive information that a SIM replacement may have been requested without your permission.",
        message: "MOBILE ALERT: Your number may have been transferred to another SIM. Your original SIM has lost network service.",
        options: [
            "Ignore the loss of network",
            "Share OTPs with someone who calls",
            "Contact your telecom provider immediately using an official channel",
            "Post personal details online"
        ],
        answer: 2,
        feedback: [
            "Unexpected network loss may need urgent investigation.",
            "Never share OTPs with callers.",
            "Correct! Contact your provider and secure important accounts.",
            "Do not expose personal information publicly."
        ],

        visual: [
            ["📡", "Personal details targeted", "A criminal may gather information about the victim."],
            ["📱", "Unauthorised SIM replacement", "The criminal attempts to control the phone number."],
            ["🔐", "Accounts at risk", "Calls and SMS may reach the replacement SIM."]
        ],

        detectiveTitle: "Investigate the SIM Swap Warning",
        detectiveMessage: "PHONE STATUS: No mobile network. You did not request a SIM replacement. Banking SMS messages are no longer arriving.",
        clues: [
            ["📡", "Unexpected loss of mobile network", true],
            ["📱", "A SIM replacement may have been requested", true],
            ["🏦", "Banking accounts may be at risk", true],
            ["✅", "You should ignore unexplained network loss", false]
        ]
    },

    deepfake: {
        example: "Imagine receiving a voice message that sounds exactly like a family member asking for urgent money.",

        scenarioTitle: "The AI-Cloned Family Voice",
        scenario: "You receive a voice message that sounds like your relative. The person urgently asks you to transfer money.",
        message: "VOICE MESSAGE: Please help me! I am in an emergency. Send ₹10,000 immediately. Do not call me.",
        options: [
            "Transfer the money immediately",
            "Share my banking PIN",
            "Call your relative using their known number to verify",
            "Forward the voice message to everyone"
        ],
        answer: 2,
        feedback: [
            "The voice could be AI-generated or manipulated.",
            "Never share your banking PIN.",
            "Correct! Verify urgent requests through another trusted channel.",
            "Do not spread unverified audio."
        ],

        visual: [
            ["🎙️", "Voice sample collected", "An attacker may obtain publicly available recordings."],
            ["🤖", "AI-generated voice", "Technology imitates another person's voice."],
            ["💸", "Fake emergency request", "The criminal attempts to manipulate the victim."]
        ],

        detectiveTitle: "Investigate the Suspicious Voice Message",
        detectiveMessage: "VOICE MESSAGE: Sounds like your relative. Requests urgent money. Says not to call back.",
        clues: [
            ["🎙️", "The voice alone does not prove identity", true],
            ["💸", "An urgent money request is made", true],
            ["📞", "Independent verification is necessary", true],
            ["🤖", "AI-generated voices are impossible", false]
        ]
    }

};


// ==========================================
// QUIZ DATA - 3 QUESTIONS FOR EACH ATTACK
// ==========================================

const quizData = {

    phishing: [
        {
            question: "You receive an email that appears to come from your bank. The sender address is slightly different from the bank's official domain. What is the safest response?",
            options: ["Click the link to check", "Reply asking whether it is genuine", "Open the bank's official website separately and report the email", "Download the attachment"],
            answer: 2,
            explanation: "A slightly altered sender domain is a warning sign. Never use links in suspicious emails. Verify through the official bank website or app."
        },
        {
            question: "You entered your password on a website and then realised the link came from a suspicious email. What should you do first?",
            options: ["Wait to see what happens", "Change the password using the official website and secure other accounts using the same password", "Forward the email", "Delete your browser"],
            answer: 1,
            explanation: "Change the exposed password immediately from a trusted device. Change it anywhere else you reused it and enable multi-factor authentication."
        },
        {
            question: "An email passes the spelling and logo checks but asks you to sign in through an unfamiliar link. What should determine whether you trust it?",
            options: ["The logo looks professional", "The email uses formal language", "The sender and destination must be independently verified", "The email has a company signature"],
            answer: 2,
            explanation: "Professional appearance does not prove authenticity. Verify the sender and website independently before entering information."
        }
    ],

    smishing: [
        {
            question: "A delivery SMS asks you to install an APK to reschedule a parcel. The message includes your name. What is the safest action?",
            options: ["Install it because the message knows your name", "Forward the APK to another phone", "Avoid the APK and check delivery status through the courier's official app or website", "Allow all requested permissions"],
            answer: 2,
            explanation: "Personalised details can be obtained or guessed. Unknown APK files can contain malware. Verify through the official courier service."
        },
        {
            question: "You clicked a suspicious SMS link but did not enter any details. What should you do?",
            options: ["Enter details to check whether it works", "Close the page, avoid downloads, and check your device for anything downloaded", "Reply to the sender", "Share the link with friends"],
            answer: 1,
            explanation: "Do not continue interacting with the page. Check for unexpected downloads or installations and use trusted security tools if necessary."
        },
        {
            question: "A message says your SIM will be blocked within 10 minutes unless you submit KYC details through a shortened link. What is the best decision?",
            options: ["Submit the details quickly", "Reply with your OTP", "Verify the claim directly with your telecom provider using an official channel", "Call the number in the message"],
            answer: 2,
            explanation: "Urgency and shortened links are warning signs. Contact your telecom provider independently using its official contact details."
        }
    ],

    vishing: [
        {
            question: "A caller's number appears similar to your bank's number. The caller asks you to install a remote-access app to fix an account problem. What should you do?",
            options: ["Install it because the number looks genuine", "Share your screen", "Disconnect and contact the bank through its official number", "Give the caller your UPI PIN"],
            answer: 2,
            explanation: "Caller ID can be spoofed. Remote-access tools can expose your device. Independently contact your bank."
        },
        {
            question: "A caller claims to be a police officer and threatens immediate arrest unless you transfer money. What is the safest response?",
            options: ["Transfer money to avoid trouble", "Follow every instruction", "End the call and independently contact the relevant official authority", "Share identity documents and OTPs"],
            answer: 2,
            explanation: "Threats and demands for immediate payment are major warning signs. Do not transfer money or share sensitive information."
        },
        {
            question: "You shared an OTP during a suspicious call and then realised it was a scam. What should you do?",
            options: ["Wait until tomorrow", "Immediately contact the affected bank or service provider and secure the account", "Delete the call history only", "Call the scammer again"],
            answer: 1,
            explanation: "An exposed OTP may allow account access or a transaction. Contact the relevant provider immediately and report any financial loss."
        }
    ],

    "upi-fraud": [
        {
            question: "A stranger sends you a UPI collect request and says approving it will deposit ₹5,000 into your account. What should you understand?",
            options: ["Every collect request adds money", "Approving it may authorise a payment from your account", "A UPI PIN is needed to receive money", "It is safe if the amount is small"],
            answer: 1,
            explanation: "A collect request asks you to approve a payment. Never enter your UPI PIN to receive money."
        },
        {
            question: "A customer shows you a payment screenshot, but your payment app shows no received transaction. What should you do?",
            options: ["Hand over the goods immediately", "Trust the screenshot", "Verify the transaction in your own bank or payment app before handing over goods", "Ask the customer for your OTP"],
            answer: 2,
            explanation: "Screenshots can be edited or fabricated. Confirm the actual transaction in your own account."
        },
        {
            question: "You notice an unauthorised UPI debit. Which response is most appropriate?",
            options: ["Wait several days", "Delete the payment app", "Contact your bank immediately, call 1930 promptly, and report through the official cybercrime portal", "Share your PIN with customer support"],
            answer: 2,
            explanation: "Fast reporting may help authorities and banks respond. Never share your PIN or OTP with anyone."
        }
    ],

    "identity-theft": [
        {
            question: "You receive a loan approval message for a loan you never applied for. What is the strongest first step?",
            options: ["Click the message link", "Contact the named financial institution through its official channel and dispute the application", "Send more identity documents to the sender", "Ignore it permanently"],
            answer: 1,
            explanation: "Verify the application directly with the institution. Preserve the message and request investigation of the unauthorised activity."
        },
        {
            question: "Your identity document was exposed online. Which action best reduces the risk of further misuse?",
            options: ["Post the document again to warn people", "Secure related accounts, contact relevant institutions, and monitor suspicious activity", "Share your OTP with callers", "Use the same password everywhere"],
            answer: 1,
            explanation: "Secure accounts and contact affected institutions. Monitor for unauthorised applications or transactions and preserve evidence."
        },
        {
            question: "Someone uses your identity details to open an account. Which evidence is most useful when reporting it?",
            options: ["Only a verbal explanation", "Application notices, account details, dates, messages and communication with the institution", "Unrelated photographs", "A forwarded rumour"],
            answer: 1,
            explanation: "Preserve relevant records, dates, messages and official notices. They help the institution and authorities investigate."
        }
    ],

    ransomware: [
        {
            question: "A workstation displays a ransom note and shared folders are becoming inaccessible. What should the employee do first?",
            options: ["Connect backup drives", "Disconnect the affected device from networks and alert the security team", "Pay immediately", "Forward the suspicious file"],
            answer: 1,
            explanation: "Isolate the affected device to help limit spread. Notify the security team and preserve evidence."
        },
        {
            question: "Your organisation has offline backups after a ransomware attack. What is the safest recovery approach?",
            options: ["Connect all backups to the infected computer immediately", "Restore only after the environment is assessed and cleaned by the response team", "Delete every backup", "Assume the attacker cannot access backups"],
            answer: 1,
            explanation: "Backups can also be infected or compromised. Verify their safety and follow a controlled recovery process."
        },
        {
            question: "A criminal promises a decryption key if you pay. What is the most accurate statement?",
            options: ["Payment guarantees recovery", "Payment always prevents data leaks", "Payment does not guarantee recovery or deletion of stolen data", "Payment makes the system safe"],
            answer: 2,
            explanation: "There is no guarantee criminals will provide working keys or delete stolen data. Seek professional incident response."
        }
    ],

    malware: [
        {
            question: "A wallpaper APK requests access to SMS, contacts and microphone even though these features are unnecessary. What is the best decision?",
            options: ["Allow all permissions", "Install it because it is free", "Avoid installing it and use a trusted app source", "Disable phone security"],
            answer: 2,
            explanation: "Unnecessary permissions and unknown installation sources increase risk. Avoid the application."
        },
        {
            question: "You suspect malware has stolen passwords from your laptop. Where should you change your important passwords?",
            options: ["On the possibly infected laptop", "On a separate trusted and clean device", "Using a link sent by the suspicious app", "On a public computer without signing out"],
            answer: 1,
            explanation: "Use a trusted clean device to change passwords. Secure email and financial accounts first."
        },
        {
            question: "A security scan detects a suspicious application. What should you do before assuming the threat is resolved?",
            options: ["Ignore the detection", "Follow trusted security guidance, remove the threat, update the device and check for further compromise", "Install another unknown cleaner", "Share the infected file"],
            answer: 1,
            explanation: "Removing one suspicious app may not resolve every compromise. Update the device and use trusted security tools or expert assistance."
        }
    ],

    cyberbullying: [
        {
            question: "A student is repeatedly targeted by edited images in a group chat. What is the most responsible response?",
            options: ["Forward the images", "Join the jokes", "Preserve evidence, report the content and support the student", "Threaten the group"],
            answer: 2,
            explanation: "Do not amplify the abuse. Save evidence, report it and help the victim reach trusted support."
        },
        {
            question: "An abusive account deletes its messages after threatening a student. What should the victim ideally have preserved?",
            options: ["Only the account's display picture", "Screenshots, profile links, dates, usernames and relevant messages", "Unrelated conversations", "Nothing"],
            answer: 1,
            explanation: "Detailed evidence can support a platform or police report. Record dates and preserve relevant links and messages."
        },
        {
            question: "A cyberbullying message includes a credible threat of physical harm. What should happen?",
            options: ["Treat it as a joke", "Respond with threats", "Tell a trusted person and contact appropriate authorities promptly", "Publish the victim's private details"],
            answer: 2,
            explanation: "Credible threats require urgent attention. Preserve evidence and seek help from trusted people and appropriate authorities."
        }
    ],

    "fake-profile": [
        {
            question: "A profile using your friend's photograph asks for urgent money and refuses a voice call. What is the safest verification?",
            options: ["Trust the photograph", "Send a small amount first", "Contact your friend using a previously known phone number or another trusted channel", "Ask the profile for an OTP"],
            answer: 2,
            explanation: "Photographs can be copied. Verify through a separate communication channel you already trust."
        },
        {
            question: "You discover an account impersonating you. What evidence should you preserve before reporting it?",
            options: ["Only the profile's colour theme", "Screenshots, profile URL, username and messages", "Your password", "Other people's private documents"],
            answer: 1,
            explanation: "Save the profile URL, username and relevant messages. Report the account through the platform's impersonation process."
        },
        {
            question: "The fake account has contacted several of your friends. What should you do after reporting it?",
            options: ["Ignore everyone", "Warn friends through your genuine account or another trusted channel", "Share your login details", "Create another fake account"],
            answer: 1,
            explanation: "Warn contacts through a trusted channel so they do not send money or personal information to the impersonator."
        }
    ],

    ddos: [
        {
            question: "A college website becomes unavailable and monitoring shows a huge increase in requests from many sources. What should the technical team investigate?",
            options: ["Only password reset requests", "Possible distributed denial-of-service traffic and its patterns", "Whether students forgot their passwords", "Whether the website logo is incorrect"],
            answer: 1,
            explanation: "A sudden large volume of traffic from many sources may indicate a DDoS attack. Analyse traffic and coordinate mitigation."
        },
        {
            question: "A website is experiencing a DDoS attack. Which response is appropriate?",
            options: ["Attack the suspected sources", "Publish administrator credentials", "Coordinate with the hosting provider and activate DDoS mitigation", "Disable every security control"],
            answer: 2,
            explanation: "Use approved mitigation measures with the hosting or network provider. Do not retaliate or expose credentials."
        },
        {
            question: "A website is unavailable. Does this alone prove that its user database has been stolen?",
            options: ["Yes, every outage means data theft", "No, an outage does not by itself prove data theft; investigate logs and other evidence", "Yes, all DDoS attacks steal passwords", "No investigation is needed"],
            answer: 1,
            explanation: "DDoS primarily affects service availability. Data theft is a separate possibility that requires evidence and investigation."
        }
    ],

    "sim-swap": [
        {
            question: "Your phone suddenly loses network service. At the same time, you receive a bank alert about an unfamiliar transaction. What should you do?",
            options: ["Wait for the network to return", "Immediately contact your telecom provider and bank through official channels", "Share OTPs with callers", "Restart the phone repeatedly and do nothing else"],
            answer: 1,
            explanation: "Unexpected loss of service combined with bank activity may indicate SIM-swap fraud. Contact the provider and bank immediately."
        },
        {
            question: "After an unauthorised SIM replacement, which accounts should you prioritise securing?",
            options: ["Only social media games", "Email and financial accounts linked to the affected number", "Unrelated public websites", "No accounts"],
            answer: 1,
            explanation: "Email and financial accounts can be used for password recovery and transaction verification. Secure them from a trusted device."
        },
        {
            question: "A caller claims they can restore your mobile network if you provide an OTP. What should you do?",
            options: ["Share it", "Send it by message", "Refuse and contact the telecom provider independently", "Share your banking PIN too"],
            answer: 2,
            explanation: "Never share OTPs with callers. Use your provider's official support channels to investigate the network problem."
        }
    ],

    deepfake: [
        {
            question: "You receive an audio message that sounds exactly like your relative asking for urgent money and telling you not to call. What is the safest response?",
            options: ["Transfer immediately", "Verify through the relative's known phone number or another trusted person", "Trust the voice completely", "Forward the audio to everyone"],
            answer: 1,
            explanation: "AI can imitate voices. Verify urgent requests using a separate trusted channel before taking action."
        },
        {
            question: "A video of a company director announces an urgent bank account change. What should an employee do?",
            options: ["Transfer money immediately", "Follow the video without checking", "Verify the instruction through established internal approval channels", "Share the video publicly"],
            answer: 2,
            explanation: "Deepfake video can imitate real people. Financial instructions must be verified using established approval procedures."
        },
        {
            question: "You suspect an audio clip is a deepfake. Which action is most responsible?",
            options: ["Forward it as genuine", "Preserve the original message and report it through the appropriate platform or authority", "Edit it and repost it", "Use the audio alone as proof of identity"],
            answer: 1,
            explanation: "Preserve the original material and its context. Do not spread unverified content or assume audio proves someone's identity."
        }
    ]
};


// ==========================================
// RENDER UNIQUE SCENARIO
// ==========================================

function renderScenario(activity) {
    const container = document.getElementById("dynamicScenario");
    if (!container) return;

    container.innerHTML = `
        <h3>📌 ${activity.scenarioTitle}</h3>
        <p>${activity.scenario}</p>
        <div class="fake-message">
            <div class="message-header">📩 Training Demonstration</div>
            <p>${activity.message.replace(/\n/g, "<br>")}</p>
            <p class="fictional-note">⚠️ Fictional training example – not a real message.</p>
        </div>
        <h3>🤔 Imagine This Is Happening to YOU</h3>
        <p>What would you do next, and why? Choose the safest action:</p>
        <div class="scenario-options">
            ${activity.options.map((option, index) => `
                <button class="scenario-choice" data-choice="${index}">
                    ${String.fromCharCode(65 + index)}. ${option}
                </button>
            `).join("")}
        </div>
        <div id="scenarioResult" class="scenario-result" aria-live="polite"></div>
    `;

    const buttons = container.querySelectorAll(".scenario-choice");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selected = Number(button.dataset.choice);
            const result = container.querySelector("#scenarioResult");

            buttons.forEach(item => item.disabled = true);

            if (selected === activity.answer) {
                result.innerHTML = `
                    <h3>🎉 Correct Decision!</h3>
                    <p>✅ ${activity.feedback[selected]}</p>
                `;
            } else {
                result.innerHTML = `
                    <h3>⚠️ Think Again!</h3>
                    <p>${activity.feedback[selected]}</p>
                    <p><strong>Safer action:</strong> ${activity.options[activity.answer]}</p>
                `;
            }
        });
    });
}


// ==========================================
// RENDER UNIQUE VISUAL LEARNING
// ==========================================

function renderVisual(activity) {
    const container = document.getElementById("attackVisual");
    if (!container) return;

    container.innerHTML = activity.visual.map((step, index) => `
        <div class="visual-card">
            <span>${step[0]}</span>
            <h4>${step[1]}</h4>
            <p>${step[2]}</p>
        </div>
        ${index < activity.visual.length - 1
            ? '<div class="visual-arrow">➡️</div>'
            : ''}
    `).join("");
}


// ==========================================
// RENDER CYBER DETECTIVE WITH SCORING
// ==========================================

function renderDetective(activity) {
    const container = document.getElementById("dynamicDetective");
    if (!container) return;

    container.innerHTML = `
        <h3>🔎 ${activity.detectiveTitle}</h3>
        <div class="fake-message">
            <div class="message-header">🕵️ Evidence collected</div>
            <p>${activity.detectiveMessage.replace(/\n/g, "<br>")}</p>
            <p class="fictional-note">⚠️ Fictional investigation scenario.</p>
        </div>
        <h3>Identify the Warning Signs</h3>
        <p>Select all the correct clues. Avoid selecting misleading statements.</p>
        <div id="detectiveOptions">
            ${activity.clues.map((clue, index) => `
                <button class="detective-option" data-index="${index}">
                    ${clue[0]} ${clue[1]}
                </button>
            `).join("")}
        </div>
        <button id="checkDetective">🔍 Check My Investigation</button>
        <button id="resetDetective" type="button">🔄 Try Again</button>
        <div id="detectiveResult" aria-live="polite"></div>
    `;

    const buttons = container.querySelectorAll(".detective-option");
    const checkButton = container.querySelector("#checkDetective");
    const resetButton = container.querySelector("#resetDetective");
    const result = container.querySelector("#detectiveResult");

    let selected = new Set();

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (checkButton.disabled) return;

            const index = Number(button.dataset.index);

            if (selected.has(index)) {
                selected.delete(index);
                button.classList.remove("selected");
            } else {
                selected.add(index);
                button.classList.add("selected");
            }
        });
    });

    checkButton.addEventListener("click", () => {
        const correctIndexes = activity.clues
            .map((clue, index) => clue[2] ? index : -1)
            .filter(index => index !== -1);

        const correctSelected = correctIndexes.filter(index => selected.has(index)).length;
        const wrongSelected = [...selected].filter(index => !correctIndexes.includes(index)).length;
        const missed = correctIndexes.length - correctSelected;

        const score = Math.round(
            (correctSelected / correctIndexes.length) * 100 -
            (wrongSelected / activity.clues.length) * 100
        );

        const finalScore = Math.max(0, Math.min(100, score));

        buttons.forEach((button, index) => {
            button.disabled = true;
            const clue = activity.clues[index];

            if (clue[2]) {
                button.style.border = "2px solid green";
            } else if (selected.has(index)) {
                button.style.border = "2px solid red";
            }
        });

        checkButton.disabled = true;

        result.innerHTML = `
            <h3>🏆 Investigation Results</h3>
            <p><strong>Score: ${finalScore}/100</strong></p>
            <p>Correct warning signs selected: ${correctSelected}</p>
            <p>Incorrect selections: ${wrongSelected}</p>
            <p>Missed warning signs: ${missed}</p>
            <h4>Evidence Review</h4>
            ${activity.clues.map(clue => `
                <p>${clue[2] ? "✅" : "ℹ️"} ${clue[1]} — 
                ${clue[2] ? "Genuine warning sign." : "Not a reliable warning sign."}</p>
            `).join("")}
            <p><strong>${finalScore === 100 ? "Excellent investigation!" : "Review the evidence and try again."}</strong></p>
        `;
    });

    resetButton.addEventListener("click", () => {
        selected = new Set();
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove("selected");
            button.style.border = "";
        });
        checkButton.disabled = false;
        result.innerHTML = "";
    });
}


// ==========================================
// RENDER 3-QUESTION ATTACK QUIZ
// ==========================================

function renderQuiz(type) {
    const optionsContainer = document.getElementById("challengeOptions");
    const feedbackContainer = document.getElementById("challengeFeedback");
    const completionSection = document.getElementById("completionSection");

    if (!optionsContainer || !feedbackContainer) return;

    // Hide completion until all questions are answered
    if (completionSection) {
        completionSection.hidden = true;
    }

    const questions = quizData[type];

    if (!questions || questions.length !== 3) {
        optionsContainer.innerHTML = "<p>Quiz is currently unavailable.</p>";
        return;
    }

    let answered = 0;
    let score = 0;

    feedbackContainer.innerHTML = "";

    function updateScore() {
        feedbackContainer.innerHTML = `
            <h3>📊 Quiz Progress</h3>
            <p>Answered: ${answered}/3</p>
            <p>Correct answers: ${score}/3</p>
            <p>Score: ${Math.round((score / 3) * 100)}/100</p>
            ${answered === 3
                ? `<h3>${score === 3 ? "🏆 Excellent! Perfect score!" : "🎯 Quiz Completed!"}</h3>
                   <p>${score === 3
                       ? "You demonstrated excellent cyber awareness."
                       : "Review the explanations and strengthen your cyber safety knowledge."
                   }</p>`
                : "<p>Complete all three questions to see your final result.</p>"
            }
        `;

        // Show completion only after all three questions are answered
        if (answered === 3 && completionSection) {
            completionSection.hidden = false;
            completionSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }

    optionsContainer.innerHTML = questions.map((question, questionIndex) => `
        <div class="quiz-question" data-question="${questionIndex}">
            <h3>Question ${questionIndex + 1} of 3</h3>
            <p><strong>${question.question}</strong></p>
            <div class="quiz-question-options">
                ${question.options.map((option, optionIndex) => `
                    <button class="quiz-option"
                        data-question="${questionIndex}"
                        data-answer="${optionIndex}">
                        ${String.fromCharCode(65 + optionIndex)}. ${option}
                    </button>
                `).join("")}
            </div>
            <div class="quiz-question-feedback" aria-live="polite"></div>
        </div>
    `).join("");

    optionsContainer.querySelectorAll(".quiz-option").forEach(button => {
        button.addEventListener("click", () => {
            const questionIndex = Number(button.dataset.question);
            const selectedAnswer = Number(button.dataset.answer);
            const question = questions[questionIndex];

            const questionBox = optionsContainer.querySelector(
                `.quiz-question[data-question="${questionIndex}"]`
            );

            if (questionBox.dataset.answered === "true") return;

            questionBox.dataset.answered = "true";
            answered++;

            const questionButtons = questionBox.querySelectorAll(".quiz-option");

            questionButtons.forEach(item => {
                item.disabled = true;

                if (Number(item.dataset.answer) === question.answer) {
                    item.style.border = "2px solid green";
                }
            });

            const feedback = questionBox.querySelector(".quiz-question-feedback");

            if (selectedAnswer === question.answer) {
                score++;
                feedback.innerHTML = `
                    <p>✅ <strong>Correct answer!</strong></p>
                    <p>${question.explanation}</p>
                `;
            } else {
                feedback.innerHTML = `
                    <p>❌ <strong>Not quite.</strong></p>
                    <p>Correct answer: ${question.options[question.answer]}</p>
                    <p>${question.explanation}</p>
                `;
                button.style.border = "2px solid red";
            }

            updateScore();
        });
    });

    updateScore();
}
// ==========================================
// DISPLAY ATTACK INFORMATION
// ==========================================

function showAttackPage() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    const data = attackData[type];
    const activity = activityData[type];

    if (!data || !activity) {
        document.getElementById("attackTitle").textContent = "Attack Not Found";
        return;
    }

    document.getElementById("attackTitle").textContent = data.title;
    document.getElementById("attackIntro").textContent = data.intro;
    document.getElementById("what").textContent = data.what;
    document.getElementById("example").textContent = activity.example;
    document.getElementById("attackers").textContent = data.attackers;
    document.getElementById("victims").textContent = data.victims;
    document.getElementById("laws").textContent = data.laws;
    document.getElementById("challenge").textContent = data.challenge;

    function fillList(id, items) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = items.map(item => `<li>${item}</li>`).join("");
        }
    }

    fillList("how", data.how);
    fillList("effects", data.effects);
    fillList("prevention", data.prevention);
    fillList("response", data.response);

    const incidents = document.getElementById("incidents");
    if (incidents) {
        incidents.innerHTML = data.incidents.map(item => `
            <div class="incident-card">
                <h3>${item.source}</h3>
                <p>${item.text}</p>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                    Read Source
                </a>
            </div>
        `).join("");
    }

    renderScenario(activity);
    renderVisual(activity);
    renderDetective(activity);
    renderQuiz(type);
}

if (document.getElementById("attackTitle")) {
    showAttackPage();
}