import React from 'react';
import type { NavItem, Project, PublicationInfo, Experience, Education, SkillCategory, Publication, Language } from './types';
import {
    BeakerIcon,
    ChartPieIcon,
    CodeBracketIcon,
    CpuChipIcon,
    PaintBrushIcon,
    DocumentTextIcon
} from './components/icons/Icons';

export const PERSONAL_INFO = {
    name: 'Ankit Kumar',
    title: 'Data Scientist | Chemist | PhD Chemistry',
    address: 'Troisdorf, Germany',
    email: 'chem.ak91@gmail.com',
    linkedin: 'ankit-kumar91-',
    linkedinUrl: 'https://www.linkedin.com/in/ankit-kumar91-/',
    github: 'Ankit-kumar91',
    githubUrl: 'https://github.com/Ankit-kumar91',
};

export const NAV_ITEMS: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
];

export const PROFILE = `Data Scientist with a strong scientific background in chemistry and analytical techniques. Skilled at integrating data-driven methodologies, including Python and machine learning, into R&D workflows. Experienced in managing multiple research projects, collaborating across departments, and independently executing experiments.`;

export const COMPETENCIES = [
    { category: 'AI & ML', skills: ['Machine Learning Algorithms', 'Deep Learning', 'Predictive Modeling', 'PyTorch', 'Scikit-Learn', 'Docker'] },
    { category: 'Cheminformatics', skills: ['RDKit', 'QSAR Modeling', 'Chemical Data Mining', 'Molecular Property Prediction'] },
    { category: 'Data Science', skills: ['Python', 'Pandas', 'NumPy', 'Statistical Analysis', 'Feature Engineering', 'Data Wrangling', 'EDA', 'Model Evaluation'] },
    { category: 'R&D', skills: ['Process Chemistry', 'Pharmaceutical Manufacturing', 'Yield Optimization', 'Scale-Up Development'] },
    { category: 'Analytical', skills: ['NMR', 'FT-IR', 'UV-Vis', 'HPLC', 'GC-MS', 'Mass Spectrometry', 'Chromatography'] },
    { category: 'Tools', skills: ['SQL', 'PubChem', 'ChEMBL', 'Power BI', 'ChemDraw', 'Git', 'VS Code', 'PyMOL'] },
];

