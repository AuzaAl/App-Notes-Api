import './style.css';


const loadingIndicator = document.querySelector('.loading-indicator');

function showLoadingIndicator() {
  loadingIndicator.style.display = 'flex';
}

function hideLoadingIndicator() {
  loadingIndicator.style.display = 'none';
}

class AppHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    container.className = 'header-container';
    const title = document.createElement('span');
    title.className = 'header-title';
    title.textContent = 'Notes Keeeper.';
    container.appendChild(title);

    const style = document.createElement('style');
    style.textContent = `
          :root {
              --primary-color: #101010;
              --card-color: #161616;
              --border-color: #262626;
              --text-color: rgb(249, 249, 249);
              --darker-text-color: rgb(227, 227, 227);
          }
          .header-container {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 15px 20px;
              background-color: var(--primary-color);
              border-bottom: 1px solid var(--border-color);
              width: 100%;
              box-sizing: border-box;
              margin-bottom: 25px;
          }
          .header-title {
              font-size: 20px;
              font-family: 'Readex Pro', sans-serif;
              font-weight: 500;
              color: var(--text-color);
              text-align: center;
          }
      `;
    shadow.appendChild(style);
    shadow.appendChild(container);
  }

  static get observedAttributes() {
    return ['icon-image'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'icon-image' && oldValue !== newValue) {
      const profileIcon = this.shadowRoot.querySelector('.profile-icon');
      if (newValue) {
        profileIcon.style.backgroundImage = `url('${newValue}')`;
        profileIcon.style.backgroundSize = 'cover';
      } else {
        profileIcon.style.backgroundImage = '';
        profileIcon.style.backgroundColor = 'rgb(88, 88, 88)';
      }
    }
  }
}
customElements.define('app-header', AppHeader);

// Custom Element untuk Input Note
class NoteInput extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    container.className = 'input-container';
    const form = document.createElement('form');
    form.innerHTML = `
          <input type="text" placeholder="Title" id="note-title" class="input-field" required>
          <textarea type="text" placeholder="Your Notes." id="note-body" class="input-field" required></textarea>
          <button id="add-button" class="add-button">Add Note</button>
      `;
    container.appendChild(form);

    const style = document.createElement('style');
    style.textContent = `
          :root {
              --primary-color: #101010;
              --card-color: #161616;
              --border-color: #262626;
              --text-color: rgb(249, 249, 249);
              --darker-text-color: rgb(227, 227, 227);
              --dark-text-color: rgb(0, 0, 0);
          }
          textarea {
              min-height: fit-content;
              resize: none;
              min-width: 90%;
              overflow-wrap: break-word;
          }
          .input-container {
              border: 1px solid var(--border-color);
              background-color: var(--card-color);
              border-radius: 10px;
              margin: auto;
              width: 85%;
              max-width: 1000px;
              height: 300px;
              padding: 20px;
          }
          .input-field {
              border: none;
              background-color: var(--card-color);
              color: var(--text-color);
              width: 100%;
              padding: 10px;
              margin-bottom: 10px;
          }
          .input-field:focus {
              outline: none;
          }
          #note-title {
              height: 25px;
              font-size: 2em;
          }
          #note-body {
              height: 170px;
          }
          #note-title::placeholder, #note-body::placeholder {
              color: rgba(227, 227, 227, 0.66);
          }
          .add-button {
              background: radial-gradient(141.42% 141.42% at 100% 0%, #fff6, #fff0), radial-gradient(140.35% 140.35% at 100% 94.74%, #bd34fe, #bd34fe00), radial-gradient(89.94% 89.94% at 18.42% 15.79%, #41d1ff, #41d1ff00);
              box-shadow: 0 1px #ffffffbf inset;
              padding: 10px 20px;
              border-radius: 7px;
              border: none;
              font-family: 'Readex Pro', sans-serif;
              font-weight: 500;
              color: var(--text-color);
              cursor: pointer;
              transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          }
          .add-button:hover {
              transform: scale(1.01);
              background: radial-gradient(141.42% 141.42% at 100% 0%, #ffffff80, #fff0), radial-gradient(140.35% 140.35% at 100% 94.74%, #bd34fe, #bd34fe00), radial-gradient(89.94% 89.94% at 18.42% 15.79%, #41d1ff, #41d1ff00);
              box-shadow: 0 1.5px #fffc inset;
          }
      `;
    shadow.appendChild(container);
    shadow.appendChild(style);
    this.form = shadow.querySelector('form');
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const title = this.shadowRoot.querySelector('#note-title').value;
    const body = this.shadowRoot.querySelector('#note-body').value;

    showLoadingIndicator();
    try {
      const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          body: body,
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log('Note added:', data);
      this.form.reset();
      await renderNotes(); // Tunggu render selesai
    } catch (error) {
      console.error('Error adding note:', error);
    } finally {
      hideLoadingIndicator(); // Sembunyikan loading indicator
    }
  }
}

