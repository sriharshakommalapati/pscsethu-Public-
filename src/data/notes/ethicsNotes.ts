import { Subject } from '../../types';

export const ETHICS_SUBJECT: Subject = {
  id: 'ethics-aptitude',
  name: 'Ethics, Integrity & Administrative Aptitude',
  iconName: 'ShieldCheck',
  description: 'Public service values, Nolan Committee principles, RTI Act, Citizen’s Charters, Emotional Intelligence, and ethical dilemma resolution.',
  topics: [
    {
      id: 'ethics-public-admin',
      subjectId: 'ethics-aptitude',
      title: 'Ethics in Public Administration, Civil Service Values & Probity',
      description: 'Nolan principles, constitutional morality, conflict of interest, code of conduct, and citizen-centric governance.',
      subtopics: [
        {
          id: 'sub-ethics-foundational-values',
          topicId: 'ethics-public-admin',
          subjectId: 'ethics-aptitude',
          title: 'Foundational Values for Civil Services: Nolan Principles, Integrity, Impartiality & Empathy',
          summary: 'Detailed ethics framework: 7 Nolan principles, 2nd ARC recommendations, commitment to public duty, and compassion for weaker sections.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'Civil services in a democratic welfare republic operate as trustees of sovereign public authority and custodians of public resources, requiring an unwavering commitment to ethical rectitude beyond bare legal compliance.',
            'The Second Administrative Reforms Commission (2nd ARC) in its 4th Report ("Ethics in Governance") emphasized foundational civil service values: integrity, impartiality, non-partisanship, objectivity, dedication to public service, empathy, tolerance, and compassion towards weaker sections.'
          ],
          coreNotesSections: [
            {
              heading: 'The Seven Principles of Public Life (Nolan Committee 1995)',
              points: [
                'Selflessness: Holders of public office should act solely in terms of the public interest. They should not do so in order to gain financial or other material benefits for themselves, their family, or their friends.',
                'Integrity: Public officials should avoid placing themselves under any obligation to people or organizations that might try inappropriately to influence them in their work. They must declare and resolve any interests and relationships.',
                'Objectivity: Holders of public office must act and take decisions impartially, fairly, and on merit, using the best evidence and without discrimination or bias in public appointments, awarding contracts, or recommending rewards.',
                'Accountability: Public office holders are accountable to the public for their decisions and actions and must submit themselves to whatever scrutiny is appropriate to their office.',
                'Openness: Public officials should act and take decisions in an open and transparent manner. Information should not be withheld from the public unless there are clear and lawful reasons for so doing.',
                'Honesty: Holders of public office should be truthful in their public duties.',
                'Leadership: Holders of public office should exhibit these principles in their own behavior and treat others with respect. They should actively promote and robustly support the principles and challenge poor behavior.'
              ]
            },
            {
              heading: 'Civil Service Values & Conflict of Interest Mitigation',
              points: [
                'Constitutional Morality: Adherence to the foundational spirit of the Constitution—justice, equality, fraternity, and rule of law—rather than narrow administrative majoritarianism or political expediency.',
                'Impartiality & Political Neutrality: A civil servant must discharge official responsibilities without political prejudice, implementing the legitimate policies of whatever democratically elected government is in power with professional excellence.',
                'Conflict of Interest (Actual, Potential, Perceived): Arises when private interests clash with public duties. Mitigation strategies include recusal from decision-making boards, complete asset declarations, blind trusts, cooling-off periods post-retirement, and stringent gifts acceptance codes under Central Civil Services (Conduct) Rules 1964.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Civil service values provide the moral compass for civil servants exercising discretionary administrative power.',
            'Line 2: The Nolan Committee (1995) formulated the Seven Principles of Public Life applicable to all public servants.',
            'Line 3: Selflessness mandates that public office holders must act strictly in the public interest, eschewing private enrichment.',
            'Line 4: Integrity requires public officials to avoid financial or personal obligations that could compromise their independence.',
            'Line 5: Objectivity ensures decisions regarding appointments, contracts, and benefits are made on merit and evidence.',
            'Line 6: The Second Administrative Reforms Commission (2nd ARC) formulated the core ethical framework for Indian civil services.',
            'Line 7: Non-partisanship and political neutrality ensure loyalty to the Constitution and execution of lawful ministerial mandates.',
            'Line 8: Empathy and compassion towards weaker sections convert bureaucratic procedures into humane welfare delivery.',
            'Line 9: Conflict of interest must be resolved through prompt disclosure, recusal, and adherence to Civil Services Conduct Rules.',
            'Line 10: Constitutional morality serves as the supreme ethical standard over social prejudices and administrative convenience.'
          ],
          prelimsPointers: [
            'Nolan Committee Year: 1995 (UK Committee on Standards in Public Life chaired by Lord Nolan).',
            '2nd ARC 4th Report Title: "Ethics in Governance" chaired by M. Veerappa Moily.',
            'Central Civil Services (Conduct) Rules: Formulated in 1964 based on the Santhanam Committee recommendations.',
            'Whistleblower Protection Act: Enacted in 2014 to safeguard public interest disclosures.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Distinguish between "rule-bound compliance" and "value-based ethical governance" in public administration.',
            'Analytical Dimension 2: Analyze the ethical challenges posed by the revolving door phenomenon and corporate lobbying for retired senior bureaucrats.',
            'Analytical Dimension 3: Discuss the role of moral courage in whistleblowing against systemic corruption in government procurement.'
          ],
          keyArticlesOrTerms: ['Nolan Committee Principles', '2nd ARC Ethics in Governance', 'Political Neutrality', 'Conflict of Interest & Recusal', 'Constitutional Morality'],
          keyPYQReference: 'UPSC Mains GS-4 (2018, 2021, 2023), APPSC Group 1 Mains Paper 3.'
        },
        {
          id: 'sub-ethics-probity-rti',
          topicId: 'ethics-public-admin',
          subjectId: 'ethics-aptitude',
          title: 'Probity in Governance: Citizen’s Charters, RTI Act 2005 & Whistleblower Protections',
          summary: 'Transparency mechanisms, social audit methodologies, Prevention of Corruption Act (amended 2018), and Lokpal architecture.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'Probity in governance signifies absolute integrity, uprightness, and honesty in the discharge of public responsibilities, serving as an indispensable prerequisite for public trust and effective socio-economic development.',
            'Statutory mechanisms including the Right to Information (RTI) Act, 2005, the Lokpal and Lokayuktas Act, 2013, and administrative tools like Citizen’s Charters empower citizens as active accountability agents.'
          ],
          coreNotesSections: [
            {
              heading: 'Right to Information (RTI) Act, 2005 & Transparency Jurisprudence',
              points: [
                'Constitutional Foundation: Grounded in Article 19(1)(a) (Freedom of Speech and Expression), as affirmed in State of UP v. Raj Narain (1975), wherein the Supreme Court ruled that the people of this country have a right to know every public act.',
                'Statutory Timelines: Section 7 mandates information must be furnished within 30 days of receipt of application; reduced to 48 hours where the information sought concerns the life or liberty of a person.',
                'Exemptions (Section 8): Protects information affecting national sovereignty, state security, strategic economic interests, commercial confidence, cabinet papers before decision, and personal privacy lacking public interest.',
                'RTI Amendment Act 2019: Substituted fixed statutory tenures and salaries of Central Information Commissioners (CIC) with terms and pay determined by the Central Government, prompting debates on institutional autonomy.'
              ]
            },
            {
              heading: 'Citizen’s Charters, Social Audits & Lokpal Architecture',
              points: [
                'Citizen’s Charter Concept: Originating in the UK (1991), represents a systematic effort to focus on customer-centric service delivery, specifying service standards, time limits, grievance redressal mechanisms, and user expectations. 2nd ARC recommended making Citizen’s Charters enforceable with compensation mechanisms for service delivery delays.',
                'Social Audit: Democratic process through which the community scrutinizes official records and financial accounts of public works against ground reality (institutionalized under Section 17 of MGNREGA 2005).',
                'Lokpal and Lokayuktas Act, 2013: Statutory anti-corruption ombudsman with jurisdiction over Prime Minister (subject to specific national security safeguards), Union Ministers, MPs, and Groups A, B, C, D central government officers.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Probity in governance is the presence of procedural integrity, transparency, and incorruptibility in public administration.',
            'Line 2: The RTI Act 2005 operationalized the constitutional right to know flowing from Article 19(1)(a).',
            'Line 3: Section 4(1)(b) of RTI mandates proactive suo motu disclosure of government records to minimize formal requests.',
            'Line 4: Information affecting life and liberty must be supplied within an expedited 48-hour statutory window.',
            'Line 5: Section 8 of the RTI Act defines specific national security, judicial, and commercial exemptions from disclosure.',
            'Line 6: Citizen’s Charters articulate public commitments regarding service quality, timelines, and grievance redress procedures.',
            'Line 7: Social Audits empower beneficiary communities to audit project expenditures, famously pioneered under MGNREGA.',
            'Line 8: The Lokpal and Lokayuktas Act 2013 established an apex ombudsman to investigate allegations of high-level corruption.',
            'Line 9: The Prevention of Corruption Amendment Act 2018 criminalized bribe-giving while providing safeguards for bona fide public decisions.',
            'Line 10: Whistleblower protection mechanisms safeguard honest citizens and public employees reporting malfeasance.'
          ],
          prelimsPointers: [
            'RTI Enactment Date: October 12, 2005.',
            'Life and Liberty Response Time: 48 hours under Section 7(1) of RTI Act.',
            'First State to institutionalize Social Audits by statute: Meghalaya (Meghalaya Community Participation and Public Services Social Audit Act 2017).',
            'Lokpal Chairperson Qualifications: Former Chief Justice of India, former Supreme Court Judge, or an eminent jurist.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically evaluate the impact of the RTI Amendment Act 2019 on the institutional independence of Information Commissions.',
            'Analytical Dimension 2: Assess why Citizen’s Charters in India frequently remain symbolic documents without improving ground-level service delivery.',
            'Analytical Dimension 3: Examine the legal and operational hurdles in enforcing the Whistleblowers Protection Act in administrative hierarchies.'
          ],
          keyArticlesOrTerms: ['RTI Act 2005 (Section 4 & 7)', 'Article 19(1)(a)', 'Citizen’s Charter', 'Social Audit (MGNREGA)', 'Lokpal & Lokayuktas Act 2013'],
          keyPYQReference: 'UPSC Mains GS-4 (2019, 2022), APPSC Group 1 Mains 2023, UPPSC PCS 2022.'
        }
      ]
    },
    {
      id: 'ethics-moral-reasoning',
      subjectId: 'ethics-aptitude',
      title: 'Emotional Intelligence, Moral Philosophers & Case Studies',
      description: 'Goleman model of EI, crisis management, moral reasoning of Indian and Western thinkers, and administrative dilemmas.',
      subtopics: [
        {
          id: 'sub-ethics-emotional-intelligence',
          topicId: 'ethics-moral-reasoning',
          subjectId: 'ethics-aptitude',
          title: 'Emotional Intelligence: Conceptual Matrix, Administrative Utilities & Crisis Resolution',
          summary: 'Daniel Goleman’s 5 components of EI, managing administrative stress, empathy in law enforcement, and riot de-escalation.',
          readingTimeMinutes: 7,
          conceptualFramework: [
            'Emotional Intelligence (EI) is the capability of recognizing, understanding, and managing our own emotions while perceptively deciphering and influencing the emotional dynamics of others.',
            'In administrative leadership, EI equips civil servants to navigate high-stress crises, maintain composure during communal riots or natural disasters, overcome bureaucratic apathy, and lead collaborative public sector teams with empathy.'
          ],
          coreNotesSections: [
            {
              heading: 'Daniel Goleman’s Five Dimensions of Emotional Intelligence',
              points: [
                'Self-Awareness: The ability to accurately recognize and understand personal moods, emotions, triggers, and their direct effects on others. Essential for avoiding knee-jerk administrative reactions.',
                'Self-Regulation: The capacity to control or redirect disruptive impulses, emotional outbursts, and moods, suspending judgment and maintaining equanimity under political or public duress.',
                'Internal Motivation: A passion to work for reasons that go beyond money or status—pursuing goals with energy, resilience, and optimism even in the face of bureaucratic inertia.',
                'Empathy: The ability to understand the emotional makeup of other people and treating people according to their emotional reactions. Vital for responsive public grievance handling.',
                'Social Skills: Proficiency in managing relationships and building networks, finding common ground, and inspiring cooperative behavior during cross-departmental operations.'
              ]
            },
            {
              heading: 'Administrative Applications & Crisis Leadership',
              points: [
                'Public Order & De-escalation: During violent protests or communal tensions, emotionally intelligent district administrators avoid provocative displays of force, deploying active listening and neutral community dialogues to diffuse volatile crowds.',
                'Workplace Stress & Team Resilience: Managing grueling work schedules, disaster relief operations, and public scrutiny without succumbing to burnout or emotional exhaustion.',
                'Empathetic Policy Implementation: Sensitizing frontline staff during land acquisition, slum resettlement, or disaster evacuation, ensuring human dignity is preserved alongside administrative efficiency.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Emotional Intelligence (EI) is the capacity to identify, evaluate, and regulate emotions in oneself and in others.',
            'Line 2: Daniel Goleman popularized EI, categorizing it into five competencies: self-awareness, self-regulation, motivation, empathy, and social skills.',
            'Line 3: Self-awareness allows a public administrator to understand personal emotional triggers and cognitive biases.',
            'Line 4: Self-regulation prevents impulsive reactions during stressful administrative crises or political interference.',
            'Line 5: Empathy enables administrators to appreciate the lived realities of disadvantaged and marginalized citizens.',
            'Line 6: Social skills empower civil servants to build coalitions, mediate conflicts, and motivate administrative teams.',
            'Line 7: In crowd control, high EI assists police leadership in de-escalating tensions without excessive use of force.',
            'Line 8: In disaster management, EI enables empathetic relief distribution while preserving operational objectivity.',
            'Line 9: Cognitive intelligence (IQ) gets a person recruited, but emotional intelligence (EI) determines ethical administrative leadership.',
            'Line 10: Cultivating EI reduces bureaucratic cynicism, enhances public trust, and promotes collaborative governance.'
          ],
          prelimsPointers: [
            'Pioneer of EI Concept: Peter Salovey and John Mayer (1990); popularized globally by Daniel Goleman in 1995.',
            'Amygdala Hijack: Emotional response that is immediate, overwhelming, and out of measure with actual stimulus.',
            'Aristotle’s Ethical Maxim: "Anyone can become angry—that is easy; but to be angry with the right person, to the right degree, at the right time, for the right purpose, and in the right way—that is not within everybody’s power and is not easy."'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Illustrate with real-world administrative scenarios how Emotional Intelligence can resolve intense communal conflicts in a sensitive district.',
            'Analytical Dimension 2: Discuss how training in emotional competencies can mitigate the prevalent culture of bureaucratic apathy in public hospitals and welfare offices.',
            'Analytical Dimension 3: Contrast the relative importance of Technical Competence (IQ) versus Emotional Resilience (EQ) in senior civil service leadership.'
          ],
          keyArticlesOrTerms: ['Emotional Intelligence (EI)', 'Daniel Goleman’s 5 Competencies', 'Empathy in Administration', 'Crisis De-escalation', 'Amygdala Hijack'],
          keyPYQReference: 'UPSC Mains GS-4 (2017, 2020, 2022), APPSC Group 1 Mains 2023.'
        }
      ]
    }
  ]
};
