/**
 * Created by dell on 2018/3/20.
 */
var hemisphereLight,shadowLight;
function creatLights(){
    //����⣨����1�����ϵ���ɫ������2�����ϵ���ɫ������3����Դǿ�ȣ�
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000,0.9)
    //ƽ�й⣨����1�������ɫ������2����Դǿ�ȣ�
    shadowLight=new THREE.DirectionalLight(0xffffff,0.9)
    //���ù�Դ����
    //λ�ò�ͬ�����������������ı��治ͬ����ɫ���в��
    shadowLight.position.set(150,350,350)

    shadowLight.castShadow=true;
    //��Ӱ�ɼ���
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    //��Ӱ�ֱ���
    shadowLight.shadow.mapSize.width=2048;
    shadowLight.shadow.mapSize.height=2048;
    //����Դ�����������
    scene.add(hemisphereLight);
    scene.add(shadowLight);


}