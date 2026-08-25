import React from 'react';
import type { NavItem, Project, PublicationInfo, Experience, Education, Certification, SkillCategory, Publication, Language } from './types';
import {
    BeakerIcon,
    ChartPieIcon,
    CodeBracketIcon,
    CpuChipIcon,
    DocumentTextIcon
} from './components/icons/Icons';

export const PERSONAL_INFO = {
    name: 'Ankit Kumar',
    title: 'AI/ML for Drug Discovery | CADD and Cheminformatics | Ph.D. Chemistry',
    address: 'Troisdorf, Germany',
    email: 'chem.ak91@gmail.com',
    linkedin: 'ankit-kumar91-',
    linkedinUrl: 'https://www.linkedin.com/in/ankit-kumar91-/',
    github: 'Ankit-kumar91',
    githubUrl: 'https://github.com/Ankit-kumar91',
    scholarUrl: 'https://scholar.google.com/citations?user=YTn_UVIAAAAJ&hl=en',
    resumeUrl: '/Ankit_Kumar_CV.pdf',
};

export const NAV_ITEMS: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
];

export const PROFILE = `Computational drug discovery scientist applying machine learning and AI to molecular design, with hands-on expertise in cheminformatics (RDKit), molecular modeling (Maestro, LiveDesign), and molecular dynamics (GROMACS). Backed by a Ph.D. in Chemistry and 7+ years of experimental research, I build predictive models and analyze molecular data to accelerate drug discovery, bridging AI/ML with chemistry. Most recently I have focused on structure-based virtual screening and free energy methods (FEP), combining physics-based scoring with machine learning to prioritize compounds. I train QSAR and graph neural network models on ChEMBL bioactivity data and deploy them as FastAPI and Streamlit services.`;

export const EXPERIENCES: Experience[] = [
    {
        period: 'Mar 2025 – Present',
        role: 'AI Trainer — Expert & Reviewer',
        company: 'Outlier.ai',
        location: 'Troisdorf, Germany (Remote)',
        description: [
            'Create and curate high-quality datasets and evaluation frameworks for STEM-focused AI models and drug discovery agents',
            'Review, edit, and improve work submitted by peers to align with client requirements and quality standards',
            'Provide expert feedback on chemical data accuracy and scientific validity for AI training datasets',
            'Analyze the performance of AI models on chemistry tasks, identifying failure modes and areas for enhancement'
        ]
    },
    {
        period: 'Apr 2024 – Feb 2025',
        role: 'Career Transition: AI & Machine Learning in Chemistry',
        company: 'Self-Directed Learning',
        location: 'Troisdorf, Germany',
        description: [
            'Focused study in machine learning fundamentals, deep learning, and AI applications in chemistry',
            'Built cheminformatics expertise with RDKit for molecular property prediction and QSAR modeling',
            'Earned NVIDIA-Certified Associate: Generative AI & LLMs, and B1 German certification'
        ]
    },
    {
        period: 'Nov 2023 – Mar 2024',
        role: 'Data Science Trainee',
        company: 'neuefische GmbH — School for Digital Talent',
        location: 'Hamburg, Germany (Remote)',
        description: [
            'Intensive bootcamp in ML algorithms, statistical modeling, and end-to-end data science workflows',
            'Delivered projects covering data collection, preprocessing, model training, evaluation, and deployment'
        ]
    },
    {
        period: 'Jul 2022 – Oct 2023',
        role: 'Full-Time Parenting',
        company: 'Career Break',
        location: 'Troisdorf, Germany',
        description: []
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
            'Developed scalable process chemistry routes for mass production of pharmaceutical intermediates',
            'Achieved 10–15% yield improvements across two routes, reducing production cost and enhancing profitability',
            'Interpreted NMR, IR, and UV data, maintained laboratory records, and prepared technical reports'
        ]
    },
    {
        period: 'Jul 2014 – Dec 2019',
        role: 'Doctoral Researcher (Ph.D. Chemistry)',
        company: 'Indian Institute of Technology Bombay',
        location: 'Mumbai, India',
        description: [
            'Developed polyaromatic hydrocarbon based porphyrinoid macrocycles and metal complexes',
            'Investigated aromatic, antiaromatic, and non-aromatic behavior through experimental and computational tools',
            'Established structure–property relationships linking molecular architecture to absorption and redox behavior',
            'Published 13 peer-reviewed articles in journals including J. Org. Chem., Org. Lett., and Inorg. Chem.'
        ]
    },
];

export const EDUCATION: Education[] = [
    {
        degree: 'Doctor of Philosophy (Ph.D.) in Chemistry',
        period: '2014 – 2019',
        institution: 'Indian Institute of Technology Bombay, Mumbai, India',
        description: 'Synthesis of porphyrinoid macrocycles, spectroscopic analysis, and structure–property relationships. Strong hands-on background in NMR, HR-MS, UV–Vis, fluorescence, electrochemistry, and X-ray crystallography. 13 peer-reviewed articles.',
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
        description: 'Foundational studies in chemistry and life sciences.',
    }
];

