function initiScrollSuave(){ 
}
const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
linksInternos.forEach(link =>{
  link.addEventListener('click',scrollToSection)
})
function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  const position = section.getBoundingClientRect().top + window.pageYOffset
  window.scrollTo({
    top: position - 70,
    behavior: "smooth",
  })
  }


