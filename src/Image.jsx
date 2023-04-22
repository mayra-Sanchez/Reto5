import { useTexture } from "@react-three/drei"
import { DoubleSide } from "three"
import { useState } from "react";

export default function Image() {

    const PATH = "/static/fondos/"
    const imagenes = ["rapunzel.jpg", "flynn.jpg", "juntos.jpg", "castillo.jpg", "mascota.jpg", "malvada.jpg", "padres.jpg"];
    var idImage = 0;
    const [textureUrl, setTextureUrl] = useState(imagenes[idImage]);



    const props = useTexture({
        map: PATH + textureUrl

    })

    const changeImage = () => {
        let idAnterior = textureUrl
        do {
            idImage = Math.floor(Math.random() * imagenes.length);
        } while (idAnterior == imagenes[idImage]);

        console.log(idImage)
        setTextureUrl(imagenes[idImage])
    }

    return (
        <mesh receiveShadow position-z={-9} position-y={6.5} rotation-z={- Math.PI * 2} onPointerMove={changeImage}>
            <planeGeometry args={[18, 18]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}