export const EXPERIENCES: Experience[] = [
    {
        period: 'Mar 2025 – Present',
        role: 'AI Trainer — Expert & Reviewer',
        company: 'Outlier.ai',
        location: 'Troisdorf, Germany (Remote)',
        description: [
            'Review, edit, and improve work submitted by peers to align with client requirements and quality standards',
            'Provide expert feedback on chemical data accuracy and scientific validity for AI training datasets',
            'Provide comprehensive feedback and ratings on peer submissions to support quality improvement',
            'Analyze the performance of AI models on chemistry-related tasks, identifying strengths, weaknesses, and areas for enhancement'
        ]
    },
    {
        period: 'Apr 2024 – Feb 2025',
        role: 'Career Transition: AI & Machine Learning in Chemistry',
        company: 'Self-Directed Learning',
        location: 'Troisdorf, Germany',
        description: [
            'Self-study in machine learning fundamentals, deep learning, and AI applications in chemistry',
            'Developed expertise in cheminformatics using RDKit for molecular property prediction and QSAR modeling',
            'Achieved B1 German language certification enhancing professional communication in German work environments',
            'NVIDIA-Certified Associate: Generative AI LLMs — Specialized training in large language models and AI applications'
        ]
    },
    {
        period: 'Nov 2023 – Mar 2024',
        role: 'Data Science Trainee',
        company: 'neuefische GmbH — School for Digital Talent',
        location: 'Hamburg, Germany (Remote)',
        description: [
            'Completed rigorous bootcamp covering machine learning algorithms, statistical modeling, and data science workflows',
            'Developed end-to-end ML projects including data collection, preprocessing, model training, and evaluation',
            'Gained proficiency in model performance metrics, cross-validation, and hyperparameter optimization'
        ]
    },
    {
        period: 'Dec 2020 – Jun 2022',
        role: 'Postdoctoral Research Associate',
        company: 'Technical University Dresden',
        location: 'Dresden, Germany',
        description: [
            'Synthesized and analyzed carbon-based materials such as graphene nanoribbons and spin chains',
            'Developed scalable methodologies for hetero-structure graphene nanoribbons for optoelectronic applications',
            'Maintained lab records, managed equipment, and prepared comprehensive project reports'
        ]
    },
    {
        period: 'Jan 2020 – Oct 2020',
        role: 'Senior Research Associate',
        company: 'Neogen Chemicals Limited',
        location: 'Vadodara, India',
        description: [
            'Implemented process chemistry to develop scalable methods for mass production of pharmaceutical intermediates',
            'Synthesized 4-Methylphenol 4-IPMP with a 10% yield increase, reducing production costs',
            'Conducted cost analysis and managed projects for synthesizing 2,6-Difluorobenzyl bromide, achieving a 15% yield improvement',
            'Interpreted NMR, IR, and UV data, maintained laboratory records, and prepared reports'
        ]
    },
    {
        period: 'Jul 2014 – Dec 2019',
        role: 'Doctor of Philosophy (Ph.D.)',
        company: 'Indian Institute of Technology Bombay',
        location: 'Mumbai, India',
        description: [
            'Developed polyaromatic hydrocarbon based porphyrinoid macrocycles and metal complexes',
            'Investigated aromatic, antiaromatic, and non-aromatic behavior of macrocycles through experimental and computational tools',
            'Established structure–property relationships linking molecular architecture with electronic absorption and redox behavior',
            'Published 13 peer-reviewed articles in high-impact journals'
        ]
    },
];

export const EDUCATION: Education[] = [
    {
        degree: 'Doctor of Philosophy (Ph.D.) in Chemistry',
        period: '2014 – 2019',
        institution: 'Indian Institute of Technology Bombay, Mumbai, India',
        description: 'Focused on synthesis of porphyrinoid macrocycles, spectroscopic analysis, and structure-property relationships. Published 13 peer-reviewed articles.',
    },
    {
        degree: 'Master of Science (M.Sc.) in Chemistry',
        period: '2010 – 2012',
        institution: 'CCS University Meerut, India',
        description: 'Advanced coursework in organic, inorganic, and physical chemistry with extensive laboratory training.',
    },
    {
        degree: 'Bachelor of Science (B.Sc.)',
        period: '2007 – 2010',
        institution: 'CCS University Meerut, India',
        description: 'Foundational studies in chemistry, and life science.',
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'AqSolPrediction: Aqueous Solubility Prediction',
        description: 'An end-to-end cheminformatics application for predicting aqueous solubility of chemical compounds using molecular descriptors and machine learning.',
        bullets: [
            'Built ML pipeline using RDKit molecular descriptors for aqueous solubility prediction of chemical compounds',
            'Deployed interactive web app on Hugging Face Spaces with real-time SMILES input and prediction',
            'Implemented feature engineering with molecular fingerprints and physicochemical property calculations'
        ],
        link: 'https://github.com/Ankit-kumar91/AqSolPrediction',
        demoLink: 'https://huggingface.co/spaces/Ankitkumar91/aqsol-prediction',
        tags: ['Python', 'RDKit', 'Cheminformatics', 'Hugging Face', 'ML'],
        image: '/aqsol.png',
    },
    {
        title: 'AgronomiCare: Plant Disease Prediction',
        description: 'A machine learning web application for agricultural disease prediction using classification algorithms with a complete data pipeline.',
        bullets: [
            'Developed ML web application for agricultural disease prediction using classification algorithms',
            'Implemented complete data pipeline: data collection, cleaning, feature extraction, model training, deployment'
        ],
        link: 'https://github.com/Ankit-kumar91/AgronomiCare',
        tags: ['Python', 'Machine Learning', 'Web App', 'Agriculture'],
        image: '/agronomicare.png',
    },
    {
        title: 'Kickstarter Success Prediction',
        description: 'Multi-model classification system comparing logistic regression, KNN, XGBoost, and Random Forest on real-world business data.',
        bullets: [
            'Built multi-model classification system comparing logistic regression, KNN, XGBoost, and Random Forest',
            'Performed extensive feature engineering and data preprocessing on real-world business dataset'
        ],
        link: 'https://github.com/Ankit-kumar91/ds-ml-project-kickstarter',
        tags: ['Python', 'XGBoost', 'Random Forest', 'Data Analysis'],
        image: '/kickstarter.png',
    },
];

