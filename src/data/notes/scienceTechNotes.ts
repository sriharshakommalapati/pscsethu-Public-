import { Subject } from '../../types';

export const SCI_TECH_SUBJECT: Subject = {
  id: 'sci-tech-security',
  name: 'Science & Technology, Cyber Security & Disaster Management',
  iconName: 'Cpu',
  description: 'ISRO space missions, semiconductor policy, quantum mission, cyber warfare defense, DPDP Act, and disaster management protocols.',
  topics: [
    {
      id: 'scitech-space-frontier',
      subjectId: 'sci-tech-security',
      title: 'Space Technology, Digital Innovations & Frontier Science',
      description: 'ISRO launch vehicles, deep space exploration, semiconductor mission, AI governance, and quantum technologies.',
      subtopics: [
        {
          id: 'sub-scitech-isro-space',
          topicId: 'scitech-space-frontier',
          subjectId: 'sci-tech-security',
          title: 'Space Exploration Architecture: ISRO Launch Vehicles, Deep Space Missions & Space Policy',
          summary: 'Detailed physics and mission design of PSLV, GSLV Mk III (LVM3), Chandrayaan-3, Aditya-L1, Gaganyaan, and IN-SPACe.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'India’s space program has evolved from socio-economic developmental applications (remote sensing and telecommunication) into deep-space planetary exploration and human spaceflight capability.',
            'The Indian Space Policy 2023 restructured the domestic space ecosystem, transitioning ISRO into research and development while empowering IN-SPACe and NewSpace India Limited (NSIL) to commercialize launch and satellite assets for the private sector.'
          ],
          coreNotesSections: [
            {
              heading: 'ISRO Launch Vehicle Hierarchy',
              points: [
                'Polar Satellite Launch Vehicle (PSLV): Four-stage workhorse vehicle using alternating solid and liquid propulsion (1st solid, 2nd liquid Vikas engine, 3rd solid, 4th liquid). Can deliver up to 1,750 kg payload into Sun-Synchronous Polar Orbit (SSPO) at 600 km altitude. Variants: PSLV-G, PSLV-CA (Core Alone), PSLV-XL.',
                'Geosynchronous Satellite Launch Vehicle (GSLV): Three-stage vehicle with solid rocket motor first stage, liquid second stage, and indigenous Cryogenic Upper Stage (CUS) burning liquid hydrogen and liquid oxygen. Capable of placing 2,250 kg into Geosynchronous Transfer Orbit (GTO).',
                'Launch Vehicle Mark-III (LVM3 / GSLV Mk-III): Heavy-lift three-stage launch vehicle with two solid strap-on motors (S200), a core liquid stage (L110), and a powerful Cryogenic Upper Stage (CE-20 engine). Can place 4,000 kg into GTO and 8,000 kg into Low Earth Orbit (LEO). Selected for human spaceflight under Mission Gaganyaan.',
                'Small Satellite Launch Vehicle (SSLV): Three-stage all-solid vehicle designed for rapid turnaround to launch mini, micro, or nano satellites (up to 500 kg) into low earth orbit.'
              ]
            },
            {
              heading: 'Landmark Deep-Space & Human Missions',
              points: [
                'Chandrayaan-3 (August 23, 2023): Landed the Vikram lander and Pragyan rover near the Lunar South Pole (Shiv Shakti Point), making India the first country to soft-land near the moon’s south pole and the fourth nation to achieve a soft lunar landing. August 23 declared National Space Day.',
                'Aditya-L1 (September 2023): India’s first dedicated solar observatory, placed into a halo orbit around the Sun-Earth Lagrangian Point 1 (L1), approximately 1.5 million km from Earth, to study solar flares, coronal mass ejections (CMEs), and solar wind dynamics.',
                'Gaganyaan Mission: Aims to demonstrate indigenous human spaceflight capability by launching a 3-member crew into a 400 km Low Earth Orbit for a 3-day mission and returning them safely to Indian waters. Preceded by uncrewed qualification flights featuring the humanoid robot "Vyommitra".'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: ISRO was founded in 1969 under the Department of Space, guided by the foundational vision of Dr. Vikram Sarabhai.',
            'Line 2: PSLV is a four-stage launch vehicle with alternating solid and liquid fuel stages, famously launching Chandrayaan-1 and Mangalyaan.',
            'Line 3: LVM3 (GSLV Mk-III) is India’s heaviest operational rocket with an indigenous Cryogenic Upper Stage (CE-20).',
            'Line 4: On August 23, 2023, Chandrayaan-3 achieved historic soft landing near the lunar south pole at Shiv Shakti Point.',
            'Line 5: Aditya-L1 is India’s premier space observatory operating continuously from the Sun-Earth Lagrangian Point 1.',
            'Line 6: Mission Gaganyaan aims to send Indian astronauts (Gaganyatris) to a 400 km Low Earth Orbit aboard the human-rated LVM3.',
            'Line 7: The Indian Space Policy 2023 opened the space sector to private commercial Non-Governmental Entities (NGEs).',
            'Line 8: IN-SPACe functions as the autonomous single-window nodal agency authorizing and facilitating private space ventures.',
            'Line 9: NewSpace India Limited (NSIL) is the commercial arm of ISRO commercializing launch vehicles and satellite services.',
            'Line 10: NavIC (Navigation with Indian Constellation) provides independent regional satellite positioning across India and 1,500 km beyond.'
          ],
          prelimsPointers: [
            'National Space Day: Celebrated annually on August 23 to commemorate the soft landing of Chandrayaan-3.',
            'Lagrange Point 1 Distance: Approximately 1.5 million km from Earth, where gravitational pulls of Sun and Earth balance.',
            'Cryogenic Engine Fuel: Liquid Hydrogen (-253°C) as fuel and Liquid Oxygen (-183°C) as oxidizer.',
            'Spaceport: Satish Dhawan Space Centre (SDSC) SHAR located at Sriharikota, Andhra Pradesh; second spaceport planned at Kulasekarapattinam, Tamil Nadu.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Analyze the transformative economic potential of opening the Indian space economy to private enterprise and aerospace startups.',
            'Analytical Dimension 2: Examine the geopolitical and scientific ramifications of India’s participation in the Artemis Accords for lunar exploration.',
            'Analytical Dimension 3: Discuss the technological hurdles involved in developing a domestic human spaceflight life-support system (ECLSS) for Mission Gaganyaan.'
          ],
          keyArticlesOrTerms: ['LVM3 / GSLV Mk III', 'Chandrayaan-3 (Shiv Shakti Point)', 'Aditya-L1', 'IN-SPACe & NSIL', 'NavIC Satellite System'],
          keyPYQReference: 'UPSC CSE Prelims 2023, UPSC Mains GS-3 2022, APPSC Group 1 2024.'
        },
        {
          id: 'sub-scitech-frontier-tech',
          topicId: 'scitech-space-frontier',
          subjectId: 'sci-tech-security',
          title: 'Emerging Frontier Technologies: AI, India Semiconductor Mission & Quantum Computing',
          summary: 'National Quantum Mission (NQM), India Semiconductor Mission (ISM), Generative AI ethics, and 6G telecom roadmap.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'Frontier technologies—spanning Artificial Intelligence, quantum computing, biotechnology, and advanced semiconductor fabrication—are the cornerstone of economic competitiveness and national security.',
            'India has launched dedicated missions including the India Semiconductor Mission (ISM), National Quantum Mission (NQM), and the IndiaAI Mission to achieve technological sovereignty and avoid external strategic dependencies.'
          ],
          coreNotesSections: [
            {
              heading: 'India Semiconductor Mission (ISM) & Fabrication Ecosystem',
              points: [
                'Strategic Imperative: Semiconductors are the building blocks of consumer electronics, automotive manufacturing, telecommunications, defense weapons, and renewable energy. Supply-chain disruptions during global crises highlighted excessive dependence on Taiwan, South Korea, and China.',
                'Incentive Structure: The Union Government launched the Rs. 76,000-crore incentive package under the India Semiconductor Mission, offering 50% fiscal support on a pari-passu basis for setting up Silicon Semiconductor Fabs, Display Fabs, Compound Semiconductor units, and Out-sourced Semiconductor Assembly and Test (OSAT) / ATMP facilities.',
                'Commercial Approvals: Greenlighted India’s first commercial semiconductor fabrication facility in Dholera, Gujarat (Tata Electronics in partnership with Taiwan’s Powerchip PSMC), alongside packaging units in Sanand (Micron) and Morigaon, Assam.'
              ]
            },
            {
              heading: 'National Quantum Mission (NQM) & IndiaAI Framework',
              points: [
                'National Quantum Mission: Approved with an outlay of over Rs. 6,000 crore (2023-2031), targeting intermediate scale quantum computers with 50-1000 physical qubits across various platforms (superconducting and photonic circuits). Focus areas include Quantum Communications (satellite-based secure communications over 2000 km), Quantum Sensing, and Quantum Materials.',
                'IndiaAI Mission: Capitalized with over Rs. 10,300 crore; establishes a sovereign compute capacity of 10,000+ GPUs to democratize AI access for domestic startups, research laboratories, and academic institutions. Implements the IndiaAI Datasets Platform and safe AI governance guidelines.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Semiconductor chips are vital critical infrastructure powering automobiles, electronics, radar systems, and healthcare.',
            'Line 2: The India Semiconductor Mission (ISM) provides a Rs. 76,000 crore capital expenditure incentive package.',
            'Line 3: The Union Government offers up to 50% capital subsidy for silicon fabrication and advanced packaging plants.',
            'Line 4: India’s first commercial semiconductor fab is being constructed at Dholera, Gujarat, by Tata Electronics and PSMC.',
            'Line 5: The National Quantum Mission (NQM) spans 2023-2031 to build quantum computers with up to 1,000 qubits.',
            'Line 6: Quantum Key Distribution (QKD) provides unhackable, encryption-proof communications based on quantum mechanics.',
            'Line 7: The IndiaAI Mission provides a sovereign compute capacity of over 10,000 GPUs to accelerate indigenous AI models.',
            'Line 8: Responsible AI governance framework balances algorithmic innovation with privacy, bias mitigation, and copyright protections.',
            'Line 9: India launched the Bharat 6G Vision document to participate in global telecommunication standard-setting bodies.',
            'Line 10: The National Supercomputing Mission (NSM) has deployed indigenous supercomputers like PARAM Pravega and PARAM Ganga.'
          ],
          prelimsPointers: [
            'First Semiconductor Fab Location: Dholera Smart City, Gujarat.',
            'NQM Timeline: 2023-24 to 2030-31, implemented by Department of Science and Technology (DST).',
            'Qubit Concept: Basic unit of quantum information capable of existing in superposition (0 and 1 simultaneously) and entanglement.',
            'Param Ananta Supercomputer: Installed at IIT Gandhinagar under National Supercomputing Mission.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically examine the geopolitical significance of the US-India Initiative on Critical and Emerging Technology (iCET).',
            'Analytical Dimension 2: Assess the water, power, and high-purity chemical supply infrastructure required for semiconductor fabrication in India.',
            'Analytical Dimension 3: Evaluate the ethical dilemmas of algorithmic bias and synthetic deepfakes in Indian democratic processes.'
          ],
          keyArticlesOrTerms: ['India Semiconductor Mission', 'National Quantum Mission (NQM)', 'Qubit & Superposition', 'IndiaAI Compute (10k GPUs)', 'iCET Agreement'],
          keyPYQReference: 'UPSC CSE Prelims 2022, UPSC Mains GS-3 2023, UPPSC PCS 2023.'
        }
      ]
    },
    {
      id: 'security-disaster-mgmt',
      subjectId: 'sci-tech-security',
      title: 'Internal Security, Cyber Warfare & Disaster Management',
      description: 'CERT-In, DPDP Act 2023, Critical Information Infrastructure, Disaster Management Act 2005, and NDMA protocols.',
      subtopics: [
        {
          id: 'sub-scitech-cybersecurity-dpdp',
          topicId: 'security-disaster-mgmt',
          subjectId: 'sci-tech-security',
          title: 'Cybersecurity Architecture & Digital Personal Data Protection (DPDP) Act 2023',
          summary: 'Analysis of CERT-In directives, NCIIPC under Section 70A of IT Act, DPDP Act 2023 principles, and Data Protection Board.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'Cyberspace has emerged as the fifth domain of warfare alongside land, sea, air, and space, characterized by non-kinetic, asymmetric threats targeting critical national infrastructure, banking grids, and government databases.',
            'The Digital Personal Data Protection (DPDP) Act, 2023, provides the statutory data privacy regime operationalizing the fundamental right to privacy established in the landmark Puttaswamy judgment.'
          ],
          coreNotesSections: [
            {
              heading: 'National Cybersecurity Governance Architecture',
              points: [
                'Computer Emergency Response Team (CERT-In): Established under Section 70B of the Information Technology Act, 2000. Functions as the national nodal agency for collecting, analyzing, and disseminating information on cyber incidents, issuing early warnings, and coordinating response activities. 2022 CERT-In guidelines mandate reporting of specified cyber incidents within 6 hours.',
                'National Critical Information Infrastructure Protection Centre (NCIIPC): Designated under Section 70A of the IT Act to protect Critical Information Infrastructure (CII)—defined as computer resources whose incapacitation would have debilitating impacts on national security, economy, public health, or safety (e.g., Power grids, Nuclear, Telecom, Banking).',
                'National Cyber Security Policy: Establishes defensive shields against malware, ransomware, distributed denial-of-service (DDoS) attacks, and state-sponsored Advanced Persistent Threats (APTs).'
              ]
            },
            {
              heading: 'Digital Personal Data Protection (DPDP) Act, 2023',
              points: [
                'Key Stakeholders: Data Principal (individual whose data is collected), Data Fiduciary (entity determining purpose and means of processing personal data), and Significant Data Fiduciaries (SDFs, subject to higher compliance including appointing a Data Protection Officer and independent data audits).',
                'Consent Architecture: Personal data can only be processed for a lawful purpose with free, specific, informed, unconditional, and unambiguous consent, with notice provided in English and 22 languages of the Eighth Schedule. "Legitimate Uses" clause permits processing without consent for state welfare subsidies and national security.',
                'Data Protection Board of India (DPBI): Adjudicatory mechanism appointed by the Central Government to probe breaches, issue directions, and impose administrative financial penalties (up to Rs. 250 crore for significant failure in taking reasonable security safeguards to prevent data breaches).',
                'Cross-Border Data Transfers: Permits transfer of personal data outside India, except to countries placed on a negative restricted list notified by the Central Government.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Cyberspace represents an asymmetric warfare domain threatening national security, financial networks, and critical utilities.',
            'Line 2: CERT-In operates under Section 70B of the Information Technology Act 2000 as the national cyber incident response agency.',
            'Line 3: Organizations must mandatorily report critical cyber security incidents to CERT-In within 6 hours of discovery.',
            'Line 4: NCIIPC protects Critical Information Infrastructure (CII) in power, defense, banking, transport, and communication sectors.',
            'Line 5: The Digital Personal Data Protection (DPDP) Act 2023 gives statutory effect to the Right to Privacy (Article 21).',
            'Line 6: The DPDP Act categorizes entities into Data Principals (citizens) and Data Fiduciaries (processing platforms).',
            'Line 7: Significant Data Fiduciaries (SDFs) are obligated to appoint a resident Data Protection Officer and conduct data audits.',
            'Line 8: The Data Protection Board of India (DPBI) functions as an independent digital adjudicatory authority for data violations.',
            'Line 9: Penalties under the DPDP Act can reach up to Rs. 250 crore for failure to prevent major personal data breaches.',
            'Line 10: Cross-border transfer of data is permitted to all countries except those explicitly blacklisted by the Union Government.'
          ],
          prelimsPointers: [
            'Mandatory Cyber Incident Reporting Timeframe: Within 6 hours to CERT-In.',
            'NCIIPC Nodal Parent: Operates under the National Technical Research Organisation (NTRO).',
            'Maximum Penalty under DPDP Act: Up to Rs. 250 crore per instance for failing to prevent data breaches.',
            'Right to be Forgotten: Addressed through the Data Principal’s right to correction and erasure of personal data under DPDP.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically examine the wide-ranging exemptions granted to state security agencies under Section 17 of the DPDP Act 2023.',
            'Analytical Dimension 2: Assess India’s preparedness against Advanced Persistent Threats (APTs) targeting civil nuclear power plants and power grid transmission systems.',
            'Analytical Dimension 3: Discuss the challenges in balancing national digital sovereignty with cross-border data flows in international trade.'
          ],
          keyArticlesOrTerms: ['CERT-In (6-hour rule)', 'NCIIPC & Critical Information Infrastructure', 'DPDP Act 2023', 'Data Fiduciary & Data Principal', 'Data Protection Board of India'],
          keyPYQReference: 'UPSC CSE Prelims 2022 (DPDP and CERT-In), UPSC Mains GS-3 2023, APPSC Group 1 2024.'
        },
        {
          id: 'sub-scitech-disaster-mgmt',
          topicId: 'security-disaster-mgmt',
          subjectId: 'sci-tech-security',
          title: 'Disaster Management: DM Act 2005, NDMA Guidelines & Sendai Framework',
          summary: 'Institutional framework under DM Act 2005 (NDMA, SDMA, DDMA), NDRF, Sendai Framework priorities, and urban flood management.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'Disaster management in India has undergone a structural paradigm shift from post-disaster relief and rehabilitation to proactive, multi-hazard risk reduction, mitigation, and institutional preparedness.',
            'The Disaster Management Act, 2005, establishes a three-tiered institutional architecture aligned with the international priorities of the Sendai Framework for Disaster Risk Reduction (2015-2030).'
          ],
          coreNotesSections: [
            {
              heading: 'Statutory Architecture: Disaster Management Act, 2005',
              points: [
                'National Level (NDMA): National Disaster Management Authority is chaired by the Prime Minister; responsible for laying down policies, plans, and guidelines for disaster management. The National Executive Committee (NEC) headed by the Union Home Secretary coordinates implementation.',
                'State Level (SDMA): State Disaster Management Authority is chaired by the Chief Minister.',
                'District Level (DDMA): District Disaster Management Authority is co-chaired by the District Magistrate/Collector and the elected Chairperson of the Zilla Parishad. Serves as the actual frontline operational executive agency.',
                'National Disaster Response Force (NDRF): Specialized, multi-skilled humanitarian response force constituted under Section 44 of the Act, deployed for specialized response during biological, chemical, radiological, or natural disasters.',
                'Disaster Mitigation Funds: ND Act establishes National Disaster Response Fund (NDRF) and National Disaster Mitigation Fund (NDMF), mirrored at State (SDRF/SDMF) and District levels.'
              ]
            },
            {
              heading: 'Sendai Framework & Prime Minister’s 10-Point Agenda',
              points: [
                'Sendai Framework Priorities (2015-2030): (1) Understanding disaster risk; (2) Strengthening disaster risk governance to manage disaster risk; (3) Investing in disaster risk reduction for resilience; (4) Enhancing disaster preparedness for effective response and to "Build Back Better" in recovery, rehabilitation, and reconstruction.',
                'Prime Minister’s 10-Point Agenda: Emphasizes incorporating disaster risk management into all development sectors, building community leadership, women’s active involvement, global disaster response cooperation, and leveraging mobile technologies for early warning.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The Disaster Management Act, 2005, established the statutory structure for disaster governance across India.',
            'Line 2: The National Disaster Management Authority (NDMA) is headed ex-officio by the Prime Minister of India.',
            'Line 3: State Disaster Management Authorities (SDMAs) are headed ex-officio by the respective Chief Ministers.',
            'Line 4: At the district level, the DDMA is co-chaired by the District Collector and the Chairperson of the Zilla Parishad.',
            'Line 5: The National Disaster Response Force (NDRF) provides frontline disaster search, rescue, and evacuation capability.',
            'Line 6: Disaster management has evolved from reactive relief to proactive mitigation, early warning, and risk resilience.',
            'Line 7: The Sendai Framework (2015-2030) sets out 4 priority areas and 7 global targets for disaster risk reduction.',
            'Line 8: "Build Back Better" is a cardinal principle of the Sendai Framework during post-disaster recovery and reconstruction.',
            'Line 9: Urban flooding is exacerbated by encroachment on natural wetlands, stormwater drain clogging, and impervious paving.',
            'Line 10: India spearheaded the Coalition for Disaster Resilient Infrastructure (CDRI) at the 2019 UN Climate Action Summit.'
          ],
          prelimsPointers: [
            'Disaster Definition under DM Act: Catastrophe, mishap, calamity or grave occurrence in any area arising from natural or man-made causes.',
            'DDMA Composition: Co-chaired by District Collector and Zilla Parishad President, with CMO and SP as members.',
            'Sendai Predecessors: Yokohama Strategy (1994) and Hyogo Framework for Action (2005-2015).',
            'Early Warning Portals: Indian Tsunami Early Warning Centre (ITEWC) based at INCOIS, Hyderabad.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Analyze the recurring phenomenon of urban flash flooding in major Indian metropolises and evaluate municipal drainage preparedness.',
            'Analytical Dimension 2: Assess the efficacy of the District Disaster Management Authority (DDMA) as the frontline execution unit during severe cyclonic emergencies.',
            'Analytical Dimension 3: Examine the contribution of the Coalition for Disaster Resilient Infrastructure (CDRI) to global disaster mitigation.'
          ],
          keyArticlesOrTerms: ['DM Act 2005', 'NDMA & DDMA', 'NDRF & SDRF', 'Sendai Framework (Build Back Better)', 'CDRI Initiative'],
          keyPYQReference: 'UPSC CSE Prelims 2021, UPSC Mains GS-3 2023, APPSC Group 1 2022.'
        }
      ]
    }
  ]
};
