//Evita el comportamiento por defecto al hacer click. 
// Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
document.querySelectorAll('a').forEach (link =>{
link.addEventListener('click',(event) => event.preventDefault()); 
  
  });


 
 
  //Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.
document.querySelectorAll('img').forEach (img => {
    let gifts = ['assets/magic-1.gif', 'assets/magic-2.gif', 'assets/magic-3.gif']

    const getRandomGifts= (array) => {
    const c = Math.floor(Math.random() * array.length);/* código misterioso */
   return array[c]
}

    img.addEventListener('click',function(){
        this.src= getRandomGifts(gifts)
    }) 
})     




//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
document.querySelectorAll('p').forEach (parrafo => {
        const colors = ['red', 'blue', 'green','purple']
        const getRandom = (array) => {
        const c = Math.floor(Math.random() * array.length);
        return array[c]
        }
    parrafo.addEventListener('click',function(){
        this.style.color= 'red';
        this.style.backgroundColor= getRandom(colors)
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
        //let c= `rgb(${[1,2,3,].map(x=>Math.random()*256|0)})`
    const colorsram = ['#008000' , '#9d0208', '#f94144', '#00bbf9']

    const getRandom2 = (array) => {
    const c = Math.floor(Math.random() * array.length);
    return array[c]
    }
        parrafo.addEventListener('mouseover',function(){
            this.style.color= getRandom(colors)
            this.style.backgroundColor= getRandom(colors)
        })
        parrafo.addEventListener('mouseout',function(){
            this.style.color='black'
            this.style.backgroundColor= null
        })
    })
    
    //Crea una función de nombre `getRandom` que acepte un array con 
    // valores y devuelva uno de ellos de manera aleatoria.

   
    const colors = ['red', 'blue', 'green']

    const getRandom = (array) => {
    const c = Math.floor(Math.random() * array.length);
    return array[c]
    }

    console.log(getRandom(colors))

   // 5. Utiliza la función creada `getRandom` para utilizar colores 
    //aleatorios de una paleta que hayas escogido de [coolors.co](https://coolors.co/palettes/trending) en los apartados anteriores.

    const colorsram = ['#008000' , '#9d0208', '#f94144', '#00bbf9']

    const getRandom2 = (array) => {
    const c = Math.floor(Math.random() * array.length);
    return array[c]
    }
    console.log(getRandom2(colorsram))

    //6. Utiliza la función creada `getRandom` para utilizar _gifs_ 
    // aleatorios  en los apartados anteriores.
    let gifts = ['./assets/magic-1.gif', './assets/magic-2.gif', './assets/magic-3.gif']

    const getRandomGifts= (array) => {
    const c = Math.floor(Math.random() * array.length);/* código misterioso */
    }

    console.log(getRandomGifts(gifts))
