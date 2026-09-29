/**
 * Vishnu P B — Personal Portfolio Script
 * Pure Vanilla JavaScript: Navigation, Interactive Logic Simulations & Modal Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollSpy();
  initProjectModals();
  initContactForm();
  initCopyButtons();
});

/* ==========================================================================
   1. Navigation & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

  // Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      const icon = mobileToggle.querySelector('i') || mobileToggle.querySelector('svg');
      if (icon) {
        if (isOpen) {
          mobileToggle.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>';
        } else {
          mobileToggle.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
        }
      }
    });

    // Close mobile menu when a navigation item is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
        }
      });
    });
  }
}

/* ==========================================================================
   2. Scroll Spy (Active Navigation Highlight)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  const onScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ==========================================================================
   3. Interactive Project Simulations & Code Viewer
   ========================================================================== */

// Project Data & Python Source Codes
const projectData = {
  voter: {
    title: 'Voter Eligibility Calculator',
    kicker: 'Python · Conditional Logic',
    code: `# Voter Eligibility Calculator
# Author: Vishnu P B (B.Tech 1st Sem)

def check_voting_eligibility():
    print("=== VOTER ELIGIBILITY CHECKER ===")
    try:
        age_input = input("Enter your age: ")
        age = int(age_input)
        
        if age < 0:
            print("Error: Age cannot be negative.")
        elif age >= 18:
            print(f"Result: You are {age} years old.")
            print("Status: ELIGIBLE TO VOTE.")
        else:
            years_needed = 18 - age
            print(f"Result: You are {age} years old.")
            print(f"Status: NOT ELIGIBLE. You need to wait {years_needed} more year(s).")
    except ValueError:
        print("Invalid input! Please enter a valid numerical age.")

if __name__ == "__main__":
    check_voting_eligibility()`
  },
  atm: {
    title: 'ATM Management System',
    kicker: 'Python · Functions & Loops',
    code: `# ATM Management System
# Author: Vishnu P B (B.Tech 1st Sem)

def atm_system():
    balance = 1000.0  # Initial account balance
    print("=== WELCOME TO THE PYTHON ATM ===")
    
    while True:
        print("\\n1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
        
        choice = input("Enter option (1-4): ")
        
        if choice == "1":
            print(f"Current Balance: ₹{balance:.2f}")
        elif choice == "2":
            deposit_amt = float(input("Enter amount to deposit: ₹"))
            if deposit_amt > 0:
                balance += deposit_amt
                print(f"Successfully deposited ₹{deposit_amt:.2f}.")
                print(f"Updated Balance: ₹{balance:.2f}")
            else:
                print("Invalid deposit amount.")
        elif choice == "3":
            withdraw_amt = float(input("Enter amount to withdraw: ₹"))
            if withdraw_amt > balance:
                print("Insufficient funds! Cannot complete withdrawal.")
            elif withdraw_amt <= 0:
                print("Invalid withdrawal amount.")
            else:
                balance -= withdraw_amt
                print(f"Successfully withdrew ₹{withdraw_amt:.2f}.")
                print(f"Updated Balance: ₹{balance:.2f}")
        elif choice == "4":
            print("Thank you for using the ATM. Goodbye!")
            break
        else:
            print("Invalid option. Please try again.")

if __name__ == "__main__":
    atm_system()`
  },
  grade: {
    title: 'Student Grade Calculator',
    kicker: 'Python · Arithmetic & Logic',
    code: `# Student Grade Calculator
# Author: Vishnu P B (B.Tech 1st Sem)

def calculate_grade():
    print("=== STUDENT GRADE CALCULATOR ===")
    subjects = ["Programming in Python", "Mathematics", "Web Technologies"]
    marks = []
    
    for sub in subjects:
        while True:
            try:
                score = float(input(f"Enter marks for {sub} (0-100): "))
                if 0 <= score <= 100:
                    marks.append(score)
                    break
                print("Marks must be between 0 and 100.")
            except ValueError:
                print("Please enter a valid number.")
                
    total = sum(marks)
    percentage = total / len(subjects)
    
    if percentage >= 90:
        grade = "A+"
        perf = "Outstanding"
    elif percentage >= 80:
        grade = "A"
        perf = "Excellent"
    elif percentage >= 70:
        grade = "B"
        perf = "Good"
    elif percentage >= 60:
        grade = "C"
        perf = "Satisfactory"
    elif percentage >= 50:
        grade = "D"
        perf = "Pass"
    else:
        grade = "F"
        perf = "Needs Improvement"
        
    print("\\n--- ACADEMIC REPORT ---")
    print(f"Total Marks: {total:.1f} / {len(subjects)*100}")
    print(f"Percentage: {percentage:.1f}%")
    print(f"Final Grade: {grade} ({perf})")

if __name__ == "__main__":
    calculate_grade()`
  }
};

