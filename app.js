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
    Cactus1.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Cactus1.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Cactus2.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Cactus2.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Cactus3.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Cactus3.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Cactus4.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Cactus4.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Cactus5.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Cactus5.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Cactus6.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Cactus6.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Cactus7.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Cactus7.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);


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
    Roca1.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Roca1.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Roca2.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Roca2.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Roca3.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Roca3.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Roca4.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Roca4.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Roca5.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Roca5.position.x = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Roca6.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Roca6.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);

    Roca7.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);
    Roca7.position.y = Math.random() * (2.6 - (-2.6) ) + (-2.6);


    // VAQUERO 
    const caballo = new THREE.PlaneGeometry(0.1,0.3,1);
    const piel = new THREE.MeshBasicMaterial( { color: 0x83420B } );
    const Vaquero = new THREE.Mesh(caballo, piel);


    // AGREGADO DE LOS OBJETOS A LA ESCENA
    scene.add( 
        desierto, 
        Cactus1, 
        Cactus2, 
        Cactus3, 
        Cactus4, 
        Cactus5, 
        Cactus6, 
        Cactus7, 
        Roca1, 
        Roca2, 
        Roca3, 
        Roca4, 
        Roca5, 
        Roca6, 
        Roca7, 
        Vaquero 
    );

    renderer.render( scene, camera );
    
    const animate = (posInit) => {

        



        if(Vaquero.position.x<=3.8){

            requestAnimationFrame( animate );
            console.log("moviendo")
        }else{

            console.log("salio")
            Vaquero.position.x = Vaquero.position.x;
        }

        Vaquero.position.x += 0.1;
        
        renderer.render( scene, camera );
        
                    
    };    

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






