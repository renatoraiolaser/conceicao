document.addEventListener("DOMContentLoaded", () => {
    // Slider de Tópicos
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Inicializa o primeiro slide
    showSlide(currentSlide);

    // Troca de slide a cada 3 segundos
    setInterval(nextSlide, 3000);

    // Formulário de Agendamento
    const agendamentoForm = document.getElementById("agendamentoForm");
    agendamentoForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Validação básica
        const agree = document.getElementById("gdpr");
        if (!agree.checked) {
            alert("Por favor, aceite a política de GDPR.");
            return;
        }

        // Simulação de envio do formulário
        // Para realmente enviar um e-mail, você precisará de um backend ou usar um serviço como EmailJS
        alert("O seu pedido de agendamento foi enviado. Entraremos em contacto brevemente. Obrigada pela preferência!");

        // Reset do formulário
        agendamentoForm.reset();
    });
});
