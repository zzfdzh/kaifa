/**
 * Created by dell on 2018/3/20.
 */
function loop(){
    sea.mesh.rotation.z +=0.1;
    renderer.render(scene,camera);
    updatePlane();

    //自动调用
    requestAnimationFrame(loop)
}
var mousePos = {x:0,y:0};
function handleMouseMove(event){
    var tx = -1 + (event.clientX/window.innerWidth)*2;
    var ty =  1 - (event.clientY/window.innerHeight)*2;
    mousePos = {x:tx,y:ty};
}

function updatePlane(){
    //x:-100~100 y:25~175
    var targetX = normalize(mousePos.x,-1,1,-100,100);
    var targetY = normalize(mousePos.y,-1,1,25,175);
    airplane.mesh.position.y=targetY;
    airplane.mesh.position.x=targetX;
    airplane.Propeller.rotation.x +=0.3;
}
function normalize(v,vmin,vmax,tmin,tmax){
    //飞机实际位置是否超出范围
    var nv =Math.max(Math.min(v,vmax),vmin);
    var dv =vmax-vmin;
    var pc =(nv-vmin)/dv;
    var dt =tmax-tmin;
    var tv =tmin + (pc*dt);
    return tv;
}