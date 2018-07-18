/**
 * Created by dell on 2018/3/21.
 */
Cloud = function(){
    this.mesh =new THREE.Object3D();

    var gemo =new THREE.BoxGeometry(20,20,20);
    var mat = new THREE.MeshPhongMaterial({
        color:Color.white
    });
    //��������������ĸ����������
    var nBlocs =3 + Math.floor(Math.random()*3);
    for(var i =0;i<nBlocs;i++){
        var m =new THREE.Mesh(gemo,mat);
        m.position.x = i*15;
        m.position.y = Math.random()*10;
        m.position.z = Math.random()*10;
        m.rotation.z =Math.random()*Math.PI*2;
        m.rotation.y =Math.random()*Math.PI*2;

        var s =0.1+Math.random()*0.9;
        m.scale.set(s,s,s);

        m.castShadow=true;
        m.receiveShadow=true;

        this.mesh.add(m);
    }
};

Sky = function(){
    this.mesh=new THREE.Object3D();
    this.nClouds =20;
    //ƽ���Ƕ�
    var stepAngle = Math.PI*2/this.nClouds;
    for(var i =0;i<this.nClouds;i++){
        var c = new Cloud();
        var a =stepAngle*i;
        //���ƸߵͲ�ͬ��750+���ֵ����200
        var h =750+Math.random()*200;
        //�������ֵת��Ϊ���������ֵ
        c.mesh.position.y=Math.sin(a)*h;
        c.mesh.position.x=Math.cos(a)*h;
        //��������ת�Ƕ�
        c.mesh.rotation.z =a + Math.PI/2;

        //����һ��z�������ֵ�����ƿ�����Զ����ͬ��ԽԶ��ֵԽ��
        c.mesh.position.z =-400-Math.random()*400;
        //�����Ƶ������С
        var s =1+Math.random()*2;
        c.mesh.scale.set(s,s,s);
        //������ӵ������
        this.mesh.add(c.mesh);
    }
};

//�����ʵ�ʻ�
var sky;
function createSky(){
    sky = new Sky();
    sky.mesh.position.y = -600;
    scene.add(sky.mesh)
}