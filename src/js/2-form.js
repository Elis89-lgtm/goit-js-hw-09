const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input[name="email"]'),
  message: document.querySelector('.feedback-form textarea[name="message"]'),
};

let formData = { email: '', message: '' };

function initPage() {
    const savedData = loadFromLS(STORAGE_KEY);
  if (savedData) {
    formData = savedData;
    refs.email.value = savedData.email || '';
    refs.message.value = savedData.message || '';
  }
}
  initPage();

refs.form.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value.trim();
    saveToLS(STORAGE_KEY, formData);
  });

  refs.form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
      return;
    }
    
    console.log(formData);
  
       localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
    formData = { email: '', message: '' };
  });

  function saveToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  function loadFromLS(key) {
    
    try {
        return JSON.parse(localStorage.getItem(key));
          } catch {
      return null;
    }
  }
  
  