import { Subject } from '../../types';

export const HISTORY_SUBJECT: Subject = {
  id: 'history',
  name: 'Modern Indian History & Freedom Movement',
  iconName: 'Landmark',
  description: 'Colonial expansion, agrarian uprisings, Revolt of 1857, socio-religious reforms, Gandhian mass movements, and post-independence integration.',
  topics: [
    {
      id: 'hist-resistance-reform',
      subjectId: 'history',
      title: 'Colonial Penetration, Early Resistance & Socio-Religious Reform',
      description: 'Economic drain, 1857 uprising, Queen Victoria Proclamation, and 19th-century intellectual awakenings.',
      subtopics: [
        {
          id: 'sub-hist-revolt-1857',
          topicId: 'hist-resistance-reform',
          subjectId: 'history',
          title: 'The Revolt of 1857: Agrarian Grievances, Military Reorganization & Consequences',
          summary: 'In-depth analysis of structural causes, Doctrine of Lapse, religious spark, key regional leaders, and British Crown transition.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'The uprising of 1857 was not an isolated mutiny, but the culmination of a century of accumulated peasant, tribal, and princely resistance against Company rule.',
            'It exposed the predatory fiscal extraction of the East India Company, destroyed the Company charter, and prompted the direct assumption of imperial governance by the British Crown.'
          ],
          coreNotesSections: [
            {
              heading: 'Structural Causes & Catalysts',
              points: [
                'Economic Ruin: Exploitative land tenure systems (Permanent Settlement, Ryotwari, Mahalwari) resulted in widespread peasant impoverishment and rural indebtedness. Traditional artisanal handicrafts were devastated by British free-trade duties, creating acute de-industrialization.',
                'Political Discontent: Lord Dalhousie’s aggressive expansion under the Doctrine of Lapse annexed Satara (1848), Jaitpur, Sambalpur (1849), Baghat (1850), Udaipur (1852), Jhansi (1853), and Nagpur (1854). The annexation of Awadh in 1856 on the grounds of "misgovernance" deeply aggrieved sepoys, as over 75,000 men in the Bengal Army hailed from Awadh.',
                'Military Grievances: Indian sepoys were discriminated against in emoluments, promotions (highest post reachable was Subedar), and racial slights. The General Service Enlistment Act of 1856 compelled overseas service, which violated caste beliefs regarding crossing the sea (Kala Pani).',
                'Immediate Spark: Introduction of the 1853 Enfield Pattern rifle with greased paper cartridges suspected of being lubricated with tallow of cattle and swine fat.'
              ]
            },
            {
              heading: 'Outbreak, Main Theatres & Regional Leadership',
              points: [
                'March 29, 1857: Mangal Pandey of the 34th Bengal Native Infantry at Barrackpore struck down British officers.',
                'May 10, 1857: Sepoys at Meerut mutinied, broke open jail, and marched onto Delhi, proclaiming Mughal Emperor Bahadur Shah Zafar as Shahenshah-e-Hindustan.',
                'Major Epicenters & Commanders: Delhi (Bahadur Shah II & General Bakht Khan), Kanpur (Nana Saheb, assisted by Tatya Tope and Azimullah Khan), Lucknow (Begum Hazrat Mahal & Birjis Qadir), Jhansi (Rani Lakshmibai), Jagdishpur/Bihar (80-year-old landlord Kunwar Singh & Amar Singh), Faizabad (Maulvi Ahmadullah), Bareilly (Khan Bahadur Khan).',
                'Deccan & Southern Manifestations: Localized uprisings took place in Shorapur, Satara, and Agency hill tracts, though South India largely remained insulated from organized sepoy warfare.'
              ]
            },
            {
              heading: 'Suppression & Structural Consequences',
              points: [
                'Causes of Failure: Lack of unified pan-India coordination; modern armaments deficit; absence of forward-looking socio-political vision; neutrality or active military backing of the British by Indian princely states (Scindia of Gwalior, Holkar of Indore, Nizam of Hyderabad, Sikh rulers).',
                'Government of India Act 1858: Liquidated the East India Company; transferred imperial governance directly to the British Crown acting through a cabinet minister styled as Secretary of State for India, assisted by a 15-member Council of India. Governor-General received the additional title of Viceroy.',
                'Queen’s Proclamation (Nov 1, 1858): Pledged non-interference in religious beliefs, respect for ancient customs, and cessation of territorial annexation under the Doctrine of Lapse.',
                'Military Reorganization & Peel Commission: Drastically altered the European-to-Indian soldier ratio; introduced the "Martial and Non-Martial" community doctrine to deliberately split regiments along caste and regional lines to preclude collective rebellion.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The Revolt of 1857 broke out on May 10, 1857, at Meerut, culminating a century of resentment against East India Company rule.',
            'Line 2: Economic causes included ruinous land revenue systems, de-industrialization, and destruction of traditional handloom artisans.',
            'Line 3: Lord Dalhousie’s Doctrine of Lapse annexed Satara (1848), Sambalpur, Jhansi (1853), Nagpur, and Awadh (1856) on misgovernance.',
            'Line 4: Immediate trigger was the Enfield Rifle with cartridges greased with beef and pig fat, offending Hindu and Muslim sepoys.',
            'Line 5: Mangal Pandey of the 34th Bengal Native Infantry mutinied at Barrackpore on March 29, 1857, signaling the prelude.',
            'Line 6: Major leaders included Bahadur Shah Zafar & Bakht Khan (Delhi), Nana Saheb & Tatya Tope (Kanpur), Begum Hazrat Mahal (Lucknow), Rani Lakshmibai (Jhansi), and Kunwar Singh (Bihar).',
            'Line 7: Prominent regional struggles in Bihar were spearheaded by Kunwar Singh of Jagdishpur who outmaneuvered British troops.',
            'Line 8: The uprising failed due to lack of modern weaponry, pan-India synchronization, and siding of Indian princely states with the British.',
            'Line 9: Post-revolt, the Government of India Act 1858 ended Company rule, transferring administration to the British Crown under a Secretary of State.',
            'Line 10: The Peel Commission restructured the British Indian Army along communal lines under the Martial Race doctrine to avert unity.'
          ],
          prelimsPointers: [
            'Viceroy at the time of the Revolt: Lord Canning (1856-1862), who became the first Viceroy of India.',
            'First city recaptured by the British: Delhi, recaptured in September 1857 under John Nicholson.',
            'Book "The Indian War of Independence 1857": Authored by Vinayak Damodar Savarkar in 1909.',
            'Mughal Emperor exiled: Bahadur Shah Zafar was arrested and exiled to Rangoon, Burma, where he died in 1862.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Was the 1857 uprising merely a sepoy mutiny or a proto-national war of liberation? Evaluate the competing historiographical perspectives.',
            'Analytical Dimension 2: Examine how the agrarian and peasant grievances provided the social base for the uprising in the Gangetic plains.',
            'Analytical Dimension 3: Detail the administrative, military, and policy shifts inaugurated by Queen Victoria’s 1858 Proclamation.'
          ],
          keyArticlesOrTerms: ['Doctrine of Lapse', 'Govt of India Act 1858', 'Kunwar Singh (Jagdishpur)', 'Nana Saheb', 'Peel Commission'],
          keyPYQReference: 'UPSC CSE Prelims 2018, BPSC 66th CCE (Kunwar Singh), APPSC Group 1 2019.'
        },
        {
          id: 'sub-hist-reform-movements',
          topicId: 'hist-resistance-reform',
          subjectId: 'history',
          title: 'Socio-Religious Reform Movements: Rationalism, Caste Emancipation & Social Awakening',
          summary: 'Detailed study of reformist and revivalist currents: Raja Ram Mohan Roy, Ishwar Chandra Vidyasagar, Jyotirao Phule, and Narayana Guru.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'The 19th-century socio-religious reform movements formed the intellectual crucible of modern Indian nationalism, reconciling indigenous philosophical traditions with rational humanism.',
            'Divided into reformist streams (Brahmo Samaj, Prarthana Samaj, Aligarh) and revivalist streams (Arya Samaj, Deoband), these movements targeted inhuman social evils, championed gender justice, and challenged ritualistic caste hegemony.'
          ],
          coreNotesSections: [
            {
              heading: 'Bengal Renaissance & Women’s Emancipation',
              points: [
                'Raja Ram Mohan Roy (1772-1833): Father of Modern Indian Renaissance. Founded the Brahmo Sabha in 1828 (later Brahmo Samaj); synthesized Upanishadic monotheism with Western rationalism; relentless advocacy culminated in Lord William Bentinck passing the historic Regulation XVII in 1829 declaring Sati illegal and punishable as culpable homicide.',
                'Ishwar Chandra Vidyasagar (1820-1891): Principal of Sanskrit College, opened Sanskrit education to non-Brahmins; marshaled Vedic texts to prove scriptural sanction for widow remarriage, leading to the enactment of the Hindu Widows’ Remarriage Act XV of 1856 under Lord Dalhousie/Lord Canning.',
                'Keshub Chandra Sen & Sadharan Brahmo Samaj: Popularized Brahmo teachings pan-India; instrumental in Native Marriage Act 1872; later schism resulted in the creation of Sadharan Brahmo Samaj (1878) led by Ananda Mohan Bose and Sivanath Sastri.'
              ]
            },
            {
              heading: 'Lower Caste Emancipation & Anti-Brahminical Assertions',
              points: [
                'Jyotirao Govindrao Phule (1827-1890): Pioneer of social democracy in Western India. Founded Satyashodhak Samaj (1873) in Pune to liberate Shudras and Ati-Shudras; established the first indigenous girls school at Bhide Wada (1848) with his wife Savitribai Phule; penned seminal critique "Gulamgiri" (Slavery) in 1873 dedicated to the American abolitionist movement.',
                'Sri Narayana Guru (1856-1928): Led the anti-caste movement in Kerala; consecrated a Shiva idol at Aruvippuram (1888) defying Brahminical monopoly, declaring "one caste, one religion, one God for all men"; founded the SNDP Yogam (1903).',
                'Periyar E.V. Ramasamy (1879-1973): Initiated the Self-Respect Movement (1925) in Tamil Nadu, rejecting the caste system, superstitious rituals, and Brahminical hegemony, advocating rationalism and women’s self-determination.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: 19th-century socio-religious reforms laid the intellectual and social foundations for modern Indian nationalism.',
            'Line 2: Raja Ram Mohan Roy established Brahmo Samaj (1828) and led the historic campaign that banned Sati in 1829 under Regulation XVII.',
            'Line 3: Ishwar Chandra Vidyasagar spearheaded the campaign that enacted the Hindu Widows Remarriage Act of 1856.',
            'Line 4: Jyotirao Phule founded Satyashodhak Samaj in 1873 to challenge ritualistic Brahminical hegemony and caste discrimination.',
            'Line 5: Phule and Savitribai Phule pioneered female education by founding India’s first school for girls in Pune in 1848.',
            'Line 6: In 1873, Jyotirao Phule wrote "Gulamgiri" (Slavery), dedicating it to the anti-slavery struggle in the United States.',
            'Line 7: Swami Dayananda Saraswati founded Arya Samaj (1875) with the slogan "Go Back to the Vedas", launching the Shuddhi movement.',
            'Line 8: Swami Vivekananda represented Hindu philosophy at the 1893 Parliament of Religions in Chicago and founded Ramakrishna Mission (1897).',
            'Line 9: Sri Narayana Guru consecrated the Aruvippuram temple in Kerala (1888) propagating "One Caste, One Religion, One God for Man".',
            'Line 10: Sir Syed Ahmed Khan established the Aligarh Movement and founded the Mohammedan Anglo-Oriental College (1875) for modern education.'
          ],
          prelimsPointers: [
            'Banning of Sati: Bengal Sati Regulation XVII of 1829 by Governor-General Lord William Bentinck.',
            'First Girls School: Established by Jyotirao and Savitribai Phule in 1848 at Bhide Wada, Pune.',
            'Aruvippuram Consecration Year: 1888 by Sri Narayana Guru.',
            'Age of Consent Act 1891: Raised the age of consent for marriage for girls from 10 to 12 years, supported by Behramji Malabari.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Compare and contrast the reform methodologies of the Brahmo Samaj in Bengal with the Satyashodhak movement in Western India.',
            'Analytical Dimension 2: Assess how the socio-religious movements fostered national consciousness while inadvertently sowing seeds of revivalist communal identity.',
            'Analytical Dimension 3: Evaluate the contribution of Savitribai Phule and Pandita Ramabai in shaping feminist consciousness in 19th-century colonial India.'
          ],
          keyArticlesOrTerms: ['Raja Ram Mohan Roy', 'Satyashodhak Samaj', 'Gulamgiri (1873)', 'Aruvippuram Movement', 'Aligarh Movement'],
          keyPYQReference: 'UPSC CSE Prelims 2021, MPSC Rajyaseva 2022 (Phule reforms), UPPSC PCS 2020.'
        }
      ]
    },
    {
      id: 'hist-freedom-struggle',
      subjectId: 'history',
      title: 'Indian Freedom Struggle, Mass Movements & Decolonization',
      description: 'Gandhian Satyagraha, Revolutionary Nationalists, INA, Mountbatten Plan, and Post-Independence Consolidation.',
      subtopics: [
        {
          id: 'sub-hist-gandhian-era',
          topicId: 'hist-freedom-struggle',
          subjectId: 'history',
          title: 'Gandhian Mass Mobilization: Non-Cooperation, Civil Disobedience & Quit India',
          summary: 'Evolution of non-violent Satyagraha techniques, mass base expansion, Round Table conferences, and the 1942 August Kranti.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'The arrival of Mohandas Karamchand Gandhi in 1915 redefined the Indian national movement, transitioning it from elite constitutional petitioning into an organized, non-violent mass movement incorporating peasants, workers, women, and students.',
            'Through Satyagraha, constructive work, and strategic pauses (Struggle-Truce-Struggle), Gandhi mobilized the masses against British imperial legitimacy.'
          ],
          coreNotesSections: [
            {
              heading: 'Early Experiments & Non-Cooperation Movement (1920-1922)',
              points: [
                'Early Laboratory: Champaran Satyagraha (1917, against Tinkathia indigo system), Ahmedabad Mill Strike (1918, first hunger strike for 35% wage hike), and Kheda Satyagraha (1918, first non-cooperation for revenue remission).',
                'Rowlatt Act (1919) & Jallianwala Bagh Massacre: Nationwide Hartal against detention without trial; General Dyer ordered indiscriminate firing on unarmed peaceful gathering at Amritsar on April 13, 1919 (Baisakhi Day), killing hundreds. Rabindranath Tagore renounced his Knighthood.',
                'Non-Cooperation Movement: Endorsed at the special session of INC in Calcutta (Sept 1920) and ratified at Nagpur (Dec 1920); allied with the Khilafat committee. Boycott of government schools, courts, foreign cloth, and titles.',
                'Suspension at Chauri Chaura: On February 4, 1922, a violent clash led to the burning of a police station killing 22 policemen. Gandhi unilaterally withdrew the movement, insisting that an undisciplined movement risked degenerating into violent anarchy.'
              ]
            },
            {
              heading: 'Civil Disobedience Movement (1930-1934) & Round Table Conferences',
              points: [
                'Dandi March (Salt Satyagraha): Commenced on March 12, 1930, from Sabarmati Ashram to the coastal village of Dandi (240 miles) with 78 chosen satyagrahis; broke the salt monopoly on April 6, 1930, by picking up a fistful of natural salt.',
                'Pan-India Spread: Dharasana Salt Works raid (led by Sarojini Naidu, Imam Saheb, and Manilal Gandhi; brutal police lathi charge); Chittagong Armoury Raid (Surya Sen); Khudai Khidmatgars / Red Shirts under Khan Abdul Ghaffar Khan (Frontier Gandhi) in NWFP.',
                'Gandhi-Irwin Pact (March 1931): Suspended Civil Disobedience; British agreed to release non-violent political prisoners and permit coastal salt-making; INC agreed to attend the Second Round Table Conference.',
                'Communal Award (1932) & Poona Pact: British PM Ramsay MacDonald announced separate electorates for Depressed Classes; Gandhi undertook fast-unto-death at Yerwada Jail, Pune. Poona Pact signed between Dr. B.R. Ambedkar and Madan Mohan Malaviya on Sept 24, 1932, substituting separate electorates with joint electorates and enhanced reserved seats (increased from 71 to 148).'
              ]
            },
            {
              heading: 'Quit India Movement (1942) & Final Decolonization',
              points: [
                'Context: Failure of the Cripps Mission (1942) offering post-war Dominion Status, and the looming threat of Japanese military advance in Southeast Asia.',
                'Gowalia Tank Resolution: On August 8, 1942, the All India Congress Committee met at Bombay and ratified the Quit India Resolution. Gandhi delivered his iconic mantra: "Do or Die" (Karo ya Maro).',
                'August Kranti & Under-Ground Network: Early morning of August 9, all top leaders were arrested under Operation Zero Hour. Spontaneous mass rebellion ensued; parallel governments (Prati Sarkar) were established at Ballia (Chittu Pandey), Tamluk (Jatiya Sarkar in Midnapore), and Satara (Nana Patil). Secret underground radio operated by Usha Mehta in Bombay.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Gandhi’s early regional experiments in Champaran (1917), Ahmedabad (1918), and Kheda (1918) validated Satyagraha as a mass weapon.',
            'Line 2: The Jallianwala Bagh Massacre on April 13, 1919, alienated the Indian populace and impelled Gandhi toward non-cooperation.',
            'Line 3: The Non-Cooperation Movement (1920-1922) mobilized students, peasants, and Muslims alongside the Khilafat Movement.',
            'Line 4: Gandhi abruptly withdrew the Non-Cooperation Movement following the violent Chauri Chaura incident in February 1922.',
            'Line 5: The Civil Disobedience Movement was inaugurated with the historic Dandi Salt March (March 12 – April 6, 1930).',
            'Line 6: Sarojini Naidu and Manilal Gandhi led the unarmed non-violent protest against the Dharasana Salt Works.',
            'Line 7: The Poona Pact of September 1932 between Ambedkar and caste Hindu leaders preserved joint electorates with enhanced reserved seats.',
            'Line 8: Following the collapse of the Cripps Mission, Gandhi launched the Quit India Movement on August 8, 1942, with the call "Do or Die".',
            'Line 9: Independent parallel governments were formed during Quit India at Ballia, Tamluk, and Satara under underground leaders.',
            'Line 10: The Mountbatten Plan of June 3, 1947, provided the framework for the partition of British India and independence on August 15, 1947.'
          ],
          prelimsPointers: [
            'Champaran Satyagraha: Initiated at the behest of Raj Kumar Shukla against Tinkathia system (compulsory 3/20th indigo cultivation).',
            'Dandi March Duration & Distance: 24 days, 240 miles (385 km) with 78 followers.',
            'Frontier Gandhi: Khan Abdul Ghaffar Khan led the Khudai Khidmatgars (Servants of God), publishing the journal "Pakhtun".',
            'Poona Pact Date: September 24, 1932, at Yerwada Central Jail, Pune.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Analyze how the non-violent strategy of Gandhi systematically undermined the moral authority of the colonial British state.',
            'Analytical Dimension 2: Examine the ideological differences between Mahatma Gandhi and Dr. B.R. Ambedkar regarding caste emancipation and political representation.',
            'Analytical Dimension 3: Was the Quit India Movement a leaderless spontaneous uprising or a logical climax of two decades of nationalist mobilization?'
          ],
          keyArticlesOrTerms: ['Champaran Satyagraha 1917', 'Dandi Salt March 1930', 'Poona Pact 1932', 'Quit India Movement 1942', 'Do or Die'],
          keyPYQReference: 'UPSC CSE Prelims 2021, UPSC Mains GS-1 (2019, 2021), APPSC Group 1 2022.'
        },
        {
          id: 'sub-hist-post-independence',
          topicId: 'hist-freedom-struggle',
          subjectId: 'history',
          title: 'Post-Independence Integration, Princely States & Linguistic Reorganisation',
          summary: 'Integration of 565 princely states, Patel-Menon diplomacy, Junagadh, Hyderabad (Operation Polo), and the 1956 States Reorganisation Act.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'The transfer of power in 1947 left India fractured by the lapse of British paramountcy over 565 princely states, posing an existential danger of balkanization.',
            'Through diplomatic persuasion, the Instrument of Accession, and decisive police action, Sardar Vallabhbhai Patel and V.P. Menon unified the territory into a cohesive federal union, followed by democratic reorganization along linguistic lines.'
          ],
          coreNotesSections: [
            {
              heading: 'Integration of Princely States & The Accession Policy',
              points: [
                'Lapse of Paramountcy: Indian Independence Act 1947 terminated British paramountcy, giving princely states the legal option to join India, Pakistan, or remain theoretically independent.',
                'States Department: Headed by Sardar Vallabhbhai Patel with V.P. Menon as Secretary. Formulated the "Instrument of Accession", wherein states surrendered Defence, External Affairs, and Communications to the Union of India.',
                'Junagadh: The Nawab acceded to Pakistan despite a predominantly Hindu population. A provisional government (Arzi Hukumat) was established; a plebiscite held in February 1948 voted overwhelmingly in favor of India.',
                'Hyderabad (Operation Polo): The Nizam refused accession, backed by the communal militia "Razakars" led by Kasim Razvi. Following internal breakdown and the Telangana Peasant Armed Struggle, India launched "Operation Polo" (police action) on September 13, 1948, culminating in Hyderabad’s surrender on September 17, 1948.',
                'Kashmir: Maharaja Hari Singh initially signed a standstill agreement. Faced with Pakistani tribal invasion (Operation Gulmarg) in October 1947, he signed the Instrument of Accession on October 26, 1947.'
              ]
            },
            {
              heading: 'Linguistic Reorganisation of States (1948-1956)',
              points: [
                'Dhar Commission (1948): Appointed by Constituent Assembly; rejected linguistic basis and recommended reorganization strictly on administrative convenience.',
                'JVP Committee (1948): Comprising Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya; also rejected language as the primary criterion for state creation.',
                'Martyrdom of Potti Sreeramulu: Undertook 58-day hunger strike demanding a separate Telugu state; died on December 15, 1952. Widespread agitations compelled the Union Government to create the first linguistic state—Andhra State—on October 1, 1953, with Kurnool as capital.',
                'Fazal Ali Commission (SRC 1953-1955): Headed by Justice Fazal Ali with members K.M. Panikkar and H.N. Kunzru. Accepted language as the broad basis of reorganization while rejecting "one language, one state". Recommendations led to the States Reorganisation Act 1956 and the 7th Constitutional Amendment, abolishing Part A, B, C, D states and creating 14 States and 6 Union Territories.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: At independence, over 565 princely states occupied 48% of the territory and 28% of the population of British India.',
            'Line 2: Sardar Vallabhbhai Patel and V.P. Menon skillfully utilized the Instrument of Accession to secure national integration.',
            'Line 3: Junagadh was integrated into India following a public referendum (plebiscite) in February 1948.',
            'Line 4: Hyderabad was integrated through "Operation Polo" in September 1948 against the armed aggression of the Razakars.',
            'Line 5: Maharaja Hari Singh signed the Instrument of Accession for Jammu and Kashmir on October 26, 1947, amidst Pakistani aggression.',
            'Line 6: The Dhar Commission (1948) and JVP Committee (1948) initially rejected linguistic criteria for state borders.',
            'Line 7: The sacrifice of Potti Sreeramulu after a 58-day fast forced the formation of Andhra State on October 1, 1953, the first linguistic state.',
            'Line 8: The States Reorganisation Commission (SRC) under Justice Fazal Ali submitted its historic report in 1955.',
            'Line 9: The 7th Constitutional Amendment Act (1956) replaced the 4-tier state classification with 14 States and 6 Union Territories.',
            'Line 10: Linguistic federalism transformed regional linguistic identities into pillars of democratic unity rather than secession.'
          ],
          prelimsPointers: [
            'First Linguistic State: Andhra State formed on October 1, 1953 (Capital: Kurnool; High Court: Guntur).',
            'Operation Polo Date: September 13-17, 1948 (Hyderabad State accession).',
            'SRC Members: Justice Fazal Ali, H.N. Kunzru, K.M. Panikkar.',
            '7th Constitutional Amendment (1956): Enacted the States Reorganisation Act, abolishing Rajpramukhs.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Analyze the diplomatic strategy and statecraft of Sardar Patel in preventing the balkanization of India post-1947.',
            'Analytical Dimension 2: Has the linguistic reorganization of states consolidated Indian unity or fueled sub-nationalist centrifugal tendencies? Discuss.',
            'Analytical Dimension 3: Examine the historical backdrop and geopolitical dynamics of the accession of Jammu and Kashmir to the Indian Union.'
          ],
          keyArticlesOrTerms: ['Instrument of Accession', 'Operation Polo (1948)', 'Potti Sreeramulu', 'States Reorganisation Act 1956', 'Fazal Ali Commission'],
          keyPYQReference: 'UPSC CSE Prelims 2020, UPSC Mains GS-1 2021, APPSC Group 1 2023.'
        }
      ]
    }
  ]
};
