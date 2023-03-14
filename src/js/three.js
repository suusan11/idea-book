// ページの読み込みを待つ
window.addEventListener('DOMContentLoaded', init);

function init() {
    {
        const wrapper = document.getElementById('wrapper1');
        // サイズを取得
        const sizes = {
            width: wrapper.clientWidth,
            height: wrapper.clientHeight,
        };
    
        // レンダラーを作成
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#myCanvas'),
        });
        renderer.setClearColor(new THREE.Color(0xFAFAFA)); //背景色
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(sizes.width, sizes.height);
    
        // シーンを作成
        const scene = new THREE.Scene();
    
        // カメラを作成
        const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height);
        camera.position.set(0, 0, +1000);
    
        // ドーナツ
        const torusGeometry = new THREE.TorusGeometry(100, 50, 16, 100);
        const torusMaterial = new THREE.MeshBasicMaterial({color: 0xFF8761});
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        scene.add(torus);
        torus.position.x = 150;
        torus.position.y = -200;
    
        // 球体
        const sphereGeometry = new THREE.SphereGeometry(50, 30, 30);
        const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x87D1B3});
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);
        sphere.position.x = -100;
        sphere.position.y = 100;
        
        // 箱
        const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
        const boxMaterial = new THREE.MeshBasicMaterial({color: 0xB5E1E5});
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        scene.add(box);
        box.position.x = -200;
        box.position.y = -100;
    
        //円柱
        const coneGeometry = new THREE.ConeGeometry(60, 80, 100);
        const coneMaterial = new THREE.MeshBasicMaterial({color: 0xF8F190});
        const cone= new THREE.Mesh(coneGeometry, coneMaterial);
        scene.add(cone);
        cone.position.x = 300;
        cone.position.y = 200;
    
        tick();
        // 毎フレーム時に実行されるループイベントです
        function tick() {
            // torus
            torus.rotation.y += 0.01;
            torus.rotation.x += 0.01;
    
            // sphere
            sphere.rotation.y += 0.02;
            sphere.rotation.x += 0.02;
    
            // box
            box.rotation.y += 0.005;
            box.rotation.x -= 0.005;
    
            // cone
            cone.rotation.y += 0.01;
            cone.rotation.z += 0.005;
    
            renderer.render(scene, camera); // レンダリング
    
            requestAnimationFrame(tick);
        }
    
        // onResize();
        //     // リサイズイベント発生時に実行
        //     window.addEventListener('resize', onResize);
    
        //     function onResize() {
        //     // サイズをアップデート
        //     sizes.width = window.innerWidth;
        //     sizes.height = window.innerHeight;
    
        //     // カメラのアスペクト比を正す
        //     camera.aspect = sizes.width / sizes.height;
        //     camera.updateProjectionMatrix();
    
        //     // レンダラーのサイズを調整する
        //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        //     renderer.setSize(sizes.width, sizes.height);
        // }
    }

    {
        const wrapper = document.getElementById('wrapper2');
    // サイズを取得
    const sizes = {
        width: wrapper.clientWidth,
        height: wrapper.clientHeight,
    };

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas2'),
    });
    renderer.setClearColor(new THREE.Color(0xFAFAFA)); //背景色
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sizes.width, sizes.height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height);
    camera.position.set(0, 0, +1000);

    // ドーナツ
    const torusGeometry = new THREE.TorusGeometry(100, 50, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({color: 0xFF8761});
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);
    torus.position.x = 150;
    torus.position.y = -200;

    // 球体
    const sphereGeometry = new THREE.SphereGeometry(50, 30, 30);
    const sphereMaterial = new THREE.MeshPhongMaterial({color: 0x87D1B3});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphere.position.x = -100;
    sphere.position.y = 100;
    
    // 箱
    const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
    const boxMaterial = new THREE.MeshPhongMaterial({color: 0xB5E1E5});
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);
    box.position.x = -200;
    box.position.y = -100;

    //円柱
    const coneGeometry = new THREE.ConeGeometry(60, 80, 100);
    const coneMaterial = new THREE.MeshPhongMaterial({color: 0xF8F190});
    const cone= new THREE.Mesh(coneGeometry, coneMaterial);
    scene.add(cone);
    cone.position.x = 300;
    cone.position.y = 200;

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    tick();
    // 毎フレーム時に実行されるループイベントです
    function tick() {
        // torus
        torus.rotation.y += 0.01;
        torus.rotation.x += 0.01;

        // sphere
        sphere.rotation.y += 0.02;
        sphere.rotation.x += 0.02;

        // box
        box.rotation.y += 0.005;
        box.rotation.x -= 0.005;

        // cone
        cone.rotation.y += 0.01;
        cone.rotation.z += 0.005;

        renderer.render(scene, camera); // レンダリング

        requestAnimationFrame(tick);
    }

    // onResize();
    //     // リサイズイベント発生時に実行
    //     window.addEventListener('resize', onResize);

    //     function onResize() {
    //     // サイズをアップデート
    //     sizes.width = window.innerWidth;
    //     sizes.height = window.innerHeight;

    //     // カメラのアスペクト比を正す
    //     camera.aspect = sizes.width / sizes.height;
    //     camera.updateProjectionMatrix();

    //     // レンダラーのサイズを調整する
    //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //     renderer.setSize(sizes.width, sizes.height);
    // }
    }

    {
        const wrapper = document.getElementById('wrapper3');
    // サイズを取得
    const sizes = {
        width: wrapper.clientWidth,
        height: wrapper.clientHeight,
    };

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas3'),
    });
    renderer.setClearColor(new THREE.Color(0xFAFAFA)); //背景色
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sizes.width, sizes.height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height);
    camera.position.set(0, 0, +1000);

    // ドーナツ
    const torusGeometry = new THREE.TorusGeometry(100, 50, 16, 100);
    const torusMaterial = new THREE.MeshToonMaterial({color: 0xFF8761});
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);
    torus.position.x = 150;
    torus.position.y = -200;

    // 球体
    const sphereGeometry = new THREE.SphereGeometry(50, 30, 30);
    const sphereMaterial = new THREE.MeshToonMaterial({color: 0x87D1B3});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphere.position.x = -100;
    sphere.position.y = 100;
    
    // 箱
    const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
    const boxMaterial = new THREE.MeshToonMaterial({color: 0xB5E1E5});
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);
    box.position.x = -200;
    box.position.y = -100;

    //円柱
    const coneGeometry = new THREE.ConeGeometry(60, 80, 100);
    const coneMaterial = new THREE.MeshToonMaterial({color: 0xF8F190});
    const cone= new THREE.Mesh(coneGeometry, coneMaterial);
    scene.add(cone);
    cone.position.x = 300;
    cone.position.y = 200;

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    tick();
    // 毎フレーム時に実行されるループイベントです
    function tick() {
        // torus
        torus.rotation.y += 0.01;
        torus.rotation.x += 0.01;

        // sphere
        sphere.rotation.y += 0.02;
        sphere.rotation.x += 0.02;

        // box
        box.rotation.y += 0.005;
        box.rotation.x -= 0.005;

        // cone
        cone.rotation.y += 0.01;
        cone.rotation.z += 0.005;

        renderer.render(scene, camera); // レンダリング

        requestAnimationFrame(tick);
    }

    // onResize();
    //     // リサイズイベント発生時に実行
    //     window.addEventListener('resize', onResize);

    //     function onResize() {
    //     // サイズをアップデート
    //     sizes.width = window.innerWidth;
    //     sizes.height = window.innerHeight;

    //     // カメラのアスペクト比を正す
    //     camera.aspect = sizes.width / sizes.height;
    //     camera.updateProjectionMatrix();

    //     // レンダラーのサイズを調整する
    //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //     renderer.setSize(sizes.width, sizes.height);
    // }
    }

    {
        const wrapper = document.getElementById('wrapper4');
    // サイズを取得
    const sizes = {
        width: wrapper.clientWidth,
        height: wrapper.clientHeight,
    };

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas4'),
    });
    renderer.setClearColor(new THREE.Color(0xFAFAFA)); //背景色
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sizes.width, sizes.height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height);
    camera.position.set(0, 0, +1000);

    // ドーナツ
    const torusGeometry = new THREE.TorusGeometry(100, 50, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({color: 0xFF8761});
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);
    torus.position.x = 150;
    torus.position.y = -200;

    // 球体
    const sphereGeometry = new THREE.SphereGeometry(50, 30, 30);
    const sphereMaterial = new THREE.MeshStandardMaterial({color: 0x87D1B3});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphere.position.x = -100;
    sphere.position.y = 100;
    
    // 箱
    const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
    const boxMaterial = new THREE.MeshStandardMaterial({color: 0xB5E1E5});
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);
    box.position.x = -200;
    box.position.y = -100;

    //円柱
    const coneGeometry = new THREE.ConeGeometry(60, 80, 100);
    const coneMaterial = new THREE.MeshStandardMaterial({color: 0xF8F190});
    const cone= new THREE.Mesh(coneGeometry, coneMaterial);
    scene.add(cone);
    cone.position.x = 300;
    cone.position.y = 200;

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // ポイント光源
    const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
    scene.add(pointLight);
    const pointLightHelper = new THREE.SpotLight(0xFFFFFF, 4, 30, Math.PI / 4, 0, 0.5);
    scene.add(pointLightHelper);

    tick();
    // 毎フレーム時に実行されるループイベントです
    function tick() {
        // torus
        torus.rotation.y += 0.01;
        torus.rotation.x += 0.01;

        // sphere
        sphere.rotation.y += 0.02;
        sphere.rotation.x += 0.02;

        // box
        box.rotation.y += 0.005;
        box.rotation.x -= 0.005;

        // cone
        cone.rotation.y += 0.01;
        cone.rotation.z += 0.005;

        renderer.render(scene, camera); // レンダリング

        requestAnimationFrame(tick);
    }

    // onResize();
    //     // リサイズイベント発生時に実行
    //     window.addEventListener('resize', onResize);

    //     function onResize() {
    //     // サイズをアップデート
    //     sizes.width = window.innerWidth;
    //     sizes.height = window.innerHeight;

    //     // カメラのアスペクト比を正す
    //     camera.aspect = sizes.width / sizes.height;
    //     camera.updateProjectionMatrix();

    //     // レンダラーのサイズを調整する
    //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //     renderer.setSize(sizes.width, sizes.height);
    // }
    }

    {

        const wrapper = document.getElementById('wrapper5');
    // サイズを取得
    const sizes = {
        width: wrapper.clientWidth,
        height: wrapper.clientHeight,
    };

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas5'),
    });
    renderer.setClearColor(new THREE.Color(0xFAFAFA)); //背景色
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sizes.width, sizes.height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height);
    camera.position.set(0, 0, +1000);

    // ドーナツ
    const torusGeometry = new THREE.TorusGeometry(100, 50, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({color: 0xFF8761});
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);
    torus.position.x = 150;
    torus.position.y = -200;

    // 球体
    const sphereGeometry = new THREE.SphereGeometry(50, 30, 30);
    const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x87D1B3});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphere.position.x = -100;
    sphere.position.y = 100;
    
    // 箱
    const boxGeometry = new THREE.BoxGeometry(100, 100, 100);
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0xB5E1E5});
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);
    box.position.x = -200;
    box.position.y = -100;

    //円柱
    const coneGeometry = new THREE.ConeGeometry(60, 80, 100);
    const coneMaterial = new THREE.MeshBasicMaterial({color: 0xF8F190});
    const cone= new THREE.Mesh(coneGeometry, coneMaterial);
    scene.add(cone);
    cone.position.x = 300;
    cone.position.y = 200;

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // ポイント光源
    const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
    scene.add(pointLight);
    const pointLightHelper = new THREE.SpotLight(0xFFFFFF, 4, 30, Math.PI / 4, 0, 0.5);
    scene.add(pointLightHelper);

    tick();
    // 毎フレーム時に実行されるループイベントです
    function tick() {
        // torus
        torus.rotation.y += 0.01;
        torus.rotation.x += 0.01;

        // sphere
        sphere.rotation.y += 0.02;
        sphere.rotation.x += 0.02;

        // box
        box.rotation.y += 0.005;
        box.rotation.x -= 0.005;

        // cone
        cone.rotation.y += 0.01;
        cone.rotation.z += 0.005;

        renderer.render(scene, camera); // レンダリング

        requestAnimationFrame(tick);
    }

    // マウス座標
    const mouse = new THREE.Vector2(0, 0);
    mouseMoved(x, y);
    window.addEventListener('mousemove', e => {
        canvas.mouseMoved(e.clientX, e.clientY);
    })
    function mouseMoved(x, y) {
        mouse.x =  x - (sizes.width / 2);// 原点を中心に持ってくる
        mouse.y = -y + (sizes.height / 2);// 軸を反転して原点を中心に持ってくる
        
        // ライトの xy座標 をマウス位置にする
        pointLight.position.x = mouse.x;
        pointLight.position.y = mouse.y;
    }

    // onResize();
    //     // リサイズイベント発生時に実行
    //     window.addEventListener('resize', onResize);

    //     function onResize() {
    //     // サイズをアップデート
    //     sizes.width = window.innerWidth;
    //     sizes.height = window.innerHeight;

    //     // カメラのアスペクト比を正す
    //     camera.aspect = sizes.width / sizes.height;
    //     camera.updateProjectionMatrix();

    //     // レンダラーのサイズを調整する
    //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //     renderer.setSize(sizes.width, sizes.height);
    // }
    }
}