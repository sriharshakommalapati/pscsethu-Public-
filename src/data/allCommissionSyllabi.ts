import { SyllabusStage } from '../types';

export const ALL_COMMISSION_SYLLABI: Record<string, SyllabusStage[]> = {
  upsc: [
    {
      stageName: 'Stage 1: Preliminary Examination (Objective - 400 Marks)',
      description: 'Screening test consisting of two objective papers with 1/3rd negative marking. GS Paper-1 determines merit cutoff; CSAT Paper-2 is qualifying with minimum 33% (66 marks).',
      papers: [
        {
          name: 'General Studies Paper-I (GS-1)',
          code: 'UPSC-GS1',
          duration: '2 Hours (9:30 AM - 11:30 AM)',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'Current events of national and international importance',
            'History of India and Indian National Movement (Ancient, Medieval, Modern & Art-Culture)',
            'Indian and World Geography - Physical, Social, Economic Geography of India and the World',
            'Indian Polity and Governance - Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues',
            'Economic and Social Development - Sustainable Development, Poverty, Inclusion, Demographics, Fiscal Architecture',
            'General issues on Environmental Ecology, Bio-diversity, Climate Change, Carbon Markets',
            'General Science - Space Technology, Biotechnology, AI, Quantum Computing, Defence'
          ],
          weightageDescription: '100 MCQs, 2 marks each, negative marking 0.66 marks per incorrect answer. Rank determines eligibility for Mains.'
        },
        {
          name: 'General Studies Paper-II (CSAT Paper-2)',
          code: 'UPSC-CSAT',
          duration: '2 Hours (2:30 PM - 4:30 PM)',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: [
            'Reading Comprehension (Passages, Inference, Assumptions, Logical corollaries)',
            'Interpersonal skills including communication skills',
            'Logical reasoning and analytical ability',
            'Decision making and problem solving',
            'General mental ability',
            'Basic numeracy (numbers and their relations, orders of magnitude, Class X level)',
            'Data interpretation (charts, graphs, tables, data sufficiency, Class X level)'
          ],
          weightageDescription: '80 Questions, 2.5 marks each. Qualifying benchmark: 33% (66 marks minimum).'
        }
      ]
    },
    {
      stageName: 'Stage 2: Mains Written Examination (Descriptive - 1750 Marks)',
      description: 'Nine descriptive essay-type papers designed to assess depth of intellect and analytical articulation. Papers A & B are qualifying language papers; Papers I to VII determine merit rank.',
      papers: [
        { name: 'Paper A: Indian Language (Eighth Schedule)', code: 'UPSC-LANG', duration: '3 Hours', totalMarks: 300, nature: 'Qualifying', topics: ['Comprehension, Precis, Usage & Vocabulary, Short Essays, Translation.'] },
        { name: 'Paper B: English Language', code: 'UPSC-ENG', duration: '3 Hours', totalMarks: 300, nature: 'Qualifying', topics: ['Comprehension, Precis, Usage & Vocabulary, Short Essay.'] },
        { name: 'Paper I: Essay', code: 'UPSC-ESSAY', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Section A & B: Philosophical, Geopolitical, Socio-Economic, Environmental Themes.'] },
        { name: 'Paper II: General Studies I (Indian Heritage, History, Geography & Society)', code: 'UPSC-M-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian culture - art forms, literature, architecture', 'Modern Indian history from mid-18th century', 'Freedom Struggle - stages and contributors', 'Post-independence consolidation and reorganization', 'History of the world - industrial revolution, world wars', 'Salient features of Indian Society, Diversity of India', 'Role of women, population, poverty, urbanization', 'Physical geography, distribution of key natural resources, cyclones, earthquakes'] },
        { name: 'Paper III: General Studies II (Governance, Constitution, Polity, Social Justice & IR)', code: 'UPSC-M-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Constitution - historical underpinnings, evolution, amendments, basic structure', 'Functions and responsibilities of the Union and the States, federal challenges', 'Separation of powers, dispute redressal mechanisms, Parliament and State legislatures', 'Structure, organization of Executive and Judiciary, RPA 1951', 'Constitutional bodies, statutory, regulatory, quasi-judicial bodies', 'Government policies and interventions for development', 'Welfare schemes for vulnerable sections, health, education, human resources', 'India and its neighborhood relations, bilateral, regional, global groupings'] },
        { name: 'Paper IV: General Studies III (Technology, Economic Development, Bio-diversity, Environment, Security & Disaster Management)', code: 'UPSC-M-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Economy - planning, mobilization of resources, growth, development, employment', 'Inclusive growth and fiscal issues, government budgeting', 'Major crops, cropping patterns, irrigation, MSP, PDS, food processing', 'Land reforms in India, effects of liberalization', 'Infrastructure - energy, ports, roads, railways', 'Science & Technology - indigenization, AI, space, bio-tech, nano-tech', 'Conservation, environmental pollution and degradation, EIA', 'Disaster management, internal security, cyber security, money laundering, border management'] },
        { name: 'Paper V: General Studies IV (Ethics, Integrity and Aptitude)', code: 'UPSC-M-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Ethics and Human Interface - essence, determinants, consequences of ethics', 'Human values - lessons from leaders, role of family and society', 'Attitude - content, structure, function, moral and political attitudes', 'Emotional Intelligence - concepts and application in governance', 'Contributions of moral thinkers and philosophers from India and world', 'Public/Civil service values and Ethics in Public administration, probity in governance', 'Citizen Charters, Right to Information, Work culture, Code of Conduct', 'Case Studies on above issues covering administrative dilemmas'] },
        { name: 'Paper VI & VII: Optional Subject Papers I & II', code: 'UPSC-OPT', duration: '3 Hours Each', totalMarks: 500, nature: 'Descriptive', topics: ['Specialized optional discipline chosen by candidate from official UPSC list.'] }
      ]
    },
    {
      stageName: 'Stage 3: Personality Test / Interview (275 Marks)',
      description: 'Comprehensive board interview evaluating administrative competence, intellectual alertness, balance of judgment, leadership integrity, and moral fortitude. Total merit calculated out of 2025 marks.',
      papers: [
        { name: 'Personality Test Board Assessment', code: 'UPSC-INTERVIEW', duration: '30-45 Minutes', totalMarks: 275, nature: 'Personality Test', topics: ['DAF (Detailed Application Form) interrogation', 'Current national and international developments', 'Situational administrative judgment & ethical crisis resolution'] }
      ]
    }
  ],

  appsc: [
    {
      stageName: 'APPSC Group-I Preliminary Screening Test (Objective - 240 Marks)',
      description: 'Two objective papers of 120 marks each with 1/3rd negative marking.',
      papers: [
        {
          name: 'Paper-I: General Studies',
          code: 'AP-PRE-1',
          duration: '120 Minutes',
          totalMarks: 120,
          nature: 'Objective (MCQ)',
          topics: [
            'History and Culture of India and Andhra Pradesh (Satavahanas, Ikshvakus, Kakatiyas, Vijayanagara)',
            'Constitution, Polity, Social Justice and International Relations',
            'Indian and Andhra Pradesh Economy and Planning (State domestic product, bifurcation challenges, agriculture)',
            'Geography of India and Andhra Pradesh (River systems: Godavari, Krishna, Penna, Eastern Ghats, VCIC corridor)'
          ]
        },
        {
          name: 'Paper-II: General Aptitude & Mental Ability',
          code: 'AP-PRE-2',
          duration: '120 Minutes',
          totalMarks: 120,
          nature: 'Objective (MCQ)',
          topics: [
            'General Mental and Psychological Abilities (Logical reasoning, analytical ability)',
            'Science & Technology: Developments in IT, Biotechnology, Space, Energy policies',
            'Current Events of Regional, State, National and International Importance'
          ]
        }
      ]
    },
    {
      stageName: 'APPSC Group-I Mains Written Examination (Descriptive - 750 Marks)',
      description: 'Five compulsory papers of 150 marks each plus qualifying English and Telugu language papers.',
      papers: [
        { name: 'General Telugu (Qualifying)', code: 'AP-TELUGU', duration: '3 Hours', totalMarks: 150, nature: 'Qualifying', topics: ['Synonyms, Proverbs, Translation, Essay writing, Formal correspondence.'] },
        { name: 'General English (Qualifying)', code: 'AP-ENGLISH', duration: '3 Hours', totalMarks: 150, nature: 'Qualifying', topics: ['Essay, Precis, Letter writing, Grammar, Reading comprehension.'] },
        { name: 'Paper-I: General Essay', code: 'AP-PAPER-1', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Contemporary social issues, Economic growth, Indian and AP culture, Governance.'] },
        { name: 'Paper-II: History, Culture and Geography of India and Andhra Pradesh', code: 'AP-PAPER-2', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Modern Indian History (1757-1947), Andhra Movement, Gentlemen’s Agreement 1956, Sri Bagh Pact, Physical Geography of AP.'] },
        { name: 'Paper-III: Polity, Constitution, Governance, Law and Ethics', code: 'AP-PAPER-3', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Indian Constitution, Centre-State relations, 73rd/74th amendments in AP, RTI, Lokayukta, Administrative ethics.'] },
        { name: 'Paper-IV: Economy and Development of India and Andhra Pradesh', code: 'AP-PAPER-4', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['National income, Fiscal policy, AP Reorganisation Act 2014 resource division, Polavaram National Project, Navaratnalu, Ports.'] },
        { name: 'Paper-V: Science, Technology and Environmental Issues', code: 'AP-PAPER-5', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Information technology, Space research, Biotechnology, Disaster management in coastal AP, Climate change.'] }
      ]
    }
  ],

  tgspc: [
    {
      stageName: 'TGSPC Group-I Preliminary Examination (Objective - 150 Marks)',
      description: 'Single comprehensive objective screening paper with 150 questions across 13 syllabus domains.',
      papers: [
        {
          name: 'General Studies and Mental Ability',
          code: 'TG-PRE-1',
          duration: '150 Minutes',
          totalMarks: 150,
          nature: 'Objective (MCQ)',
          topics: [
            'Current Affairs - Regional, National & International',
            'International Relations and Events',
            'General Science; India’s Achievements in Science and Technology',
            'Environmental Issues; Disaster Management- Prevention and Mitigation Strategies',
            'Economic and Social Development of India and Telangana',
            'Physical, Social and Economic Geography of India',
            'Physical, Social and Economic Geography and Demography of Telangana',
            'Socio-economic, Political and Cultural History of Modern India with special emphasis on Indian National Movement',
            'Special focus on Telangana History and Cultural Heritage (Kakatiyas, Qutb Shahis, Asaf Jahis)',
            'Indian Constitution and Polity',
            'Social Exclusion, Rights issues (Gender, Caste, Tribe, Disability) and Inclusive Policies',
            'Society, Culture, Heritage, Arts and Literature of Telangana (Bathukamma, Bonalu, Sammakka Sarakka Jathara)',
            'Policies of Telangana State (Rythu Bandhu, Mission Kakatiya, Mission Bhagiratha, Dalit Bandhu, T-Hub)',
            'Logical Reasoning, Analytical Ability and Data Interpretation'
          ]
        }
      ]
    },
    {
      stageName: 'TGSPC Group-I Mains Written Examination (Descriptive - 900 Marks)',
      description: 'Six descriptive papers of 150 marks each plus qualifying General English.',
      papers: [
        { name: 'General English (Qualifying)', code: 'TG-ENG-QUAL', duration: '3 Hours', totalMarks: 150, nature: 'Qualifying', topics: ['Spotting errors, Comprehension, Precis, Letter writing.'] },
        { name: 'Paper-I: General Essay', code: 'TG-PAPER-1', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Contemporary Social and Economic issues, Indian Political dynamics, Telangana Heritage.'] },
        { name: 'Paper-II: History, Culture and Geography', code: 'TG-PAPER-2', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['History and Culture of India, History and Cultural Heritage of Telangana, Geography of India and Telangana.'] },
        { name: 'Paper-III: Indian Society, Constitution and Governance', code: 'TG-PAPER-3', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Indian Society, Structure, Issues and Social Movements, Constitution of India, Governance in Telangana.'] },
        { name: 'Paper-IV: Economy and Development', code: 'TG-PAPER-4', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Indian Economy and Development, Telangana Economy, Development and Environmental problems.'] },
        { name: 'Paper-V: Science & Technology and Data Interpretation', code: 'TG-PAPER-5', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Role of S&T in India’s development, Application of Space/Bio/Nano technology, Data interpretation & problem solving.'] },
        { name: 'Paper-VI: Telangana Movement and State Formation', code: 'TG-PAPER-6', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['The Idea of Telangana (1948-1970) - Mulki Rules, Hyderabad State, 1969 Agitation', 'Mobilisational Phase (1971-1990) - Six-Point Formula, G.O. 610, Rise of Dalit & literary assertions', 'Towards Formation of Telangana State (1991-2014) - Sakala Janula Samme, Srikrishna Committee, AP Reorganisation Act 2014.'] }
      ]
    }
  ],

  uppsc: [
    {
      stageName: 'UPPSC Combined State / Upper Subordinate Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each. Paper 1 determines Prelims cutoff; Paper 2 (CSAT) is qualifying with 33%. 1/3rd negative marking.',
      papers: [
        {
          name: 'General Studies-I (Paper 1)',
          code: 'UP-GS-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['National & International events of current importance', 'History of India & Indian National Movement', 'India and World Geography', 'Indian Governance & Polity', 'Economic & Social Development', 'Environmental Ecology & Climate Change', 'General Science']
        },
        {
          name: 'General Studies-II (CSAT Paper 2)',
          code: 'UP-CSAT',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning & analytical ability', 'Decision making', 'General mental ability', 'Class X Elementary Mathematics, General English & General Hindi']
        }
      ]
    },
    {
      stageName: 'UPPSC Mains Written Examination (Descriptive - 1500 Marks)',
      description: 'Eight compulsory papers including specialized UP General Studies Papers 5 & 6.',
      papers: [
        { name: 'General Hindi', code: 'UP-HINDI', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Gadyansh, Patra Lekhan, Vilom, Muhavare, Sandhi, Shabd Roop, Shuddhi.'] },
        { name: 'Essay', code: 'UP-ESSAY', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Literature, Culture, Science, Economy, Agriculture, National/International Events.'] },
        { name: 'General Studies I', code: 'UP-M-GS1', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['History, Culture, World Geography, Society.'] },
        { name: 'General Studies II', code: 'UP-M-GS2', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Constitution, Polity, Governance, Social Justice, International Relations.'] },
        { name: 'General Studies III', code: 'UP-M-GS3', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Economy, Science & Tech, Internal Security, Disaster Management.'] },
        { name: 'General Studies IV', code: 'UP-M-GS4', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Ethics, Integrity, Aptitude and Administrative Case Studies.'] },
        { name: 'General Studies V (UP Special - History, Culture & Polity)', code: 'UP-M-GS5', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['History, Civilization & Architecture of UP; Folk Art, UP Political System, Panchayati Raj, Land Reforms, Law & Order in UP.'] },
        { name: 'General Studies VI (UP Special - Economy & Geography)', code: 'UP-M-GS6', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Overview of UP Economy, State Budget, ODOP Scheme, Expressways (Purvanchal, Bundelkhand, Ganga), Mineral Wealth, Renewable Energy in UP.'] }
      ]
    }
  ],

  bpsc: [
    {
      stageName: 'BPSC Combined Competitive Examination (CCE) Prelims (Objective - 150 Marks)',
      description: 'Single screening paper of 150 objective questions with 1/3rd negative marking penalty.',
      papers: [
        {
          name: 'General Studies (Preliminary)',
          code: 'BPSC-PRE',
          duration: '2 Hours',
          totalMarks: 150,
          nature: 'Objective (MCQ)',
          topics: [
            'General Science (Everyday observation and scientific phenomena)',
            'Current events of national, international and Bihar state importance',
            'History of India and salient features of History of Bihar (Ancient Magadha, Mauryas, Guptas, Nalanda, Buddhism, Jainism)',
            'General Geography and Geographical Division of Bihar and its major river systems (Ganga, Gandak, Kosi, Son)',
            'Indian Polity and Economy and major changes in the economy of Bihar in the post-independence period',
            'Indian National Movement and major role played by Bihar (Champaran Satyagraha 1917, 1942 Quit India, Kunwar Singh 1857)',
            'General Mental Ability and Quantitative Aptitude'
          ]
        }
      ]
    },
    {
      stageName: 'BPSC Mains Written Examination (Descriptive - 900 Marks + 100 Qualifying)',
      description: 'General Hindi is qualifying (30 marks minimum). Merit is computed from GS-1, GS-2, and the Essay Paper.',
      papers: [
        { name: 'General Hindi (Qualifying)', code: 'BPSC-HINDI', duration: '3 Hours', totalMarks: 100, nature: 'Qualifying', topics: ['Nibandh, Vyakaran, Vakya Vinyas, Sankshepan (Qualifying cutoff: 30%).'] },
        { name: 'General Studies Paper-I', code: 'BPSC-GS1', duration: '3 Hours', totalMarks: 300, nature: 'Descriptive', topics: ['Modern History of India and Indian Culture (1857 revolt, Santhal insurrection, Birsa Munda movement)', 'Role of Bihar in Freedom Struggle (Champaran Satyagraha, Quit India 1942)', 'Mauryan Art, Pal Art, Patna Qalam painting', 'Current events of national and international importance', 'Statistical Analysis, Graphs and Diagrams (Data Interpretation)'] },
        { name: 'General Studies Paper-II', code: 'BPSC-GS2', duration: '3 Hours', totalMarks: 300, nature: 'Descriptive', topics: ['Indian Polity (Constitution, Centre-State relations, Governor role, Caste & politics in Bihar)', 'Indian Economy and Geography of India (Economic planning, Agriculture, Poverty, Land reforms, Floods & Drought in Bihar)', 'Role and impact of Science & Technology in the development of India and Bihar'] },
        { name: 'Essay Paper', code: 'BPSC-ESSAY', duration: '3 Hours', totalMarks: 300, nature: 'Descriptive', topics: ['Section 1: Philosophical and National Themes', 'Section 2: Socio-economic and Environmental Themes', 'Section 3: Bihar-specific folk culture, proverbs, idioms, and local governance issues'] }
      ]
    }
  ],

  mpsc: [
    {
      stageName: 'MPSC Civil Services Gazetted Joint Prelims (Objective - 400 Marks)',
      description: 'Paper 1 (GS) determines merit list; Paper 2 (CSAT) is qualifying with 33% (66 marks). 1/4th negative marking.',
      papers: [
        {
          name: 'Paper-I: General Studies',
          code: 'MPSC-GS1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'Current events of state, national and international importance',
            'History of India with special reference to Maharashtra and Indian National Movement',
            'Maharashtra, India and World Geography - Physical, Social, Economic Geography',
            'Maharashtra and India - Polity and Governance (Constitution, Panchayati Raj, Public Policy)',
            'Economic and Social Development - Sustainable Development, Poverty, Inclusion, Demographics',
            'General issues on Environmental Ecology, Bio-diversity and Climate Change (Western Ghats ecology)',
            'General Science'
          ]
        },
        {
          name: 'Paper-II: CSAT (Civil Services Aptitude Test)',
          code: 'MPSC-CSAT',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension (English & Marathi)', 'Interpersonal skills', 'Logical reasoning & analytical ability', 'Decision-making and problem-solving', 'General mental ability', 'Basic numeracy Class X']
        }
      ]
    },
    {
      stageName: 'MPSC Mains Written Examination (Descriptive - 1750 Marks)',
      description: 'Pattern aligned with UPSC CSE covering Language papers, Essay, and General Studies I-IV plus Optional.',
      papers: [
        { name: 'Paper 1: Marathi (Qualifying)', code: 'MPSC-MARATHI', duration: '3 Hours', totalMarks: 300, nature: 'Qualifying', topics: ['Essay, Translation, Precis, Marathi grammar and comprehension.'] },
        { name: 'Paper 2: English (Qualifying)', code: 'MPSC-ENG', duration: '3 Hours', totalMarks: 300, nature: 'Qualifying', topics: ['Essay, Precis, Vocabulary, Sentence structure, Comprehension.'] },
        { name: 'Paper 3: Essay', code: 'MPSC-ESSAY', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Essays on social, political, cultural, economic and environmental topics.'] },
        { name: 'Paper 4: General Studies I (History, Geography, Agriculture & Society)', code: 'MPSC-M-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Modern Indian history & Maharashtra social reformers (Phule, Shahu, Ambedkar, Tilak, Agarkar)', 'Geography of India & Maharashtra, Western Ghats ecology, Agriculture economics.'] },
        { name: 'Paper 5: General Studies II (Constitution, Polity, Law & Social Justice)', code: 'MPSC-M-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Constitution, Centre-State relations, Maharashtra administration, PIL, Human Rights, Administrative Law.'] },
        { name: 'Paper 6: General Studies III (Human Resource Development & Human Rights)', code: 'MPSC-M-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Education, Health, Rural development, Tribal affairs in Vidarbha/Marathwada, Women & child welfare.'] },
        { name: 'Paper 7: General Studies IV (Economy, Science & Tech, Disaster Management)', code: 'MPSC-M-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian & Maharashtra Economy, Industrial clusters (MMR, Pune, Nashik), Space, Biotechnology, Coastal zone regulation.'] }
      ]
    }
  ],

  tnpsc: [
    {
      stageName: 'TNPSC Combined Civil Services-I (Group 1) Prelims (Objective - 300 Marks)',
      description: 'Single objective paper with 200 questions (175 General Studies + 25 Aptitude & Mental Ability).',
      papers: [
        {
          name: 'General Studies & Aptitude (Group-1)',
          code: 'TN-PRE-1',
          duration: '3 Hours',
          totalMarks: 300,
          nature: 'Objective (MCQ)',
          topics: [
            'General Science (Physics, Chemistry, Botany, Zoology, Scientific laws)',
            'Current Events (National, International, Tamil Nadu awards, Sports, GI tags)',
            'Geography of India (Monsoon, Water resources, Tamil Nadu agro-climatic zones)',
            'History and Culture of India (Indus Valley to Independence, Dravidian heritage)',
            'Indian Polity (Constitution, Preamble, Citizenship, Fundamental Rights, Lokpal)',
            'Indian Economy (Planning Commission, NITI Aayog, GST, Tamil Nadu fiscal health)',
            'Indian National Movement (Early uprisings against British, Tamil Nadu freedom fighters: VO Chidambaram, Subramania Bharati, Veerapandiya Kattabomman)',
            'Unit 8: History, Culture, Heritage and Socio-Political Movements in Tamil Nadu (Thirukkural, Archaeological sites - Keeladi, Korkai, Self-Respect Movement, Periyar)',
            'Unit 9: Development Administration in Tamil Nadu (Human Development Indicators, Social welfare schemes, e-Governance, Health & Education systems)',
            'Aptitude and Mental Ability (Simplification, Percentage, HCF/LCM, Ratio, Logical reasoning)'
          ]
        }
      ]
    },
    {
      stageName: 'TNPSC Group 1 Mains Written Examination (Descriptive - 750 Marks + Qualifying)',
      description: 'Paper 1 is Tamil Eligibility Test (qualifying). Papers II, III, IV are evaluated for merit rank (250 marks each).',
      papers: [
        { name: 'Paper I: Tamil Eligibility & Translation (Qualifying)', code: 'TN-PAPER-1', duration: '3 Hours', totalMarks: 100, nature: 'Qualifying', topics: ['Tamil to English and English to Tamil translation, Precis, Thirukkural essay. (Minimum 40 marks required).'] },
        { name: 'Paper II: Modern History of India and Tamil Culture, Social Issues in India & Tamil Nadu', code: 'TN-PAPER-2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Unit 1: Modern History of India and Indian Culture, Freedom struggle in Tamil Nadu', 'Unit 2: Social Issues in India and Tamil Nadu (Poverty, Unemployment, Child labor, Gender disparity)', 'Unit 3: General Aptitude & Mental Ability (SSLC Standard)'] },
        { name: 'Paper III: Indian Polity & Emerging Political Trends, Role of S&T, Tamil Society', code: 'TN-PAPER-3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Unit 1: Indian Polity and Constitution of India', 'Unit 2: Role and Impact of Science and Technology in the Development of India', 'Unit 3: Tamil Society - Its Culture and Heritage (Sangam literature to modern period)'] },
        { name: 'Paper IV: Indian Economy, Current Economic Trends, Environment & Biodiversity', code: 'TN-PAPER-4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Unit 1: Indian Economy and Tamil Nadu Economic profile, Industrial corridors', 'Unit 2: Environment, Biodiversity and Disaster Management in Tamil Nadu', 'Unit 3: Geography of India with special reference to Tamil Nadu'] }
      ]
    }
  ],

  kpsc: [
    {
      stageName: 'KPSC Gazetted Probationers (KAS) Prelims (Objective - 400 Marks)',
      description: 'Two objective papers of 200 marks each with 1/4th negative marking penalty.',
      papers: [
        {
          name: 'Paper-I: General Studies & Karnataka Special',
          code: 'KAS-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Current events of National and International importance', 'Indian National Movement and History of Karnataka (Kadambas, Chalukyas, Hoysalas, Vijayanagara, Wodeyars)', 'World, Indian and Karnataka Geography', 'Indian Polity and Governance, Panchayati Raj institutions in Karnataka']
        },
        {
          name: 'Paper-II: General Studies, Science & Aptitude',
          code: 'KAS-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Current events of State importance', 'General Science & Technology, Environment & Ecology of Western Ghats', 'General Mental Ability, Comprehension, Logical reasoning, Quantitative aptitude']
        }
      ]
    },
    {
      stageName: 'KPSC KAS Mains Written Examination (Descriptive - 1250 Marks)',
      description: 'Compulsory Kannada and English qualifying papers, Essay, and four General Studies papers.',
      papers: [
        { name: 'Compulsory Kannada (Qualifying)', code: 'KAS-KAN', duration: '3 Hours', totalMarks: 150, nature: 'Qualifying', topics: ['Precis, Grammar, Vocabulary, Translation, Composition. (Minimum 35% marks).'] },
        { name: 'Compulsory English (Qualifying)', code: 'KAS-ENG', duration: '3 Hours', totalMarks: 150, nature: 'Qualifying', topics: ['Comprehension, Precis, Usage, Translation. (Minimum 35% marks).'] },
        { name: 'Paper-I: Essay', code: 'KAS-ESSAY', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Section 1: International and National themes; Section 2: State and Local socio-economic themes.'] },
        { name: 'Paper-II: General Studies I (History, Cultural Heritage of Karnataka & Society)', code: 'KAS-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Modern Indian History, Karnataka Unification Movement, Land Reforms in Karnataka (D. Devaraj Urs), Social justice movements.'] },
        { name: 'Paper-III: General Studies II (Polity, Constitution, Governance, Public Admin)', code: 'KAS-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Constitution, Centre-State relations, Administrative reforms in Karnataka, Sakala Act, Lokayukta.'] },
        { name: 'Paper-IV: General Studies III (Science, Tech, Environment & Rural Development)', code: 'KAS-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Biotechnology, IT sector in Bengaluru, Space (ISRO centres), Watershed management, Western Ghats ecology.'] },
        { name: 'Paper-V: General Studies IV (Ethics, Integrity, Aptitude & Management)', code: 'KAS-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Ethics in public administration, Emotional intelligence, Case studies on administrative conflicts and corruption.'] }
      ]
    }
  ],

  'kerala-psc': [
    {
      stageName: 'Kerala Administrative Service (KAS) Prelims (Objective - 200 Marks)',
      description: 'Two objective papers of 100 marks each testing General Studies and Language/Reasoning.',
      papers: [
        {
          name: 'Paper-I: General Studies & Kerala Renaissance',
          code: 'KER-PRE-1',
          duration: '90 Minutes',
          totalMarks: 100,
          nature: 'Objective (MCQ)',
          topics: [
            'History of India and World, Kerala History (Marathwada/Travancore, Kochi, Malabar)',
            'Kerala Renaissance leaders (Sree Narayana Guru, Ayyankali, Chattampi Swamikal, Vaikom Satyagraha 1924)',
            'Indian Constitution and Public Administration',
            'Current affairs, Indian and Kerala Economy (Decentralized planning, People’s Plan Campaign)'
          ]
        },
        {
          name: 'Paper-II: Language & Reasoning',
          code: 'KER-PRE-2',
          duration: '90 Minutes',
          totalMarks: 100,
          nature: 'Objective (MCQ)',
          topics: [
            'General English (Grammar, Vocabulary, Comprehension)',
            'Malayalam / Regional Language proficiency',
            'Mental Ability, Quantitative aptitude, Logical reasoning'
          ]
        }
      ]
    },
    {
      stageName: 'Kerala PSC KAS Mains Written Examination (Descriptive - 300 Marks)',
      description: 'Three descriptive papers of 100 marks each.',
      papers: [
        { name: 'Paper-I: General Studies I', code: 'KER-M-1', duration: '2 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['History, Cultural Heritage of Kerala, Geography, Environmental issues, Disaster Management.'] },
        { name: 'Paper-II: General Studies II', code: 'KER-M-2', duration: '2 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['Constitution, Public Policy, Governance, Law, Human Rights, International Relations.'] },
        { name: 'Paper-III: General Studies III', code: 'KER-M-3', duration: '2 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['Economy of India & Kerala, Planning, Sci-Tech innovations, IT ecosystem, Health & Social Development model.'] }
      ]
    }
  ],

  rpsc: [
    {
      stageName: 'RPSC RAS / RTS Preliminary Examination (Objective - 200 Marks)',
      description: 'Single objective paper of 150 questions covering General Knowledge and General Science with 1/3rd negative marking.',
      papers: [
        {
          name: 'General Knowledge & General Science',
          code: 'RAS-PRE',
          duration: '3 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'History, Art, Culture, Literature, Tradition & Heritage of Rajasthan (Forts, Palaces, Fairs, Festivals, Folk deities)',
            'Indian History (Ancient, Medieval, Modern & Freedom Struggle)',
            'Geography of World and India; Geography of Rajasthan (Aravalli ranges, Thar desert, Indira Gandhi Canal Project)',
            'Indian Constitution, Political System and Governance; Political & Administrative System of Rajasthan (Governor, CM, Assembly, High Court, RPSC, State Election Commission)',
            'Economic Concepts and Indian Economy; Economy of Rajasthan (Agro-climatic zones, Minerals, Tourism, Solar energy)',
            'Science & Technology (Space, Defence, Biotech, Nanotech, Environmental conservation)',
            'Reasoning & Mental Ability, Current Affairs (State, National, International)'
          ]
        }
      ]
    },
    {
      stageName: 'RPSC RAS Mains Written Examination (Descriptive - 800 Marks)',
      description: 'Four compulsory descriptive papers of 200 marks each.',
      papers: [
        { name: 'Paper-I: General Studies I (History, Economics, Sociology & Management)', code: 'RAS-M-1', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part A: History (Rajasthan, Indian, World); Part B: Economics (Indian, World, Rajasthan Economy); Part C: Sociology, Management, Accounting & Auditing.'] },
        { name: 'Paper-II: General Studies II (Administrative Ethics, Science & Tech, Geography)', code: 'RAS-M-2', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part A: Administrative Ethics (Nolan principles, Gita teachings, Gandhian ethics); Part B: General Science & Technology; Part C: Earth Science & Geography (World, India, Rajasthan).'] },
        { name: 'Paper-III: General Studies III (Political System, Public Admin, Sports & Law)', code: 'RAS-M-3', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part A: Indian Political System, World Politics & Current Affairs; Part B: Concepts, Issues & Dynamics of Public Administration; Part C: Sports and Yoga, Behavior, Law.'] },
        { name: 'Paper-IV: General Hindi and General English', code: 'RAS-M-4', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part A: Samanya Hindi (Grammar, Sankshepan, Pallavan, Patra lekhan, Nibandh - 120 marks); Part B: General English (Grammar, Comprehension, Translation, Composition - 80 marks).'] }
      ]
    }
  ],

  mppsc: [
    {
      stageName: 'MPPSC State Service Prelims Examination (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each. Paper 1 determines merit; Paper 2 (CSAT) is qualifying.',
      papers: [
        {
          name: 'General Studies Paper-I',
          code: 'MP-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'History, Culture and Literature of Madhya Pradesh (Major dynasties: Gond, Chandela, Paramara, Holkar, Scindia)',
            'History of India and National Movement',
            'Geography of Madhya Pradesh (Forests, Narmada river system, Minerals, Climate)',
            'Geography of India and World',
            'Constitutional System of MP (Governor, Council of Ministers, High Court, 3-tier Panchayati Raj) and India',
            'Economy of Madhya Pradesh (Agriculture, Industries, Tribal development)',
            'Science and Environment, Information and Communication Technology',
            'National and Regional Constitutional / Statutory Bodies (Election Commission, UPSC, MPPSC, CAG, NITI Aayog)'
          ]
        },
        {
          name: 'General Aptitude Test (Paper-II)',
          code: 'MP-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning & analytical ability', 'Decision making', 'Basic mathematics (Class X level)', 'Hindi Language Comprehension (Class X level)']
        }
      ]
    },
    {
      stageName: 'MPPSC Mains Written Examination (Descriptive - 1500 Marks)',
      description: 'Six descriptive papers covering General Studies, Philosophy, Hindi Language and Essay.',
      papers: [
        { name: 'General Studies I: History and Geography', code: 'MP-M-1', duration: '3 Hours', totalMarks: 300, nature: 'Descriptive', topics: ['Part A: History & Culture of India and Madhya Pradesh; Part B: Geography of India and MP, Water Management & Disaster.'] },
        { name: 'General Studies II: Constitution, Governance, Economy & Sociology', code: 'MP-M-2', duration: '3 Hours', totalMarks: 300, nature: 'Descriptive', topics: ['Part A: Constitution, Governance & Administration; Part B: Economics and Sociology, Human Resource Development in MP.'] },
        { name: 'General Studies III: Science and Technology', code: 'MP-M-3', duration: '3 Hours', totalMarks: 300, nature: 'Descriptive', topics: ['Physics, Chemistry, Biology, Computer Science, Mathematics, Health, Environment, Geology of MP.'] },
        { name: 'General Studies IV: Philosophy, Psychology and Public Administration', code: 'MP-M-4', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Philosophers, Thinkers, Social Reformers (Socrates, Plato, Buddha, Mahavira, Shankaracharya, Kabir), Attitude, Emotional Intelligence, Case Studies.'] },
        { name: 'General Studies V: Samanya Hindi Evam Vyakaran', code: 'MP-M-5', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Vyakaran, Sandhi, Samas, Viram Chinha, Shabd Yugm, Muhavare, Pallavan, Sankshepan, Translation.'] },
        { name: 'General Studies VI: Hindi Nibandh Lekhan Evam Praroop Lekhan', code: 'MP-M-6', duration: '2 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['First Essay (1000 words), Second Essay (500 words), Draft/Praroop writing (Government official correspondence).'] }
      ]
    }
  ],

  gpsc: [
    {
      stageName: 'GPSC Gujarat Administrative Service Class 1 & 2 Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each with 0.30 negative marking per wrong answer.',
      papers: [
        {
          name: 'General Studies-I (Paper-1)',
          code: 'GPSC-PRE-1',
          duration: '3 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['History of India and Gujarat (Indus Valley Lothal/Dholavira, Solanki era, Sardar Patel, Mahatma Gandhi)', 'Cultural Heritage of Gujarat and India', 'Indian Polity, Constitution, Social Justice & International Relations', 'General Mental Ability (Reasoning and Quantitative)']
        },
        {
          name: 'General Studies-II (Paper-2)',
          code: 'GPSC-PRE-2',
          duration: '3 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Indian and Gujarat Economy (GIFT City, Ports, Petrochemicals, Dholera SIR)', 'Geography of India and Gujarat', 'Science and Technology', 'Current events of regional, national and international importance']
        }
      ]
    },
    {
      stageName: 'GPSC Mains Written Examination (Descriptive - 900 Marks)',
      description: 'Six descriptive papers of 150 marks each including Gujarati, English, Essay, and GS 1-3.',
      papers: [
        { name: 'Paper-1: Gujarati Language', code: 'GPSC-M-1', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Essay, Letter, Press release, Report writing, Translation, Gujarati grammar.'] },
        { name: 'Paper-2: English Language', code: 'GPSC-M-2', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Essay, Letter, Report, Formal speech, Translation from Gujarati to English, English grammar.'] },
        { name: 'Paper-3: Essay', code: 'GPSC-M-3', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Three essays covering socio-economic, administrative, and cultural themes.'] },
        { name: 'Paper-4: General Studies I', code: 'GPSC-M-4', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['History of India & Gujarat, Cultural Heritage, Geography of India & Gujarat.'] },
        { name: 'Paper-5: General Studies II', code: 'GPSC-M-5', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Indian Constitution, Governance, Public Administration, Ethics in Public Service.'] },
        { name: 'Paper-6: General Studies III', code: 'GPSC-M-6', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Science and Technology, Indian Economy & Planning, Gujarat Socio-Economic Development.'] }
      ]
    }
  ],

  wbpsc: [
    {
      stageName: 'WBPSC West Bengal Civil Service (Executive) Prelims (Objective - 200 Marks)',
      description: 'Single screening paper with 200 MCQs divided into 8 distinct sections of 25 marks each.',
      papers: [
        {
          name: 'General Studies (WBCS Prelims)',
          code: 'WBCS-PRE',
          duration: '2.5 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'English Composition (Synonyms, Antonyms, Idioms, Phrasal verbs) - 25 Marks',
            'General Science (Physics, Chemistry, Biological sciences) - 25 Marks',
            'Current Events of National and International Importance - 25 Marks',
            'History of India (Ancient, Medieval & Modern) - 25 Marks',
            'Geography of India with special reference to West Bengal - 25 Marks',
            'Indian Polity and Economy (Constitution, Panchayati Raj, RBI, Banking) - 25 Marks',
            'Indian National Movement (Bengal Renaissance, Swadeshi Movement, INA) - 25 Marks',
            'General Mental Ability (Reasoning and Analytical aptitude) - 25 Marks'
          ]
        }
      ]
    },
    {
      stageName: 'WBPSC WBCS Mains Written Examination (Descriptive/Objective - 1200+ Marks)',
      description: 'Six compulsory papers of 200 marks each plus optional subjects for Group A and B cadres.',
      papers: [
        { name: 'Paper I: Bengali / Regional Language', code: 'WBCS-M-1', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Letter writing, Drafting report, Précis writing, Translation from English to Bengali.'] },
        { name: 'Paper II: English', code: 'WBCS-M-2', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Letter writing, Drafting report, Précis writing, Translation from Bengali to English.'] },
        { name: 'Paper III: General Studies-I', code: 'WBCS-M-3', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Indian History with special emphasis on National Movement, Geography of India and West Bengal.'] },
        { name: 'Paper IV: General Studies-II', code: 'WBCS-M-4', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Science and Scientific/Technological advancement, Environment, General Knowledge and Current Affairs.'] },
        { name: 'Paper V: Constitution of India & Indian Economy', code: 'WBCS-M-5', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Constitution of India, Role and Functions of RBI, Fiscal policy, Planning in India.'] },
        { name: 'Paper VI: Arithmetic and Test of Reasoning', code: 'WBCS-M-6', duration: '3 Hours', totalMarks: 200, nature: 'Objective (MCQ)', topics: ['Class X standard Arithmetic, Non-verbal reasoning, Logical deduction, Analytical ability.'] }
      ]
    }
  ],

  opsc: [
    {
      stageName: 'OPSC Odisha Civil Services (OCS) Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each. Paper 1 determines merit; Paper 2 (CSAT) is qualifying with 33%.',
      papers: [
        {
          name: 'Paper-I: General Studies',
          code: 'OCS-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Current national and international events', 'History of India and Indian National Movement; Odisha History (Kalinga War, Kharavela, Gajapati Dynasty)', 'Indian and World Geography, Odisha physical geography and coastal ecosystems (Chilika Lake, Bhitarkanika)', 'Indian Polity and Governance', 'Economic and Social Development of India and Odisha', 'Environmental issues, Bio-diversity of Simlipal, Climate resilience', 'General Science']
        },
        {
          name: 'Paper-II: CSAT (General Aptitude)',
          code: 'OCS-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning', 'Decision making', 'Basic numeracy Class X level', 'Data interpretation']
        }
      ]
    },
    {
      stageName: 'OPSC OCS Mains Written Examination (Descriptive - 1750 Marks)',
      description: 'Pattern fully aligned with UPSC Civil Services, covering Odia Language, English, Essay, and GS 1 to 4.',
      papers: [
        { name: 'Paper I: Odia Language (Qualifying)', code: 'OCS-ODIA', duration: '3 Hours', totalMarks: 250, nature: 'Qualifying', topics: ['Odia essay, Translation from English to Odia, Précis writing, Odia grammar.'] },
        { name: 'Paper II: English (Qualifying)', code: 'OCS-ENG', duration: '3 Hours', totalMarks: 250, nature: 'Qualifying', topics: ['English essay, Translation from Odia to English, Précis writing, English grammar.'] },
        { name: 'Paper III: Essay', code: 'OCS-ESSAY', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Two essays on national, socio-economic and cultural topics.'] },
        { name: 'Paper IV: General Studies I (History, Heritage, Geography & Society)', code: 'OCS-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian & Odisha History, Temple architecture (Konark, Jagannath Puri), Tribal heritage of Odisha, Cyclone disaster management.'] },
        { name: 'Paper V: General Studies II (Polity, Governance, Social Justice & IR)', code: 'OCS-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Constitution, Governance, Mo Sarkar initiative, 5T governance model, Panchayati Raj.'] },
        { name: 'Paper VI: General Studies III (Economy, S&T, Environment, Disaster Management)', code: 'OCS-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian & Odisha Economy, Mineral wealth (Bauxite, Iron ore), Disaster preparedness model, S&T.'] },
        { name: 'Paper VII: General Studies IV (Ethics, Integrity and Aptitude)', code: 'OCS-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Public administration values, Probity in governance, Emotional intelligence, Case studies.'] }
      ]
    }
  ],

  jpsc: [
    {
      stageName: 'JPSC Combined Civil Services Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each: Paper 1 covers General Studies; Paper 2 is dedicated to Jharkhand Special Studies.',
      papers: [
        {
          name: 'General Studies Paper-I',
          code: 'JPSC-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['History of India (Ancient, Medieval, Modern)', 'Geography of India', 'Indian Polity and Governance', 'Economic and Sustainable Development', 'Science and Technology', 'Jharkhand specific questions (History, Society, Culture, Heritage)', 'National and International Current Events', 'General questions of miscellaneous nature']
        },
        {
          name: 'General Studies Paper-II (Jharkhand Specific)',
          code: 'JPSC-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'History of Jharkhand (Munda, Nagvanshi, Parha Panchayat, Manjhi Pargana systems)',
            'Jharkhand Movement (Birsa Munda, Tilka Manjhi, Sidho-Kanho, Jharkhand statehood)',
            'Customs, Festivals, Dance, Music and Tourist places of Jharkhand',
            'Jharkhand Literature and Authors',
            'Major Educational Institutions and Sports of Jharkhand',
            'Jharkhand Land Laws: Chota Nagpur Tenancy (CNT) Act 1908 and Santhal Pargana Tenancy (SPT) Act 1949',
            'Economic Development, Forest Management, Wild Life (Betla National Park)',
            'Environmental Facts and Climate Change mitigation in Jharkhand'
          ]
        }
      ]
    },
    {
      stageName: 'JPSC Mains Written Examination (Descriptive - 1050 Marks)',
      description: 'Six compulsory papers covering General Hindi/English, Regional Language, and GS 1 to 4.',
      papers: [
        { name: 'Paper I: General Hindi & General English', code: 'JPSC-M-1', duration: '3 Hours', totalMarks: 100, nature: 'Qualifying', topics: ['Essay, Grammar, Comprehension, Précis writing (Qualifying cutoff: 30%).'] },
        { name: 'Paper II: Language and Literature', code: 'JPSC-M-2', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Chosen from regional list: Santhali, Mundari, Ho, Kurukh, Khortha, Nagpuri, Hindi, English, Urdu, etc.'] },
        { name: 'Paper III: Social Sciences (History and Geography)', code: 'JPSC-M-3', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['History of India and Jharkhand freedom fighters; Physical and Human Geography of India and Jharkhand.'] },
        { name: 'Paper IV: Indian Constitution, Polity, Public Administration and Good Governance', code: 'JPSC-M-4', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Constitution, Preamble, Fundamental Rights, Union-State relations, Public Administration concepts.'] },
        { name: 'Paper V: Indian Economy, Globalization and Sustainable Development', code: 'JPSC-M-5', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Macroeconomics, Poverty, Food security, Economy of Jharkhand, Mining and Industrial issues.'] },
        { name: 'Paper VI: General Science, Environment and Technology Development', code: 'JPSC-M-6', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Physical Science, Life Science, Agriculture Science, Environmental Science and Disaster Management.'] }
      ]
    }
  ],

  hpsc: [
    {
      stageName: 'HPSC Haryana Civil Services (HCS) Prelims (Objective - 200 Marks)',
      description: 'Two papers of 100 marks each. Paper 1 determines merit; Paper 2 (CSAT) is qualifying with 33%. 1/4th negative marking.',
      papers: [
        {
          name: 'General Studies (Paper 1)',
          code: 'HCS-PRE-1',
          duration: '2 Hours',
          totalMarks: 100,
          nature: 'Objective (MCQ)',
          topics: ['General Science', 'Current events of national and international importance', 'History of India and Indian National Movement', 'Indian and World Geography', 'Indian Culture, Indian Polity & Indian Economy', 'General Mental Ability', 'Haryana Special: Economy, History, Culture and Geography of Haryana']
        },
        {
          name: 'Civil Services Aptitude Test (CSAT Paper 2)',
          code: 'HCS-PRE-2',
          duration: '2 Hours',
          totalMarks: 100,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning and analytical ability', 'Decision making', 'Basic numeracy and data interpretation (Class X level)']
        }
      ]
    },
    {
      stageName: 'HPSC HCS Mains Written Examination (Descriptive - 600 Marks)',
      description: 'Four descriptive papers: English, Hindi, General Studies, and one Optional Subject.',
      papers: [
        { name: 'Paper I: English and English Essay', code: 'HCS-ENG', duration: '3 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['Précis writing, Comprehension, Essay, Grammar, Vocabulary.'] },
        { name: 'Paper II: Hindi and Hindi Essay (in Devanagari script)', code: 'HCS-HINDI', duration: '3 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['Translation from English to Hindi, Hindi Essay, Grammar, Idioms and Phrases.'] },
        { name: 'Paper III: General Studies', code: 'HCS-GS', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part 1: History, Modern India, Culture; Part 2: Geography, Polity and Economy of India & Haryana; Part 3: S&T, Security and International issues.'] },
        { name: 'Paper IV: One Optional Subject', code: 'HCS-OPT', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Candidate’s chosen discipline from the approved HPSC syllabus list.'] }
      ]
    }
  ],

  hppsc: [
    {
      stageName: 'HPPSC HPAS Combined Competitive Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each. Paper 1 determines merit; Paper 2 (Aptitude) is qualifying with 33%. 1/3rd negative marking.',
      papers: [
        {
          name: 'Paper-I: General Studies',
          code: 'HPAS-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'History, Geography and Socio-Economic development of Himachal Pradesh',
            'Current events of national and international importance',
            'History of India and Indian National Movement',
            'Indian and World Geography - Physical, Social, Economic',
            'Indian Polity and Governance - Constitution, Political System, Panchayati Raj',
            'Economic and Social Development - Poverty, Inclusion, Demographics',
            'General issues on Environmental Ecology, Bio-diversity and Climate Change'
          ]
        },
        {
          name: 'Paper-II: Aptitude Test',
          code: 'HPAS-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning', 'Decision-making', 'General mental ability', 'Basic numeracy Class X']
        }
      ]
    },
    {
      stageName: 'HPPSC HPAS Mains Written Examination (Descriptive - 900 Marks)',
      description: 'Compulsory English and Hindi qualifying papers plus Essay and General Studies I, II, and III.',
      papers: [
        { name: 'Compulsory English (Qualifying)', code: 'HPAS-ENG', duration: '3 Hours', totalMarks: 100, nature: 'Qualifying', topics: ['Comprehension, Précis, Grammar, Vocabulary. (Minimum 40% marks required).'] },
        { name: 'Compulsory Hindi (Qualifying)', code: 'HPAS-HINDI', duration: '3 Hours', totalMarks: 100, nature: 'Qualifying', topics: ['Translation, Essay, Idioms, Correction of sentences. (Minimum 40% marks required).'] },
        { name: 'Paper I: Essay', code: 'HPAS-ESSAY', duration: '3 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['Two essays on national, socio-economic and Himachal-specific themes.'] },
        { name: 'Paper II: General Studies I', code: 'HPAS-GS1', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Historical evolution and heritage of Himachal Pradesh, Indian History, World & Himalayan Geography, Disaster Management.'] },
        { name: 'Paper III: General Studies II', code: 'HPAS-GS2', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Indian Constitution, Governance, Himachal administrative systems, Public service values, Human Rights.'] },
        { name: 'Paper IV: General Studies III', code: 'HPAS-GS3', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Economy of India and HP, Horticulture, Hydropower potential, Tourism, Eco-tourism, Science & Technology.'] }
      ]
    }
  ],

  ppsc: [
    {
      stageName: 'PPSC Punjab State Civil Services Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each. Merit is computed from combined score of Paper 1 and Paper 2. No negative marking.',
      papers: [
        {
          name: 'Paper-I: General Studies',
          code: 'PPSC-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['General Science', 'Environmental studies', 'Political theory and Indian Polity', 'History of India and Punjab (Sikh Gurus, Maharaja Ranjit Singh, Anglo-Sikh Wars, Ghadar Movement)', 'Indian Economy', 'Geography of India and Punjab', 'Current Events']
        },
        {
          name: 'Paper-II: Civil Services Aptitude Test (CSAT)',
          code: 'PPSC-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Reading comprehension', 'Punjabi language comprehension', 'Logical reasoning and analytical ability', 'Quantitative aptitude and data interpretation']
        }
      ]
    },
    {
      stageName: 'PPSC Mains Written Examination (Descriptive - 1350 Marks)',
      description: 'Seven compulsory descriptive papers of varying weightage.',
      papers: [
        { name: 'Paper I: Punjabi (in Gurmukhi Script)', code: 'PPSC-PUNJABI', duration: '3 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['Comprehension, Essay, Letter, Translation from English to Punjabi, Punjabi grammar.'] },
        { name: 'Paper II: English', code: 'PPSC-ENG', duration: '3 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['Comprehension, Précis, Essay, Letter writing, English grammar.'] },
        { name: 'Paper III: Essay', code: 'PPSC-ESSAY', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Three essays covering socio-political and economic themes.'] },
        { name: 'Paper IV: General Studies I (History, Geography & Society)', code: 'PPSC-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['History of India and Punjab, World History, Physical and Human Geography of Punjab and India.'] },
        { name: 'Paper V: General Studies II (Polity, Governance, IR & Security)', code: 'PPSC-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Constitution, Governance, Border Security in Punjab, Drug menace mitigation, Police administration.'] },
        { name: 'Paper VI: General Studies III (Economy, Statistics & Environment)', code: 'PPSC-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian & Punjab Economy, Agrarian crisis, Crop diversification, Groundwater depletion, Stubble burning, Industrialization.'] },
        { name: 'Paper VII: General Studies IV (Science & Tech, Ethics, Integrity)', code: 'PPSC-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Application of S&T, Cyber security, Administrative Ethics, Probity in Governance, Case Studies.'] }
      ]
    }
  ],

  ukpsc: [
    {
      stageName: 'UKPSC Uttarakhand Combined Upper Subordinate Prelims (Objective - 300 Marks)',
      description: 'Two papers: Paper 1 (GS - 150 marks) determines merit; Paper 2 (CSAT - 150 marks) is qualifying with 33%.',
      papers: [
        {
          name: 'Paper-I: General Studies',
          code: 'UK-PRE-1',
          duration: '2 Hours',
          totalMarks: 150,
          nature: 'Objective (MCQ)',
          topics: ['Indian History and Culture; Uttarakhand History (Katyuri, Chand, Parmar dynasties)', 'Indian and World Geography; Geography of Uttarakhand (Char Dham, Bugyals, Rivers)', 'Indian Polity and Economy; Uttarakhand State Administration and Economy', 'General Science and Environment', 'Current Affairs']
        },
        {
          name: 'Paper-II: General Aptitude Test (CSAT)',
          code: 'UK-PRE-2',
          duration: '2 Hours',
          totalMarks: 150,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning', 'Decision-making', 'General mental ability', 'Basic numeracy']
        }
      ]
    },
    {
      stageName: 'UKPSC Mains Written Examination (Descriptive - 1500 Marks)',
      description: 'Seven compulsory descriptive papers of 200 marks each (Language is 300 marks).',
      papers: [
        { name: 'Paper I: Language (Hindi & English)', code: 'UK-M-1', duration: '3 Hours', totalMarks: 300, nature: 'Descriptive', topics: ['General Hindi (grammar, essay, translation) and General English. (Minimum 35% marks required).'] },
        { name: 'Paper II: History of India, National Movement, Society & Culture', code: 'UK-M-2', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Indian History, Cultural heritage, Freedom struggle, Uttarakhand History & Folk culture.'] },
        { name: 'Paper III: Indian Polity, Social Justice and International Relations', code: 'UK-M-3', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Constitution of India, Union and State government, Uttarakhand Governance, Human Rights.'] },
        { name: 'Paper IV: India and World Geography', code: 'UK-M-4', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Physical, Human, Economic Geography of India, World and Uttarakhand, Disaster management in hills.'] },
        { name: 'Paper V: Economic and Social Development', code: 'UK-M-5', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Indian Economy, State Finances of Uttarakhand, Tourism, Hydro-electric power, Agriculture.'] },
        { name: 'Paper VI: General Science and Technology', code: 'UK-M-6', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Physical, Life, Environmental Sciences, Space technology, Information Technology.'] },
        { name: 'Paper VII: General Aptitude and Ethics', code: 'UK-M-7', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Administrative Ethics, Values, Integrity, Numerical aptitude, Statistical analysis, Case studies.'] }
      ]
    }
  ],

  jkpsc: [
    {
      stageName: 'JKPSC Combined Competitive Examination (CCE) Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each. Paper 1 determines merit; Paper 2 (CSAT) is qualifying with 33%. 1/3rd negative marking.',
      papers: [
        {
          name: 'General Studies Paper-I',
          code: 'JK-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Current events of national and international importance', 'History of India and Indian National Movement', 'Indian and World Geography', 'Indian Polity and Governance', 'Economic and Social Development', 'Environmental Ecology and Biodiversity', 'General Science', 'J&K Reorganisation Act 2019, History and Geography of Jammu, Kashmir & Ladakh']
        },
        {
          name: 'General Studies Paper-II (CSAT)',
          code: 'JK-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning and analytical ability', 'Decision-making', 'General mental ability', 'Basic numeracy Class X']
        }
      ]
    },
    {
      stageName: 'JKPSC Mains Written Examination (Descriptive - 1750 Marks)',
      description: 'Fully aligned with UPSC Civil Services pattern covering English qualifying, Essay, and GS 1 to 4 plus Optional.',
      papers: [
        { name: 'English (Qualifying)', code: 'JK-ENG-QUAL', duration: '3 Hours', totalMarks: 300, nature: 'Qualifying', topics: ['Comprehension, Précis, Usage and Vocabulary, Short Essay.'] },
        { name: 'Paper I: Essay', code: 'JK-ESSAY', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Two essays on socio-economic, administrative, and philosophical themes.'] },
        { name: 'Paper II: General Studies I', code: 'JK-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Heritage and Culture, History and Geography of the World and Society, Himalayan Ecology.'] },
        { name: 'Paper III: General Studies II', code: 'JK-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Governance, Constitution, Polity, Social Justice, J&K Reorganisation Act 2019, International Relations.'] },
        { name: 'Paper IV: General Studies III', code: 'JK-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Technology, Economic Development, Biodiversity, Security, Border Management, Disaster Management.'] },
        { name: 'Paper V: General Studies IV', code: 'JK-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Ethics, Integrity and Aptitude, Probity in Governance, Administrative Case Studies.'] }
      ]
    }
  ],

  cgpsc: [
    {
      stageName: 'CGPSC State Service Preliminary Examination (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each. Paper 1 determines merit; Paper 2 (Aptitude) is qualifying with 33%. 1/3rd negative marking.',
      papers: [
        {
          name: 'General Studies (Paper 1)',
          code: 'CG-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Part A: General Studies of India (History, Geography, Constitution, Economy, Science, Current Affairs) - 100 Marks', 'Part B: General Knowledge of Chhattisgarh (History of CG, Tribal traditions of Bastar and Surguja, Rivers, Minerals, Agriculture, Government schemes) - 100 Marks']
        },
        {
          name: 'Aptitude Test (Paper 2)',
          code: 'CG-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning and analytical ability', 'Decision-making and problem-solving', 'Basic numeracy (Class X level)', 'General Hindi and Chhattisgarhi Language knowledge']
        }
      ]
    },
    {
      stageName: 'CGPSC Mains Written Examination (Descriptive - 1400 Marks)',
      description: 'Seven compulsory descriptive papers of 200 marks each.',
      papers: [
        { name: 'Paper I: Language', code: 'CG-M-1', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part 1: General Hindi (100 Marks); Part 2: General English (50 Marks); Part 3: Chhattisgarhi Language (50 Marks).'] },
        { name: 'Paper II: Essay', code: 'CG-M-2', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part 1: National level issues (2 essays, 100 marks); Part 2: Chhattisgarh state level issues (2 essays, 100 marks).'] },
        { name: 'Paper III: History, Constitution and Public Administration', code: 'CG-M-3', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part 1: History of India; Part 2: Constitution and Public Administration; Part 3: History of Chhattisgarh.'] },
        { name: 'Paper IV: Science, Technology and Environment', code: 'CG-M-4', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part 1: Chemistry, Physics, Biology; Part 2: Technology; Part 3: Environment and Ecology.'] },
        { name: 'Paper V: Economy and Geography', code: 'CG-M-5', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part 1: Indian Economy; Part 2: Economy of Chhattisgarh; Part 3: Geography of Chhattisgarh.'] },
        { name: 'Paper VI: Mathematics and Logical Ability', code: 'CG-M-6', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part 1: Rational Numbers, Coordinate geometry, Vedic maths; Part 2: Logical Reasoning; Part 3: Applied & Statistical Mathematics.'] },
        { name: 'Paper VII: Philosophy and Sociology', code: 'CG-M-7', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Part 1: Indian & Western Philosophy; Part 2: Sociology; Part 3: Social and welfare legislations in India & CG.'] }
      ]
    }
  ],

  apsc: [
    {
      stageName: 'APSC Combined Competitive Examination (CCE) Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each. Paper 1 determines merit; Paper 2 (CSAT) is qualifying with 33%. 1/4th negative marking.',
      papers: [
        {
          name: 'General Studies-I (Paper 1)',
          code: 'APSC-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Current events of national, international and Assam importance', 'History of India and Assam (Ahom dynasty, Koch Kingdom, Moamoria rebellion, Assam in freedom movement)', 'Indian and World Geography, Assam Geography (Brahmaputra basin, Kaziranga)', 'Indian Polity and Governance', 'Economic and Social Development of India and Assam', 'Environmental Ecology and Biodiversity', 'General Science']
        },
        {
          name: 'General Studies-II (CSAT Paper 2)',
          code: 'APSC-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning and analytical ability', 'Decision-making', 'General mental ability', 'Basic numeracy Class X']
        }
      ]
    },
    {
      stageName: 'APSC Mains Written Examination (Descriptive - 1500 Marks)',
      description: 'Six descriptive papers of 250 marks each including exclusive GS-V on Assam Special Studies.',
      papers: [
        { name: 'Paper 1: Essay', code: 'APSC-M-1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Essays on national, socio-economic and regional North-East themes.'] },
        { name: 'Paper 2: General Studies I', code: 'APSC-M-2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Heritage and Culture, History and Geography of the World and Society.'] },
        { name: 'Paper 3: General Studies II', code: 'APSC-M-3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Governance, Constitution, Polity, Social Justice and International Relations.'] },
        { name: 'Paper 4: General Studies III', code: 'APSC-M-4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Technology, Economic Development, Biodiversity, Environment, Security and Disaster Management.'] },
        { name: 'Paper 5: General Studies IV', code: 'APSC-M-5', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Ethics, Integrity and Aptitude, Probity in Public Life, Case Studies.'] },
        { name: 'Paper 6: General Studies V (Assam Special Studies)', code: 'APSC-M-6', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['History, Heritage and Culture of Assam; Geography and Demography of Assam; Economy and Biodiversity; Administrative initiatives and schemes in Assam.'] }
      ]
    }
  ],

  'goa-psc': [
    {
      stageName: 'Goa PSC Civil Services Prelims (Objective - 150 Marks)',
      description: 'Single objective paper covering General Studies, History of Goa, and Aptitude.',
      papers: [
        {
          name: 'General Studies and Mental Ability',
          code: 'GPSC-GOA-PRE',
          duration: '2 Hours',
          totalMarks: 150,
          nature: 'Objective (MCQ)',
          topics: [
            'History and Culture of India and Goa (Kadambas, Portuguese colonization, 1961 Operation Vijay, Opinion Poll 1967)',
            'Geography of Goa (Mandovi and Zuari river basins, Western Ghats ecology, Coastal Regulation Zone)',
            'Indian Constitution, Governance, and Panchayati Raj in Goa',
            'Economy of Goa (Mining, Tourism, Port infrastructure at Mormugao, Pharmaceutical hub)',
            'Current Events and General Science',
            'Logical Reasoning and Mental Ability'
          ]
        }
      ]
    },
    {
      stageName: 'Goa PSC Mains Written Examination (Descriptive - 600 Marks)',
      description: 'Four descriptive papers covering English, Essay, and General Studies.',
      papers: [
        { name: 'Paper I: General English', code: 'GOA-ENG', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Comprehension, Précis, Essay, Grammar, Official correspondence.'] },
        { name: 'Paper II: General Studies I', code: 'GOA-GS1', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['History, Culture, Heritage of India & Goa, Physical and Human Geography.'] },
        { name: 'Paper III: General Studies II', code: 'GOA-GS2', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Indian Constitution, Governance, Public Administration, Administrative Ethics.'] },
        { name: 'Paper IV: General Studies III', code: 'GOA-GS3', duration: '3 Hours', totalMarks: 150, nature: 'Descriptive', topics: ['Economy of India & Goa, Science and Technology, Environment and Coastal Management.'] }
      ]
    }
  ],

  'arunachal-psc': [
    {
      stageName: 'Arunachal Pradesh PSC Combined Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each: Paper 1 General Studies; Paper 2 CSAT (qualifying with 33%).',
      papers: [
        {
          name: 'General Studies Paper-I',
          code: 'ARUN-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Indian History and National Movement', 'Arunachal Pradesh History, Tribes and Customary Laws (Monpa, Apatani, Nyishi, Adi)', 'Geography of India and Arunachal Pradesh (Eastern Himalayas, Namdapha)', 'Indian Polity and Constitution', 'Economy of India and Arunachal Pradesh', 'Environmental Ecology and Biodiversity', 'General Science and Current Affairs']
        },
        {
          name: 'CSAT Paper-II',
          code: 'ARUN-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning and analytical ability', 'Basic numeracy']
        }
      ]
    },
    {
      stageName: 'Arunachal PSC Mains Written Examination (Descriptive - 1400 Marks)',
      description: 'General English, Essay, and General Studies I to IV.',
      papers: [
        { name: 'General English', code: 'ARUN-ENG', duration: '3 Hours', totalMarks: 300, nature: 'Descriptive', topics: ['Essay, Précis, Comprehension, Usage and Vocabulary.'] },
        { name: 'General Studies I', code: 'ARUN-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Heritage, History and Geography, Society and Arunachal Tribal Traditions.'] },
        { name: 'General Studies II', code: 'ARUN-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Governance, Constitution, Polity, Social Justice, Article 371H, Border issues.'] },
        { name: 'General Studies III', code: 'ARUN-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Technology, Economic Development, Hydropower resources, Biodiversity, Security.'] },
        { name: 'General Studies IV', code: 'ARUN-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Ethics, Integrity, Aptitude and Administrative Case Studies.'] }
      ]
    }
  ],

  'manipur-psc': [
    {
      stageName: 'Manipur PSC Combined Competitive Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each testing General Studies and CSAT.',
      papers: [
        {
          name: 'General Studies Paper-I',
          code: 'MAN-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Current affairs', 'Indian History and Indian National Movement', 'Geography of India and Manipur (Loktak Lake, Keibul Lamjao, Imphal valley)', 'Indian Polity and Article 371C provisions for Manipur', 'Economy of Manipur and India, Act East Policy and ASEAN trade corridors', 'Environment and General Science']
        },
        {
          name: 'CSAT Paper-II',
          code: 'MAN-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning and decision making', 'Basic numeracy']
        }
      ]
    },
    {
      stageName: 'Manipur PSC Mains Written Examination (Descriptive - 1750 Marks)',
      description: 'English qualifying, Essay, General Studies I to IV and Optional Subject.',
      papers: [
        { name: 'General English (Qualifying)', code: 'MAN-ENG-QUAL', duration: '3 Hours', totalMarks: 300, nature: 'Qualifying', topics: ['Comprehension, Précis, Vocabulary, Essay.'] },
        { name: 'Paper I: Essay', code: 'MAN-ESSAY', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Two essays on socio-political and economic themes.'] },
        { name: 'Paper II: General Studies I', code: 'MAN-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian & Manipur Heritage, Culture, History and Himalayan Geography.'] },
        { name: 'Paper III: General Studies II', code: 'MAN-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Constitution, Polity, Governance, Article 371C Hill Area Committee, Social Justice.'] },
        { name: 'Paper IV: General Studies III', code: 'MAN-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Economic Development, Act East trade corridor, Internal security, Biodiversity.'] },
        { name: 'Paper V: General Studies IV', code: 'MAN-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Ethics, Integrity and Aptitude, Case Studies.'] }
      ]
    }
  ],

  'meghalaya-psc': [
    {
      stageName: 'Meghalaya PSC MCS Preliminary Examination (Objective - 200 Marks)',
      description: 'Single screening paper covering General Studies, Aptitude and Meghalaya Heritage.',
      papers: [
        {
          name: 'General Studies & Mental Ability',
          code: 'MEGH-PRE',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'History of India and Indian National Movement',
            'Meghalaya History, Customary Laws and Society (Khasi, Jaintia, Garo matrilineal systems)',
            'Sixth Schedule of the Constitution and Autonomous District Councils (KHADC, JHADC, GHADC)',
            'Geography of India and Meghalaya (Plateau ecology, Cherrapunji/Mawsynram rainfall, Living Root Bridges)',
            'Indian and Meghalaya Economy, Tourism and Horticulture',
            'General Science, Environment and Logical reasoning'
          ]
        }
      ]
    },
    {
      stageName: 'Meghalaya PSC Mains Written Examination (Descriptive - 1750 Marks)',
      description: 'English qualifying, Essay, General Studies I-IV and Optional subjects.',
      papers: [
        { name: 'General English (Qualifying)', code: 'MEGH-ENG', duration: '3 Hours', totalMarks: 300, nature: 'Qualifying', topics: ['Précis, Comprehension, Essay, Vocabulary.'] },
        { name: 'Paper I: Essay', code: 'MEGH-ESSAY', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Two comprehensive essays on contemporary themes.'] },
        { name: 'Paper II: General Studies I', code: 'MEGH-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian Heritage, History, Geography, Meghalaya Culture and Society.'] },
        { name: 'Paper III: General Studies II', code: 'MEGH-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Constitution, Polity, Sixth Schedule Administration, Governance.'] },
        { name: 'Paper IV: General Studies III', code: 'MEGH-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Economy, Science & Technology, Mineral Resources (Limestone/Coal), Ecology.'] },
        { name: 'Paper V: General Studies IV', code: 'MEGH-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Ethics, Integrity and Aptitude in Public Service.'] }
      ]
    }
  ],

  'mizoram-psc': [
    {
      stageName: 'Mizoram PSC MCS Preliminary Examination (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each covering General Studies and CSAT.',
      papers: [
        {
          name: 'General Studies Paper-I',
          code: 'MIZ-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Indian History and National Movement', 'History and Culture of Mizoram (Mizo Customary Law, Tlawmngaihna, Chapchar Kut)', 'Geography of India and Mizoram', 'Constitution, Polity and Article 371G special provisions', 'Economy of Mizoram, Bamboo flowering and Border Trade (Zokhawthar)', 'Current events and General Science']
        },
        {
          name: 'General Studies Paper-II (Aptitude)',
          code: 'MIZ-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning', 'Decision-making', 'Basic numeracy']
        }
      ]
    },
    {
      stageName: 'Mizoram PSC Mains Written Examination (Descriptive - 1750 Marks)',
      description: 'General English qualifying, Essay, General Studies I-IV and Optional subjects.',
      papers: [
        { name: 'General English', code: 'MIZ-ENG', duration: '3 Hours', totalMarks: 300, nature: 'Qualifying', topics: ['Comprehension, Précis, Essay, Grammar.'] },
        { name: 'Paper I: Essay', code: 'MIZ-ESSAY', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Essays on socio-economic, administrative and cultural themes.'] },
        { name: 'Paper II: General Studies I', code: 'MIZ-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['History, Heritage, Society of India and Mizoram, Physical Geography.'] },
        { name: 'Paper III: General Studies II', code: 'MIZ-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Constitution, Article 371G, Village Councils, Governance and IR.'] },
        { name: 'Paper IV: General Studies III', code: 'MIZ-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Economy of Mizoram, Kaladan Multi-Modal Transit project, Environment.'] },
        { name: 'Paper V: General Studies IV', code: 'MIZ-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Ethics, Integrity, Aptitude and Case Studies.'] }
      ]
    }
  ],

  npsc: [
    {
      stageName: 'Nagaland PSC NCS Preliminary Examination (Objective - 200 Marks)',
      description: 'Single comprehensive objective screening paper of 200 marks testing General Studies, CSAT, and Nagaland Heritage.',
      papers: [
        {
          name: 'General Studies (NPSC Prelims)',
          code: 'NPSC-PRE',
          duration: '3 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'History of India and Indian National Movement',
            'Nagaland History, Tribal Traditions and Customary Laws (Article 371A constitutional safeguards)',
            'Physical, Social and Economic Geography of India and Nagaland',
            'Indian Constitution, Political System and Panchayati Raj / Village Councils in Nagaland',
            'Economic and Social Development, Agriculture and Forest Resources',
            'General Science, Environment and Biodiversity',
            'General Mental Ability and Basic Numeracy'
          ]
        }
      ]
    },
    {
      stageName: 'Nagaland PSC NCS Mains Written Examination (Descriptive - 600 Marks)',
      description: 'Three compulsory papers: General English, General Studies-I, and General Studies-II.',
      papers: [
        { name: 'Paper I: General English', code: 'NPSC-M-ENG', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Essay, Précis, Letter writing, Comprehension, Usage and Vocabulary.'] },
        { name: 'Paper II: General Studies I', code: 'NPSC-M-GS1', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['History of Modern India and Indian Culture, Current Events, Statistical Analysis, Graphs and Diagrams.'] },
        { name: 'Paper III: General Studies II', code: 'NPSC-M-GS2', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Indian Polity and Nagaland Governance (Article 371A), Indian Economy and Geography of India/Nagaland, Role of S&T.'] }
      ]
    }
  ],

  spsc: [
    {
      stageName: 'Sikkim PSC Combined Civil Services Prelims (Objective - 400 Marks)',
      description: 'Two papers of 200 marks each: Paper 1 General Studies; Paper 2 Aptitude (qualifying with 33%).',
      papers: [
        {
          name: 'Paper-I: General Studies',
          code: 'SPSC-PRE-1',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: ['Indian History and National Movement', 'Sikkim History and Heritage (Chogyal dynasty, 1975 Merger, Article 371F)', 'Geography of India and Sikkim (Khangchendzonga National Park, Glaciers)', 'Indian Constitution and Sikkim Governance', 'Economy of Sikkim (100% Organic State, Ecotourism, Hydropower)', 'General Science and Current Affairs']
        },
        {
          name: 'Paper-II: General Aptitude Test',
          code: 'SPSC-PRE-2',
          duration: '2 Hours',
          totalMarks: 200,
          nature: 'Qualifying',
          topics: ['Comprehension', 'Interpersonal skills', 'Logical reasoning and decision making', 'Basic numeracy']
        }
      ]
    },
    {
      stageName: 'Sikkim PSC Mains Written Examination (Descriptive - 1750 Marks)',
      description: 'English qualifying, Essay, General Studies I-IV and Optional subjects.',
      papers: [
        { name: 'Compulsory English', code: 'SPSC-ENG', duration: '3 Hours', totalMarks: 300, nature: 'Qualifying', topics: ['Comprehension, Précis, Vocabulary, Short essay.'] },
        { name: 'Paper I: Essay', code: 'SPSC-ESSAY', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Essays on national, environmental and Himalayan state themes.'] },
        { name: 'Paper II: General Studies I', code: 'SPSC-GS1', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Indian & Sikkim Culture, History, Himalayan Geography and Society.'] },
        { name: 'Paper III: General Studies II', code: 'SPSC-GS2', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Constitution, Article 371F, Sikkim Administration, Governance.'] },
        { name: 'Paper IV: General Studies III', code: 'SPSC-GS3', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Organic Agriculture, Tourism Economics, Environmental Conservation.'] },
        { name: 'Paper V: General Studies IV', code: 'SPSC-GS4', duration: '3 Hours', totalMarks: 250, nature: 'Descriptive', topics: ['Ethics, Integrity and Aptitude in Public Service.'] }
      ]
    }
  ],

  tpsc: [
    {
      stageName: 'Tripura PSC TCS / TPS Preliminary Examination (Objective - 200 Marks)',
      description: 'Single screening paper covering General Studies, English, and Mental Ability.',
      papers: [
        {
          name: 'General Studies and General English',
          code: 'TPSC-PRE',
          duration: '2.5 Hours',
          totalMarks: 200,
          nature: 'Objective (MCQ)',
          topics: [
            'English Composition (40 Marks)',
            'History of India and Indian National Movement (40 Marks)',
            'Physical, Social and Economic Geography of India and Tripura (40 Marks)',
            'Constitution of India, Sixth Schedule and Tripura Tribal Areas Autonomous District Council (TTAADC) (40 Marks)',
            'General Science, Environment, Economy of Tripura and General Mental Ability (40 Marks)'
          ]
        }
      ]
    },
    {
      stageName: 'Tripura PSC Mains Written Examination (Descriptive - 800 Marks)',
      description: 'Compulsory papers covering English, Bengali/Kokborok, and General Studies.',
      papers: [
        { name: 'Paper I: English Composition', code: 'TPSC-M-ENG', duration: '3 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['Essay, Précis, Letter writing, Comprehension.'] },
        { name: 'Paper II: Bengali or Alternative English or Kokborok', code: 'TPSC-M-LANG', duration: '3 Hours', totalMarks: 100, nature: 'Descriptive', topics: ['Translation, Essay, Vocabulary, Composition.'] },
        { name: 'Paper III: General Studies I', code: 'TPSC-M-GS1', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Indian History and Culture, Geography of India and Tripura, Natural Resources.'] },
        { name: 'Paper IV: General Studies II', code: 'TPSC-M-GS2', duration: '3 Hours', totalMarks: 200, nature: 'Descriptive', topics: ['Constitution of India, Public Administration, TTAADC Governance, Economy of Tripura.'] }
      ]
    }
  ]
};
