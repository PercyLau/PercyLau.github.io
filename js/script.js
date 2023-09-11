'use strict';

const email = document.getElementById('email');
const address = email.getAttribute('data-user') + '@' +
                email.getAttribute('data-domain');
const default_prompt = 'Click to copy to clipboard';

// display tooltip
email.setAttribute('data-bs-title', default_prompt);
const tooltip = new bootstrap.Tooltip(email);

// update tooltip after click
email.onclick = function() {
  navigator.clipboard.writeText(address);
  tooltip.setContent({'.tooltip-inner': 'Copied!'});
};

// reset tooltip on the next mouseover event
email.onmouseover = function() {
  tooltip.setContent({'.tooltip-inner': default_prompt});
};
