//Evita el comportamiento por defecto al hacer click. 
// Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
document.querySelectorAll('a').forEach (link =>{
link.addEventListener('click',(event) => event.preventDefault()); 
  
  });


  //Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.

document.querySelectorAll('img').forEach (img => {
    img.addEventListener('click',function(){
        this.src= "assets/magic-1.gif"
    }) 
})     
//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
document.querySelectorAll('p').forEach (parrafo => {
    parrafo.addEventListener('click',function(){
        this.style.color= 'red';
    })
})
//2.3 Bloques de `article` o `section`: Cambia el color de fondo.

document.querySelectorAll(`article`,`section`).forEach (parrafo => {
    parrafo.addEventListener('click',function(){
        this.style.backgroundColor= 'yellow';
    })
})

//3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

    //3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.
    document.querySelectorAll('img').forEach (img => {
        img.imagenesOriginales=img.src
        img.addEventListener('mouseover',function(){
            this.src= "assets/abracadabra.gif"
        }) 
        img.addEventListener('mouseleave',function(){
            
            this.src= this.imagenesOriginales;
        })
    }) 

    //3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
    document.querySelectorAll('p').forEach (parrafo => {
        let c= `rgb(${[1,2,3,].map(x=>Math.random()*256|0)})`
        parrafo.addEventListener('mouseover',function(){
            this.style.color= c
        })
        parrafo.addEventListener('mouseout',function(){
            this.style.color='black'
        })
    })

    //3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo.