/**
 * Created by dell on 2018/3/20.
 */
var hemisphereLight,shadowLight;
function creatLights(){
    //半球光（参数1：天上的颜色，参数2：地上的颜色，参数3：光源强度）
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000,0.9)
    //平行光（参数1：光的颜色，参数2：光源强度）
    shadowLight=new THREE.DirectionalLight(0xffffff,0.9)
    //设置光源方向
    //位置不同，方向光作用于物体的表面不同，颜色会有差别
    shadowLight.position.set(150,350,350)

    shadowLight.castShadow=true;
    //阴影可见域
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    //阴影分辨率
    shadowLight.shadow.mapSize.width=2048;
    shadowLight.shadow.mapSize.height=2048;
    //将光源添加至场景中
    scene.add(hemisphereLight);
    scene.add(shadowLight);


}