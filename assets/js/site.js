const timeEl = document.querySelector('[data-live-time]');
const chatForm = document.querySelector('.chatbox-form');
const chatButton = document.querySelector('.chatbox-button');
const chatInput = document.querySelector('#chat-message');

if (timeEl) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  });

  const updateTime = () => {
    timeEl.textContent = formatter.format(new Date());
  };

  updateTime();
  setInterval(updateTime, 1000);
}

if (chatForm && chatButton && chatInput) {
  const storedMessage = localStorage.getItem('chatbox-message');
  if (storedMessage) {
    chatInput.value = storedMessage;
  }

  chatButton.addEventListener('click', () => {
    localStorage.setItem('chatbox-message', chatInput.value.trim());
    chatButton.textContent = 'Saved';
    setTimeout(() => {
      chatButton.textContent = 'Save note';
    }, 1200);
  });
}
