// Sends every <form data-enquiry> to Netlify Forms. Netlify stores the submission
// and emails it to Sophia, with the customer's email as the reply-to address.

const EMAIL = 'fiafloralsbysophia@gmail.com';
const PHONE = '07786 671051';

function status(form: HTMLFormElement, kind: 'ok' | 'err', text: string) {
  let el = form.querySelector<HTMLElement>('.form-status');
  if (!el) {
    el = document.createElement('p');
    el.setAttribute('role', 'status');
    form.appendChild(el);
  }
  el.className = `form-status ${kind}`;
  el.textContent = text;
}

document.querySelectorAll<HTMLFormElement>('form[data-enquiry]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('botcheck')) return; // spam trap filled in
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const label = button?.textContent;
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
    try {
      const body = new URLSearchParams();
      data.forEach((v, k) => body.append(k, String(v)));
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error('Send failed');
      if (form.dataset.redirect) { window.location.href = form.dataset.redirect; return; }
      form.reset();
      status(form, 'ok', form.dataset.success || "Thank you — I'll be in touch soon. Sophia x");
    } catch {
      status(form, 'err', `Sorry, that didn't send. Please email ${EMAIL} or call ${PHONE}.`);
    } finally {
      if (button) { button.disabled = false; button.textContent = label ?? 'Send'; }
    }
  });
});