export const CERTIFICATIONS: Certification[] = [
    { name: 'Applications of Free Energy Calculations in Modern Drug Hunting', issuer: 'Schrödinger', year: '2026' },
    { name: 'Virtual Screening with Integrated Physics and Machine Learning', issuer: 'Schrödinger', year: '2026' },
    { name: 'Target Enablement, Preparation, and Validation', issuer: 'Schrödinger', year: '2026' },
    { name: 'Designing Quality Ligand Libraries', issuer: 'Schrödinger', year: '2026' },
    { name: 'Introduction to Molecular Modeling in Drug Discovery', issuer: 'Schrödinger' },
    { name: 'MD Simulations & Computational Biophysics (GROMACS, VMD, ChimeraX)', issuer: 'BDGLifeSciences' },
    { name: 'Generative AI & LLMs', issuer: 'NVIDIA-Certified Associate', year: '2024' },
    { name: 'Data Science Bootcamp', issuer: 'neuefische GmbH', year: '2024' },
];

export const PROJECTS: Project[] = [
    {
        title: 'EGFR pIC50 Prediction — QSAR & Deep Learning for Kinase Inhibitor Potency',
        description: 'Potency prediction for EGFR inhibitors, trained with classical ML and Chemprop GNN models, validated on scaffold-based splits with an uncertainty estimate on every prediction.',
        featured: true,
        metrics: [
            { value: '10,502', label: 'ChEMBL bioactivities' },
            { value: '0.889', label: 'Test RMSE' },
            { value: '0.73', label: 'Spearman ρ' },
        ],
        bullets: [
            'Curated 10,502 EGFR bioactivities from ChEMBL (CHEMBL203) with RDKit standardization and Bemis–Murcko scaffold splitting, so reported accuracy reflects generalization to unseen chemotypes rather than memorized analogues',
            'Trained and compared classical ML (Random Forest, XGBoost, LightGBM on ECFP4 + RDKit descriptors), a message-passing GNN (Chemprop D-MPNN), and a CheMeleon fine-tune — Random Forest won on RMSE 0.889 / Spearman ρ 0.73',
            'Shipped every prediction with a conformal uncertainty interval and an applicability-domain flag, so a chemist knows which predictions to act on',
            'Deployed as a Streamlit app and a FastAPI service, containerized with Docker'
        ],
        link: 'https://github.com/Ankit-kumar91/egfr-pic50-prediction',
        demoLink: 'https://pic50prediction.streamlit.app/',
        demoLabel: 'Live demo',
        tags: ['RDKit', 'Chemprop', 'PyTorch Geometric', 'Scikit-Learn', 'Conformal Prediction', 'FastAPI', 'Docker'],
        image: '/egfr.svg',
    },
    {
        title: 'Imatinib Resistance in BCR-ABL1 — All-Atom MD of the T315I Gatekeeper Mutation',
        description: 'A 2×2 molecular dynamics study that reproduces a clinically observed resistance mechanism from first principles, and explains why the second-generation drug escapes it.',
        featured: true,
        metrics: [
            { value: '1.2 µs', label: '12 × 100 ns runs' },
            { value: '97% → 53%', label: 'Gatekeeper contact' },
            { value: '0.6', label: 'H-bonds/frame lost' },
        ],
        bullets: [
            'Designed a 2×2 panel (imatinib and ponatinib × wild-type and T315I) and ran 12 × 100 ns GROMACS simulations with CHARMM27 and explicit solvent — in-silico mutagenesis on a GCP L4 GPU',
            'Reproduced the clinical resistance mechanism: T315I collapsed imatinib’s gatekeeper contact from 97% to 53% occupancy at a cost of 0.6 H-bonds per frame, while ponatinib was unaffected',
            'Built the RMSD/RMSF, hydrogen-bond, and pocket-contact analysis pipeline in Python from scratch'
        ],
        link: 'https://github.com/Ankit-kumar91/t315i-kinase-md-simulations',
        tags: ['GROMACS', 'CHARMM27', 'ChimeraX', 'PyMOL', 'VMD', 'NumPy', 'GCP'],
        image: '/md-t315i.jpg',
    },
    {
        title: 'AqSolPrediction — Aqueous Solubility Prediction',
        description: 'An end-to-end cheminformatics service predicting aqueous solubility from a SMILES string, live and public on Hugging Face Spaces.',
        featured: true,
        metrics: [
            { value: '0.88', label: 'Test R²' },
            { value: '~10k', label: 'AqSolDB compounds' },
            { value: 'Live', label: 'Public demo' },
        ],
        bullets: [
            'Built an ML regression pipeline on AqSolDB (~10k compounds) using RDKit molecular descriptors and Morgan fingerprints, reaching test R² = 0.88',
            'Deployed an interactive web app on Hugging Face Spaces taking real-time SMILES input',
            'Packaged the model behind a FastAPI service in Docker for reuse outside the demo UI'
        ],
        link: 'https://github.com/Ankit-kumar91/AqSolPrediction',
        demoLink: 'https://huggingface.co/spaces/Ankitkumar91/aqsol-prediction',
        demoLabel: 'Live demo',
        tags: ['RDKit', 'Scikit-Learn', 'Hugging Face', 'FastAPI', 'Docker'],
        image: '/aqsol.jpg',
    },
    {
        title: 'AgronomiCare — Plant Disease Prediction',
        description: 'A classification web app for agricultural disease prediction with a complete data pipeline, built during the data science bootcamp.',
        bullets: [
            'Developed an ML web application for agricultural disease prediction using classification algorithms',
            'Implemented the full pipeline: data collection, cleaning, feature extraction, model training, and deployment'
        ],
        link: 'https://github.com/Ankit-kumar91/AgronomiCare',
        tags: ['Python', 'Machine Learning', 'Web App'],
        image: '/agronomicare.jpg',
    },
    {
        title: 'Kickstarter Success Prediction',
        description: 'Multi-model classification comparing logistic regression, KNN, XGBoost, and Random Forest on a real-world business dataset.',
        bullets: [
            'Built a multi-model classification system and compared performance across four algorithm families',
            'Performed extensive feature engineering and preprocessing on messy real-world data'
        ],
        link: 'https://github.com/Ankit-kumar91/ds-ml-project-kickstarter',
        tags: ['Python', 'XGBoost', 'Random Forest'],
        image: '/kickstarter.jpg',
    },
];

