var Color={
    red:0xf25346,
    white:0xd8d0d1,
    brown:0x59332e,
    pink:0xF5986E,
    brownDark:0x23190f,
    blue:0x68c3c0
};

window.addEventListener('load',init,false);
function init() {
    //�����������������Ⱦ��
    creatScene();
    creatLights();
    creatSea();
    createPlane();
    createSky();
    //�������¼�����
    document.addEventListener('mousemove',handleMouseMove,false);
    loop();

}/**
 * Created by dell on 2018/3/20.
 */