export const PUBLICATIONS_INFO: PublicationInfo = {
    summary: 'Authored 13 peer-reviewed publications in high-impact international journals, contributing to the fields of synthetic organic chemistry, materials science, and photochemistry.',
    scholarUrl: 'https://scholar.google.com/citations?user=YTn_UVIAAAAJ&hl=en'
};

export const PUBLICATIONS: Publication[] = [
    { title: 'Synthesis and Studies of Strained Fluorenophyrins.', authors: 'Kumar, A.; Thorat, K. G.; Ravikanth, M.', citation: 'J. Org. Chem. 2019, 84, 10321-10327', url: 'https://doi.org/10.1021/acs.joc.9b01486' },
    { title: 'Meso-Fused Carbatriphyrins(2.1.1) and its Organo phosphorus(V) Complex.', authors: 'Kumar A.; Thorat, K. G.; Sinha, A.; Butcher, R J.; Ravikanth, M.', citation: 'J. Org. Chem., 2019, 84, 9067-9074', url: 'https://doi.org/10.1021/acs.joc.9b01015' },
    { title: 'Antiaromatic Carbaporphyrinoids: Fluorene as a Fused Motif toward the Synthesis of meso-Fused Heterobenziporphyrins.', authors: 'Kumar, A.; Laxman, K.; Ravikanth, M.', citation: 'Org. Lett. 2019, 21, 8726-8730', url: 'https://doi.org/10.1021/acs.orglett.9b03329' },
    { title: 'Benzofuran-/Benzothiophene-Incorporated NIR-Absorbing Triphyrins(2.1.1).', authors: 'Kumar, A.; Thorat, K. G.; Ravikanth, M.', citation: 'Org. Lett. 2018, 20, 4871-4874', url: 'https://doi.org/10.1021/acs.orglett.8b02012' },
    { title: 'Hybrid Macrocycles of Subporphyrins and Triphyrins.', authors: 'Kumar, A.; Rajeswara Rao, M.; Lee, W. Z.; Ravikanth, M.', citation: 'Org. Lett. 2017, 19, 5924-5927', url: 'https://doi.org/10.1021/acs.orglett.7b02919' },
    { title: 'β-Meso Covalently linked AzaBODIPY-Pd(II) Dipyrrin Conjugate', authors: 'Kumar, A.; Kumar, S.; Chatterjee, T.; Ravikanth, M.', citation: 'ChemistrySelect 1 (1), 94-100', url: 'https://doi.org/10.1002/slct.201500037' },
    { title: 'Synthesis, X-ray Structure, Spectral and Electrochemical Properties of Aza-BODIPY-Metal Dipyrrinyl Conjugates', authors: 'Kumar, A.; Ravikanth, M.', citation: 'ChemistrySelect 2 (30), 9663-9669', url: 'https://doi.org/10.1002/slct.201702060' },
    { title: 'Polycyclic Aromatic Hydrocarbon-/Heterocycle-Embedded Porphyrinoids', authors: 'Laxman, K.; Kumar, A.; Ravikanth, M.', citation: 'Asian J. Org. Chem. 9 (2), 162-180', url: 'https://doi.org/10.1002/ajoc.201900752'},
    { title: 'Dibenzofuran/Dibenzothiophene-Embedded Dithia-bis(calix)-sapphyrins', authors: 'Sinha A.; Sengupta R.; Kumar A.; Ravikanth M.', citation: 'J. Org. Chem. 85 (4), 2180-2189', url: 'https://doi.org/10.1021/acs.joc.9b02912' },
    { title: 'Synthesis, Structure, Spectral, and Anion Sensing Studies of an Aromatic meso-Fused Boron(III) Benzitriphyrin(2.1.1) Complex', authors: 'Sinha A.; Kumar A.; Ravikanth M.', citation: 'Inorganic Chemistry 60 (23), 18094-19102', url: 'https://doi.org/10.1021/acs.inorgchem.1c02713' },
    { title: 'Bis-(Dibenzothiophene) Embedded Hexaphyrins: Synthesis, Structure and Properties', authors: 'Sinha A.; Kumar A.; Ravikanth M.', citation: 'Asian J. Org. Chem. 10 (6), 1463-1471', url: 'https://doi.org/10.1002/ajoc.202100157' },
    { title: 'Synthesis and studies of crowned dipyrromethenes based macrocycles', authors: 'Ojha, B.; Kumar, A.; Thorat, K. G.; Ravikanth, M.', citation: 'Tetrahedron 75 (46), 130574', url: 'https://doi.org/10.1016/j.tet.2019.130574' },
    { title: 'Switching of aromatic free base triphyrin(2.1.1) to antiaromatic phosphorus(V) complexes of triphyrin(2.1.1)', authors: 'Panda, KN.; Sengupta R.; Kumar A.; Ravikanth M.', citation: 'J. Org. Chem. 86 (5), 3778-3784', url: 'https://doi.org/10.1021/acs.joc.0c02585' }
];

