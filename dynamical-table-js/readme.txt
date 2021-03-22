innerHTML vs innerText vs textContent

innerHTML will allow u to pass the tag(if u want to render html tag use innerHtml(also its a secure issue))

innerText and textContent both do the same the only difference is below
(u can use either innerText or textContent)
innerText = displays the text visible in the page;
textContent =  display the content in the page(even its not visible aslo) with indentation

add - document.createElement('')
remove - to remove the element from the dom use remove()

var el = document.querySelector('.title');
//  el.innerText //