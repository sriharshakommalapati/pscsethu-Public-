import { Subject } from '../../types';

export const ECONOMY_SUBJECT: Subject = {
  id: 'economy',
  name: 'Indian Economy, Public Finance & Agriculture',
  iconName: 'TrendingUp',
  description: 'Macroeconomics, Flexible Inflation Targeting (MPC), Fiscal Federalism, Goods and Services Tax (GST), Agricultural Economics, and External Sector.',
  topics: [
    {
      id: 'econ-macro-fiscal',
      subjectId: 'economy',
      title: 'Macroeconomic Policy, Monetary Framework & Fiscal Federalism',
      description: 'RBI monetary tools, inflation targeting, FRBM Act, GST Council, and Finance Commission horizontal and vertical devolution.',
      subtopics: [
        {
          id: 'sub-econ-monetary-policy',
          topicId: 'econ-macro-fiscal',
          subjectId: 'economy',
          title: 'Monetary Policy Framework: Flexible Inflation Targeting (4±2%), MPC & Liquidity Management',
          summary: 'In-depth analysis of RBI Act Section 45ZB, repo rate mechanics, standing deposit facility (SDF), and transmission bottlenecks.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'India shifted to a statutory Flexible Inflation Targeting (FIT) regime following the Monetary Policy Framework Agreement in 2015 and the subsequent amendment of the Reserve Bank of India Act, 1934.',
            'The Monetary Policy Committee (MPC) anchors inflation expectations around Consumer Price Index (CPI) combined headline inflation (4% with a tolerance band of ±2%) while keeping in mind the objective of economic growth.'
          ],
          coreNotesSections: [
            {
              heading: 'Institutional Design of the Monetary Policy Committee (MPC)',
              points: [
                'Legal Mandate: Section 45ZB of the RBI Act, 1934 (inserted by the Finance Act, 2016) mandates the constitution of a 6-member MPC.',
                'Composition: Three members from the RBI (the Governor as ex-officio Chairperson, the Deputy Governor in charge of monetary policy, and one officer nominated by the Central Board) and three external members appointed by the Central Government on the recommendation of a Search-cum-Selection Committee headed by the Cabinet Secretary.',
                'Decision Making: Each member has one vote. In the event of an equality of votes, the Governor exercises a second or casting vote. Meetings are convened at least four times a year, and minutes along with each member’s individual voting rationale are published on the 14th day following the meeting.',
                'Failure Criteria: If headline inflation exceeds the upper tolerance level of 6% or falls below the lower tolerance level of 2% for any three consecutive quarters, the RBI must submit a statutory explanatory report to the Central Government explaining causes, remedial actions, and estimated time to restore target.'
              ]
            },
            {
              heading: 'Monetary Policy Tools & Liquidity Transmission',
              points: [
                'Policy Repo Rate: The benchmark interest rate at which the RBI lends short-term liquidity to commercial banks against the collateral of government and other approved securities under the Liquidity Adjustment Facility (LAF).',
                'Reverse Repo vs. Standing Deposit Facility (SDF): SDF, introduced in 2022 as the floor of the LAF corridor (25 bps below the repo rate), allows the RBI to absorb surplus liquidity from banks on an overnight basis without providing government collateral, thereby enhancing monetary flexibility.',
                'Marginal Standing Facility (MSF): The penal rate (25 bps above the repo rate) at which banks can borrow overnight funds from the RBI by dipping into their Statutory Liquidity Ratio (SLR) quota up to a specified percentage.',
                'Open Market Operations (OMO) & Operation Twist: Outright purchase or sale of government securities in the secondary market to inject or absorb durable liquidity, and simultaneous sale of short-term dated securities and purchase of long-term bonds to flatten the yield curve.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Flexible Inflation Targeting (FIT) was institutionalized in 2016 following the recommendations of the Urjit Patel Committee.',
            'Line 2: The inflation target is set at 4% CPI headline inflation with a tolerance corridor of +/- 2% (2% to 6%).',
            'Line 3: The Monetary Policy Committee (MPC) consists of 6 members: 3 from the RBI and 3 appointed by the Union Government.',
            'Line 4: The RBI Governor presides as the ex-officio Chairperson and exercises a casting vote in the event of a tie.',
            'Line 5: Failure to maintain the inflation band for three consecutive quarters triggers a mandatory compliance report to Parliament.',
            'Line 6: The Policy Repo Rate serves as the single operational anchor rate under the revised Liquidity Adjustment Facility (LAF).',
            'Line 7: The Standing Deposit Facility (SDF) absorbs excess system liquidity without requiring the pledge of government collateral.',
            'Line 8: Marginal Standing Facility (MSF) acts as the upper ceiling of the interest rate corridor for emergency overnight bank borrowing.',
            'Line 9: Statutory Liquidity Ratio (SLR) and Cash Reserve Ratio (CRR) serve as primary quantitative reserve requirements under banking statutes.',
            'Line 10: Monetary transmission into commercial lending rates is facilitated through the External Benchmark Lending Rate (EBLR) regime.'
          ],
          prelimsPointers: [
            'Target Inflation Index: Consumer Price Index (Combined) with base year 2012, released by the National Statistics Office (NSO).',
            'SDF Rate Position: 25 basis points below the repo rate.',
            'MSF Rate Position: 25 basis points above the repo rate.',
            'EBLR Adoption Year: October 2019, linking retail and MSME loans to external benchmarks such as the repo rate or treasury bill yields.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Evaluate the trade-off between price stability and growth stimulation faced by the MPC amidst supply-side food inflation shocks.',
            'Analytical Dimension 2: Analyze the structural bottlenecks impeding complete monetary policy transmission into commercial bank lending rates in India.',
            'Analytical Dimension 3: Critically examine whether Headline CPI or Core Inflation (excluding volatile food and fuel) should serve as the primary policy anchor.'
          ],
          keyArticlesOrTerms: ['Flexible Inflation Targeting (4±2%)', 'Section 45ZB of RBI Act', 'Monetary Policy Committee', 'Standing Deposit Facility (SDF)', 'EBLR Regime'],
          keyPYQReference: 'UPSC CSE Prelims 2021 (MPC composition), UPSC Mains GS-3 2022, APPSC Group 1 2023.'
        },
        {
          id: 'sub-econ-fiscal-federalism-gst',
          topicId: 'econ-macro-fiscal',
          subjectId: 'economy',
          title: 'Fiscal Federalism, GST Architecture & Finance Commission Devolution',
          summary: '101st Amendment Act, Article 279A, GST Council voting dynamics, FRBM Act rules, and Finance Commission devolution formulas.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'Fiscal federalism in India addresses structural vertical and horizontal fiscal imbalances between the Union and the States through constitutional tax sharing and grants-in-aid under Articles 270, 275, and 280.',
            'The introduction of the Goods and Services Tax (GST) through the 101st Constitutional Amendment Act pooled the sovereign taxing powers of both tiers into a cooperative federal architecture governed by the GST Council under Article 279A.'
          ],
          coreNotesSections: [
            {
              heading: '101st Constitutional Amendment & GST Architecture',
              points: [
                'Concurrent Taxing Power (Article 246A): Conferred simultaneous legislative power upon Parliament and State Legislatures to make laws with respect to goods and services tax. In Union of India v. Mohit Minerals (2022), the Supreme Court affirmed that the recommendations of the GST Council are not unalterably binding upon legislatures, but possess high persuasive value, embodying "cooperative and un-cooperative federalism".',
                'Inter-State GST (Article 269A): Integrated GST (IGST) on inter-state supply of goods and services is levied and collected by the Union Government and apportioned between the Union and the States on the recommendation of the GST Council.',
                'GST Council (Article 279A): Chaired by the Union Finance Minister; includes Union Minister of State for Finance and State Finance/Taxation Ministers. Voting formula: Union Government wields 1/3rd (33.33%) of total votes cast; all State Governments together wield 2/3rd (66.67%) of total votes cast. Decisions require a 3/4th (75%) weighted super-majority, meaning neither Centre nor States can unilaterally push decisions without mutual consensus.'
              ]
            },
            {
              heading: 'Finance Commission Devolution & FRBM Framework',
              points: [
                'Article 280 Mandate: Appointed every 5 years by the President; recommends the distribution of the net proceeds of taxes between Union and States (Vertical Devolution) and allocation among the States (Horizontal Devolution).',
                '15th Finance Commission (N.K. Singh Committee): Maintained vertical tax devolution to States at 41% (retained from 14th FC’s 42%, with 1% adjusted for the newly formed Union Territories of Jammu & Kashmir and Ladakh). Horizontal devolution criteria: Income Distance (45%), Population based on 2011 Census (15%), Forest & Ecology (10%), Area (15%), Demographic Performance (12.5%), and Tax Effort (2.5%).',
                'Fiscal Responsibility and Budget Management (FRBM) Act 2003: N.K. Singh Committee recommended targeting a combined debt-to-GDP ratio of 60% (40% for Centre, 20% for States) and a central fiscal deficit of 3% of GDP.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Fiscal Federalism balances vertical imbalance (Union raising more taxes than states) and horizontal disparity between rich and poor states.',
            'Line 2: Article 280 mandates the constitution of a Finance Commission by the President of India every five years.',
            'Line 3: The 15th Finance Commission, chaired by N.K. Singh, recommended a 41% vertical devolution of the divisible tax pool to States.',
            'Line 4: Demographic performance (12.5% weight) was introduced in the 15th FC to reward states with lower total fertility rates (TFR).',
            'Line 5: The 101st Constitutional Amendment Act (2016) replaced a cascading web of 17 central and state indirect taxes with GST.',
            'Line 6: Article 246A granted concurrent taxing powers to Parliament and State Legislatures for intra-state supplies.',
            'Line 7: Article 279A established the constitutional GST Council representing the Union and all 28 States and 3 UTs with legislatures.',
            'Line 8: In the GST Council, decisions require a 75% weighted majority, where the Centre holds 33.3% and States jointly hold 66.7% voting power.',
            'Line 9: In the Mohit Minerals case (2022), the Supreme Court clarified that GST Council recommendations are persuasive rather than mandatory.',
            'Line 10: The FRBM framework targets reducing central fiscal deficit towards 4.5% of GDP by FY 2025-26 and public debt to 40% of GDP.'
          ],
          prelimsPointers: [
            'Divisible Pool Exclusions: Cesses and surcharges levied under Article 271 do NOT form part of the divisible pool shared with States.',
            'GST Council Voting Threshold: 75% (three-fourths) of the weighted votes of members present and voting.',
            'First Chairman of Finance Commission: K.C. Neogy (1951).',
            '16th Finance Commission Chairman: Dr. Arvind Panagariya (constituted in Dec 2023).'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Critically evaluate the fiscal friction caused by the expanding proportion of non-divisible cesses and surcharges in gross central tax collections.',
            'Analytical Dimension 2: Assess the implications of utilizing the 2011 Census population data in the Finance Commission horizontal devolution on the fiscal federalism of southern states.',
            'Analytical Dimension 3: Discuss how the cessation of the 5-year GST compensation cess regime in 2022 has affected state revenue autonomy.'
          ],
          keyArticlesOrTerms: ['Article 280', 'Article 246A', 'Article 279A (GST Council)', '15th Finance Commission (41%)', 'Non-divisible Cesses (Article 271)'],
          keyPYQReference: 'UPSC CSE Prelims 2023, UPSC Mains GS-3 2022, TGSPC Group 1 2024.'
        }
      ]
    },
    {
      id: 'econ-agri-external',
      subjectId: 'economy',
      title: 'Agriculture Economics, Food Security & External Sector',
      description: 'MSP pricing methodology (A2+FL vs C2), PM-KISAN, NFSA 2013, Balance of Payments, and Foreign Trade Agreements.',
      subtopics: [
        {
          id: 'sub-econ-agriculture-msp',
          topicId: 'econ-agri-external',
          subjectId: 'economy',
          title: 'Agricultural Marketing, Minimum Support Price (MSP) & Food Security Architecture',
          summary: 'CACP cost formulae (A2, A2+FL, C2), Swaminathan Committee benchmarks, PM-KISAN direct transfers, and NFSA entitlements.',
          readingTimeMinutes: 9,
          conceptualFramework: [
            'India’s agricultural sector employs over 45% of the total national workforce while contributing approximately 18% to Gross Value Added (GVA), necessitating a delicate policy balance between producer price security and consumer food affordability.',
            'The government administers procurement and price support mechanisms through the Commission for Agricultural Costs and Prices (CACP), the Food Corporation of India (FCI), and the National Food Security Act (NFSA), 2013.'
          ],
          coreNotesSections: [
            {
              heading: 'Minimum Support Price (MSP) Framework & Cost Formulations',
              points: [
                'Statutory Status: MSP is an administrative price floor announced by the Cabinet Committee on Economic Affairs (CCEA) chaired by the Prime Minister; it currently has no statutory backing under an Act of Parliament.',
                'Coverage: Announced for 22 mandated agricultural crops (7 cereals, 5 pulses, 7 oilseeds, 3 commercial crops) plus Fair and Remunerative Price (FRP) for sugarcane under the Sugarcane (Control) Order, 1966.',
                'CACP Cost Concepts: (1) Cost A2: Direct out-of-pocket expenses incurred by farmers on seeds, fertilizers, pesticides, hired labor, fuel, and irrigation; (2) Cost A2+FL: Cost A2 plus the imputed value of unpaid family labor; (3) Cost C2: Comprehensive cost including A2+FL plus imputed rent on owned land and interest on owned capital assets.',
                'Swaminathan National Commission on Farmers: Recommended fixing MSP at a minimum of 50% above the comprehensive cost of production (Cost C2 + 50%). Since Budget 2018-19, the Union Government benchmarked MSP at 1.5 times the Cost A2+FL.'
              ]
            },
            {
              heading: 'Food Security, PDS & Direct Income Support',
              points: [
                'National Food Security Act (NFSA) 2013: Covers up to 75% of rural population and up to 50% of urban population (roughly 67% of total national population) based on 2011 Census. Categorizes beneficiaries into Antyodaya Anna Yojana (AAY - 35 kg per household per month) and Priority Households (PHH - 5 kg per person per month).',
                'PM Garib Kalyan Anna Yojana (PMGKAY): Integrated with NFSA to provide free foodgrains to all NFSA beneficiaries.',
                'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi): Direct benefit transfer (DBT) scheme providing Rs. 6,000 per year to eligible landholding farmer families in three equal quarterly installments of Rs. 2,000 directly into Aadhaar-seeded bank accounts.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Minimum Support Price (MSP) acts as a guaranteed safety net to protect farmers from distress sales during bumper harvests.',
            'Line 2: MSP is recommended by the Commission for Agricultural Costs and Prices (CACP) and approved by the CCEA.',
            'Line 3: It is announced prior to the sowing season for 22 mandated agricultural crops plus Fair and Remunerative Price (FRP) for sugarcane.',
            'Line 4: The government currently sets MSP at a minimum of 150% (1.5 times) of the Cost A2+FL benchmark.',
            'Line 5: The M.S. Swaminathan Committee recommended fixing MSP at Cost C2 + 50% for sustainable farmer remuneration.',
            'Line 6: Procurement of foodgrains at MSP is executed primarily by the Food Corporation of India (FCI) and state agencies.',
            'Line 7: The National Food Security Act (NFSA) 2013 legally entitles approximately two-thirds (67%) of India’s population to subsidized grain.',
            'Line 8: Antyodaya Anna Yojana (AAY) poorest households receive 35 kg of foodgrains per month, while Priority Households get 5 kg per person.',
            'Line 9: PM-KISAN provides direct income support of Rs. 6,000 annually in three installments to all landholder farmer households.',
            'Line 10: Electronic National Agriculture Market (e-NAM) is a pan-India electronic trading portal integrating existing APMC mandis.'
          ],
          prelimsPointers: [
            'Sugarcane Price: Governed by Fair and Remunerative Price (FRP), legally binding under the Sugarcane (Control) Order 1966.',
            'CACP Inception: Established in 1965 as the Agricultural Prices Commission; rechristened CACP in 1985.',
            'Crops under MSP: 22 mandated crops (Paddy, Wheat, Maize, Jowar, Bajra, Ragi, Barley; Gram, Tur, Moong, Urad, Lentil; Groundnut, Rapeseed-Mustard, Soybean, Sesamum, Sunflower, Safflower, Nigerseed; Cotton, Jute, Copra).',
            'NFSA Entitlement Head: Article 13 of NFSA mandates that the eldest woman in the household (18+ years) be designated as the Head of Household for ration card issuance.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Analyze the economic and fiscal ramifications of granting universal statutory guarantee to Minimum Support Price (MSP).',
            'Analytical Dimension 2: Critique the regional skew in public procurement of paddy and wheat favoring northwestern states over eastern agro-ecological zones.',
            'Analytical Dimension 3: Examine the transition from price support subsidies to direct income support (DBT) and its efficacy in crop diversification.'
          ],
          keyArticlesOrTerms: ['CACP', 'Cost A2+FL vs Cost C2', 'Swaminathan Commission', 'NFSA 2013', 'PM-KISAN'],
          keyPYQReference: 'UPSC CSE Prelims 2020 (MSP crops), UPSC Mains GS-3 2023, UPPSC PCS 2022.'
        },
        {
          id: 'sub-econ-external-bop',
          topicId: 'econ-agri-external',
          subjectId: 'economy',
          title: 'External Sector Dynamics: Balance of Payments, Rupee Internationalisation & Foreign Trade',
          summary: 'Current Account vs Capital Account, CAD dynamics, forex reserve management, full convertibility debate, and bilateral FTAs.',
          readingTimeMinutes: 8,
          conceptualFramework: [
            'The Balance of Payments (BoP) systematically records all economic transactions between residents of India and the rest of the world over a fiscal period, divided into the Current Account and the Capital Account.',
            'Managing the Current Account Deficit (CAD) within sustainable thresholds (typically under 2.5% of GDP) while accelerating the internationalisation of the Indian Rupee represents a central strategic objective of contemporary external economic policy.'
          ],
          coreNotesSections: [
            {
              heading: 'Balance of Payments Accounting Structure',
              points: [
                'Current Account: Records transactions in merchandise trade (exports and imports of physical goods, yielding the Trade Balance), services trade (software services, business process management, travel, tourism), primary income (compensation of employees, investment income like dividends and interest), and secondary income (unilateral transfers like overseas remittances and gifts). India historically runs a merchandise trade deficit offset partially by a substantial services surplus and inbound remittances (leading the world with over $125 billion annually).',
                'Capital Account: Records cross-border flows of financial assets and liabilities, including Foreign Direct Investment (FDI - long-term equity with management participation), Foreign Portfolio Investment (FPI - volatile hot money in listed securities), External Commercial Borrowings (ECBs), banking capital (NRI deposits), and official foreign aid.'
              ]
            },
            {
              heading: 'Currency Convertibility & Internationalisation of the Rupee',
              points: [
                'Current Account Convertibility: Achieved in August 1994 when India accepted the obligations of Article VIII of the International Monetary Fund (IMF) Articles of Agreement, permitting unrestricted access to foreign exchange for trade transactions.',
                'Capital Account Convertibility (CAC): India maintains partial or calibrated capital account convertibility. The Tarapore Committees (1997 and 2006) recommended pre-conditions for Full Capital Account Convertibility: reducing gross fiscal deficit to under 3.5% of GDP, gross non-performing assets (NPAs) under 5%, and maintaining inflation within targeted thresholds.',
                'Rupee Trade & Internationalisation: The RBI introduced the Special Rupee Vostro Account (SRVA) mechanism in July 2022 to settle international trade invoices in Indian Rupees (INR), mitigating reliance on the US Dollar and insulating cross-border trade from foreign sanctions.'
              ]
            }
          ],
          notes9to10Lines: [
            'Line 1: Balance of Payments (BoP) tracks the complete record of economic exchanges between India and foreign nations.',
            'Line 2: The Current Account covers merchandise trade, service exports, investment income, and unilateral remittances.',
            'Line 3: India is the world’s largest recipient of inward remittances, receiving over $125 billion annually according to the World Bank.',
            'Line 4: A structural merchandise trade deficit is largely driven by imports of crude oil, electronic hardware, and gold.',
            'Line 5: The Capital Account records non-debt and debt flows, including Foreign Direct Investment (FDI) and Portfolio Investment (FPI).',
            'Line 6: India achieved full Current Account Convertibility in 1994 under Article VIII of the IMF Charter.',
            'Line 7: Capital Account Convertibility remains calibrated and subject to foreign exchange ceilings under FEMA 1999.',
            'Line 8: The S.S. Tarapore Committees (1997, 2006) framed prerequisite criteria for complete Capital Account Convertibility.',
            'Line 9: India holds over $650 billion in foreign exchange reserves, providing over 10 months of import cover buffer.',
            'Line 10: Special Rupee Vostro Accounts (SRVA) were instituted by the RBI in 2022 to facilitate direct Rupee-denominated global trade.'
          ],
          prelimsPointers: [
            'Foreign Exchange Reserves Components: Foreign Currency Assets (FCA), Gold holdings, Special Drawing Rights (SDRs) at IMF, and Reserve Tranche Position (RTP) at IMF.',
            'Largest Remittance Corridor to India: United States, followed by UAE and Saudi Arabia.',
            'FEMA vs FERA: The Foreign Exchange Management Act (FEMA) 1999 replaced the draconian FERA 1973, decriminalizing foreign exchange violations into civil offenses.',
            'Top Source of FDI Equity Inflows into India: Singapore, followed by Mauritius and the United States.'
          ],
          mainsAnalysis: [
            'Analytical Dimension 1: Examine the macroeconomic risks of sustaining elevated Current Account Deficits (CAD) during global energy price volatility.',
            'Analytical Dimension 2: Assess the prospects and challenges in internationalising the Indian Rupee as an alternative currency in bilateral trade settlement.',
            'Analytical Dimension 3: Compare and contrast India’s strategic approach in newly signed Comprehensive Economic Partnership Agreements (e.g., UAE, EFTA) versus legacy FTAs.'
          ],
          keyArticlesOrTerms: ['Current Account Deficit (CAD)', 'Capital Account Convertibility', 'Tarapore Committee', 'Forex Reserves (FCA + Gold + SDR + RTP)', 'Vostro Accounts (SRVA)'],
          keyPYQReference: 'UPSC CSE Prelims 2022, UPSC Mains GS-3 2021, APPSC Group 1 2023.'
        }
      ]
    }
  ]
};
