/**
 * Created by dell on 2018/3/20.
 */
Sea =function(){
    //创建圆柱（顶面半径，底面半径，高，分段）
    var gemo =new THREE.CylinderGeometry(600,600,800,40,10);
    //旋转
    gemo.rotateX(-Math.PI/2);

    var mat =new THREE.MeshPhongMaterial({
        color:Color.blue,
        transparent:true,
        opacity:0.6,
        shading:THREE.FlatShading
    });

    this.mesh = new THREE.Mesh(gemo,mat);

    this.mesh.receiveShadow=true;
};

var sea;

function creatSea(){
    sea =new Sea();
    sea.mesh.position.y=-600;
    scene.add(sea.mesh);
}