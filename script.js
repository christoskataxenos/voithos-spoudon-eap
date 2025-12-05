let currentStep = 0;
const totalSteps = 6;
let stepData = {
    module: '',
    studyPhase: '',
    depth: '',
    outputStyle: '',
    persona: '',
    userQuestion: ''
};

// --- Form Navigation ---

function nextStep() {
    if (currentStep < totalSteps) {
        goToStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 0) {
        goToStep(currentStep - 1);
    }
}

function goToStep(stepIndex) {
    const currentEl = document.getElementById(`step-${currentStep}`);
    const nextEl = document.getElementById(`step-${stepIndex}`);

    currentEl.classList.remove('active');

    setTimeout(() => {
        currentEl.style.display = 'none';
        nextEl.style.display = 'block';
        void nextEl.offsetWidth;
        nextEl.classList.add('active');
        currentStep = stepIndex;
        updateProgress();
    }, 300);
}

function selectOption(qIndex, value) {
    // Keys mapping: 1=module, 2=studyPhase, 3=depth, 4=outputStyle, 5=persona
    // Note: Step 6 is text input, handled separately in generatePrompt
    const keys = ['', 'module', 'studyPhase', 'depth', 'outputStyle', 'persona'];
    if (qIndex <= 5) {
        stepData[keys[qIndex]] = value;
    }

    const activeStep = document.getElementById(`step-${qIndex}`);
    const buttons = activeStep.querySelectorAll('.option-item');
    buttons.forEach(btn => btn.classList.remove('selected'));

    setTimeout(() => {
        if (currentStep < 6) { // Auto advance only until step 5
            nextStep();
        }
    }, 200);
}

function updateProgress() {
    const percent = (currentStep / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${percent}%`;
}


// --- EAP Prompt Generation Logic ---

function generatePrompt() {
    // Capture the text input from Step 6
    stepData.userQuestion = document.getElementById('user-question').value;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    const promptText = `ROLE:
Ενέργησε ως έμπειρος Ακαδημαϊκός Βοηθός / Καθηγητής για το πρόγραμμα σπουδών "Πληροφορική" του Ελληνικού Ανοικτού Πανεπιστημίου (ΕΑΠ).
Ο στόχος σου είναι να με βοηθήσεις να **μάθω** και να κατανοήσω σε βάθος την ύλη, όχι απλώς να μου δώσεις έτοιμες λύσεις.

CONTEXT:
• Ενότητα (Module): [ ${stepData.module} ]
• Στόχος (Task): [ ${stepData.studyPhase} ]
• Βάθος Ανάλυσης: [ ${stepData.depth} ]
• Μορφή Απάντησης: [ ${stepData.outputStyle} ]
• Ο Ρόλος σου: [ ${stepData.persona} ]

SPECIFIC REQUEST:
${stepData.userQuestion ? `• Η ερώτησή μου: "${stepData.userQuestion}"` : '• (Δεν υπάρχει συγκεκριμένη ερώτηση, ξεκίνα με μια επισκόπηση του θέματος)'}

INSTRUCTIONS:
1. Έχω επισυνάψει το σχετικό εκπαιδευτικό υλικό (PDF) από τον φάκελο **\\ΕΑΠ\\${stepData.module}**. Χρησιμοποίησέ το ως την ΚΥΡΙΑ πηγή πληροφορίας.
2. Αν ζητήσω κώδικα, εξήγησε μου *γιατί* λειτουργεί έτσι.
3. Αν ρωτήσω για Εργασία Εξαμήνου, ΜΗΝ την λύσεις ολόκληρη. Δώσε μου ψευδοκώδικα, λογικά βήματα ή ένα παρόμοιο παράδειγμα για να καταλάβω τη μεθοδολογία.
4. Χρησιμοποίησε την ορολογία που χρησιμοποιεί το ΕΑΠ στα βιβλία του.
5. Απάντησε αποκλειστικά στα **Ελληνικά**.

START:
Είμαι έτοιμος. Εάν έγραψα κάποια ερώτηση παραπάνω, απάντησε την άμεσα. Αν όχι, ρώτησέ με ποιο κεφάλαιο της ${stepData.module} θέλω να μελετήσουμε σήμερα.`;

    document.getElementById('final-prompt-text').innerText = promptText;
}

function copyFinalPrompt() {
    const text = document.getElementById('final-prompt-text').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.result-actions .btn-primary');
        const original = btn.innerText;
        btn.innerText = "Αντιγράφηκε! ✅";
        setTimeout(() => btn.innerText = original, 2000);
    });
}
