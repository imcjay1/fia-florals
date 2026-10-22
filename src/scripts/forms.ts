// Sends every <form data-enquiry> to Web3Forms (emails Sophia), or — if no access key
// is configured yet — opens the visitor's email app with their answers filled in.

const EMAIL = 'fiafloralsbysophia@gmail.com';

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

function toMailto(form: HTMLFormElement, data: FormData) {
  const subject = String(data.get('subject') || 'Website enquiry');
  const lines: string[] = [];
  data.forEach((value, key) => {
    if (['access_key', 'subject', 'botcheck', 'from_name', 'redirect'].includes(key) || !String(value).trim()) return;
    const label = form.querySelector(`label[for="${form.id}-${key}"]`)?.textContent?.trim() || key;
    lines.push(`${label}: ${value}`);
  });
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

document.querySelectorAll<HTMLFormElement>('form[data-enquiry]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('botcheck')) return; // spam trap filled in
    const key = form.dataset.key;
    if (!key) {
      toMailto(form, data);
      status(form, 'ok', 'Your email app should now open with your message ready to send.');
      return;
    }
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const label = button?.textContent;
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error(json.message || 'Send failed');
      if (form.dataset.redirect) { window.location.href = form.dataset.redirect; return; }
      form.reset();
      status(form, 'ok', form.dataset.success || "Thank you — I'll be in touch soon. Sophia x");
    } catch {
      status(form, 'err', `Sorry, that didn't send. Please email ${EMAIL} or call 07786 671051.`);
    } finally {
      if (button) { button.disabled = false; button.textContent = label ?? 'Send'; }
    }
  });
});
