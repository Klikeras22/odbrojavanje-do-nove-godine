days=document.getElementById('days')
hours=document.getElementById('hours')
seconds=document.getElementById('seconds')
minutes=document.getElementById('minutes')
countdown=document.getElementById('countdown')
year=document.getElementById('year')
loading=document.getElementById('loading')

setTimeout(() =>{
    loading.remove()
    countdown.style.display= 'flex'
},1000)


currentYear  =new Date().getFullYear()
year.innerText = currentYear + 1