// Simulation State for ATM
let atmSimState = {
  balance: 1000.0,
  history: ['Initial Balance: ₹1,000.00']
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-project-title');
  const modalKicker = document.getElementById('modal-project-kicker');
  const codeViewer = document.getElementById('code-viewer-content');
  const tabBtns = document.querySelectorAll('.modal-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');

  const demoButtons = document.querySelectorAll('.project-btn-demo');

  // Open modal for selected project
  demoButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const projectId = btn.getAttribute('data-project');
      if (!projectId || !projectData[projectId]) return;

      const data = projectData[projectId];
      modalTitle.textContent = data.title;
      modalKicker.textContent = data.kicker;
      codeViewer.textContent = data.code;

      // Mount dynamic interactive demo
      renderInteractiveDemo(projectId);

      // Reset to simulation tab
      tabBtns.forEach((t) => t.classList.remove('active'));
      tabPanes.forEach((p) => p.classList.remove('active'));
      const simTab = document.querySelector('[data-tab="simulation"]');
      const simPane = document.getElementById('pane-simulation');
      simTab?.classList.add('active');
      simPane?.classList.add('active');

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  const closeModal = () => {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
  };

  modalCloseBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });

  // Modal Tab Switching
  tabBtns.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      tabBtns.forEach((t) => t.classList.remove('active'));
      tabPanes.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(`pane-${targetTab}`);
      targetPane?.classList.add('active');
    });
  });
}

