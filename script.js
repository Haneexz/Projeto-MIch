//Sistema Login

// let logged = false
// const button_login = document.querySelector()

// if(logged==true){

// }

//Carrossel

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlides();
}

showSlides();


//Seção Loja de Recompensas/Ranking e Resultados

const button1 = document.querySelector('#botao1')
const button2 = document.querySelector('#botao2')

button1.addEventListener('click', show_section_1)
button2.addEventListener('click', show_section_2)

const section_button_1 = document.querySelector('#section_botao_1')
const section_button_2 = document.querySelector('#section_botao_2')

function show_section_1() {
    section_button_1.style.display = 'contents'
    section_button_2.style.display = 'none'
    section_button_1.style.backgroundColor = '#00000038'
    setTimeout(()=>{
        section_button_1.style.backgroundColor = '#00000063'
    }, 500)
    button1.style.backgroundColor = '#00000063'
    button2.style.backgroundColor = '#00000038'
}

function show_section_2() {
    section_button_1.style.display = 'none'
    section_button_2.style.display = 'contents'
    button2.style.backgroundColor = '#00000063'
    button1.style.backgroundColor = '#00000038'
}


// WhatsApp IA


function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.style.display = chatPopup.style.display === 'none' || chatPopup.style.display === '' ? 'block' : 'none';
}

function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
  

    if (!name || !phone || !email || !role ) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const message = `Olá, meu nome é ${name}.\nCargo: ${role}\nEmail: ${email}\nTelefone: ${phone}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}
