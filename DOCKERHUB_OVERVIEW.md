# 🎓 Voithos Spoudon EAP (Study Assistant)

> **The smartest way for EAP students to use AI.**
> *Ένας έξυπνος βοηθός σπουδών για τους φοιτητές του Ελληνικού Ανοικτού Πανεπιστημίου.*

![Docker Image Size](https://img.shields.io/docker/image-size/christosk89/voithos-spoudon-eap)
![Docker Pulls](https://img.shields.io/docker/pulls/christosk89/voithos-spoudon-eap)

## 🧐 What is this? / Τι είναι αυτό;

Αυτό το Docker image περιέχει μια web εφαρμογή (HTML/JS running on Nginx) που βοηθάει τους φοιτητές Πληροφορικής του ΕΑΠ να δημιουργήσουν **εξειδικευμένα Prompts** για LLMs (ChatGPT, Gemini, Claude).

Αντί να ρωτάτε το AI "λύνεται αυτή η άσκηση;", αυτό το εργαλείο παράγει prompts που καθοδηγούν το AI να λειτουργήσει ως **Καθηγητής**, εξηγώντας την ύλη και βοηθώντας στην κατανόηση, βάση των ενοτήτων του ΕΑΠ (ΠΛΗ10 - ΠΛΗΨΙ).

---

## 🚀 Quick Start

Run the container using the following command:

```bash
docker run -d -p 8080:80 christosk89/voithos-spoudon-eap
```

Once running, access the app at: [http://localhost:8080](http://localhost:8080)

## ✨ Features

*   ✅ Simple UI: Minimal interface, no configuration needed.
*   ✅ EAP Focused: Covers 19 Computer Science modules (ΠΛΗ).
*   ✅ Privacy: Runs locally in your browser. No data sent to external servers.
*   ✅ Lightweight: Based on Nginx Alpine, extremely small footprint.

## ⚠️ Disclaimer (Πνευματικά Δικαιώματα)
IMPORTANT / ΣΗΜΑΝΤΙΚΟ:

This image **DOES NOT** contain any study material, books, PDFs, or slides belonging to the Hellenic Open University (EAP).

Το συγκεκριμένο image περιέχει μόνο τον κώδικα της εφαρμογής και τη λογική των prompts.

Users must provide their own study materials (PDFs) manually to the AI models.

We do not host or distribute copyrighted content.

## 🔗 Source Code
See the source code and contribute on GitHub: 👉 [https://github.com/christoskataxenos/voithos-spoudon-eap](https://github.com/christoskataxenos/voithos-spoudon-eap)
