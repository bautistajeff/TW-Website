(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const themeStorageKey = 'tw-theme';
  const colorScheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-bs-theme', theme);
    const dark = theme === 'dark';
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggle.setAttribute('aria-pressed', String(dark));
    }
    if (themeIcon) themeIcon.textContent = dark ? '☀' : '☾';
    if (themeLabel) themeLabel.textContent = dark ? 'Light mode' : 'Dark mode';
  }

  const storedTheme = localStorage.getItem(themeStorageKey);
  const savedTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
  let hasUserTheme = Boolean(savedTheme);
  applyTheme(savedTheme || (colorScheme && colorScheme.matches ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(themeStorageKey, next);
      hasUserTheme = true;
    });
  }

  if (colorScheme) {
    const updateFromSystem = event => {
      if (!hasUserTheme) {
        applyTheme(event.matches ? 'dark' : 'light');
      }
    };
    if (colorScheme.addEventListener) colorScheme.addEventListener('change', updateFromSystem);
    else if (colorScheme.addListener) colorScheme.addListener(updateFromSystem);
  }

  const topics = {
    definition: {
      n:'01', title:'Technical Writing: Definition and Purpose',
      intro:'Technical writing communicates specialized information clearly and accurately so a particular audience can understand a subject or complete a task.',
      cards:[
        ['Inform','Present facts, findings, or instructions the reader needs.'],
        ['Guide','Help readers complete a process safely and correctly.'],
        ['Support decisions','Organize evidence so readers can compare options and act.']
      ],
      visual:'<svg viewBox="0 0 720 150" role="img" aria-labelledby="definition-visual-title"><title id="definition-visual-title">Technical information is shaped for an audience to support understanding and action</title><rect x="12" y="34" width="150" height="82" rx="14"></rect><text x="87" y="82">Information</text><path d="M174 75h62"></path><path d="m224 63 12 12-12 12"></path><rect x="248" y="34" width="180" height="82" rx="14"></rect><text x="338" y="72"><tspan x="338">Clear, accurate</tspan><tspan x="338" dy="20">communication</tspan></text><path d="M440 75h62"></path><path d="m490 63 12 12-12 12"></path><rect x="514" y="34" width="194" height="82" rx="14"></rect><text x="611" y="72"><tspan x="611">Reader</tspan><tspan x="611" dy="20">understanding</tspan></text></svg>',
      caption:'Purpose: turn complex information into useful understanding.',
      example:'A setup guide explains a device in the order a new user needs: identify the parts, connect them, and check that the device works.'
    },
    abcs: {
      n:'02', title:'ABCs of Technical Writing',
      intro:'These guiding principles shape effective technical communication, from checking facts to choosing words and organizing ideas for readers.',
      cards:[
        ['Accuracy','Ensure facts, figures, and data are correct. Example: report test results with exact measurements, not estimates.'],
        ['Brevity','Write concisely without unnecessary words. Example: “The system failed due to overheating” instead of “The system encountered a failure because of excessive heat.”'],
        ['Confidence','Communicate decisively. Example: “The project will meet the deadline” rather than “We think the project might meet the deadline.”'],
        ['Dignity','Maintain professionalism and respect for readers.'],
        ['Facility','Use headings, bullet points, and visuals to make reports easy to follow.'],
        ['Emphasis','Highlight what matters most to the reader, such as bolding key findings.'],
        ['Honesty','Cite sources properly and avoid plagiarism.'],
        ['Illustration','Use charts, diagrams, and graphs to clarify data.'],
        ['Judgment','Evaluate which information is relevant and credible.'],
        ['Knowledge','Collect sufficient background information before writing.'],
        ['Logic','Present ideas in a rational, step-by-step manner.'],
        ['Mechanical Neatness','Keep reports visually clean with consistent fonts, margins, and spacing.'],
        ['Normal Procedure','Follow standard formats, such as APA, MLA, or ISO, as appropriate.'],
        ['Objectivity','Write without personal bias.'],
        ['Planning','Outline before drafting to give the document direction.'],
        ['Qualification','Select only the most important ideas.'],
        ['Revision','Proofread for grammar, spelling, and clarity.'],
        ['Straight Sentence','Use clear sentence structures and transitions.'],
        ['Thoroughness','Cover all necessary details.'],
        ['Unity','Ensure ideas are coherent and flow together.'],
        ['Viewpoint','Adopt the right perspective: guide the reader rather than participate in the subject.'],
        ['Word Choice','Use simple, precise words.'],
        ['Zest','Write in a way that engages and energizes readers.']
      ],
      visual:'<svg viewBox="0 0 600 150" role="img" aria-labelledby="abcs-visual-title"><title id="abcs-visual-title">The ABCs are accuracy, brevity, and clarity</title><circle cx="110" cy="75" r="49"></circle><text x="110" y="72"><tspan x="110">A</tspan><tspan x="110" dy="21">Accuracy</tspan></text><circle cx="300" cy="75" r="49"></circle><text x="300" y="72"><tspan x="300">B</tspan><tspan x="300" dy="21">Brevity</tspan></text><circle cx="490" cy="75" r="49"></circle><text x="490" y="72"><tspan x="490">C</tspan><tspan x="490" dy="21">Clarity</tspan></text></svg>',
      caption:'Use these principles as a checklist when planning, drafting, and revising.',
      example:'For a test report, verify measurements (Accuracy), remove repeated wording (Brevity), and emphasize the main finding (Emphasis).'
    },
    outline: {
      n:'03', title:'Outlining the Subject',
      intro:'An outline arranges the main idea and supporting points before drafting. It helps a writer check scope, sequence, and relationships between ideas.',
      cards:[
        ['Choose a purpose','Decide what the reader should know or do after reading.'],
        ['Group related points','Place supporting facts and details beneath the idea they explain.'],
        ['Order the sections','Use a sequence that fits the subject, such as steps, time, or importance.']
      ],
      visual:'<svg viewBox="0 0 600 190" role="img" aria-labelledby="outline-visual-title"><title id="outline-visual-title">A sample hierarchical outline with a main subject, two sections, and supporting points</title><rect x="155" y="10" width="290" height="42" rx="10"></rect><text x="300" y="37">Subject: Safe device setup</text><path d="M300 52v20H165v16M300 72h135v16"></path><rect x="35" y="88" width="260" height="38" rx="9"></rect><text x="165" y="113">I. Prepare the device</text><rect x="305" y="88" width="260" height="38" rx="9"></rect><text x="435" y="113">II. Connect and test</text><path d="M165 126v13M435 126v13"></path><text x="165" y="164">A. Check the contents</text><text x="435" y="164">A. Follow connection steps</text></svg>',
      caption:'Example outline: a broad subject is divided into sections and details.',
      example:'For a guide to setting up a router, an outline might group “Before you begin,” “Connect the router,” and “Check the connection,” with the required materials and actions listed under each section.'
    },
    papers: {
      n:'04', title:'Types of Technical Paper',
      intro:'Technical papers and documents are selected according to the information readers need and the action the writer wants to support.',
      cards:[
        ['Technical report','Documents a project, investigation, procedure, or results for a defined audience.'],
        ['Research paper','Presents a focused question, supporting evidence, analysis, and conclusions.'],
        ['Proposal','Recommends a plan or solution and explains its value, resources, and feasibility.'],
        ['Feasibility report','Evaluates whether a proposed project or solution is practical.'],
        ['Progress report','Summarizes work completed, current status, and next steps.'],
        ['Instructional manual','Provides ordered instructions for operating equipment or completing a task.']
      ],
      visual:'<svg viewBox="0 0 680 170" role="img" aria-labelledby="papers-visual-title"><title id="papers-visual-title">Technical paper types matched to the questions they answer</title><rect x="12" y="30" width="200" height="105" rx="13"></rect><text x="112" y="65"><tspan x="112">Report</tspan><tspan x="112" dy="23">What happened?</tspan></text><rect x="240" y="30" width="200" height="105" rx="13"></rect><text x="340" y="65"><tspan x="340">Proposal</tspan><tspan x="340" dy="23">What should we do?</tspan></text><rect x="468" y="30" width="200" height="105" rx="13"></rect><text x="568" y="65"><tspan x="568">Manual</tspan><tspan x="568" dy="23">How do I do it?</tspan></text></svg>',
      caption:'Choose the document form that matches the reader’s need.',
      example:'Use a progress report to update a team on completed work, a proposal to recommend a new process, and a manual to explain how to use it.'
    },
    english: {
      n:'05', title:'The Basic English Structure',
      intro:'A basic English sentence commonly places a subject before a verb. The verb may be followed by an object or other information that completes the thought.',
      cards:[
        ['Subject','Names who or what the sentence is about.'],
        ['Verb','States an action or condition.'],
        ['Object or complement','Receives the action or adds information needed to complete the meaning.']
      ],
      visual:'<svg viewBox="0 0 660 155" role="img" aria-labelledby="english-visual-title"><title id="english-visual-title">Sentence diagram: The technician checks the equipment, with subject, verb, and object labeled</title><rect x="10" y="24" width="190" height="82" rx="12"></rect><text x="105" y="59"><tspan x="105">The technician</tspan><tspan x="105" dy="22">SUBJECT</tspan></text><rect x="235" y="24" width="170" height="82" rx="12"></rect><text x="320" y="59"><tspan x="320">checks</tspan><tspan x="320" dy="22">VERB</tspan></text><rect x="440" y="24" width="210" height="82" rx="12"></rect><text x="545" y="59"><tspan x="545">the equipment</tspan><tspan x="545" dy="22">OBJECT</tspan></text><text x="330" y="140">The technician checks the equipment.</text></svg>',
      caption:'A complete example follows the subject + verb + object pattern.',
      example:'“The technician checks the equipment.” The technician is the subject, checks is the verb, and the equipment is the object. Clear sentence structure makes instructions easier to follow.'
    },
    letter: {
      n:'06', title:'Parts of a Letter',
      intro:'A formal letter uses familiar parts in a reader-friendly order. The exact format may vary, but each part helps identify the sender, purpose, or next step.',
      cards:[
        ['Heading and date','The sender’s address or details and the date the letter was written.'],
        ['Inside address and salutation','The recipient’s details and a respectful greeting.'],
        ['Body','The opening purpose, supporting details, and any requested action.'],
        ['Closing and signature','A courteous sign-off followed by the sender’s name and signature.']
      ],
      visual:'<svg viewBox="0 0 580 260" role="img" aria-labelledby="letter-visual-title"><title id="letter-visual-title">Simplified formal letter showing its main parts in order</title><rect x="70" y="10" width="440" height="238" rx="12"></rect><text x="105" y="43" text-anchor="start">Sender details and date</text><text x="105" y="78" text-anchor="start">Recipient address</text><text x="105" y="111" text-anchor="start">Salutation</text><text x="105" y="150" text-anchor="start">Body: purpose and details</text><text x="105" y="188" text-anchor="start">Complimentary closing</text><text x="105" y="220" text-anchor="start">Signature and name</text></svg>',
      caption:'The major parts of a formal letter, from heading to signature.',
      example:'A request letter can begin with its purpose, provide brief context, state the specific action requested, and close with thanks and the sender’s name.'
    },
    graphs: {
      n:'07', title:'Graphs and Charts',
      intro:'Graphs and charts present numerical information visually. Select a format that fits the comparison, trend, or relationship the reader needs to see.',
      cards:[
        ['Bar chart','Compare amounts across categories.'],
        ['Line graph','Show how values change over time.'],
        ['Pie chart','Show how parts contribute to a whole when there are only a few categories.'],
        ['Label and explain','Add a clear title, units, category labels, and a caption; refer to the visual in the text.']
      ],
      visual:'<svg viewBox="0 0 620 230" role="img" aria-labelledby="graphs-visual-title"><title id="graphs-visual-title">Example bar chart comparing weekly manual views across three weeks</title><path d="M85 25v160h490M85 145h490M85 105h490M85 65h490"></path><rect x="160" y="105" width="70" height="80" rx="4"></rect><rect x="300" y="65" width="70" height="120" rx="4"></rect><rect x="440" y="35" width="70" height="150" rx="4"></rect><text x="195" y="211">Week 1</text><text x="335" y="211">Week 2</text><text x="475" y="211">Week 3</text><text x="52" y="151">20</text><text x="52" y="111">40</text><text x="52" y="71">60</text><text x="52" y="31">80</text></svg>',
      caption:'Example bar chart: weekly manual views increase from Week 1 to Week 3.',
      example:'A bar chart can compare the number of support requests by category. Include the units and data source so readers can interpret the values correctly.'
    },
    products: {
      n:'08', title:'Products of Technical Writing',
      intro:'Technical writing produces documents that serve practical purposes and provide structured information for readers.',
      cards:[
        ['Reports','Technical, feasibility, progress, survey, laboratory, and trip reports support understanding and decision-making.'],
        ['Contracts and policies','Formal agreements and organizational rules.'],
        ['Manuals and proposals','Instructional guides and suggestions or plans for projects.'],
        ['Business letters','Sales, order, complaint, resignation, and recommendation letters.'],
        ['Academic and professional papers','Abstracts, journal articles, monographs, and technical papers.'],
        ['Graphic aids','Charts, diagrams, and specifications that support written information.']
      ],
      example:'A feasibility report for a new IT system analyzes costs, benefits, and risks to help management decide whether to proceed.'
    },
    techniques: {
      n:'09', title:'Basic Techniques in Technical Writing',
      intro:'These methods help writers explain concepts, group information, and describe systems or processes.',
      cards:[
        ['Definition','Explain a term using an informal, formal, or amplified definition.'],
        ['Classification','Group items that share traits. Example: trees can be classified as angiosperms or gymnosperms.'],
        ['Partition','Break a whole into its parts. Example: a financial statement can be divided into assets, liabilities, and equity.'],
        ['Process description','Explain step by step how something works or how to do something.'],
        ['Mechanism description','Explain an object’s parts and functions, such as the parts of a thermometer.']
      ],
      example:'A guide to a thermometer can combine mechanism description (identify its parts) with process description (explain how to take a reading).'
    },
    language: {
      n:'10', title:'Language Use in Technical Writing',
      intro:'Clarity is essential. Choose language that is precise, respectful, objective, and appropriate for the audience.',
      cards:[
        ['Jargon','Avoid specialized terms unless the audience understands them; define terms when needed.'],
        ['Double talk','Avoid empty or misleading language. State the meaning directly.'],
        ['Sexist language','Use gender-neutral terms.'],
        ['Biased language','Keep descriptions objective and avoid unfair assumptions.'],
        ['Negative tone','Use a professional tone that does not alienate readers.'],
        ['Colloquialisms','Avoid regional slang that readers may not understand.']
      ],
      example:'Instead of “The car is expensive,” write “The car costs $60,000.” The specific statement is more precise and less subjective.'
    },
    apa: {
      n:'11', title:'APA 7th Edition Citation Basics',
      intro:'APA style uses in-text citations to identify sources and a reference list to give readers information to locate them.',
      cards:[
        ['Parenthetical citation','Place the author and year in parentheses: (Smith, 2023).'],
        ['Narrative citation','Include the author in the sentence: Smith (2023) argued…'],
        ['Reference list','Arrange entries alphabetically and use a hanging indent. Italicize titles where APA style requires it.'],
        ['Journal article example','Smith, J. (2023). The impact of mindfulness on stress reduction.'],
        ['Book example','Brown, D. (2020). The power of vulnerability.']
      ],
      example:'Match every in-text citation to a reference-list entry. Complete APA references may also require details such as the publication or journal information, volume, issue, page range, and DOI or URL, depending on the source.'
    },
    visuals: {
      n:'12', title:'Graphic Aids',
      intro:'Visuals help explain structure, data, and appearance in technical documents. Select a graphic that makes the information easier to understand.',
      cards:[
        ['Structural visuals','Flowcharts and diagrams show steps, systems, or relationships.'],
        ['Data-driven visuals','Graphs and tables organize and compare data.'],
        ['Illustrative visuals','Pictures and schematics show objects, features, or details.'],
        ['Label and number','Identify visuals consistently, such as Figure 1 or Table 2.'],
        ['Place near the text','Position each visual close to the passage that discusses it.'],
        ['Make visuals purposeful','Avoid graphics used only for decoration.']
      ],
      example:'A flowchart showing a manufacturing process can help readers grasp the sequence of steps faster than text alone.'
    },
    communication: {
      n:'13', title:'Contemporary Communication',
      intro:'Modern workplace communication uses a range of digital channels for coordination, meetings, collaboration, and sharing knowledge.',
      cards:[
        ['Email','Provides formal communication and a written record.'],
        ['Instant messaging','Supports quick team coordination.'],
        ['Video conferencing','Enables virtual face-to-face meetings.'],
        ['Collaborative software','Supports real-time project work.'],
        ['Social media','Can support marketing and professional networking.'],
        ['Podcasts and webinars','Share training and knowledge.'],
        ['Cloud tools','Support online storage and collaboration; handle access and privacy carefully.']
      ],
      example:'Digital channels can be misinterpreted, depend on technology, reduce personal interaction, and create privacy concerns. Choose the medium to fit the message and audience.'
    }
  };

  const topicContent = document.getElementById('topicContent');
  if (topicContent) {
    const tabs = [...document.querySelectorAll('.topic-tab')];

    function showTopic(button) {
      const topic = topics[button.dataset.topic];
      if (!topic) return;
      topicContent.setAttribute('aria-labelledby', button.id);
      const visual = topic.visual ? `<figure class="topic-visual">${topic.visual}<figcaption>${topic.caption}</figcaption></figure>` : '';
      topicContent.innerHTML = `<div class="content-label mb-2">Topic ${topic.n}</div><h2>${topic.title}</h2><p>${topic.intro}</p><div class="topic-grid">${topic.cards.map(card => `<div class="mini-card"><h3>${card[0]}</h3><p>${card[1]}</p></div>`).join('')}</div>${visual}<div class="example-box"><div class="fw-bold mb-1">Example / application</div><p>${topic.example}</p></div>`;
      tabs.forEach(tab => {
        const active = tab === button;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        tab.tabIndex = active ? 0 : -1;
      });
    }

    tabs.forEach((button, index) => {
      button.addEventListener('click', () => showTopic(button));
      button.addEventListener('keydown', event => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        event.preventDefault();
        const offset = event.key === 'ArrowRight' ? 1 : -1;
        const nextTab = tabs[(index + offset + tabs.length) % tabs.length];
        nextTab.focus();
        showTopic(nextTab);
      });
    });

    const initialTab = tabs.find(tab => tab.getAttribute('aria-selected') === 'true');
    if (initialTab) showTopic(initialTab);
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const subject = encodeURIComponent(data.get('subject'));
      const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
      document.getElementById('formStatus').textContent = 'Opening your default email application…';
      window.location.href = `mailto:${contactForm.dataset.recipient}?subject=${subject}&body=${body}`;
    });
  }
})();
