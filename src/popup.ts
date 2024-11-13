document.addEventListener('DOMContentLoaded', () => {
  const defaultCompletedTabCheckbox = document.getElementById('default-completed-tab') as HTMLInputElement;
  const filterByUrlCheckbox = document.getElementById('filter-by-url') as HTMLInputElement;
  const saveButton = document.getElementById('save-settings') as HTMLButtonElement;
  const statusMessage = document.getElementById('status-message') as HTMLParagraphElement;

  // Load settings when the popup is opened
  chrome.storage.local.get(['defaultCompletedTab', 'filterByUrl'], (data) => {
    // Ensure the properties exist and are boolean values
    defaultCompletedTabCheckbox.checked = data.defaultCompletedTab ?? false;
    filterByUrlCheckbox.checked = data.filterByUrl ?? false;
  });

  // Save settings when the Save button is clicked
  saveButton.addEventListener('click', () => {
    // Show loading message
    statusMessage.textContent = 'Saving...';
    saveButton.disabled = true;

    chrome.storage.local.set({
      defaultCompletedTab: defaultCompletedTabCheckbox.checked,
      filterByUrl: filterByUrlCheckbox.checked
    }, () => {
      // Update message once saved
      statusMessage.textContent = 'Settings saved';
      saveButton.disabled = false;

      // Clear the message after a short delay
      setTimeout(() => {
        statusMessage.textContent = '';
      }, 2000); // Adjust the delay as needed
    });
  });
});
