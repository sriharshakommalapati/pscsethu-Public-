import { Subject } from '../../types';

export const POLITY_SUBJECT: Subject = {
  id: 'polity',
  name: 'Indian Polity, Constitution & Governance',
  iconName: 'Scale',
  description: 'Constitutional framework, Fundamental Rights, Union & State Executives, Parliament, Judiciary, and Federal relations.',
  topics: [
    {
      id: 'polity-constitutional-foundations',
      subjectId: 'polity',
      title: 'Preamble, Fundamental Rights & Constitutional Foundations',
      description: 'Philosophy of the Constitution, constituent assembly deliberations, basic structural doctrines, and civic entitlements.',
      subtopics: [
        {
          id: 'sub-polity-preamble',
          topicId: 'polity-constitutional-foundations',
          subjectId: 'polity',
          title: 'The Preamble: Constitutional Philosophy, Legal Status & Landmark Precedents',
          summary: 'Comprehensive analysis of the Preamble as the philosophical compass, its amendability, and basic structure standing.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'The Preamble serves as the prologue to the Constitution of India, reflecting the aspirations, values, and ideological commitments of the sovereign people of India.',
            'Drafted upon the bedrock of the "Objectives Resolution" moved in the Constituent Assembly, it encapsulates the source of authority, nature of the Indian State, statement of national objectives, and the date of constitutional adoption.',
            'Over decades of judicial interpretation, its legal standing has transformed from being viewed as an extraneous preface to an indispensable, integral element forming part of the inviolable basic structure.'
          ],
          coreNotesSections: [
            {
              heading: 'Constitutional Evolution & Core Tenets',
              points: [
                'Historical Genesis: Rooted in the Objectives Resolution introduced on December 13, 1946, and unanimously adopted by the Constituent Assembly on January 22, 1947.',
                'Source of Authority: "We, the People of India" declares that sovereign power emanates directly from the citizenry, rejecting colonial or monarchical sovereignty.',
                'Nature of the Polity: Sovereign (internally supreme and externally free of foreign dominance), Socialist (democratic socialism seeking elimination of poverty and inequality rather than state monopoly), Secular (equal respect and state protection to all faiths without an established state religion), Democratic (representative parliamentary democracy based on universal adult suffrage), Republic (head of state is elected for a fixed tenure, eliminating hereditary privilege).',
                'Cardinal Objectives: Justice (social, economic, political), Liberty (thought, expression, belief, faith, worship), Equality (status and opportunity), and Fraternity (dignity of the individual and unity/integrity of the Nation).'
              ]
            },
            {
              heading: 'Judicial Trajectory on Legal Standing',
              points: [
                'Berubari Union Reference (1960): An eight-judge bench ruled that while the Preamble reflects the minds of the constitution-makers, it is NOT an integral part of the Constitution and cannot be enforced as an independent source of power.',
                'Kesavananda Bharati v. State of Kerala (1973): A historic 13-judge bench definitively overruled Berubari, affirming that the Preamble is an integral part of the Constitution and can be utilized to interpret ambiguous statutory or constitutional provisions.',
                'Union Government v. LIC of India (1995): Reaffirmed that the Preamble is an intrinsic and inseparable part of the constitutional scheme.',
                'Non-Justiciable Nature: The provisions of the Preamble are non-enforceable in a court of law; it cannot independently confer substantive power upon legislatures nor abridge powers granted in the main body.'
              ]
            },
            {
              heading: 'Amendability & The Basic Structure Doctrine',
              points: [
                'Scope of Article 368: The Preamble is subject to constitutional amendment under Article 368, provided the amendment does not alter or damage the basic structure.',
                '42nd Constitutional Amendment Act (1976): The only amendment to the Preamble to date. It inserted three terms: "Socialist", "Secular", and "Integrity" (altering "unity of the Nation" to "unity and integrity of the Nation").',
                'Basic Structure Intersection: Principles embodied in the Preamble—such as secularism, democracy, republican character, rule of law, and social justice—constitute core facets of the Basic Structure that cannot be abrogated even through constituent amendment powers.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The Preamble is the introductory statement embodying the philosophy, objectives, and ideals of the Constitution of India.',
            'Line 2: It is based on Pandit Jawaharlal Nehru’s historic "Objectives Resolution" moved on December 13, 1946.',
            'Line 3: The opening phrase "We, the People of India" establishes that ultimate sovereignty resides within the Indian citizenry.',
            'Line 4: It characterizes the Indian State as Sovereign, Socialist, Secular, Democratic, and Republic.',
            'Line 5: The cardinal objectives promised to every citizen are Justice, Liberty, Equality, and Fraternity.',
            'Line 6: In the Berubari Union case (1960), the Supreme Court initially ruled that the Preamble was not part of the Constitution.',
            'Line 7: In the landmark Kesavananda Bharati case (1973), a 13-judge bench overruled Berubari, holding the Preamble to be an integral part.',
            'Line 8: The Preamble is non-justiciable and cannot independently confer legislative powers or limit express constitutional provisions.',
            'Line 9: It was amended only once by the 42nd Constitutional Amendment Act of 1976, adding Socialist, Secular, and Integrity.',
            'Line 10: Crucial components of the Preamble form the unalterable Basic Structure of the Indian Constitution.'
          ],
          prelimsPointers: [
            'Date of Adoption: November 26, 1949 (Constitution Day / Samvidhan Divas).',
            'Commencement Date: January 26, 1950 (Republic Day).',
            'Order of Key Terms in Text: Sovereign, Socialist, Secular, Democratic, Republic.',
            'Order of Objectives: Justice (Social, Economic, Political); Liberty (Thought, Expression, Belief, Faith, Worship); Equality (Status and Opportunity); Fraternity (Dignity and Unity/Integrity).',
            'Amendment Status: Amended once via 42nd CAA (1976) under Prime Minister Indira Gandhi.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically evaluate the constitutional implications of incorporating "Socialist" and "Secular" through the 42nd Amendment in light of post-1991 economic liberalization.',
            'Analytical Dimension 2: Examine how the Supreme Court has utilized the Preamble as an interpretive prism in defining the substantive contours of Articles 14 and 21.',
            'Analytical Dimension 3: Discuss the conceptual distinction between "Negative Secularism" in Western jurisprudence and the Indian constitutional doctrine of "Principled Distance" (Sarva Dharma Sambhava).'
          ],
          keyArticlesOrTerms: ['Objectives Resolution', '42nd Amendment Act 1976', 'Kesavananda Bharati Case (1973)', 'Article 368', 'Basic Structure Doctrine'],
          keyPYQReference: 'UPSC CSE Prelims 2020, UPSC Mains GS-2 (2017, 2021), APPSC Group 1 (2022).'
        },
        {
          id: 'sub-polity-fundamental-rights',
          topicId: 'polity-constitutional-foundations',
          subjectId: 'polity',
          title: 'Fundamental Rights & Constitutional Remedies: Judicial Review & Article 21 Evolution',
          summary: 'In-depth breakdown of Part III, Articles 12-35, the Golden Triangle doctrine, and writ jurisdictions under Articles 32 and 226.',
          readingTimeMinutes: 10,
          conceptualFramework: [
            'Fundamental Rights enshrined in Part III (Articles 12-35) constitute the Magna Carta of India, guaranteeing negative obligations upon the State to preserve civil liberties while enabling positive egalitarian interventions.',
            'Judicial enforcement through Article 32 (Supreme Court) and Article 226 (High Courts) vests the higher judiciary with extensive review authority, ensuring constitutional supremacy over legislative and executive actions.'
          ],
          coreNotesSections: [
            {
              heading: 'Structural Framework & Article 12/13 Dynamics',
              points: [
                'Definition of "State" (Article 12): Encompasses Union Government, Parliament, State Governments, State Legislatures, local authorities (Municipalities, Panchayats), and other statutory/non-statutory instrumentalities (LIC, ONGC, SAIL) satisfying the instrumentality test laid down in Ajay Hasia (1981) and Pradeep Kumar Biswas (2002).',
                'Doctrine of Judicial Review (Article 13): Article 13(1) and 13(2) declare that all pre-constitutional and post-constitutional laws inconsistent with Part III are void to the extent of inconsistency.',
                'Subordinate Doctrines under Article 13: Doctrine of Severability (only offending clause is struck down if separable), Doctrine of Eclipse (law remains dormant, overshadowed by fundamental rights), and Doctrine of Non-Waiver of Fundamental Rights (citizens cannot voluntarily forfeit fundamental rights, Behram Khurshed case).'
              ]
            },
            {
              heading: 'The Golden Triangle: Articles 14, 19 & 21',
              points: [
                'Article 14 (Equality): Guarantees equality before the law (British concept, negative obligation) and equal protection of the laws (American concept, affirmative action permitted). Prohibits class legislation while allowing reasonable classification satisfying the two-fold test (intelligible differentia and rational nexus). In E.P. Royappa (1974), the Supreme Court introduced the "arbitrariness test", establishing that equality is antithetical to arbitrariness.',
                'Article 19 (Six Democratic Freedoms): Speech and expression, peaceful assembly, forming associations/unions/cooperatives (97th Amendment), free movement, residence, and practicing any profession. Subject strictly to exhaustively listed "reasonable restrictions" under Articles 19(2) through 19(6).',
                'Article 21 (Life & Personal Liberty): Evolved from the narrow literalist interpretation in A.K. Gopalan (1950) to expansive substantive due process in Maneka Gandhi (1978). Expanded to encompass Right to Clean Environment (Subhash Kumar 1991), Right to Privacy (K.S. Puttaswamy 2017), Right to Livelihood (Olga Tellis 1985), and Right to Dignified Death / Passive Euthanasia (Common Cause 2018).'
              ]
            },
            {
              heading: 'Constitutional Remedies & Prerogative Writs (Articles 32 & 226)',
              points: [
                'Article 32: Itself a Fundamental Right. Dr. B.R. Ambedkar famously called it "the very soul of the Constitution and the very heart of it". Cannot be suspended except during National Emergency under Article 359.',
                'Article 226: High Courts possess wider writ jurisdiction than the Supreme Court, issuing writs not only for Fundamental Rights but also for any legal right.',
                'Types of Writs: Habeas Corpus (to produce the body, protects against unlawful detention), Mandamus (we command public official/body to perform statutory duty), Prohibition (issued to lower courts/tribunals to prevent excess jurisdiction), Certiorari (quashes orders passed by lower bodies lacking jurisdiction or in breach of natural justice), Quo-Warranto (inquires into legal title to a public substantive office).'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Fundamental Rights are enshrined in Part III (Articles 12 to 35), inspired by the American Bill of Rights.',
            'Line 2: Article 12 defines "State" broadly to include Union/State executives, legislatures, local bodies, and state instrumentalities.',
            'Line 3: Article 13 provides the bedrock for Judicial Review, invalidating laws inconsistent with or in derogation of Fundamental Rights.',
            'Line 4: Articles 14, 19, and 21 constitute the celebrated "Golden Triangle", functioning in constitutional synergy.',
            'Line 5: In A.K. Gopalan (1950), the Supreme Court adopted a strict literalist view of "Procedure Established by Law".',
            'Line 6: In Maneka Gandhi (1978), the Supreme Court held that procedural deprivation must be "just, fair, and reasonable".',
            'Line 7: In K.S. Puttaswamy (2017), a 9-judge Constitution bench held the Right to Privacy is an intrinsic fundamental right under Article 21.',
            'Line 8: Articles 20 and 21 cannot be suspended during a National Emergency under Article 352, as mandated by the 44th Amendment (1978).',
            'Line 9: Article 32 gives the Right to Constitutional Remedies, famously termed by Dr. B.R. Ambedkar as the "Heart and Soul of the Constitution".',
            'Line 10: Five high-prerogative writs are available under Article 32 and 226: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto.'
          ],
          prelimsPointers: [
            'Writ Jurisdiction: Article 226 of High Courts is broader in scope than Article 32, as it extends to non-fundamental legal rights as well.',
            'Rights available exclusively to Citizens: Articles 15, 16, 19, 29, and 30.',
            'Rights available to both Citizens and Foreigners: Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28.',
            'Right to Property: Removed from Part III by the 44th Constitutional Amendment (1978) and made a legal/constitutional right under Article 300A in Part XII.',
            'Right to Education: Article 21A inserted via the 86th Constitutional Amendment Act (2002).'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Analyze how the transition from "procedure established by law" to "due process" enriched the rights jurisprudence of Indian courts.',
            'Analytical Dimension 2: Critique the balance between surveillance mechanisms and the informational privacy doctrine laid down in the Puttaswamy judgment.',
            'Analytical Dimension 3: Compare and contrast the scope and limitations of writ jurisdiction under Article 32 versus Article 226.'
          ],
          keyArticlesOrTerms: ['Articles 14, 19, 21', 'Maneka Gandhi Case 1978', 'Puttaswamy Case 2017', 'Article 32 & 226', 'Golden Triangle'],
          keyPYQReference: 'UPSC CSE Prelims 2021 (Right to Privacy), APPSC Group 1 2023, UPPSC PCS 2022.'
        },
        {
          id: 'sub-polity-dpsp-duties',
          topicId: 'polity-constitutional-foundations',
          subjectId: 'polity',
          title: 'Directive Principles (DPSP) & Fundamental Duties: Harmony & Implementation',
          summary: 'Detailed examination of Part IV welfare state mandates, ideological streams, Minerva Mills balance, and Part IVA duties.',
          readingTimeMinutes: 7,
          conceptualFramework: [
            'Directive Principles of State Policy (Part IV, Articles 36-51) embody the positive vision of establishing social and economic democracy, transforming political democracy into substantive socio-economic emancipation.',
            'Borrowed from the 1937 Irish Constitution, DPSPs serve as guiding lights for lawmakers and administrators while remaining non-justiciable under Article 37.',
            'Fundamental Duties (Part IVA, Article 51A) serve as moral obligations reminding citizens that the enjoyment of constitutional liberties is inextricably linked with civic responsibility.'
          ],
          coreNotesSections: [
            {
              heading: 'Ideological Classification of Directive Principles',
              points: [
                'Socialistic Principles: Direct state action to minimize inequalities in income, status, and opportunity (Article 38); equitable distribution of material resources to subserve common good (Article 39b); prevention of concentration of wealth (Article 39c); equal pay for equal work; right to work, education, and public assistance (Article 41); living wage and decent standard of life (Article 43); workers participation in management (Article 43A).',
                'Gandhian Principles: Organization of village panchayats as units of self-government (Article 40); promotion of cottage industries (Article 43); promotion of educational and economic interests of SCs, STs, and weaker sections (Article 46); prohibition of intoxicating drinks and drugs (Article 47); preservation and improvement of cattle breeds and prohibition of cow slaughter (Article 48).',
                'Liberal-Intellectual Principles: Uniform Civil Code for all citizens (Article 44); early childhood care and education (Article 45); organization of agriculture and animal husbandry on modern scientific lines (Article 48); protection and improvement of environment and safeguarding forests and wildlife (Article 48A); separation of judiciary from executive in public services (Article 50); promotion of international peace and security (Article 51).'
              ]
            },
            {
              heading: 'Fundamental Rights vs. DPSP Conflict & Balance',
              points: [
                'Champakam Dorairajan (1951): The Supreme Court held that Directive Principles must conform to and run as subsidiary to Fundamental Rights.',
                'Kesavananda Bharati (1973): Upheld Article 31C which provided that laws giving effect to Article 39(b) and 39(c) could not be declared void for violating Article 14 or 19.',
                'Minerva Mills v. Union of India (1980): Struck down the expanded Article 31C introduced by the 42nd Amendment. Chief Justice Chandrachud pronounced that the Indian Constitution is founded on the bedrock of the balance between Fundamental Rights and Directive Principles; to give absolute primacy to one over the other is to destroy the harmony of the Constitution.'
              ]
            },
            {
              heading: 'Fundamental Duties (Part IVA, Article 51A)',
              points: [
                'Swaran Singh Committee (1976): Recommended the inclusion of a separate chapter on fundamental duties during internal emergency; inspired by the Soviet Constitution.',
                '42nd Amendment Act (1976): Added Part IVA containing 10 Fundamental Duties under Article 51A.',
                '86th Amendment Act (2002): Added the 11th duty under Article 51A(k)—mandating parents/guardians to provide opportunities for education to children between 6 and 14 years.',
                'Verma Committee on Fundamental Duties (1999): Identified existing statutory provisions that legally enforce several constitutional duties (e.g., Prevention of Insults to National Honour Act 1971, Wildlife Protection Act 1972).'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: DPSPs are housed in Part IV (Articles 36 to 51), borrowed from the 1937 Constitution of Ireland.',
            'Line 2: Article 37 affirms DPSPs are fundamental in the governance of the country, but legally non-justiciable.',
            'Line 3: DPSPs aim to establish economic and social democracy, realizing the concept of a modern Welfare State.',
            'Line 4: They are broadly categorized into Socialistic (Arts 38, 39, 41-43A), Gandhian (Arts 40, 43, 46-48), and Liberal-Intellectual (Arts 44, 45, 48A-51).',
            'Line 5: Article 44 directs the State to secure a Uniform Civil Code (UCC) for all citizens across India.',
            'Line 6: Article 50 directs the progressive separation of the Judiciary from the Executive in public services.',
            'Line 7: In Minerva Mills (1980), the Supreme Court ruled that the harmony between FRs and DPSPs is part of the Basic Structure.',
            'Line 8: Part IVA was introduced by the 42nd Amendment in 1976 based on the Swaran Singh Committee recommendations.',
            'Line 9: Originally 10 duties were enacted; the 11th duty for child education was added by the 86th Amendment (2002).',
            'Line 10: Duties are non-enforceable directly, but courts use them to interpret statutory ambiguity and reasonableness under Article 14/19.'
          ],
          prelimsPointers: [
            'Only state with Uniform Civil Code historically: Goa (Portuguese Civil Code 1867); Uttarakhand passed UCC Act in 2024.',
            'Article 39(b) & 39(c): Shielded under Article 31C from challenge on grounds of Articles 14 and 19.',
            'Duties Committee: Justice Verma Committee (1999) identified legal mechanisms for enforcement.',
            'Article 48A: Added by 42nd Amendment to protect and improve the environment, forests, and wildlife.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Evaluate the socio-legal debate surrounding the implementation of a Uniform Civil Code under Article 44 in a pluralistic society.',
            'Analytical Dimension 2: Assess how the judiciary has incorporated non-justiciable DPSPs into enforceable Article 21 fundamental rights.',
            'Analytical Dimension 3: Discuss the efficacy of the Justice Verma Committee recommendations in promoting civic consciousness through Fundamental Duties.'
          ],
          keyArticlesOrTerms: ['Article 37', 'Article 44 (UCC)', 'Minerva Mills Case 1980', 'Swaran Singh Committee', 'Article 51A'],
          keyPYQReference: 'UPSC CSE Prelims 2020 (DPSP definition), UPSC Mains GS-2 2019, APPSC Group 1 Mains 2023.'
        }
      ]
    },
    {
      id: 'polity-union-state-judiciary',
      subjectId: 'polity',
      title: 'Union & State Executive, Legislature & Judicial Architecture',
      description: 'President, Governor, Parliament, Union Judiciary, Federalism, and Decentralized Local Governance.',
      subtopics: [
        {
          id: 'sub-polity-president-parliament',
          topicId: 'polity-union-state-judiciary',
          subjectId: 'polity',
          title: 'Presidential Powers, Ordinances (Article 123) & Parliamentary Control',
          summary: 'Comprehensive analysis of executive prerogatives, ordinance limitations under DC Wadhwa, and legislative oversight mechanisms.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'The Constitution establishes a parliamentary executive wherein the President serves as the de jure ceremonial Head of State, while the Council of Ministers headed by the Prime Minister wields de facto executive power.',
            'The delicate balance of presidential discretion, ordinance-making power during parliamentary recesses, and legislative devices ensures executive accountability to the elected Lok Sabha.'
          ],
          coreNotesSections: [
            {
              heading: 'Constitutional Status & Aid and Advice Architecture',
              points: [
                'Vesting of Power: Article 52 establishes the office of the President; Article 53 vests executive power of the Union in the President, exercised directly or through subordinate officers.',
                'Electoral College (Article 54): Comprises elected members of both Houses of Parliament, elected members of Legislative Assemblies of all States, and elected MLAs of Delhi and Puducherry (70th Amendment Act 1992). Nominated members do NOT participate.',
                'Binding Nature of Ministerial Advice (Article 74): The President must act in accordance with the aid and advice of the Council of Ministers headed by the Prime Minister.',
                '42nd vs 44th Amendments: 42nd Amendment made ministerial advice rigidly binding; 44th Amendment added a proviso allowing the President to send advice back once for reconsideration, but making reconsidered advice absolute.'
              ]
            },
            {
              heading: 'Ordinance-Making Prerogative (Article 123)',
              points: [
                'Pre-conditions for Promulgation: Can only be promulgated when either House or both Houses of Parliament are not in session, and the President is satisfied that circumstances exist requiring immediate action.',
                'Equivalence to Parliamentary Enactment: An ordinance possesses the same force and effect as an Act of Parliament, but is subject to identical legislative limitations (cannot abridge Fundamental Rights).',
                'Sunset Clause: Must be laid before both Houses upon reassembly; lapses 6 weeks from date of reassembly unless approved earlier, or disapproved by passing resolutions in both houses.',
                'Judicial Restraint & D.C. Wadhwa v. State of Bihar (1987): The Supreme Court condemned continuous re-promulgation of ordinances without placing them before the legislature as a "fraud on the Constitution" and a colorable exercise of power.',
                'Krishna Kumar Singh v. State of Bihar (2017): Seven-judge bench affirmed that the constitutional requirement of placing ordinances before the legislature is mandatory; failure to lay an ordinance constitutes an abuse of constitutional authority.'
              ]
            },
            {
              heading: 'Pardoning Powers (Article 72) & Legislative Oversight Devices',
              points: [
                'Pardoning Prerogative: Empowers the President to grant Pardons (completely absolving punishment and conviction), Commutation (substituting lighter form of punishment), Remission (reducing period without altering character), Respite (lesser sentence on special grounds), and Reprieve (temporary stay). Extends to court-martial sentences and capital punishment.',
                'Judicial Review of Clemency: In Maru Ram (1980) and Kehar Singh (1989), the SC ruled that the pardoning power is exercised on ministerial advice and is subject to limited judicial review against arbitrariness, mala fides, or extraneous considerations (reaffirmed in Epuru Sudhakar 2006).',
                'Parliamentary Scrutiny Devices: Question Hour (Starred, Unstarred, Short Notice questions), Zero Hour (Indian procedural innovation since 1962), Adjournment Motions (drawing urgent attention to matters of definite public importance), and No-Confidence Motions (governed by Lok Sabha Rule 198, requiring support of 50 members).'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Executive power of the Union is vested in the President under Article 53, exercised on the aid and advice of the Cabinet under Article 74.',
            'Line 2: The President is elected by an Electoral College consisting solely of elected MPs and elected MLAs of States, Delhi, and Puducherry.',
            'Line 3: The 44th Amendment allows the President to return advice once for reconsideration, after which it becomes mandatory.',
            'Line 4: Article 123 empowers the President to issue ordinances only during recess of Parliament under urgent conditions.',
            'Line 5: An ordinance has the force of an Act of Parliament but lapses 6 weeks after reassembly unless ratified.',
            'Line 6: In DC Wadhwa (1987) and Krishna Kumar Singh (2017), the Supreme Court held repeated ordinance re-promulgation unconstitutional.',
            'Line 7: Article 72 gives the President power to grant pardons, reprieves, respites, and remissions across civil and military convictions.',
            'Line 8: Clemency power is exercised strictly on Council of Ministers advice and is open to judicial review against malice or arbitrariness.',
            'Line 9: Parliamentary control is exercised through Question Hour, Zero Hour, Calling Attention motions, and Departmentally Related Standing Committees.',
            'Line 10: A Council of Ministers is collectively responsible to the House of the People (Lok Sabha) under Article 75(3).'
          ],
          prelimsPointers: [
            'Ordinance Maximum Life: 6 months (maximum gap between sessions) + 6 weeks = approximately 7.5 months.',
            'Impeachment of President (Article 61): Sole ground is "Violation of the Constitution" (not defined in Constitution); requires 2/3rd majority of total membership of each house.',
            'Vice-President Election (Article 66): Includes elected AND nominated members of both Houses; does NOT include state MLAs.',
            'Money Bill Certification: Speaker of the Lok Sabha has final authority under Article 110(3).'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically evaluate the frequent resort to ordinances at Union and State levels in terms of bypassing legislative deliberation.',
            'Analytical Dimension 2: Analyze the role of the Governor under Article 200 regarding assent to state bills in light of the Supreme Court rulings in State of Punjab (2023).',
            'Analytical Dimension 3: Examine the constitutional mechanisms that enforce collective and individual ministerial responsibility under Article 75.'
          ],
          keyArticlesOrTerms: ['Article 53', 'Article 74', 'Article 123', 'Article 72', 'D.C. Wadhwa Case (1987)'],
          keyPYQReference: 'UPSC CSE Prelims 2022 (Ordinance powers), UPSC Mains GS-2 (2020, 2023), UPPSC PCS 2021.'
        },
        {
          id: 'sub-polity-judiciary-collegium',
          topicId: 'polity-union-state-judiciary',
          subjectId: 'polity',
          title: 'Union Judiciary: Supreme Court, High Courts & The Collegium Debate',
          summary: 'Integrated judicial structure, original and appellate jurisdictions, NJAC verdict, and independence safeguards.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'India possesses an integrated and unified judicial hierarchy with the Supreme Court at the apex, administering both Union and State laws.',
            'Judicial independence is safeguarded through security of tenure, charged expenditures on the Consolidated Fund of India, contempt jurisdiction, and the judge-led Collegium appointment mechanism.'
          ],
          coreNotesSections: [
            {
              heading: 'Constitutional Jurisdiction of the Supreme Court',
              points: [
                'Original Jurisdiction (Article 131): Exclusive jurisdiction in federal disputes between Union vs State(s), or between two or more States. Excludes pre-constitutional treaties and inter-state river water disputes (governed by Article 262).',
                'Writ Jurisdiction (Article 32): Original but concurrent with High Courts under Article 226 for the enforcement of Fundamental Rights.',
                'Appellate Jurisdiction (Articles 132-134): Constitutional cases involving substantial questions of law, civil matters, and criminal appeals involving death sentences.',
                'Special Leave Petition (Article 136): Plenary discretionary power of the Supreme Court to grant special leave to appeal from any judgment, decree, sentence or order in any cause or matter passed by any court or tribunal (excluding armed forces tribunals).',
                'Advisory Jurisdiction (Article 143): President may refer questions of law or fact of public importance. The SC may decline advice on reference of post-constitutional treaties, but advice is non-binding on the President.',
                'Complete Justice (Article 142): Inherent equitable power to pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it.'
              ]
            },
            {
              heading: 'The Collegium System & Judges Cases',
              points: [
                'First Judges Case (SP Gupta 1981): SC ruled that "consultation" in Article 124 does not mean "concurrence"; executive had primacy in judicial appointments.',
                'Second Judges Case (SCAORA 1993): Overruled First Judges case; held consultation means concurrence. Established the Collegium of CJI and two senior-most SC judges.',
                'Third Judges Case (1998 Presidential Reference): Expanded the Supreme Court Collegium to CJI and four senior-most judges for SC appointments; CJI and two senior-most judges for High Court appointments.',
                'NJAC Verdict (Fourth Judges Case 2015): 99th Constitutional Amendment and National Judicial Appointments Commission (NJAC) Act struck down by 4:1 majority as violative of the Basic Structure doctrine (judicial independence).'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Part V (Articles 124 to 147) details the establishment, jurisdiction, and powers of the Supreme Court of India.',
            'Line 2: Article 131 grants exclusive original jurisdiction over intergovernmental federal disputes between Centre and States.',
            'Line 3: Under Article 136, the Supreme Court possesses extraordinary discretionary Special Leave Petition (SLP) power.',
            'Line 4: Article 143 allows the President to seek non-binding advisory opinions from the Supreme Court on public importance questions.',
            'Line 5: Article 142 empowers the Supreme Court to pass any order necessary for doing complete justice in any matter before it.',
            'Line 6: The Collegium system evolved through three landmark Judges Cases (1981, 1993, 1998) without explicit constitutional mention.',
            'Line 7: In the 1993 Second Judges Case, the Court established that "consultation" under Article 124 requires judicial "concurrence".',
            'Line 8: In 2015, the Supreme Court struck down the 99th Constitutional Amendment (NJAC) to safeguard judicial independence.',
            'Line 9: High Courts derive extensive supervisory powers over subordinate courts and tribunals within their territory under Article 227.',
            'Line 10: Judges enjoy security of tenure and can only be removed by parliamentary address under Article 124(4) on proved misbehaviour or incapacity.'
          ],
          prelimsPointers: [
            'Retirement Age: Supreme Court judges retire at 65 years; High Court judges retire at 62 years.',
            'Salaries Charged: Salaries of SC judges are charged on the Consolidated Fund of India (not votable by Parliament).',
            'Court of Record (Article 129): Judgments have evidentiary value and cannot be questioned; possesses power to punish for contempt.',
            'Seat of Supreme Court: Article 130 specifies Delhi, but CJI can appoint other places with the approval of the President.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Evaluate the institutional checks and balances between judicial independence and democratic accountability in judicial appointments.',
            'Analytical Dimension 2: Discuss the expansive invocation of Article 142 by the Supreme Court and its implications for the separation of powers doctrine.',
            'Analytical Dimension 3: Examine the structural bottlenecks leading to judicial pendency in High Courts and subordinate judiciary across Indian states.'
          ],
          keyArticlesOrTerms: ['Article 124', 'Article 131', 'Article 136 (SLP)', 'Article 142', 'Collegium System (Judges Cases)'],
          keyPYQReference: 'UPSC CSE Prelims 2019, UPSC Mains GS-2 (2018, 2022), TGSPC Group 1 2024.'
        },
        {
          id: 'sub-polity-local-governance',
          topicId: 'polity-union-state-judiciary',
          subjectId: 'polity',
          title: 'Democratic Decentralization: 73rd & 74th Amendments & Panchayati Raj Architecture',
          summary: '3-tier rural local bodies, 11th & 12th schedules, State Election Commission, State Finance Commission, and PESA Act 1996.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'The 73rd and 74th Constitutional Amendment Acts (1992) institutionalized a third tier of governance, transforming Article 40 from a non-justiciable directive into constitutional mandates.',
            'Decentralization rests on the twin pillars of administrative delegation and financial devolution through State Finance Commissions, ensuring grassroots participatory democracy.'
          ],
          coreNotesSections: [
            {
              heading: '73rd Amendment Act 1992 (Part IX, Articles 243-243O)',
              points: [
                'Constitutional Status: Added Part IX titled "The Panchayats" and the Eleventh Schedule containing 29 functional items.',
                'Three-Tier Architecture: Gram Panchayat (village), Panchayat Samiti (intermediate), and Zilla Parishad (district). States with population below 20 lakhs can dispense with the intermediate tier.',
                'Compulsory (Mandatory) Provisions: Gram Sabha as foundational assembly (Article 243A); direct elections to all seats at village, intermediate, and district levels (Article 243C); minimum age for contesting fixed at 21 years (Article 243F); mandatory 5-year tenure and fresh elections within 6 months of dissolution (Article 243E); minimum 1/3rd reservation for women (Article 243D); independent State Election Commission (Article 243K); State Finance Commission every 5 years (Article 243I).',
                'Voluntary (Discretionary) Provisions: Devolution of 29 items of Eleventh Schedule; financial taxation powers; reservation for Other Backward Classes (OBCs).'
              ]
            },
            {
              heading: '74th Amendment Act 1992 & PESA Act 1996',
              points: [
                '74th Amendment (Part IXA): Added Twelfth Schedule with 18 functional items; created Nagar Panchayats, Municipal Councils, and Municipal Corporations.',
                'District Planning Committee (DPC - Article 243ZD): Consolidates plans prepared by Panchayats and Municipalities in the district; 4/5th of members elected from amongst elected members of Zilla Parishad and Municipalities.',
                'PESA Act 1996 (Panchayats Extension to Scheduled Areas): Extended Part IX provisions to Fifth Schedule areas with significant tribal autonomy; empowers Gram Sabha over minor forest produce (MFP), land alienation prevention, minor minerals leasing, and village market control.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: The 73rd and 74th Constitutional Amendment Acts (1992) granted constitutional recognition to rural and urban local bodies.',
            'Line 2: The 73rd Amendment inserted Part IX and the Eleventh Schedule containing 29 functional subjects for Panchayats.',
            'Line 3: The 74th Amendment inserted Part IXA and the Twelfth Schedule containing 18 subjects for Municipalities.',
            'Line 4: A uniform three-tier system is established: Gram Panchayat (village), Panchayat Samiti (block), and Zilla Parishad (district).',
            'Line 5: Article 243D mandates not less than one-third (33%) reservation of seats and chairperson offices for women.',
            'Line 6: Several states (e.g., Bihar, Andhra Pradesh, Telangana) have enhanced women reservation in local bodies to 50%.',
            'Line 7: Article 243K establishes an independent State Election Commission for conducting local elections.',
            'Line 8: Article 243I establishes a State Finance Commission every five years to review the financial position of local bodies.',
            'Line 9: Article 243ZD mandates the creation of a District Planning Committee (DPC) to integrate rural and urban development plans.',
            'Line 10: PESA Act 1996 empowers tribal Gram Sabhas in Fifth Schedule areas with control over minor forest produce and natural resources.'
          ],
          prelimsPointers: [
            'First State to adopt Panchayati Raj: Nagaur district, Rajasthan (October 2, 1959), followed by Andhra Pradesh.',
            'Balwant Rai Mehta Committee (1957): Recommended the original 3-tier Panchayati Raj system.',
            'Ashok Mehta Committee (1977): Recommended a 2-tier system (Mandal Panchayat and Zilla Parishad).',
            'Minimum Contesting Age: 21 years under Article 243F.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Analyze the structural impediments in the "3Fs" (Funds, Functions, and Functionaries) preventing local bodies from becoming self-governing institutions.',
            'Analytical Dimension 2: Assess the transformative impact of 50% reservation for women in local governance in subverting patriarchy at the grassroots level.',
            'Analytical Dimension 3: Examine the challenges in implementing the PESA Act in Fifth Schedule mining areas and tribal districts.'
          ],
          keyArticlesOrTerms: ['Part IX & IXA', 'Eleventh Schedule (29 items)', 'Article 243D (Reservation)', 'PESA Act 1996', 'State Finance Commission (243I)'],
          keyPYQReference: 'UPSC CSE Prelims 2018 (PESA), UPSC Mains GS-2 2021, APPSC Group 1 2020.'
        }
      ]
    }
  ]
};
