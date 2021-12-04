import * as THREE from 'https://cdn.skypack.dev/three@0.135.0';

document.addEventListener("DOMContentLoaded",(e)=>{
    
    e.preventDefault();

    // ARMADO Y PERSONALIZACION DE LA ESCENA 
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x3CA019 );

    // CAMARA
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;


    // CREACION DEL RENDER 
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( 900, 600 );
    document.body.appendChild( renderer.domElement );


    // LOS OBJETOS DE LA ESCENA

    // DESIERTO
    const area = new THREE.CircleGeometry(3.8,128,0);
    const arena = new THREE.MeshBasicMaterial( { color: 0xDFA92B } );
    const desierto = new THREE.Mesh( area, arena );

    // CACTUS
    const areaCactus = new THREE.CircleGeometry(0.1,0,0);
    const cuerpoCactus = new THREE.MeshBasicMaterial( { color: 0xE52411 } );

    // CACTUS 
    const Cactus1 = new THREE.Mesh( areaCactus, cuerpoCactus );
    const Cactus2 = new THREE.Mesh( areaCactus, cuerpoCactus );
    const Cactus3 = new THREE.Mesh( areaCactus, cuerpoCactus );
    const Cactus4 = new THREE.Mesh( areaCactus, cuerpoCactus );
    const Cactus5 = new THREE.Mesh( areaCactus, cuerpoCactus );
    const Cactus6 = new THREE.Mesh( areaCactus, cuerpoCactus );
    const Cactus7 = new THREE.Mesh( areaCactus, cuerpoCactus );

    // POSICION DE LOS CACTUS 
    // Math.random() * (max - (min) ) + (min)
    // Cactus1.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Cactus1.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Cactus1.position.x = -1;
    Cactus1.position.y = 0;

    // Cactus2.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Cactus2.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Cactus3.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Cactus3.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Cactus4.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Cactus4.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Cactus5.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Cactus5.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Cactus6.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Cactus6.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Cactus7.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Cactus7.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);


    // ROCA 
    const areaRoca = new THREE.CircleGeometry(0.1,7,0);
    const cuerpoRoca = new THREE.MeshBasicMaterial( { color: 0x5E695C } );

    // ROCAS 

    const Roca1 = new THREE.Mesh( areaRoca, cuerpoRoca );
    const Roca2 = new THREE.Mesh( areaRoca, cuerpoRoca );
    const Roca3 = new THREE.Mesh( areaRoca, cuerpoRoca );
    const Roca4 = new THREE.Mesh( areaRoca, cuerpoRoca );
    const Roca5 = new THREE.Mesh( areaRoca, cuerpoRoca );
    const Roca6 = new THREE.Mesh( areaRoca, cuerpoRoca );
    const Roca7 = new THREE.Mesh( areaRoca, cuerpoRoca );


    // POSICION DE LAS ROCAS 
    // Math.random() * (max - (min) ) + (min)
    // Roca1.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Roca1.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Roca1.position.x = 1;
    Roca1.position.y = 0;

    // Roca2.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Roca2.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Roca3.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Roca3.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Roca4.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Roca4.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Roca5.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Roca5.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Roca6.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Roca6.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    // Roca7.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    // Roca7.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);


    // VAQUERO 
    const caballo = new THREE.PlaneGeometry(0.1,0.3,1);
    const piel = new THREE.MeshBasicMaterial( { color: 0x83420B } );
    const Vaquero = new THREE.Mesh(caballo, piel);


    // AGREGADO DE LOS OBJETOS A LA ESCENA
    scene.add( 
        desierto, 
        Cactus1, 
        // Cactus2, 
        // Cactus3, 
        // Cactus4, 
        // Cactus5, 
        // Cactus6, 
        // Cactus7, 
        Roca1, 
        // Roca2, 
        // Roca3, 
        // Roca4, 
        // Roca5, 
        // Roca6, 
        // Roca7, 
        Vaquero 
    );

    renderer.render( scene, camera );
    
    const animate = () => {
        if(Vaquero.position.x<=3.8){

            requestAnimationFrame( animate );
            console.log("moviendo")
        }else{

            console.log("salio")
            Vaquero.position.x = Vaquero.position.x;
        }

        Vaquero.position.x = 1;
        
        renderer.render( scene, camera );
        
        console.log(colisiones())         
    };    

    const colisiones=()=>{

        // no colision de vaquero de arriba hacia abajo
        if( (Vaquero.position.y + Vaquero.geometry.parameters.height) < Roca1.position.y ){return false}

        // no colision de vaquero de abajo hacia arriba
        if(Vaquero.position.y > (Roca1.geometry.parameters.radius*2)){return false}

        // no colision de vaquero de izquierda a derecha
        if((Vaquero.position.x + Vaquero.geometry.parameters.height) < Roca1.position.x){return false}

        // no colision de vaquero de izquierda a derecha
        if(Vaquero.position.x > ( Roca1.position.x +Roca1.geometry.parameters.radius )){return false}

        return true;
    }

    // colision de arriba hacia abajo

    if(colisiones() && (datos.jugador_y + datos.jugador_alto) < datos.plataforma[i].y + datos.gravedad){
        Vaquero.position.y += Math.random() * (0.5 - (-0.5) ) + (-0.5);
    }  

    // colision de abajo hacia arriba
    if(colisionesPlataforma() && datos.jugador_y  - datos.gravedad > (datos.plataforma[i].y + datos.plataforma[i].alto)){

        datos.gravedad = 1;
        datos.jugador_y = datos.plataforma[i].y + datos.jugador_alto;

    }  
    // ----------------------

    if(datos.desplazamientoEscenario <= datos.limiteEscenario){


        // colision de IZQUIERDA A DERECHA 

        if(colisionesPlataforma() && (datos.jugador_x + datos.jugador_ancho) < datos.plataforma[i].x + datos.movimientoJugador){

            datos.movimientoJugador = 0;
            datos.jugador_x = datos.plataforma[i].x - datos.jugador_ancho;

        }  

        // COLISION DERECHA A IZQUIERDA 

        if(colisionesPlataforma() && datos.jugador_x - datos.movimientoJugador > (datos.plataforma[i].x + datos.plataforma[i].ancho)){

            datos.movimientoJugador = 0;
            datos.jugador_x = datos.plataforma[i].x + datos.jugador_ancho;

        }   

    }else{

        // colision de IZQUIERDA A DERECHA 

        if(colisionesPlataforma() && (datos.jugador_x + datos.jugador_ancho) < datos.plataforma[i].x - datos.movimiento){

            datos.movimiento = 0;
            datos.jugador_x = datos.plataforma[i].x - datos.jugador_ancho;

        }  

        // COLISION DERECHA A IZQUIERDA 

        if(colisionesPlataforma() && datos.jugador_x + datos.movimiento > (datos.plataforma[i].x + datos.plataforma[i].ancho)){

            datos.movimiento = 0;
            datos.jugador_x = datos.plataforma[i].x + datos.jugador_ancho;

        }   



    }

    // renderer.render( scene, camera );
    document.getElementById("iniciar").addEventListener("click", () => {

        // location.reload();

        setInterval(500, animate());
        // animate(0);
    
    })

});	


document.addEventListener("click",(e)=>{
    
    e.preventDefault();

    
    
    
});		






