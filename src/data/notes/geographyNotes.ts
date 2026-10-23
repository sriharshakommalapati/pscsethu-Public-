import { Subject } from '../../types';

export const GEOGRAPHY_SUBJECT: Subject = {
  id: 'geography',
  name: 'Geography, Environment, Climate & Ecology',
  iconName: 'Globe2',
  description: 'Physical geography of India, monsoon climatology, river drainage basins, biodiversity conservation laws, and international climate agreements.',
  topics: [
    {
      id: 'geo-monsoon-drainage',
      subjectId: 'geography',
      title: 'Physical Geography, Monsoon Dynamics & Drainage Systems',
      description: 'Thermal and dynamic monsoon theories, jet streams, El Niño/La Niña, Himalayan and Peninsular river basins.',
      subtopics: [
        {
          id: 'sub-geo-monsoon-mechanism',
          topicId: 'geo-monsoon-drainage',
          subjectId: 'geography',
          title: 'Indian Monsoon Mechanism: Thermal Engine, Jet Streams, ENSO & IOD Dynamics',
          summary: 'Detailed climatology of Southwest and Northeast monsoons, Somalian Jet, Walker Circulation, and Indian Ocean Dipole.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'The Indian monsoon is one of the most dynamic atmospheric phenomena in global climatology, functioning as an integrated thermal-dynamic system driven by land-sea differential heating, the orographic barrier of the Himalayas, and upper-tropospheric jet streams.',
            'Teleconnections involving El Niño-Southern Oscillation (ENSO), the Indian Ocean Dipole (IOD), and the Madden-Julian Oscillation (MJO) exert profound influence over inter-annual rainfall variability across the Indian subcontinent.'
          ],
          coreNotesSections: [
            {
              heading: 'Thermodynamic & Dynamic Drivers',
              points: [
                'Differential Heating: During summer, the intense heating of the vast Indian subcontinent creates a deep thermal low-pressure trough (Monsoon Trough) over Northwest India, contrasting with the high-pressure cell over the southern Indian Ocean (Mascarene High).',
                'Tibetan Plateau as Elevated Heat Source: Acting as a thermal pump, the Tibetan Plateau heats up 2-3°C higher than surrounding atmospheres, producing strong convective updrafts that diverge aloft and descend over the western Indian Ocean, intensifying the south-westerly surface winds.',
                'Shift of Inter-Tropical Convergence Zone (ITCZ): The ITCZ migrates northward to around 20°-25°N in July, commonly referred to as the Monsoon Trough. Southeast trade winds cross the equator, get deflected to the right by the Coriolis force, and enter the subcontinent as the Southwest Monsoon.',
                'Subtropical Westerly & Tropical Easterly Jet Streams: The sudden withdrawal of the Subtropical Westerly Jet Stream from the south of the Himalayas to north of the Tibetan Plateau marks the "Burst of the Monsoon". Simultaneously, the Tropical Easterly Jet Stream (TEJ) establishes over peninsular India at 14°N, driving the Somali Low-Level Jet (Findlater Jet).'
              ]
            },
            {
              heading: 'Oceanic Teleconnections: ENSO & Indian Ocean Dipole (IOD)',
              points: [
                'El Niño & Walker Circulation: Unusually warm sea surface temperatures (SST) in the central and eastern equatorial Pacific weaken the normal Pacific Walker Circulation, shifting ascending convection eastward. This typically induces atmospheric subsidence over India, historically correlating with deficient monsoon rainfall and droughts.',
                'La Niña: An anomaly where eastern Pacific waters cool significantly, strengthening the Walker cell and typically favoring above-average monsoon precipitation over the Indian subcontinent.',
                'Indian Ocean Dipole (IOD): The difference in SST between the western tropical Indian Ocean and the eastern Indian Ocean south of Indonesia. Positive IOD (warmer western Indian Ocean) enhances convection, aiding Indian monsoon rainfall and frequently counteracting the adverse effects of an El Niño. Negative IOD dampens monsoon activity.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The Indian Southwest Monsoon accounts for over 75% of the total annual precipitation received across the country.',
            'Line 2: Differential heating between the Indian landmass and the Indian Ocean forms the foundational thermodynamic engine.',
            'Line 3: The Tibetan Plateau functions as an elevated heat source, creating strong atmospheric divergence in the upper troposphere.',
            'Line 4: The northward migration of the Inter-Tropical Convergence Zone (ITCZ) draws equatorial maritime winds into the subcontinent.',
            'Line 5: The sudden northern shift of the Subtropical Westerly Jet Stream triggers the explosive "Burst of the Monsoon" in early June.',
            'Line 6: The Tropical Easterly Jet Stream (TEJ) over peninsular India and the Somali Jet steer monsoonal depressions.',
            'Line 7: El Niño conditions in the tropical Pacific Ocean typically suppress convective activity and induce monsoon droughts.',
            'Line 8: La Niña creates favorable atmospheric conditions, leading to enhanced rainfall and flooding across agricultural basins.',
            'Line 9: A Positive Indian Ocean Dipole (IOD) warms the western Indian Ocean, neutralizing the drought risk of El Niño.',
            'Line 10: The Retreating or Northeast Monsoon brings significant winter precipitation to Tamil Nadu and coastal Andhra Pradesh.'
          ],
          prelimsPointers: [
            'First state to receive Southwest Monsoon: Kerala (normal onset date: June 1).',
            'State receiving bulk of rainfall from Northeast Monsoon: Tamil Nadu (October to December).',
            'Findlater Jet (Somali Jet): A low-level southwesterly jet stream blowing along the coast of Somalia across the Arabian Sea.',
            'Mawsynram (Meghalaya): Wettest place on Earth, located in Khasi Hills with funnel-shaped orographic lift.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically evaluate the changing spatial and temporal patterns of the Indian monsoon in the backdrop of global warming and rising SSTs.',
            'Analytical Dimension 2: Explain the mechanism through which the Indian Ocean Dipole (IOD) modulates the teleconnection between El Niño and Indian drought frequencies.',
            'Analytical Dimension 3: Discuss the macroeconomic vulnerabilities of Indian agriculture to erratic monsoon onset and dry spell anomalies.'
          ],
          keyArticlesOrTerms: ['Monsoon Trough', 'Tibetan Plateau Thermal Pump', 'Tropical Easterly Jet (TEJ)', 'El Niño-Southern Oscillation (ENSO)', 'Positive IOD'],
          keyPYQReference: 'UPSC CSE Prelims 2021 (ENSO & IOD), UPSC Mains GS-1 2022, APPSC Group 1 2023.'
        },
        {
          id: 'sub-geo-drainage-systems',
          topicId: 'geo-monsoon-drainage',
          subjectId: 'geography',
          title: 'Drainage Systems: Himalayan vs Peninsular Rivers & Interlinking Projects',
          summary: 'Comparative hydrology of the Indus, Ganga, Brahmaputra vs Godavari, Krishna, Cauvery; National River Interlinking Project.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'India’s drainage network is bifurcated into the antecedent, perennial Himalayan river systems and the graded, peninsular river systems governed by regional tectonic tilting.',
            'The National River Linking Project (NRLP) seeks to transfer surplus floodwaters from Himalayan and peninsular basins to deficit southern and western basins through inter-basin transfers.'
          ],
          coreNotesSections: [
            {
              heading: 'Himalayan vs. Peninsular Drainage Comparison',
              points: [
                'Himalayan Rivers (Indus, Ganga, Brahmaputra): Antecedent drainage cutting deep V-shaped gorges, canyons, and waterfalls; fed by both snowmelt and rainfall, making them perennial. Carry massive silt loads, forming extensive meandering courses, oxbow lakes, and vast floodplains and deltas (e.g., Sundarbans).',
                'Peninsular Rivers (Godavari, Krishna, Cauvery, Mahanadi, Narmada, Tapi): Older, graded river systems flowing through shallow, mature valleys. Rain-fed and seasonal in character. The Western Ghats acts as the primary water divide, directing most rivers eastward into the Bay of Bengal, while Narmada and Tapi flow westward through fault-rift valleys into the Arabian Sea without forming deltas.'
              ]
            },
            {
              heading: 'Major River Basins & Tributaries',
              points: [
                'Ganga Basin: Originates as Bhagirathi from Gangotri Glacier; joins Alaknanda at Devprayag to form the Ganga. Major left-bank tributaries: Ramganga, Gomti, Ghaghara, Gandak, Kosi. Major right-bank tributaries: Yamuna (longest tributary, joining at Prayagraj), Son, Punpun.',
                'Godavari Basin (Dakshin Ganga): Largest peninsular river (1,465 km), originating at Trimbakeshwar near Nashik in Maharashtra. Major tributaries: Pravara, Manjira, Purna, Pranhita (combined flow of Penganga, Wardha, and Wainganga), Indravati, and Sabari.',
                'Krishna Basin: Originates near Mahabaleshwar in Maharashtra (1,401 km). Major tributaries: Koyna, Ghataprabha, Malaprabha, Bhima, Tungabhadra, and Musi.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Indian drainage systems are broadly categorized into the perennial Himalayan and the seasonal Peninsular systems.',
            'Line 2: Himalayan rivers are antecedent in nature, having carved dramatic gorges through rising mountain ranges.',
            'Line 3: The Ganga originates as Bhagirathi at Gaumukh and officially becomes the Ganga after converging with the Alaknanda at Devprayag.',
            'Line 4: Brahmaputra originates as the Yarlung Tsangpo in Tibet, entering Arunachal Pradesh through the Namcha Barwa gorge as Dihang.',
            'Line 5: The Godavari is the longest peninsular river, originating at Trimbakeshwar in the Western Ghats of Maharashtra.',
            'Line 6: Narmada and Tapi are the two major west-flowing peninsular rivers flowing through tectonic rift valleys.',
            'Line 7: West-flowing rivers in the Western Ghats form estuaries rather than extensive deltas due to steep coastal gradients.',
            'Line 8: The National River Linking Project (NRLP) comprises 30 links: 14 in the Himalayan component and 16 in the Peninsular component.',
            'Line 9: The Ken-Betwa Link Project is the first project implemented under the National Perspective Plan for river interlinking.',
            'Line 10: Inter-state water disputes over the Cauvery, Krishna, and Godavari are adjudicated under Article 262 and the 1956 Act.'
          ],
          prelimsPointers: [
            'Panch Prayag: Vishnuprayag (Alaknanda + Dhauliganga), Nandaprayag (Alaknanda + Nandakini), Karnaprayag (Alaknanda + Pindar), Rudraprayag (Alaknanda + Mandakini), Devprayag (Alaknanda + Bhagirathi).',
            'Largest River Island: Majuli in the Brahmaputra River, Assam.',
            'Ken-Betwa Link: Connects Ken river (Panna Tiger Reserve) to Betwa in Madhya Pradesh and Uttar Pradesh.',
            'Sorrow of Bihar: Kosi River, known for extensive course shifting and recurrent siltation floods.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Examine the ecological and rehabilitation challenges associated with large-scale river interlinking projects in India.',
            'Analytical Dimension 2: Analyze the constitutional mechanisms under Article 262 for resolving inter-state river water disputes and their procedural efficacy.',
            'Analytical Dimension 3: Discuss the geomorphological vulnerabilities of the Brahmaputra basin to recurrent flash floods and bank erosion.'
          ],
          keyArticlesOrTerms: ['Panch Prayag', 'Dakshin Ganga (Godavari)', 'Ken-Betwa Link', 'Article 262', 'Rift Valley (Narmada)'],
          keyPYQReference: 'UPSC CSE Prelims 2021, UPSC Mains GS-1 2020, TGSPC Group 1 2024.'
        }
      ]
    },
    {
      id: 'geo-ecology-climate',
      subjectId: 'geography',
      title: 'Environment, Biodiversity Conservation & Climate Policy',
      description: 'Wildlife Protection Act, Biosphere Reserves, Ramsar Wetlands, UNFCCC COPs, and India’s Net-Zero 2070 roadmap.',
      subtopics: [
        {
          id: 'sub-geo-wildlife-conservation',
          topicId: 'geo-ecology-climate',
          subjectId: 'geography',
          title: 'Wildlife Protection Act 1972 & Biodiversity Governance Architecture',
          summary: 'Analysis of WPA 1972 (amended 2022), CITES compliance, Project Tiger (NTCA), and Biodiversity Act 2002.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'India’s conservation legal architecture balances statutory habitat protection under the Wildlife (Protection) Act, 1972, with community forest rights under FRA 2006 and biological resource access under the Biological Diversity Act, 2002.',
            'The 2022 amendment to the WPA rationalized wildlife protection schedules and aligned domestic enforcement with the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES).'
          ],
          coreNotesSections: [
            {
              heading: 'Wildlife (Protection) Act, 1972 & Amendment Act, 2022',
              points: [
                'Original Architecture: Established 6 schedules of wildlife with varying penalties; prohibited hunting of wild animals; enabled declaration of National Parks, Wildlife Sanctuaries, Community Reserves, and Conservation Reserves.',
                '2022 Amendment Overhaul: Reduced the number of schedules from 6 to 4: Schedule I (highest protection for animal species), Schedule II (animal species with lesser protection), Schedule III (protected plant species), and Schedule IV (specimens listed in CITES appendices). Removed the separate vermin schedule (empowers Central Government to declare animals as vermin by notification).',
                'Protected Area Hierarchy: National Parks enjoy highest statutory protection (no human habitation or private grazing permitted); Wildlife Sanctuaries allow limited traditional rights until officially settled; Conservation & Community Reserves act as buffer corridors on public and community lands.'
              ]
            },
            {
              heading: 'Project Tiger, NTCA & Mega-Fauna Missions',
              points: [
                'Project Tiger (1973): Centrally Sponsored Scheme launched at Corbett National Park; institutionalized under statutory oversight by the National Tiger Conservation Authority (NTCA) through the 2006 amendment to WPA.',
                'Tiger Reserves: Comprise a core or critical tiger habitat (inviolate area notified under Section 38V) and a buffer or peripheral area managed for coexistence.',
                'Project Elephant (1992): Initiated for habitat and migratory corridor protection; MIKE (Monitoring the Illegal Killing of Elephants) program operates across recognized Elephant Reserves.',
                'Biological Diversity Act, 2002: Three-tier mechanism comprising the National Biodiversity Authority (NBA, Chennai), State Biodiversity Boards (SBBs), and local Biodiversity Management Committees (BMCs) maintaining People’s Biodiversity Registers (PBRs).'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The Wildlife (Protection) Act, 1972, provides the primary statutory framework for wildlife conservation and habitat protection in India.',
            'Line 2: The Wildlife (Protection) Amendment Act 2022 streamlined the regulatory framework into 4 schedules, eliminating the vermin schedule.',
            'Line 3: Schedule I confers the highest degree of statutory protection, imposing severe criminal penalties for poaching or illicit trade.',
            'Line 4: National Parks maintain strictly inviolate boundaries where grazing and resource extraction are legally prohibited.',
            'Line 5: Wildlife Sanctuaries permit limited traditional community activities subject to Chief Wildlife Warden permissions.',
            'Line 6: Project Tiger was launched in 1973; the National Tiger Conservation Authority (NTCA) was granted statutory status in 2006.',
            'Line 7: India currently houses over 75% of the world’s wild tiger population across more than 54 notified Tiger Reserves.',
            'Line 8: The Biological Diversity Act 2002 implements the 1992 Convention on Biological Diversity (CBD) and the Nagoya Protocol.',
            'Line 9: People’s Biodiversity Registers (PBRs) are documented at the village level by local Biodiversity Management Committees.',
            'Line 10: India has designated over 80 Ramsar wetland sites under the 1971 Ramsar Convention on Wetlands of International Importance.'
          ],
          prelimsPointers: [
            'First National Park in India: Hailey National Park (now Jim Corbett National Park), established in 1936 in Uttarakhand.',
            'First Marine National Park: Gulf of Kutch Marine National Park, Gujarat (established 1982).',
            'Floating National Park: Keibul Lamjao National Park on Loktak Lake, Manipur (sole natural habitat of the Brow-antlered deer / Sangai).',
            'Largest Ramsar Site in India: Sundarbans Wetland in West Bengal.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically examine the institutional conflict between the Wildlife Protection Act and the Forest Rights Act (FRA) 2006 in critical wildlife habitats.',
            'Analytical Dimension 2: Assess the significance of the Wildlife Protection Amendment Act 2022 in aligning domestic trade controls with CITES obligations.',
            'Analytical Dimension 3: Evaluate the ecological and financial viability of the Cheetah Reintroduction Project in Kuno National Park, Madhya Pradesh.'
          ],
          keyArticlesOrTerms: ['WPA 1972 (Amended 2022)', 'NTCA', 'Biodiversity Act 2002', 'Ramsar Sites', 'Core vs Buffer Zone'],
          keyPYQReference: 'UPSC CSE Prelims 2022 (WPA schedules), UPSC Mains GS-3 2021, UPPSC PCS 2023.'
        },
        {
          id: 'sub-geo-climate-conventions',
          topicId: 'geo-ecology-climate',
          subjectId: 'geography',
          title: 'Global Climate Conventions: UNFCCC, Paris Agreement & India’s Panchamrit Strategy',
          summary: 'Evolution from Kyoto Protocol to Paris Agreement (Article 6), COP summits, Loss and Damage Fund, and India’s Net Zero 2070 goal.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'The international climate regime operates under the United Nations Framework Convention on Climate Change (UNFCCC), grounded in the core ethical principle of Common But Differentiated Responsibilities and Respective Capabilities (CBDR-RC).',
            'India’s climate policy harmonizes domestic developmental imperatives with bold multilateral commitments, articulated through its updated Nationally Determined Contributions (NDCs) and the fivefold "Panchamrit" targets.'
          ],
          coreNotesSections: [
            {
              heading: 'International Treaties: From Kyoto to Paris & Beyond',
              points: [
                'Kyoto Protocol (1997): Adopted top-down legally binding emission reduction targets for developed countries (Annex I) across two commitment periods (2008-2012 and Doha Amendment 2013-2020); introduced Clean Development Mechanism (CDM) and emissions trading.',
                'Paris Agreement (COP21, 2015): Replaced the top-down regime with a bottom-up structure of Nationally Determined Contributions (NDCs). Long-term temperature goal: hold global average temperature rise to well below 2°C above pre-industrial levels, pursuing efforts to limit it to 1.5°C.',
                'Article 6 of Paris Agreement: Establishes market and non-market mechanisms for international carbon trading: Article 6.2 (bilateral internationally transferred mitigation outcomes - ITMOs) and Article 6.4 (centralized multilateral carbon crediting mechanism).',
                'Loss and Damage Fund: Formally established at COP27 (Sharm el-Sheikh, 2022) and operationalized at COP28 (Dubai, 2023) to financially compensate climate-vulnerable developing nations for irrevocable environmental damage.'
              ]
            },
            {
              heading: 'India’s Climate Commitments: Panchamrit & Updated NDCs',
              points: [
                'Panchamrit Commitments (Glasgow COP26, 2021): (1) Reach 500 GW non-fossil energy capacity by 2030; (2) Meet 50% of energy requirements from renewable energy by 2030; (3) Reduce total projected carbon emissions by one billion tonnes from now until 2030; (4) Reduce the carbon intensity of the economy by 45% by 2030 from 2005 levels; (5) Achieve Net-Zero carbon emissions by the year 2070.',
                'Updated NDCs (Submitted to UNFCCC 2022): Formally codified two quantified targets: reduce emissions intensity of GDP by 45% by 2030 compared to 2005 levels, and achieve about 50% cumulative electric power installed capacity from non-fossil fuel-based energy resources by 2030.',
                'Mission LiFE (Lifestyle for Environment): Introduced by India as a global mass movement promoting mindful and deliberate utilization instead of mindless and destructive consumption.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The UNFCCC was adopted at the 1992 Rio Earth Summit, establishing CBDR-RC as its guiding equity principle.',
            'Line 2: The Kyoto Protocol (1997) enforced binding emission cuts on developed Annex-I countries across two commitment phases.',
            'Line 3: The 2015 Paris Agreement established the bottom-up system of voluntary Nationally Determined Contributions (NDCs).',
            'Line 4: The central goal of the Paris Agreement is limiting global average temperature increase to well below 2°C, striving for 1.5°C.',
            'Line 5: Article 6 of the Paris Agreement governs international carbon crediting markets and bilateral mitigation trading.',
            'Line 6: At COP28 in Dubai (2023), nations agreed on the first Global Stocktake (GST) and transitioned the Loss and Damage Fund.',
            'Line 7: India announced its target to achieve Net-Zero greenhouse gas emissions by the year 2070 at Glasgow COP26.',
            'Line 8: India’s updated NDC pledges a 45% reduction in GDP emissions intensity by 2030 compared to 2005 benchmarks.',
            'Line 9: India achieved its target of 40% non-fossil installed electric power capacity in 2021, nearly a decade ahead of schedule.',
            'Line 10: The International Solar Alliance (ISA) and Coalition for Disaster Resilient Infrastructure (CDRI) are key Indian multilateral initiatives.'
          ],
          prelimsPointers: [
            'Headquarters of International Solar Alliance (ISA): Gurugram, Haryana, India.',
            'Net Zero Target Year for India: 2070 (China: 2060, USA & EU: 2050).',
            'Mission LiFE Launch: Launched in October 2022 at Kevadia, Gujarat, by Prime Minister Narendra Modi and UN Secretary-General António Guterres.',
            'Article 6.4: Establishes a new UN-supervised carbon market mechanism replacing Kyoto’s Clean Development Mechanism (CDM).'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically evaluate the financial and technological bottlenecks in realizing India’s Net-Zero 2070 trajectory while sustaining 7%+ economic growth.',
            'Analytical Dimension 2: Discuss the contentious debates surrounding Climate Finance and the New Collective Quantified Goal (NCQG) from the Global South perspective.',
            'Analytical Dimension 3: Evaluate the impact of the European Union’s Carbon Border Adjustment Mechanism (CBAM) on India’s core industrial exports.'
          ],
          keyArticlesOrTerms: ['CBDR-RC', 'Paris Agreement 1.5°C', 'Article 6 Carbon Markets', 'India Net-Zero 2070', 'Mission LiFE'],
          keyPYQReference: 'UPSC CSE Prelims 2022 (Climate Finance), UPSC Mains GS-3 2023, APPSC Group 1 2024.'
        }
      ]
    }
  ]
};
