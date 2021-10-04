export default function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-menu="nav"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] div')
  tabContent[0].classList.add('active');
  tabMenu[0].classList.add('active');
  

function activeTab(index){
    tabContent.forEach(div =>{
      div.classList.remove('active')
    })
    tabMenu.forEach(li =>{
      li.classList.remove('active')
    })
    tabContent[index].classList.add('active')
    tabMenu[index].classList.add('active')
      
    
  }
  

  tabMenu.forEach((item,index) =>{
      item.addEventListener('click',()=>{
        activeTab(index)
      })
  })
}
  