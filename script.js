const VYBRATEZ_PHONE = '2349164523546';

  function bookAppointment(service, dateInputId){
    const name = document.getElementById('name') && document.getElementById('name').value || '';
    const date = document.getElementById(dateInputId).value || 'a future date';
    const namePart = name ? `My name is ${name}. ` : '';
    const msg = `Hello Vybratez Entertainment! ${namePart}I'd like to book your ${service} for ${date}. Please share availability and next steps.`;
    window.open(`https://wa.me/${VYBRATEZ_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    document.getElementById(dateInputId).value = '';
  }

  function sendMessage(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if(!name || !email || !message){
      alert('Please fill in all fields to send a message.');
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      alert('Please enter a valid email address.');
      return;
    }
    const msg = `Hello Vybratez Entertainment! My name is ${name} (${email}). ${message}`;
    window.open(`https://wa.me/${VYBRATEZ_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    document.getElementById('contactForm').reset();
  }

  function toggleFAQ(btn){
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  }

  document.getElementById('footer-year').textContent = new Date().getFullYear();

  const openFaq = document.querySelector('.faq-item.open .faq-a');
  if(openFaq){ openFaq.style.maxHeight = openFaq.scrollHeight + 'px'; }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