function renderInteractiveDemo(projectId) {
  const container = document.getElementById('interactive-demo-container');
  if (!container) return;

  if (projectId === 'voter') {
    container.innerHTML = `
      <div class="terminal-window">
        <div class="terminal-topbar">
          <span class="term-dot term-dot-red"></span>
          <span class="term-dot term-dot-yellow"></span>
          <span class="term-dot term-dot-green"></span>
          <span class="terminal-title">python voter_check.py</span>
        </div>
        <div class="terminal-content" id="voter-term-output">$ python voter_check.py
=== VOTER ELIGIBILITY CHECKER ===
Ready for input. Enter your age below to test the Python conditional logic.</div>
      </div>
      <div class="interactive-controls">
        <div class="control-row">
          <input type="number" id="voter-age-input" class="interactive-input" placeholder="Enter age (e.g. 19 or 16)" min="1" max="120" />
          <button type="button" id="voter-run-btn" class="btn btn-primary" style="padding: 9px 18px; font-size: 0.8125rem;">
            Run Check
          </button>
        </div>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
          Simulates Python's <code>if age &gt;= 18:</code> conditional statement with boundary validation.
        </p>
      </div>
    `;

    const runBtn = document.getElementById('voter-run-btn');
    const input = document.getElementById('voter-age-input');
    const output = document.getElementById('voter-term-output');

    const handleCheck = () => {
      const val = input.value.trim();
      if (!val) {
        output.textContent += '\n\n>>> Error: Please enter an age.';
        return;
      }
      const age = parseInt(val, 10);
      if (isNaN(age)) {
        output.textContent += '\n\n>>> ValueError: Invalid numerical input.';
      } else if (age < 0) {
        output.textContent += `\n\n>>> Input age: ${age}\n>>> Error: Age cannot be negative!`;
      } else if (age >= 18) {
        output.textContent += `\n\n>>> Input age: ${age}\n>>> [SUCCESS] Result: You are ${age} years old.\n>>> Status: ELIGIBLE TO VOTE.`;
      } else {
        const left = 18 - age;
        output.textContent += `\n\n>>> Input age: ${age}\n>>> [INFO] Result: You are ${age} years old.\n>>> Status: NOT ELIGIBLE YET. Please wait ${left} more year(s).`;
      }
      output.scrollTop = output.scrollHeight;
    };

    runBtn?.addEventListener('click', handleCheck);
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleCheck();
    });
  } else if (projectId === 'atm') {
    atmSimState = { balance: 1000.0, history: ['Account initialized with ₹1,000.00'] };

    container.innerHTML = `
      <div class="terminal-window">
        <div class="terminal-topbar">
          <span class="term-dot term-dot-red"></span>
          <span class="term-dot term-dot-yellow"></span>
          <span class="term-dot term-dot-green"></span>
          <span class="terminal-title">python atm_system.py</span>
        </div>
        <div class="terminal-content" id="atm-term-output">$ python atm_system.py
=== WELCOME TO THE PYTHON ATM SIMULATOR ===
Current Account Balance: ₹${atmSimState.balance.toFixed(2)}
Select an ATM action below to execute real-time state manipulation.</div>
      </div>
      <div class="interactive-controls">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button type="button" id="atm-check-bal" class="btn btn-secondary" style="padding: 8px 14px; font-size: 0.8125rem;">
            1. Check Balance
          </button>
          <button type="button" id="atm-deposit-prompt" class="btn btn-secondary" style="padding: 8px 14px; font-size: 0.8125rem;">
            2. Deposit Money
          </button>
          <button type="button" id="atm-withdraw-prompt" class="btn btn-secondary" style="padding: 8px 14px; font-size: 0.8125rem;">
            3. Withdraw Money
          </button>
          <button type="button" id="atm-reset" class="btn btn-secondary" style="padding: 8px 14px; font-size: 0.8125rem;">
            Reset Balance
          </button>
        </div>
        <div class="control-row" id="atm-action-row" style="margin-top: 6px;">
          <input type="number" id="atm-amount-input" class="interactive-input" placeholder="Enter amount in ₹ (e.g. 250)" min="1" />
          <button type="button" id="atm-confirm-btn" class="btn btn-primary" style="padding: 9px 18px; font-size: 0.8125rem;">
            Submit Transaction
          </button>
        </div>
      </div>
    `;

    const output = document.getElementById('atm-term-output');
    const amtInput = document.getElementById('atm-amount-input');
    const confirmBtn = document.getElementById('atm-confirm-btn');
    let currentMode = 'deposit'; // 'deposit' or 'withdraw'

    document.getElementById('atm-check-bal')?.addEventListener('click', () => {
      output.textContent += `\n\n>>> Selected: 1. Check Balance\n>>> Current Account Balance: ₹${atmSimState.balance.toFixed(2)}`;
      output.scrollTop = output.scrollHeight;
    });

    document.getElementById('atm-deposit-prompt')?.addEventListener('click', () => {
      currentMode = 'deposit';
      amtInput.placeholder = 'Enter deposit amount in ₹ (e.g. 500)';
      output.textContent += `\n\n>>> Mode: Deposit. Enter amount in the box and click 'Submit Transaction'.`;
      amtInput.focus();
      output.scrollTop = output.scrollHeight;
    });

    document.getElementById('atm-withdraw-prompt')?.addEventListener('click', () => {
      currentMode = 'withdraw';
      amtInput.placeholder = 'Enter withdrawal amount in ₹ (e.g. 200)';
      output.textContent += `\n\n>>> Mode: Withdraw. Enter amount in the box and click 'Submit Transaction'.`;
      amtInput.focus();
      output.scrollTop = output.scrollHeight;
    });

    document.getElementById('atm-reset')?.addEventListener('click', () => {
      atmSimState.balance = 1000.0;
      output.textContent += `\n\n>>> [SYSTEM] Balance reset to default ₹1,000.00`;
      output.scrollTop = output.scrollHeight;
    });

    const processAtm = () => {
      const val = parseFloat(amtInput.value);
      if (isNaN(val) || val <= 0) {
        output.textContent += `\n>>> Error: Please enter a valid positive numerical amount.`;
        return;
      }

      if (currentMode === 'deposit') {
        atmSimState.balance += val;
        output.textContent += `\n>>> Deposited: ₹${val.toFixed(2)}\n>>> Updated Balance: ₹${atmSimState.balance.toFixed(2)}`;
      } else {
        if (val > atmSimState.balance) {
          output.textContent += `\n>>> [DECLINED] Insufficient Funds! Current balance (₹${atmSimState.balance.toFixed(2)}) is less than requested withdrawal (₹${val.toFixed(2)}).`;
        } else {
          atmSimState.balance -= val;
          output.textContent += `\n>>> Withdrawn: ₹${val.toFixed(2)}\n>>> Updated Balance: ₹${atmSimState.balance.toFixed(2)}`;
        }
      }
      amtInput.value = '';
      output.scrollTop = output.scrollHeight;
    };

    confirmBtn?.addEventListener('click', processAtm);
    amtInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') processAtm();
    });
  } else if (projectId === 'grade') {
    container.innerHTML = `
      <div class="terminal-window">
        <div class="terminal-topbar">
          <span class="term-dot term-dot-red"></span>
          <span class="term-dot term-dot-yellow"></span>
          <span class="term-dot term-dot-green"></span>
          <span class="terminal-title">python grade_calculator.py</span>
        </div>
        <div class="terminal-content" id="grade-term-output">$ python grade_calculator.py
=== STUDENT GRADE & PERFORMANCE CALCULATOR ===
Input your marks (0 to 100) for the 3 subjects below to calculate total, percentage, and assigned academic grade.</div>
      </div>
      <div class="interactive-controls" style="margin-top: 14px;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
          <div>
            <label style="font-size: 0.75rem; font-weight: 600; display: block; margin-bottom: 4px;">Python (0-100)</label>
            <input type="number" id="sub1-input" class="interactive-input" value="88" min="0" max="100" />
          </div>
          <div>
            <label style="font-size: 0.75rem; font-weight: 600; display: block; margin-bottom: 4px;">Mathematics (0-100)</label>
            <input type="number" id="sub2-input" class="interactive-input" value="92" min="0" max="100" />
          </div>
          <div>
            <label style="font-size: 0.75rem; font-weight: 600; display: block; margin-bottom: 4px;">Web Tech (0-100)</label>
            <input type="number" id="sub3-input" class="interactive-input" value="85" min="0" max="100" />
          </div>
        </div>
        <div style="margin-top: 8px;">
          <button type="button" id="grade-calc-btn" class="btn btn-primary" style="padding: 9px 20px; font-size: 0.8125rem;">
            Compute Academic Report
          </button>
        </div>
      </div>
    `;

    const calcBtn = document.getElementById('grade-calc-btn');
    const output = document.getElementById('grade-term-output');

    calcBtn?.addEventListener('click', () => {
      const s1 = parseFloat(document.getElementById('sub1-input')?.value);
      const s2 = parseFloat(document.getElementById('sub2-input')?.value);
      const s3 = parseFloat(document.getElementById('sub3-input')?.value);

      if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        output.textContent += '\n\n>>> Error: Please enter numerical marks for all 3 subjects.';
        return;
      }

      if (s1 < 0 || s1 > 100 || s2 < 0 || s2 > 100 || s3 < 0 || s3 > 100) {
        output.textContent += '\n\n>>> Error: Marks must be within 0 to 100 range.';
        return;
      }

      const total = s1 + s2 + s3;
      const percentage = total / 3;

      let grade = 'F';
      let remark = 'Needs Improvement';

      if (percentage >= 90) {
        grade = 'A+';
        remark = 'Outstanding Performance';
      } else if (percentage >= 80) {
        grade = 'A';
        remark = 'Excellent Academic Performance';
      } else if (percentage >= 70) {
        grade = 'B';
        remark = 'Good Understanding';
      } else if (percentage >= 60) {
        grade = 'C';
        remark = 'Satisfactory Progress';
      } else if (percentage >= 50) {
        grade = 'D';
        remark = 'Pass';
      }

      output.textContent += `\n\n---------------- ACADEMIC RESULT ----------------
Subject 1 (Python): ${s1.toFixed(1)} / 100
Subject 2 (Mathematics): ${s2.toFixed(1)} / 100
Subject 3 (Web Tech): ${s3.toFixed(1)} / 100
Total Marks: ${total.toFixed(1)} / 300.0
Percentage: ${percentage.toFixed(1)}%
Awarded Grade: Grade ${grade}
Remark: ${remark}
-------------------------------------------------`;
      output.scrollTop = output.scrollHeight;
    });
  }
}

/* ==========================================================================
   4. Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('form-status');

  if (form && statusBox) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('sender-name')?.value.trim();
      const email = document.getElementById('sender-email')?.value.trim();
      const subject = document.getElementById('sender-subject')?.value.trim();
      const message = document.getElementById('sender-message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
      }

      // Display friendly success message
      statusBox.textContent = `Thank you, ${name}! Your message regarding "${subject || 'General Inquiry'}" has been noted. Vishnu will review it soon!`;
      statusBox.classList.add('success');

      form.reset();

      setTimeout(() => {
        statusBox.classList.remove('success');
      }, 7000);
    });
  }
}

/* ==========================================================================
   5. Copy Utilities
   ========================================================================== */
function initCopyButtons() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'vishnupb940@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '<span>Copied to Clipboard!</span>';
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2200);
      }).catch(() => {
        // Fallback
        window.location.href = `mailto:${email}`;
      });
    });
  }
}