export const LANGUAGES: Language[] = [
    { name: 'German', level: 'Professional Working (B1 Certified)', description: 'Comfortable in professional environments' },
    { name: 'English', level: 'Full Professional Proficiency', description: 'Fluent in technical and business contexts' },
    { name: 'Hindi', level: 'Native Proficiency', description: 'Mother tongue' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'AI & Machine Learning',
        skills: [
            { name: 'Machine Learning Algorithms', icon: <CpuChipIcon /> },
            { name: 'Deep Learning', icon: <CpuChipIcon /> },
            { name: 'Predictive Modeling', icon: <ChartPieIcon /> },
            { name: 'PyTorch', icon: <CodeBracketIcon /> },
            { name: 'Scikit-Learn', icon: <CodeBracketIcon /> },
        ]
    },
    {
        title: 'Data Science & Analytics',
        skills: [
            { name: 'Python (Pandas, NumPy)', icon: <CodeBracketIcon /> },
            { name: 'Statistical Analysis', icon: <ChartPieIcon /> },
            { name: 'Feature Engineering', icon: <ChartPieIcon /> },
            { name: 'SQL & Databases', icon: <DocumentTextIcon /> },
            { name: 'Power BI & Visualization', icon: <ChartPieIcon /> },
        ]
    },
    {
        title: 'Cheminformatics',
        skills: [
            { name: 'RDKit', icon: <BeakerIcon /> },
            { name: 'QSAR Modeling', icon: <BeakerIcon /> },
            { name: 'Chemical Data Mining', icon: <BeakerIcon /> },
            { name: 'Molecular Property Prediction', icon: <CpuChipIcon /> },
        ]
    },
    {
        title: 'Chemistry & Lab',
        skills: [
            { name: 'NMR, FT-IR, UV-Vis', icon: <BeakerIcon /> },
            { name: 'HPLC, GC-MS', icon: <BeakerIcon /> },
            { name: 'Process Chemistry', icon: <PaintBrushIcon /> },
            { name: 'Pharmaceutical Manufacturing', icon: <BeakerIcon /> },
        ]
    },
];
