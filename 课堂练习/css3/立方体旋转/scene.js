/**
 * Created by dell on 2018/3/20.
 */
var camera,scene,renderer;
function creatScene(){
    scene=new THREE.Scene();
    camera=new THREE.PerspectiveCamera(
        60,window.innerWidth/innerHeight,1,10000);
    camera.position.x=0;
    camera.position.y=100;
        camera.position.z=200;
        //视角 纵横比 近平面 远平面
    renderer=new THREE.WebGLRenderer({
        alpha:true,
        //    透明度
        antialias:true
    });
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.shadowMap.enable=true;
    document.getElementById('world').appendChild(renderer.domElement)
    window.addEventListener('resize',handleWindowResize,false);

}
function handleWindowResize(){
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
}