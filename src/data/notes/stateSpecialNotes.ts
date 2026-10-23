import { Subject } from '../../types';

export const STATE_SPECIAL_SUBJECT: Subject = {
  id: 'state-special',
  name: 'State Public Service Commissions Special Studies',
  iconName: 'Building2',
  description: 'Regional history, administrative reorganization, land reforms, regional economic models, and state-specific developmental projects across AP, TS, UP, Bihar, Maharashtra, and other State PSCs.',
  topics: [
    {
      id: 'state-appsc-studies',
      subjectId: 'state-special',
      title: 'Andhra Pradesh State Studies: Reorganisation, Polavaram & Economic Development',
      description: 'AP Reorganisation Act 2014, Polavaram Multipurpose National Project, Capital Development, and Coastal Industrial Corridors.',
      subtopics: [
        {
          id: 'sub-state-ap-reorganisation-polavaram',
          topicId: 'state-appsc-studies',
          subjectId: 'state-special',
          title: 'Andhra Pradesh Reorganisation Act 2014 & Polavaram Multipurpose National Project',
          summary: 'Detailed statutory analysis of the 2014 Act, Section 90 (Polavaram National Project), resource division, and Special Category Status debate.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'The Andhra Pradesh Reorganisation Act, 2014, enacted under Article 3 of the Constitution, bifurcated the unified state of Andhra Pradesh into the successor State of Andhra Pradesh and the newly formed State of Telangana on June 2, 2014 (Appointed Day).',
            'The Act instituted complex asset-liability apportionment mechanisms across Schedules IX and X, while Section 90 statutorily designated the Polavaram Irrigation Project as a Project of National Importance, obligating the Union Government to finance and execute it.'
          ],
          coreNotesSections: [
            {
              heading: 'Andhra Pradesh Reorganisation Act, 2014 Architecture',
              points: [
                'Constitutional Foundation: Enacted under Article 3 of the Constitution. The bill was referred to the unified AP Legislative Assembly under Article 3 proviso, which rejected it; however, presidential and parliamentary supremacy under Article 3 permitted Parliament to pass the bifurcation bill.',
                'Appointed Day: June 2, 2014. Hyderabad was designated as the common capital for both states for a period not exceeding ten years (expiring in June 2024), after which it belongs solely to Telangana.',
                'Division of Assets & Liabilities: Based predominantly on population ratio (58.32% for successor AP, 41.68% for Telangana) for public debt and physical assets based on location.',
                'Schedule IX & X Institutions: Encompasses 89 government companies/corporations under Schedule IX and 107 training/educational institutions under Schedule X, where disputes over headquarters assets continue before the Sheela Bhide Committee.'
              ]
            },
            {
              heading: 'Polavaram Multipurpose Project (Section 90)',
              points: [
                'National Project Status: Section 90 declared the Polavaram Project as a National Project; the Central Government agreed to execute and finance the remaining cost of the project from the date of bifurcation (April 1, 2014).',
                'Engineering Architecture: Located on the Godavari River near Ramayyapeta in West Godavari/Eluru district. An Earth-cum-Rock Fill (ECRF) dam designed to irrigate 7.2 lakh acres, generate 960 MW of hydroelectric power, supply 23.44 TMC of drinking water to Visakhapatnam steel plant and municipal areas, and divert 80 TMC of Godavari surplus waters to the Krishna basin via the Polavaram Right Main Canal.',
                '7 Mandals Merger: In 2014, Parliament amended the AP Reorganisation Act to transfer 7 submergence-prone mandals of Khammam district (Kukunoor, Velairpadu, Chintoor, Kunavaram, Vararamachandrapuram, Bhadrachalam rural, and Burgampahad partially) to Andhra Pradesh to ensure contiguous administrative execution of the project.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The Andhra Pradesh Reorganisation Act 2014 bifurcated the state into Andhra Pradesh and Telangana on June 2, 2014.',
            'Line 2: Hyderabad was designated as the common capital for an interim period of up to 10 years, concluding in June 2024.',
            'Line 3: Public debt and liabilities were apportioned between AP and Telangana in the population ratio of 58.32 : 41.68.',
            'Line 4: Section 90 of the Reorganisation Act statutorily declared the Polavaram Irrigation Project as a National Project.',
            'Line 5: The Union Government undertook the financial obligation for completing the Polavaram irrigation component.',
            'Line 6: In 2014, seven submergence-prone mandals from Khammam district were merged into AP for contiguous project execution.',
            'Line 7: Polavaram diverts 80 TMC of Godavari floodwaters to the Krishna River basin, stabilizing the Krishna Delta.',
            'Line 8: The Srikrishna Committee (2010) examined the socio-economic and political viability of maintaining unity versus bifurcation.',
            'Line 9: Schedule IX (89 companies) and Schedule X (107 institutions) asset division was overseen by the Sheela Bhide Committee.',
            'Line 10: Andhra Pradesh features India’s second-longest coastline (974 km), driving the Visakhapatnam-Chennai Industrial Corridor (VCIC).'
          ],
          prelimsPointers: [
            'Appointed Day of Bifurcation: June 2, 2014.',
            'AP Coastline Length: 974 km (second longest after Gujarat at 1,214 km).',
            'Population Apportionment Ratio: 58.32% (Andhra Pradesh) and 41.68% (Telangana).',
            'Srikrishna Committee Year: 2010 (headed by Justice B.N. Srikrishna).'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically evaluate the constitutional and fiscal arguments surrounding the demand for Special Category Status (SCS) for Andhra Pradesh post-bifurcation.',
            'Analytical Dimension 2: Analyze the inter-state water sharing dynamics between AP and Telangana under the Krishna and Godavari River Management Boards (KRMB & GRMB).',
            'Analytical Dimension 3: Discuss the industrial and logistics potential of the Visakhapatnam-Chennai Industrial Corridor (VCIC) for peninsular economic integration.'
          ],
          keyArticlesOrTerms: ['AP Reorganisation Act 2014', 'Section 90 (Polavaram)', 'Appointed Day (June 2, 2014)', 'Population Ratio (58.32:41.68)', 'VCIC Corridor'],
          keyPYQReference: 'APPSC Group 1 Mains Paper 4 (2020, 2023), APPSC Group 2 (2024).'
        }
      ]
    },
    {
      id: 'state-tgspc-studies',
      subjectId: 'state-special',
      title: 'Telangana State Studies: The Movement, Mulki Rules & State Architecture',
      description: 'Gentlemen’s Agreement 1956, Mulki Rules, Article 371D, 1969 Agitation, Kaleshwaram Lift Irrigation, and Mission Bhagiratha.',
      subtopics: [
        {
          id: 'sub-state-tg-movement-statehood',
          topicId: 'state-tgspc-studies',
          subjectId: 'state-special',
          title: 'Gentlemen’s Agreement 1956, Mulki Rules & Telangana State Formation',
          summary: 'The 14 safeguards agreed at Hyderabad House, Regional Committee, 1969 agitation, Article 371D, and the 2014 statehood milestone.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'The creation of Andhra Pradesh on November 1, 1956, was conditioned upon an explicit political covenant known as the "Gentlemen’s Agreement", formulated to protect the demographic, economic, and employment interests of Telangana.',
            'Systemic violations of these constitutional safeguards triggered mass agitations in 1969 and a sustained civil society struggle, culminating in the Six-Point Formula, Article 371D, and the ultimate creation of the 29th State of India in 2014.'
          ],
          coreNotesSections: [
            {
              heading: 'Historical Context & The Gentlemen’s Agreement (1956)',
              points: [
                'States Reorganisation Commission (SRC): Headed by Justice Fazal Ali with members K.M. Panikkar and H.N. Kunzru. In paragraphs 386-389 of its report, the Commission recommended creating a separate Telangana State (Hyderabad State) for an interim period of 5 years, observing that Telangana had legitimate fiscal and employment apprehensions.',
                'Signing of the Accord: Signed on February 20, 1956, at Hyderabad House, New Delhi. Four leaders represented Telangana: Burgula Ramakrishna Rao (CM of Hyderabad), K.V. Ranga Reddy, Marri Channa Reddy, and J.V. Narsing Rao. Four represented Andhra: Bezawada Gopala Reddy (CM of Andhra), Neelam Sanjiva Reddy, G. Latchanna, and Alluri Satyanarayana Raju.',
                'Key Safeguards: (1) Expenditure on Telangana administration to be borne proportionately from state revenues and budgetary surpluses reserved exclusively for Telangana development; (2) Sale of agricultural land in Telangana to be controlled by the Regional Standing Committee; (3) Continuation of Mulki rules in appointments; (4) If Chief Minister was from Andhra, Deputy CM must be from Telangana, and vice versa.'
              ]
            },
            {
              heading: 'Mulki Rules, 1969 Agitation & Six-Point Formula',
              points: [
                'Origin of Mulki Rules: Promulgated by the Nizam of Hyderabad through an imperial firman in 1919; defined a "Mulki" as a person who had resided continuously in the Hyderabad State for not less than 15 years (later adjusted to 12 years).',
                '1969 Jai Telangana Agitation: Influx of non-local appointments in state electricity and teaching sectors in violation of G.O. 36 catalyzed the 1969 student protests at Osmania University, rapidly morphing into a mass movement spearheaded by the Telangana Praja Samithi (TPS).',
                'Six-Point Formula (1973) & Article 371D: 32nd Constitutional Amendment Act (1973) enacted Article 371D, dividing the state into zones and reserving non-gazetted posts for local candidates. G.O. 610 was issued in 1985 on the Jayabharat Reddy Committee recommendations to repatriate illegal non-local appointees, leading to the Girglani Commission (2001).'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The Gentlemen’s Agreement was signed on Feb 20, 1956, at Hyderabad House, enabling the merger of Andhra and Telangana.',
            'Line 2: Four leaders from Telangana (B. Ramakrishna Rao, K.V. Ranga Reddy, M. Channa Reddy, J.V. Narsing Rao) and 4 from Andhra signed it.',
            'Line 3: The States Reorganisation Commission (SRC) headed by Fazal Ali originally recommended retaining Telangana as a separate State.',
            'Line 4: Clause 1 mandated that Telangana revenue surpluses should be calculated and reserved exclusively for Telangana development.',
            'Line 5: Clause 2 stipulated that agricultural land sales in Telangana territory should be monitored by the Regional Committee.',
            'Line 6: Mulki Rules were preserved: requiring a minimum continuous residence of 12 years in the territory for local employment.',
            'Line 7: The agreement stipulated that if the Chief Minister is from Andhra, the Deputy Chief Minister must be from Telangana.',
            'Line 8: Non-implementation of safeguards and diversion of revenues sparked the widespread 1969 Jai Telangana student agitation.',
            'Line 9: The Supreme Court in 1972 upheld the validity of Mulki Rules, leading to Andhra agitations and the Six-Point Formula (1973).',
            'Line 10: The 32nd Amendment enacted Article 371D for zonal recruitment, which led to G.O. 610 in 1985 and the Girglani Commission (2001).'
          ],
          prelimsPointers: [
            'SRC Members: Justice Fazal Ali (Chairman), Kavalam Madhava Panikkar, and Hriday Nath Kunzru.',
            'Hyderabad House Accord Date: February 20, 1956.',
            'Telangana Regional Committee Chairman: First Chairman was K. Achyutha Reddy.',
            'Girglani Commission (2001): One-man Commission appointed to probe violations in implementation of Presidential Order 1975 / G.O. 610.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Analyze how the non-implementation of the 14 clauses of the Gentlemen’s Agreement laid the sociological groundwork for the 1969 movement.',
            'Analytical Dimension 2: Examine the legal mechanics and constitutional implications of Article 371D in managing regional recruitment cadres.',
            'Analytical Dimension 3: Trace the trajectory of the Telangana statehood struggle from the Girglani Commission report to the passage of the 2014 Reorganisation Act.'
          ],
          keyArticlesOrTerms: ['Gentlemen’s Agreement 1956', 'Fazal Ali Commission (SRC)', 'Mulki Rules (12-year residence)', 'Article 371D', 'G.O. 610 (1985)'],
          keyPYQReference: 'TGSPC Group 1 Mains Paper 6 (2022, 2024), TSPSC Group 2 Paper 4.'
        }
      ]
    },
    {
      id: 'state-northern-central-studies',
      subjectId: 'state-special',
      title: 'Northern & Central States Studies (UPPSC, BPSC, MPPSC, RPSC)',
      description: 'UP History & Heritage, Land Reforms, One District One Product (ODOP), Champaran Satyagraha legacy, and Tribal Uprisings.',
      subtopics: [
        {
          id: 'sub-state-uppsc-economy-heritage',
          topicId: 'state-northern-central-studies',
          subjectId: 'state-special',
          title: 'Uttar Pradesh & Northern States: Cultural Heritage, Land Reforms & ODOP Economy',
          summary: 'UP Zamindari Abolition Act 1950, One District One Product (ODOP) model, expressway corridors, and temple architecture.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'Uttar Pradesh, as India’s most populous state, has transitioned from post-independence agrarian restructuring under the UP Zamindari Abolition Act, 1950, into an infrastructure-led economic model centered on dedicated industrial expressways and local artisan clusters.',
            'The One District One Product (ODOP) scheme has emerged as a national benchmark for promoting indigenous handicraft and agro-processing clusters.'
          ],
          coreNotesSections: [
            {
              heading: 'Agrarian Architecture & Zamindari Abolition',
              points: [
                'UP Zamindari Abolition and Land Reforms Act, 1950: Pioneering legislation that abolished intermediary feudal rent-collectors (Zamindars and Taluqdars), conferring direct occupancy rights upon cultivators. Established three classes of land tenure: Bhumidhar (full proprietary and transferable rights), Sirdar (heritable cultivating rights without right to sell), and Asami (sub-tenants).',
                'Consolidation of Holdings (Chakbandi Act 1953): Rectified fragmented, scattered peasant land parcels into compact holdings, enhancing agricultural productivity across the fertile Doab (Ganga-Yamuna) and Rohilkhand plains.'
              ]
            },
            {
              heading: 'One District One Product (ODOP) & Industrial Corridors',
              points: [
                'ODOP Model: Launched in 2018 across all 75 districts of Uttar Pradesh to revive traditional artisanal crafts, provide credit access, and establish export market linkages (e.g., Chikankari of Lucknow, Brassware of Moradabad, Carpets of Bhadohi, Leather of Kanpur, Sports Goods of Meerut, Glassware of Firozabad). Later scaled pan-India by the Ministry of Commerce & Industry.',
                'Expressway Infrastructure: Network includes Yamuna Expressway, Agra-Lucknow Expressway, Purvanchal Expressway (340.8 km connecting Lucknow to Ghazipur), Bundelkhand Expressway (296 km), and Ganga Expressway (594 km connecting Meerut to Prayagraj).',
                'UP Defence Industrial Corridor: Developing 6 nodes (Aligarh, Agra, Kanpur, Chitrakoot, Jhansi, Lucknow) to manufacture aerospace components, BrahMos missiles, and defense hardware.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The UP Zamindari Abolition and Land Reforms Act 1950 was among India’s earliest comprehensive agrarian reform statutes.',
            'Line 2: It established three tenure classes: Bhumidhar (transferable title), Sirdar (heritable title), and Asami (sub-tenancy).',
            'Line 3: The UP Consolidation of Holdings (Chakbandi) Act 1953 consolidated fragmented parcels across the Doab region.',
            'Line 4: The One District One Product (ODOP) scheme was launched in 2018 across all 75 districts of Uttar Pradesh.',
            'Line 5: ODOP revived world-renowned traditional clusters: Moradabad brassware, Bhadohi carpets, and Lucknow chikankari.',
            'Line 6: Uttar Pradesh houses over 40% of India’s total expressway network, anchored by Purvanchal and Bundelkhand Expressways.',
            'Line 7: The Ganga Expressway spans 594 km, linking Meerut in western UP to Prayagraj in eastern UP.',
            'Line 8: The UP Defence Industrial Corridor spans six nodes including Lucknow, Kanpur, Jhansi, and Chitrakoot.',
            'Line 9: Bihar’s Champaran Satyagraha (1917) and peasant struggles led by Swami Sahajanand Saraswati transformed agrarian politics.',
            'Line 10: Tribal rebellions by Birsa Munda (Ulgulan 1899) and the Santhal Hul (1855) shaped tenancy protections like the CNT Act.'
          ],
          prelimsPointers: [
            'Purvanchal Expressway Terminus: Starts at Chand Sarai (Lucknow) and terminates at Hyderia (Ghazipur).',
            'Kisan Sabha Founder: All India Kisan Sabha founded in Lucknow in 1936 by Swami Sahajanand Saraswati.',
            'Chhota Nagpur Tenancy (CNT) Act: Enacted in 1908 following the Birsa Munda Ulgulan to prohibit alienation of tribal land.',
            'Bhadohi Carpet GI Tag: Hand-knotted carpets of Mirzapur-Bhadohi hold registered Geographical Indication (GI) protection.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically examine how the expressway network and ODOP clusters are mitigating regional economic disparities between Western UP and Purvanchal.',
            'Analytical Dimension 2: Assess the socio-political consequences of the 1950 Zamindari Abolition Act on the agrarian class structure of the Gangetic plains.',
            'Analytical Dimension 3: Discuss the policy lessons of the Bihar Caste Survey (2023) for affirmative action and targeted welfare delivery.'
          ],
          keyArticlesOrTerms: ['UP Zamindari Abolition 1950', 'Bhumidhar & Sirdar', 'ODOP Scheme (75 Districts)', 'Purvanchal Expressway', 'Swami Sahajanand Saraswati'],
          keyPYQReference: 'UPPSC PCS Mains GS-5 & GS-6 (2023, 2024), BPSC 68th CCE Mains.'
        }
      ]
    },
    {
      id: 'state-western-southern-studies',
      subjectId: 'state-special',
      title: 'Western & Southern States Studies (MPSC, TNPSC, KPSC, WBPSC)',
      description: 'Maharashtra Social Reformers (Phule-Shahu-Ambedkar), Dravidian Movement, Western Ghats Ecology, and Coastal Economics.',
      subtopics: [
        {
          id: 'sub-state-western-southern-reforms',
          topicId: 'state-western-southern-studies',
          subjectId: 'state-special',
          title: 'Social Justice Legacies & Environmental Governance in Western and Southern India',
          summary: 'Chhatrapati Shahu Maharaj reservations, Periyar Self-Respect Movement, Kasturirangan vs Gadgil Western Ghats reports, and port-led growth.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'The Western and Southern peninsular states pioneered foundational social justice movements that pre-dated and shaped national affirmative action doctrines under Articles 15 and 16.',
            'Concurrently, the Western Ghats—designated as a UNESCO World Heritage Site and one of the world’s eight hottest biodiversity hotspots—requires a delicate equilibrium between ecological conservation and infrastructure development.'
          ],
          coreNotesSections: [
            {
              heading: 'Social Justice Pioneer Architecture: Shahu Maharaj, Ambedkar & Periyar',
              points: [
                'Chhatrapati Shahu Maharaj of Kolhapur (1874-1922): Royal patron of social reform who issued the historic July 26, 1902 decree reserving 50% of posts in Kolhapur State administration for backward classes, creating India’s first statutory affirmative action policy; supported Dr. B.R. Ambedkar’s seminal newspaper "Mooknayak" in 1920.',
                'Dr. B.R. Ambedkar’s Mahad Satyagraha (March 20, 1927): Asserted the civic right of untouchables to draw drinking water from the public Chawdar Tank in Mahad, Maharashtra; burnt the Manusmriti on December 25, 1927; founded the Independent Labour Party (1936) and Scheduled Castes Federation (1942).',
                'Justice Party & Self-Respect Movement in Tamil Nadu: South Indian Liberal Federation (Justice Party, 1916) secured the 1921 Communal Government Order (G.O.) providing communal representation; Periyar E.V. Ramasamy launched the Self-Respect Movement (1925) advocating atheism, eradication of caste hierarchy, self-respect marriages without Brahmin priests, and gender rights, culminating in the Dravidar Kazhagam (1944).'
              ]
            },
            {
              heading: 'Western Ghats Ecology: Gadgil vs. Kasturirangan Debate',
              points: [
                'Madhav Gadgil Commission (WGEEP 2011): Recommended designating the entire 1,500 km Western Ghats hill range (1.29 lakh sq km) across 6 states (Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu) as an Ecologically Sensitive Area (ESA), dividing it into three Ecologically Sensitive Zones (ESZ-1, ESZ-2, ESZ-3) with stringent curbs on mining, thermal power, and large dams.',
                'Kasturirangan High-Level Working Group (2013): Replaced Gadgil’s sweeping zoning; classified only 37% of the Western Ghats (approximately 59,940 sq km) as Ecologically Sensitive Area, completely banning mining, quarrying, red-category industries, and new townships while allowing sustainable human activities in the remaining 63% cultural landscape.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Chhatrapati Shahu Maharaj of Kolhapur introduced India’s first statutory 50% reservation for backward classes in 1902.',
            'Line 2: Dr. B.R. Ambedkar led the historic Mahad Satyagraha in 1927 to assert civic rights to public water bodies.',
            'Line 3: Ambedkar founded the Independent Labour Party in 1936 and led the mass conversion to Buddhism at Nagpur in 1956.',
            'Line 4: The Justice Party in Madras Presidency introduced the landmark Communal G.O. in 1921 providing affirmative representation.',
            'Line 5: Periyar E.V. Ramasamy launched the Self-Respect Movement in 1925 to eliminate caste ritualism and promote rationalism.',
            'Line 6: The Western Ghats is a UNESCO World Heritage Site and global biodiversity hotspot spanning six peninsular states.',
            'Line 7: The Madhav Gadgil Committee (2011) recommended classifying the entire Western Ghats into three Ecologically Sensitive Zones.',
            'Line 8: The Kasturirangan Committee (2013) narrowed the Ecologically Sensitive Area (ESA) to 37% of the total hill tract.',
            'Line 9: Major peninsular ports like JNPT (Nhava Sheva), Chennai, and Visakhapatnam anchor India’s Sagarmala maritime corridor.',
            'Line 10: Peninsular industrialization combines high human development indicators (Kerala, TN) with modern technology clusters (Bengaluru, Pune, Hyderabad).'
          ],
          prelimsPointers: [
            'Kolhapur Reservation Year: July 26, 1902 (celebrated as Social Justice Day in Maharashtra).',
            'Mahad Satyagraha Date: March 20, 1927 (observed as Social Empowerment Day).',
            'Western Ghats Mountain Pass: Palghat Gap (connects Palakkad in Kerala to Coimbatore in Tamil Nadu).',
            'Highest Peak in Western Ghats: Anamudi (2,695 m) located in Eravikulam National Park, Kerala.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Compare the social justice models of Maharashtra (Phule-Shahu-Ambedkar) and Tamil Nadu (Periyar-Justice Party) in shaping affirmative action doctrines.',
            'Analytical Dimension 2: Critically examine why successive state governments rejected the Madhav Gadgil Western Ghats report, and evaluate disaster vulnerabilities in light of the Wayanad landslides (2024).',
            'Analytical Dimension 3: Discuss the role of the Sagarmala Project in port-led industrialization and logistics cost reduction for peninsular manufacturing.'
          ],
          keyArticlesOrTerms: ['Shahu Maharaj 1902 Decree', 'Mahad Satyagraha 1927', 'Self-Respect Movement (Periyar)', 'Gadgil vs Kasturirangan Western Ghats', 'Sagarmala Project'],
          keyPYQReference: 'MPSC Rajyaseva Mains Paper 1 & 2 (2022), TNPSC Group 1 Mains (2023), UPSC Mains GS-3 2024.'
        }
      ]
    }
  ]
};
