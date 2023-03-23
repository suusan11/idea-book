window.addEventListener('DOMContentLoaded', init2);

function init2() {
    const wrapper = document.getElementById('metaballs__wrap');
    // サイズを取得
    const sizes = {
        width: wrapper.clientWidth,
        height: wrapper.clientHeight,
    };
    const width = 1200;
    const height = 900

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#metaballs')
    });
    // renderer.setClearColor(new THREE.Color(0xFFFFFF));
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(75, width / 　　　　height);
    camera.position.set.z = 5;

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

    const material = new THREE.MeshNormalMaterial();

    const mesh1 = new THREE.Mesh(sphereGeometry, material);
    mesh1.position.set(-1, 0, 0);

    const mesh2 = new THREE.Mesh(sphereGeometry, material);
    mesh2.position.set(1, 0, 0);

    const mesh3 = new THREE.Mesh(sphereGeometry, material);
    mesh3.position.set(0, 1, 0);

    const mesh4 = new THREE.Mesh(sphereGeometry, material);
    mesh4.position.set(0, -1, 0);

    scene.add(mesh1, mesh2, mesh3, mesh4);

    function animate() {
        requestAnimationFrame(animate);

        mesh1.position.x = Math.sin(Date.now() * 0.001) * 2;
        mesh2.position.x = Math.cos(Date.now() * 0.001) * 2;
        mesh3.position.y = Math.sin(Date.now() * 0.001) * 2;
        mesh4.position.y = Math.cos(Date.now() * 0.001) * 2;

        renderer.render(scene, camera);
    }
    animate();
}