export const PUBLICATIONS_INFO: PublicationInfo = {
    summary: 'Author of 13 peer-reviewed publications in international journals across synthetic organic chemistry, materials science, and photochemistry — including J. Org. Chem., Org. Lett., and Inorganic Chemistry.',
    scholarUrl: PERSONAL_INFO.scholarUrl
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
    { name: 'English', level: 'Full Professional Proficiency', description: 'Fluent in technical and business contexts' },
    { name: 'German', level: 'B1 Certified', description: 'Comfortable in professional environments' },
    { name: 'Hindi', level: 'Native Proficiency', description: 'Mother tongue' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Machine Learning & AI',
        skills: [
            { name: 'Machine Learning Algorithms', icon: <CpuChipIcon /> },
            { name: 'Deep Learning', icon: <CpuChipIcon /> },
            { name: 'Graph Neural Networks', icon: <CpuChipIcon /> },
            { name: 'Conformal Uncertainty Estimation', icon: <ChartPieIcon /> },
            { name: 'Generative AI / LLMs', icon: <CpuChipIcon /> },
        ]
    },
    {
        title: 'Cheminformatics & QSAR',
        skills: [
            { name: 'RDKit', icon: <BeakerIcon /> },
            { name: 'Molecular Fingerprints & Descriptors', icon: <BeakerIcon /> },
            { name: 'QSAR Modeling', icon: <BeakerIcon /> },
            { name: 'Chemprop (D-MPNN)', icon: <CodeBracketIcon /> },
            { name: 'Applicability Domain Analysis', icon: <ChartPieIcon /> },
        ]
    },
    {
        title: 'Computer-Aided Drug Design',
        skills: [
            { name: 'Molecular Docking', icon: <BeakerIcon /> },
            { name: 'Virtual Screening', icon: <BeakerIcon /> },
            { name: 'Free Energy Perturbation (FEP)', icon: <BeakerIcon /> },
            { name: 'Molecular Dynamics (GROMACS)', icon: <BeakerIcon /> },
            { name: 'Schrödinger Maestro & LiveDesign', icon: <BeakerIcon /> },
        ]
    },
    {
        title: 'Programming & MLOps',
        skills: [
            { name: 'Python', icon: <CodeBracketIcon /> },
            { name: 'Scikit-Learn, PyTorch', icon: <CodeBracketIcon /> },
            { name: 'SQL', icon: <DocumentTextIcon /> },
            { name: 'Git, Docker', icon: <CodeBracketIcon /> },
            { name: 'FastAPI, Streamlit', icon: <CodeBracketIcon /> },
            { name: 'Weights & Biases, GCP', icon: <ChartPieIcon /> },
        ]
    },
    {
        title: 'Data Sources & Platforms',
        skills: [
            { name: 'ChEMBL', icon: <DocumentTextIcon /> },
            { name: 'PubChem', icon: <DocumentTextIcon /> },
            { name: 'Protein Data Bank (PDB)', icon: <DocumentTextIcon /> },
            { name: 'Hugging Face', icon: <CodeBracketIcon /> },
            { name: 'ChimeraX, PyMOL, VMD', icon: <BeakerIcon /> },
        ]
    },
    {
        title: 'Experimental & Analytical',
        skills: [
            { name: 'Organic Synthesis', icon: <BeakerIcon /> },
            { name: 'Process Chemistry & Scale-Up', icon: <BeakerIcon /> },
            { name: 'NMR, HR-MS', icon: <BeakerIcon /> },
            { name: 'HPLC, GC-MS', icon: <BeakerIcon /> },
            { name: 'X-ray Crystallography', icon: <BeakerIcon /> },
        ]
    },
];
