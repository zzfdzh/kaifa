/**
 * Created by dell on 2018/3/20.
 */
var AirPlane = function(){
    this.mesh=new THREE.Object3D();

    //����
    var geomCockpit =new THREE.BoxGeometry(60,50,50,1,1,1);
    var matCockpit =new THREE.MeshPhongMaterial({
                color:Color.red,
                shading:THREE.FlatShading
            });
    var cockpit =new THREE.Mesh(geomCockpit,matCockpit);
    //�÷ɻ�������Ӱ
    cockpit.castShadow=true;
    //�û����ܹ�������Ӱ
    cockpit.receiveShadow=true;
    this.mesh.add(cockpit);

    //��������
    var geomEngine =new THREE.BoxGeometry(20,50,50,1,1,1);

    var matEngine =new THREE.MeshPhongMaterial({
        color:Color.white,
        shading:THREE.FlatShading
    });
    var engine =new THREE.Mesh(geomEngine,matEngine);
    engine.position.x = 40;
    engine.castShadow=true;
    engine.receiveShadow=true;
    this.mesh.add(engine);

    //������β
    var geomTailPlane = new THREE.BoxGeometry(15,20,5,1,1,1);
    var matTailPlane = new THREE.MeshPhongMaterial({
        color:Color.red,
        shading:THREE.FlatShading
    });
    var TailPlane = new THREE.Mesh(geomTailPlane,matTailPlane);
    TailPlane.position.set(-35,25,0);
    TailPlane.castShadow=true;
    TailPlane.receiveShadow=true;
    this.mesh.add(TailPlane);


//��������
var geomSideWing = new THREE.BoxGeometry(40,8,150,1,1,1);
    var matSideWing=new THREE.MeshPhongMaterial({
        color:Color.red,
        shading:THREE.FlatShading
    });
    var SideWing =new THREE.Mesh(geomSideWing,matSideWing);
    SideWing.castShadow=true;
    SideWing.receiveShadow=true;
    this.mesh.add(SideWing);
//����������
var geomPropeller=new THREE.BoxGeometry(20,10,10,1,1,1);
    var matPropeller =new THREE.MeshBasicMaterial({
        color:Color.brown,
        shading:THREE.FlatShading
    });
    this.Propeller =new THREE.Mesh(geomPropeller,matPropeller);
    this.Propeller.castShadow=true;
    this.Propeller.receiveShadow=true;

//�����������Ľ�Ҷ
    var geomBlade= new THREE.BoxGeometry(1,100,20,1,1,1);
    var matBlade = new THREE.MeshPhongMaterial({
        color:Color.brownDark,
        shading:THREE.FlatShading
    });
    var Blade =new THREE.Mesh(geomBlade,matBlade);
    Blade.position.set(8,0,0);
    Blade.castShadow=true;
    Blade.receiveShadow=true;
    this.Propeller.add(Blade);
    this.Propeller.position.set(50,0,0);
    this.mesh.add(this.Propeller);

};
    var airplane;
    function createPlane(){
    airplane =new AirPlane();
    scene.add(airplane.mesh);
        airplane.mesh.scale.set(.25,.25,.25);
        airplane.mesh.position.y=100;
}

