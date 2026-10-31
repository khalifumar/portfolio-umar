---
title: 5-Min Price Ready Sales Engine
year: 2025
role: Fullstack AI & Data Developer
tags: [Python, Streamlit, Ollama, Local LLM, RapidFuzz, Spreadsheets]
link: https://price-recomendation-digipack.streamlit.app/
---

## Executive Summary

The **5-Min Price Ready Sales Engine** is a privacy-first AI quotation assistant developed to solve complex multi-catalog price discovery for sales and procurement teams. By pairing local large language models (LLMs) with high-speed fuzzy matching algorithms, quotation turnaround was slashed from minutes of manual lookup to seconds.

## Core Features & Methodology

- **Local LLM Architecture via Ollama:**
  Designed an offline, on-premise AI pipeline utilizing local models via Ollama. This guarantees 100% enterprise data privacy by eliminating cloud API data leakage and recurring external API billing.
- **Automated Price Discovery & Fuzzy Matching Engine:**
  Implemented a high-performance search algorithm utilizing **Pandas** and **RapidFuzz** across multi-vendor spreadsheet catalogs to automatically identify minimum vendor Cost of Goods Sold (COGS) even with inconsistent product descriptions.
- **Interactive Streamlit Application:**
  Built a clean, human-centric web app using **Streamlit**. Sales representatives can paste or query product requests in natural language and receive instant, validated quotation sheets with margin scenarios.

## Measurable Results

- **95% Reduction in Quotation Turnaround:** Reduced quote preparation time from minutes of spreadsheet searching to single-second inquiries.
- **Margin Protection:** Automatically flags currency conversion nuances and supplier discounts to safeguard gross margins.

## Technology Stack

- **Application Framework:** Streamlit (Python)
- **AI / LLM:** Ollama (Local Llama / Mistral Models), LangChain prompt pipelines
- **Data Manipulation & Search:** Pandas, NumPy, RapidFuzz, OpenPyXL
