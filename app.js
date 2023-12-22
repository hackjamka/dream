var submit = document.querySelector('.sub')
 submit.addEventListener('click',function(){
    var link = document.querySelector('.a')
    document.body.appendChild(link);
			link.click();
			link.remove();
 })