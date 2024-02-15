import { BoxGeometry, TorusGeometry, PlaneGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh, GridHelper } from "three";

export const plane = () => {
    const plane = new PlaneGeometry(5, 5)
    const planeMaterial =  new MeshBasicMaterial( {color: 0xffffff} )
    const planeMesh = new Mesh(plane, planeMaterial)
    // planeMesh.rotateX(-Math.PI / 4)
    return planeMesh
}

export const grid = () => {
    const grid = new GridHelper(32, 16, 0xFFC0CB, 0xFFC0CB)
    grid.rotateX(Math.PI/2)
    grid.position.set(0,0,-2)
    return grid
}

export const macaroni = () => {
    const torus = new TorusGeometry(1.5, 0.5, 16, 100, Math.PI)
    const torusMaterial = new MeshStandardMaterial({
        color: 0xf5cc47,
        roughness: 0.1,
        reflectivity: 1,
        emissive: 0xf5cc47,
        emissiveIntensity: 0.7
    })
    const torusMesh = new Mesh(torus, torusMaterial)
    torusMesh.rotateY(Math.PI / 4) //#Source: https://stackoverflow.com/questions/29907536/how-can-i-rotate-a-mesh-by-90-degrees-in-threejs
    return torusMesh
}