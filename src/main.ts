import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="popup-container">
    <h1>ስራዎች - Tasks</h1>
    <div class="settings-item">
      <input type="checkbox" id="default-completed-tab" />
      <label for="default-completed-tab">Make "Completed Tasks" default tab</label>
    </div>
    <div class="settings-item">
      <input type="checkbox" id="filter-by-url" />
      <label for="filter-by-url">Show tasks based on current URL</label>
    </div>
    <p id="status-message" class="status-message"></p>
    <button id="save-settings">Save Settings</button>
  </div>
`