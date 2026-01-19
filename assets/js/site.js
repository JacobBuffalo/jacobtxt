const timeEl = document.querySelector('[data-live-time]');
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