customElements.define('app-input', NoteInput);

// Custom Element untuk Note Card
class NoteCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.shadowRootRef = shadow; // Simpan referensi shadow DOM
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Judul Tidak Ada';
    const body = this.getAttribute('body') || 'Isi Tidak Ada';
    const createdAt =
      this.getAttribute('created-at') || new Date().toISOString();
    const id = this.getAttribute('id'); // Ambil ID note

    const date = new Date(createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Template dengan ID dinamis
    const template = document.createElement('template');
    template.innerHTML = `
          <div class="note-card">
              <div class="note-title">${title}</div>
              <br>
              <div class="note-body">${body}</div>
              <br>
              <div class="note-date">Created on: ${date}</div>
              <button class="delete-button" data-id="${id}">Delete</button>
          </div>
      `;

    const style = document.createElement('style');
    style.textContent = `
          :root {
              --primary-color: #101010;
              --card-color: #161616;
              --border-color: #262626;
              --text-color: rgb(249, 249, 249);
              --darker-text-color: rgb(227, 227, 227);
              --dark-text-color: rgb(0, 0, 0);
          }
          .note-card {
              font-family: 'Readex Pro', sans-serif;
              color: var(--text-color);
              border: 1px solid var(--border-color);
              background-color: var(--card-color);
              border-radius: 10px;
              width: 277px;
              height: fit-content;
              min-height: 105px;
              padding: 20px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .note-card:hover {
              transform: scale(1.01);
              box-shadow: 0 0px 15px rgba(200, 200, 200, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .note-title {
              font-size: 1.5em;
          }
          .note-date {
              font-size: 0.7em;
              color: rgb(150, 150, 150);
          }
          .delete-button {
              background: red;
              color: white;
              border: none;
              padding: 5px 10px;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 10px;
              font-family: 'Readex Pro', sans-serif;
          }
          .delete-button:hover {
              background: darkred;
          }
          @media (max-width: 715px) {
              .note-card {
                  width: 100%;
              }
          }
      `;

    this.shadowRootRef.appendChild(template.content.cloneNode(true));
    this.shadowRootRef.appendChild(style);

    // Event listener untuk tombol hapus
    this.shadowRootRef
      .querySelector('.delete-button')
      .addEventListener('click', () => this.deleteNote(id));
  }

  async deleteNote(id) {  // Tambahkan async
    showLoadingIndicator(); // Tampilkan loading indicator
    try {
      const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to delete note');
      console.log(`Note ${id} deleted`);
      await renderNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    } finally {
      hideLoadingIndicator(); 
    }
  }
}

customElements.define('note-card', NoteCard);

// Fungsi untuk render notes
async function renderNotes() {
  showLoadingIndicator();
  try {
    const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
    if (!response.ok) throw new Error('Network response was not ok');
    const notesData = await response.json();
    const container = document.getElementById('notes-container');
    container.innerHTML = '';
    notesData.data.forEach(note => {
      if (!note.archived) {
        const noteCard = document.createElement('note-card');
        noteCard.setAttribute('title', note.title);
        noteCard.setAttribute('body', note.body);
        noteCard.setAttribute('created-at', note.createdAt);
        noteCard.setAttribute('id', note.id);
        container.appendChild(noteCard);
      }
    });
  } catch (error) {
    console.error('Error fetching notes:', error);
  } finally {
    hideLoadingIndicator();
  }
}

renderNotes();

document.addEventListener('DOMContentLoaded', () => {
  renderNotes();
});
