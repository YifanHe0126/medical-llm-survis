
const publications = [
    { title: "LLaVA-Med: Training Large Vision-Language Models for Biomedicine", year: 2024 },
    { title: "BioGPT: Generative Pre-trained Transformer for Biomedical Text Generation and Mining", year: 2022 },
    { title: "PMC-LLaMA: A Large Language Model for Biomedical Knowledge Enhancement", year: 2023 },
    { title: "Med-PaLM: Large Language Models Encode Clinical Knowledge", year: 2023 },
    { title: "VisualMed: Enhancing Medical Image Understanding using Multimodal LLMs", year: 2023 },
    { title: "GatorTron: A Large Language Model for Electronic Health Records", year: 2022 },
    { title: "Path-VLM: Pathology Vision Language Model", year: 2021 },
    { title: "EHR-Med: Multimodal Medical Record Reasoning with LLMs", year: 2024 },
    { title: "Survey: Large Language Models in Medicine", year: 2024 },
    { title: "VQA-RAD: Visual Question Answering Dataset for Radiology Images", year: 2020 }
];

const app = document.getElementById('app');
app.innerHTML = '<ul>' + publications.map(p => `<li><strong>${p.title}</strong> (${p.year})</li>`).join('') + '</ul>';
