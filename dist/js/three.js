"use strict";

// ページの読み込みを待つ
window.addEventListener('DOMContentLoaded', init);

function init() {
  {
    var wrapper = document.getElementById('wrapper1'); // サイズを取得

    var sizes = {
      width: wrapper.clientWidth,
      height: wrapper.clientHeight
    }; // レンダラーを作成

    var renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#myCanvas')
    });
    renderer.setClearColor(new THREE.Color(0xFAFAFA)); //背景色

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sizes.width, sizes.height); // シーンを作成

    var scene = new THREE.Scene(); // カメラを作成

    var camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height);
    camera.position.set(0, 0, +1000); // ドーナツ

    var torusGeometry = new THREE.TorusGeometry(100, 50, 16, 100);
    var torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xFF8761
    });
    var torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);
    torus.position.x = 150;
    torus.position.y = -200; // 球体

    var sphereGeometry = new THREE.SphereGeometry(50, 30, 30);
    var sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x87D1B3
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphere.position.x = -100;
    sphere.position.y = 100; // 箱

    var boxGeometry = new THREE.BoxGeometry(100, 100, 100);
    var boxMaterial = new THREE.MeshBasicMaterial({
      color: 0xB5E1E5
    });
    var box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);
    box.position.x = -200;
    box.position.y = -100; //円柱

    var coneGeometry = new THREE.ConeGeometry(60, 80, 100);
    var coneMaterial = new THREE.MeshBasicMaterial({
      color: 0xF8F190
    });
    var cone = new THREE.Mesh(coneGeometry, coneMaterial);
    scene.add(cone);
    cone.position.x = 300;
    cone.position.y = 200;
    tick(); // 毎フレーム時に実行されるループイベントです

    function tick() {
      // torus
      torus.rotation.y += 0.01;
      torus.rotation.x += 0.01; // sphere

      sphere.rotation.y += 0.02;
      sphere.rotation.x += 0.02; // box

      box.rotation.y += 0.005;
      box.rotation.x -= 0.005; // cone

      cone.rotation.y += 0.01;
      cone.rotation.z += 0.005;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }

    onResize(); // リサイズイベント発生時に実行

    window.addEventListener('resize', onResize);

    function onResize() {
      // サイズをアップデート
      sizes.width = wrapper.clientWidth;
      sizes.height = wrapper.clientHeight; // カメラのアスペクト比を正す

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix(); // レンダラーのサイズを調整する

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(sizes.width, sizes.height);
    }
  }
  {
    var _wrapper = document.getElementById('wrapper2'); // サイズを取得


    var _sizes = {
      width: _wrapper.clientWidth,
      height: _wrapper.clientHeight
    }; // レンダラーを作成

    var _renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#myCanvas2')
    });

    _renderer.setClearColor(new THREE.Color(0xFAFAFA)); //背景色


    _renderer.setPixelRatio(window.devicePixelRatio);

    _renderer.setSize(_sizes.width, _sizes.height); // シーンを作成


    var _scene = new THREE.Scene(); // カメラを作成


    var _camera = new THREE.PerspectiveCamera(40, _sizes.width / _sizes.height);

    _camera.position.set(0, 0, +1000); // ドーナツ


    var _torusGeometry = new THREE.TorusGeometry(100, 50, 16, 100);

    var _torusMaterial = new THREE.MeshPhongMaterial({
      color: 0xFF8761
    });

    var _torus = new THREE.Mesh(_torusGeometry, _torusMaterial);

    _scene.add(_torus);

    _torus.position.x = 150;
    _torus.position.y = -200; // 球体

    var _sphereGeometry = new THREE.SphereGeometry(50, 30, 30);

    var _sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x87D1B3
    });

    var _sphere = new THREE.Mesh(_sphereGeometry, _sphereMaterial);

    _scene.add(_sphere);

    _sphere.position.x = -100;
    _sphere.position.y = 100; // 箱

    var _boxGeometry = new THREE.BoxGeometry(100, 100, 100);

    var _boxMaterial = new THREE.MeshPhongMaterial({
      color: 0xB5E1E5
    });

    var _box = new THREE.Mesh(_boxGeometry, _boxMaterial);

    _scene.add(_box);

    _box.position.x = -200;
    _box.position.y = -100; //円柱

    var _coneGeometry = new THREE.ConeGeometry(60, 80, 100);

    var _coneMaterial = new THREE.MeshPhongMaterial({
      color: 0xF8F190
    });

    var _cone = new THREE.Mesh(_coneGeometry, _coneMaterial);

    _scene.add(_cone);

    _cone.position.x = 300;
    _cone.position.y = 200; // 平行光源

    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);

    _scene.add(directionalLight);

    tick(); // 毎フレーム時に実行されるループイベントです

    function tick() {
      // torus
      _torus.rotation.y += 0.01;
      _torus.rotation.x += 0.01; // sphere

      _sphere.rotation.y += 0.02;
      _sphere.rotation.x += 0.02; // box

      _box.rotation.y += 0.005;
      _box.rotation.x -= 0.005; // cone

      _cone.rotation.y += 0.01;
      _cone.rotation.z += 0.005;

      _renderer.render(_scene, _camera); // レンダリング


      requestAnimationFrame(tick);
    }

    onResize(); // リサイズイベント発生時に実行

    window.addEventListener('resize', onResize);

    function onResize() {
      // サイズをアップデート
      _sizes.width = _wrapper.clientWidth;
      _sizes.height = _wrapper.clientHeight; // カメラのアスペクト比を正す

      _camera.aspect = _sizes.width / _sizes.height;

      _camera.updateProjectionMatrix(); // レンダラーのサイズを調整する


      _renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      _renderer.setSize(_sizes.width, _sizes.height);
    }
  }
  {
    var _wrapper2 = document.getElementById('wrapper3'); // サイズを取得


    var _sizes2 = {
      width: _wrapper2.clientWidth,
      height: _wrapper2.clientHeight
    }; // レンダラーを作成

    var _renderer2 = new THREE.WebGLRenderer({
      canvas: document.querySelector('#myCanvas3')
    });

    _renderer2.setClearColor(new THREE.Color(0xFAFAFA)); //背景色


    _renderer2.setPixelRatio(window.devicePixelRatio);

    _renderer2.setSize(_sizes2.width, _sizes2.height); // シーンを作成


    var _scene2 = new THREE.Scene(); // カメラを作成


    var _camera2 = new THREE.PerspectiveCamera(40, _sizes2.width / _sizes2.height);

    _camera2.position.set(0, 0, +1000); // ドーナツ


    var _torusGeometry2 = new THREE.TorusGeometry(100, 50, 16, 100);

    var _torusMaterial2 = new THREE.MeshToonMaterial({
      color: 0xFF8761
    });

    var _torus2 = new THREE.Mesh(_torusGeometry2, _torusMaterial2);

    _scene2.add(_torus2);

    _torus2.position.x = 150;
    _torus2.position.y = -200; // 球体

    var _sphereGeometry2 = new THREE.SphereGeometry(50, 30, 30);

    var _sphereMaterial2 = new THREE.MeshToonMaterial({
      color: 0x87D1B3
    });

    var _sphere2 = new THREE.Mesh(_sphereGeometry2, _sphereMaterial2);

    _scene2.add(_sphere2);

    _sphere2.position.x = -100;
    _sphere2.position.y = 100; // 箱

    var _boxGeometry2 = new THREE.BoxGeometry(100, 100, 100);

    var _boxMaterial2 = new THREE.MeshToonMaterial({
      color: 0xB5E1E5
    });

    var _box2 = new THREE.Mesh(_boxGeometry2, _boxMaterial2);

    _scene2.add(_box2);

    _box2.position.x = -200;
    _box2.position.y = -100; //円柱

    var _coneGeometry2 = new THREE.ConeGeometry(60, 80, 100);

    var _coneMaterial2 = new THREE.MeshToonMaterial({
      color: 0xF8F190
    });

    var _cone2 = new THREE.Mesh(_coneGeometry2, _coneMaterial2);

    _scene2.add(_cone2);

    _cone2.position.x = 300;
    _cone2.position.y = 200; // 平行光源

    var _directionalLight = new THREE.DirectionalLight(0xffffff);

    _directionalLight.position.set(1, 1, 1);

    _scene2.add(_directionalLight);

    tick(); // 毎フレーム時に実行されるループイベントです

    function tick() {
      // torus
      _torus2.rotation.y += 0.01;
      _torus2.rotation.x += 0.01; // sphere

      _sphere2.rotation.y += 0.02;
      _sphere2.rotation.x += 0.02; // box

      _box2.rotation.y += 0.005;
      _box2.rotation.x -= 0.005; // cone

      _cone2.rotation.y += 0.01;
      _cone2.rotation.z += 0.005;

      _renderer2.render(_scene2, _camera2); // レンダリング


      requestAnimationFrame(tick);
    }

    onResize(); // リサイズイベント発生時に実行

    window.addEventListener('resize', onResize);

    function onResize() {
      // サイズをアップデート
      _sizes2.width = _wrapper2.clientWidth;
      _sizes2.height = _wrapper2.clientHeight; // カメラのアスペクト比を正す

      _camera2.aspect = _sizes2.width / _sizes2.height;

      _camera2.updateProjectionMatrix(); // レンダラーのサイズを調整する


      _renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      _renderer2.setSize(_sizes2.width, _sizes2.height);
    }
  }
  {
    var _wrapper3 = document.getElementById('wrapper4'); // サイズを取得


    var _sizes3 = {
      width: _wrapper3.clientWidth,
      height: _wrapper3.clientHeight
    }; // レンダラーを作成

    var _renderer3 = new THREE.WebGLRenderer({
      canvas: document.querySelector('#myCanvas4')
    });

    _renderer3.setClearColor(new THREE.Color(0xFAFAFA)); //背景色


    _renderer3.setPixelRatio(window.devicePixelRatio);

    _renderer3.setSize(_sizes3.width, _sizes3.height); // シーンを作成


    var _scene3 = new THREE.Scene(); // カメラを作成


    var _camera3 = new THREE.PerspectiveCamera(40, _sizes3.width / _sizes3.height);

    _camera3.position.set(0, 0, +1000); // ドーナツ


    var _torusGeometry3 = new THREE.TorusGeometry(100, 50, 16, 100);

    var _torusMaterial3 = new THREE.MeshStandardMaterial({
      color: 0xFF8761
    });

    var _torus3 = new THREE.Mesh(_torusGeometry3, _torusMaterial3);

    _scene3.add(_torus3);

    _torus3.position.x = 150;
    _torus3.position.y = -200; // 球体

    var _sphereGeometry3 = new THREE.SphereGeometry(50, 30, 30);

    var _sphereMaterial3 = new THREE.MeshStandardMaterial({
      color: 0x87D1B3
    });

    var _sphere3 = new THREE.Mesh(_sphereGeometry3, _sphereMaterial3);

    _scene3.add(_sphere3);

    _sphere3.position.x = -100;
    _sphere3.position.y = 100; // 箱

    var _boxGeometry3 = new THREE.BoxGeometry(100, 100, 100);

    var _boxMaterial3 = new THREE.MeshStandardMaterial({
      color: 0xB5E1E5
    });

    var _box3 = new THREE.Mesh(_boxGeometry3, _boxMaterial3);

    _scene3.add(_box3);

    _box3.position.x = -200;
    _box3.position.y = -100; //円柱

    var _coneGeometry3 = new THREE.ConeGeometry(60, 80, 100);

    var _coneMaterial3 = new THREE.MeshStandardMaterial({
      color: 0xF8F190
    });

    var _cone3 = new THREE.Mesh(_coneGeometry3, _coneMaterial3);

    _scene3.add(_cone3);

    _cone3.position.x = 300;
    _cone3.position.y = 200; // 平行光源

    var _directionalLight2 = new THREE.DirectionalLight(0xffffff);

    _directionalLight2.position.set(1, 1, 1);

    _scene3.add(_directionalLight2); // ポイント光源


    var pointLight = new THREE.PointLight(0xffffff, 2, 1000);

    _scene3.add(pointLight);

    var pointLightHelper = new THREE.SpotLight(0xFFFFFF, 4, 30, Math.PI / 4, 0, 0.5);

    _scene3.add(pointLightHelper);

    tick(); // 毎フレーム時に実行されるループイベントです

    function tick() {
      // torus
      _torus3.rotation.y += 0.01;
      _torus3.rotation.x += 0.01; // sphere

      _sphere3.rotation.y += 0.02;
      _sphere3.rotation.x += 0.02; // box

      _box3.rotation.y += 0.005;
      _box3.rotation.x -= 0.005; // cone

      _cone3.rotation.y += 0.01;
      _cone3.rotation.z += 0.005;

      _renderer3.render(_scene3, _camera3); // レンダリング


      requestAnimationFrame(tick);
    }

    onResize(); // リサイズイベント発生時に実行

    window.addEventListener('resize', onResize);

    function onResize() {
      // サイズをアップデート
      _sizes3.width = _wrapper3.clientWidth;
      _sizes3.height = _wrapper3.clientHeight; // カメラのアスペクト比を正す

      _camera3.aspect = _sizes3.width / _sizes3.height;

      _camera3.updateProjectionMatrix(); // レンダラーのサイズを調整する


      _renderer3.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      _renderer3.setSize(_sizes3.width, _sizes3.height);
    }
  }
  {
    var _wrapper4 = document.getElementById('wrapper5');

    var canvas = document.querySelector('#myCanvas5'); // サイズを取得

    var _sizes4 = {
      width: _wrapper4.clientWidth,
      height: _wrapper4.clientHeight
    }; // レンダラーを作成

    var _renderer4 = new THREE.WebGLRenderer({
      canvas: canvas
    });

    _renderer4.setClearColor(new THREE.Color(0xFAFAFA)); //背景色


    _renderer4.setPixelRatio(window.devicePixelRatio);

    _renderer4.setSize(_sizes4.width, _sizes4.height); // シーンを作成


    var _scene4 = new THREE.Scene(); // カメラを作成


    var _camera4 = new THREE.PerspectiveCamera(40, _sizes4.width / _sizes4.height);

    _camera4.position.set(0, 0, +1000); // ドーナツ


    var _torusGeometry4 = new THREE.TorusGeometry(100, 50, 16, 100);

    var _torusMaterial4 = new THREE.MeshStandardMaterial({
      color: 0xFF8761
    });

    var _torus4 = new THREE.Mesh(_torusGeometry4, _torusMaterial4);

    _scene4.add(_torus4);

    _torus4.position.x = 150;
    _torus4.position.y = -200; // 球体

    var _sphereGeometry4 = new THREE.SphereGeometry(50, 30, 30);

    var _sphereMaterial4 = new THREE.MeshStandardMaterial({
      color: 0x87D1B3
    });

    var _sphere4 = new THREE.Mesh(_sphereGeometry4, _sphereMaterial4);

    _scene4.add(_sphere4);

    _sphere4.position.x = -100;
    _sphere4.position.y = 100; // 箱

    var _boxGeometry4 = new THREE.BoxGeometry(100, 100, 100);

    var _boxMaterial4 = new THREE.MeshStandardMaterial({
      color: 0xB5E1E5
    });

    var _box4 = new THREE.Mesh(_boxGeometry4, _boxMaterial4);

    _scene4.add(_box4);

    _box4.position.x = -200;
    _box4.position.y = -100; //円柱

    var _coneGeometry4 = new THREE.ConeGeometry(60, 80, 100);

    var _coneMaterial4 = new THREE.MeshStandardMaterial({
      color: 0xF8F190
    });

    var _cone4 = new THREE.Mesh(_coneGeometry4, _coneMaterial4);

    _scene4.add(_cone4);

    _cone4.position.x = 300;
    _cone4.position.y = 200; // 平行光源

    var _directionalLight3 = new THREE.DirectionalLight(0xffffff);

    _directionalLight3.position.set(1, 1, 1);

    _scene4.add(_directionalLight3); // ポイント光源


    var _pointLight = new THREE.PointLight(0xffffff, 2, 1000);

    _pointLight.position.set(0, 0, 400);

    _scene4.add(_pointLight);

    var _pointLightHelper = new THREE.SpotLight(0xFFFFFF, 4, 30, Math.PI / 4, 0, 0.5);

    _scene4.add(_pointLightHelper);

    tick(); // 毎フレーム時に実行されるループイベントです

    function tick() {
      // torus
      _torus4.rotation.y += 0.01;
      _torus4.rotation.x += 0.01; // sphere

      _sphere4.rotation.y += 0.02;
      _sphere4.rotation.x += 0.02; // box

      _box4.rotation.y += 0.005;
      _box4.rotation.x -= 0.005; // cone

      _cone4.rotation.y += 0.01;
      _cone4.rotation.z += 0.005;

      _renderer4.render(_scene4, _camera4); // レンダリング


      requestAnimationFrame(tick);
    } // マウス座標


    var mouse = new THREE.Vector2(0, 0);
    canvas.addEventListener('mousemove', mouseMoved);

    function mouseMoved(e) {
      mouse.x = e.clientX - _sizes4.width / 2; // 原点を中心に持ってくる

      mouse.y = -e.clientY + _sizes4.height / 2; // 軸を反転して原点を中心に持ってくる
      // ライトの xy座標 をマウス位置にする

      _pointLight.position.x = mouse.x;
      _pointLight.position.y = mouse.y;
    }

    onResize(); // リサイズイベント発生時に実行

    window.addEventListener('resize', onResize);

    function onResize() {
      // サイズをアップデート
      _sizes4.width = _wrapper4.clientWidth;
      _sizes4.height = _wrapper4.clientHeight; // カメラのアスペクト比を正す

      _camera4.aspect = _sizes4.width / _sizes4.height;

      _camera4.updateProjectionMatrix(); // レンダラーのサイズを調整する


      _renderer4.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      _renderer4.setSize(_sizes4.width, _sizes4.height);
    }
  }
  {
    var _wrapper5 = document.getElementById('wrapper6');

    var _canvas = document.querySelector('#myCanvas6'); // サイズを取得


    var _sizes5 = {
      width: _wrapper5.clientWidth,
      height: _wrapper5.clientHeight
    }; // レンダラーを作成

    var _renderer5 = new THREE.WebGLRenderer({
      canvas: _canvas
    });

    _renderer5.setClearColor(new THREE.Color(0xFAFAFA)); //背景色


    _renderer5.setPixelRatio(window.devicePixelRatio);

    _renderer5.setSize(_sizes5.width, _sizes5.height); // シーンを作成


    var _scene5 = new THREE.Scene(); // カメラを作成


    var _camera5 = new THREE.PerspectiveCamera(40, _sizes5.width / _sizes5.height);

    _camera5.position.set(0, 0, +1000); // ドーナツ


    var _torusGeometry5 = new THREE.TorusGeometry(100, 50, 16, 100);

    var _torusMaterial5 = new THREE.MeshBasicMaterial({
      color: 0xFF8761
    });

    var _torus5 = new THREE.Mesh(_torusGeometry5, _torusMaterial5);

    _scene5.add(_torus5);

    _torus5.position.x = 150;
    _torus5.position.y = -200;
    _torus5.rotation.y = 4;
    _torus5.rotation.x = -3; // 球体

    var _sphereGeometry5 = new THREE.SphereGeometry(50, 30, 30);

    var _sphereMaterial5 = new THREE.MeshBasicMaterial({
      color: 0x87D1B3
    });

    var _sphere5 = new THREE.Mesh(_sphereGeometry5, _sphereMaterial5);

    _scene5.add(_sphere5);

    _sphere5.position.x = -100;
    _sphere5.position.y = 100; // 箱

    var _boxGeometry5 = new THREE.BoxGeometry(100, 100, 100);

    var _boxMaterial5 = new THREE.MeshBasicMaterial({
      color: 0xB5E1E5
    });

    var _box5 = new THREE.Mesh(_boxGeometry5, _boxMaterial5);

    _scene5.add(_box5);

    _box5.position.x = -200;
    _box5.position.y = -100; //円柱

    var _coneGeometry5 = new THREE.ConeGeometry(60, 80, 100);

    var _coneMaterial5 = new THREE.MeshBasicMaterial({
      color: 0xF8F190
    });

    var _cone5 = new THREE.Mesh(_coneGeometry5, _coneMaterial5);

    _scene5.add(_cone5);

    _cone5.position.x = 300;
    _cone5.position.y = 200;
    tick(); // 毎フレーム時に実行されるループイベントです

    function tick() {
      // torus
      // torus.rotation.y += 0.01;
      // torus.rotation.x += 0.01;
      // // sphere
      // sphere.rotation.y += 0.02;
      // sphere.rotation.x += 0.02;
      // // box
      // box.rotation.y += 0.005;
      // box.rotation.x -= 0.005;
      // // cone
      // cone.rotation.y += 0.01;
      // cone.rotation.z += 0.005;
      _renderer5.render(_scene5, _camera5); // レンダリング


      requestAnimationFrame(tick);
    } // マウス座標


    var _mouse = new THREE.Vector2(0, 0);

    var rot = 0;

    _canvas.addEventListener('mousemove', mouseMoved);

    function mouseMoved(e) {
      var element = e.currentTarget; // canvas要素上のXY座標

      var x = e.clientX - element.offsetLeft;
      var y = e.clientY - element.offsetTop; // canvas要素の幅・高さ

      var w = element.offsetWidth;
      var h = element.offsetHeight; // -1〜+1の範囲で現在のマウス座標を登録する

      _mouse.x = x / w * 2 - 1;
      _mouse.y = -(y / h) * 2 + 1; // torus

      _torus5.rotation.x = _mouse.x;
      _torus5.rotation.y = _mouse.y; // sphere

      _sphere5.rotation.x = _mouse.x;
      _sphere5.rotation.y = _mouse.y; // box

      _box5.rotation.x = _mouse.x;
      _box5.rotation.y = _mouse.y; // cone

      _cone5.rotation.z = _mouse.x;
      _cone5.rotation.y = _mouse.y;
    }

    onResize(); // リサイズイベント発生時に実行

    window.addEventListener('resize', onResize);

    function onResize() {
      // サイズをアップデート
      _sizes5.width = _wrapper5.clientWidth;
      _sizes5.height = _wrapper5.clientHeight; // カメラのアスペクト比を正す

      _camera5.aspect = _sizes5.width / _sizes5.height;

      _camera5.updateProjectionMatrix(); // レンダラーのサイズを調整する


      _renderer5.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      _renderer5.setSize(_sizes5.width, _sizes5.height);
    }
  }
  {
    var _wrapper6 = document.getElementById('wrapper7');

    var _canvas2 = document.querySelector('#myCanvas7'); // サイズを取得


    var _sizes6 = {
      width: _wrapper6.clientWidth,
      height: _wrapper6.clientHeight
    }; // レンダラーを作成

    var _renderer6 = new THREE.WebGLRenderer({
      canvas: _canvas2
    });

    _renderer6.setClearColor(new THREE.Color(0xFAFAFA)); //背景色


    _renderer6.setPixelRatio(window.devicePixelRatio);

    _renderer6.setSize(_sizes6.width, _sizes6.height); // シーンを作成


    var _scene6 = new THREE.Scene(); // カメラを作成


    var _camera6 = new THREE.PerspectiveCamera(40, _sizes6.width / _sizes6.height);

    _camera6.position.set(0, 0, +1000); // ドーナツ


    var _torusGeometry6 = new THREE.TorusGeometry(100, 50, 16, 100);

    var _torusMaterial6 = new THREE.MeshBasicMaterial({
      color: 0xFF8761
    });

    var _torus6 = new THREE.Mesh(_torusGeometry6, _torusMaterial6);

    _scene6.add(_torus6);

    _torus6.position.x = 150;
    _torus6.position.y = -200; // 球体

    var _sphereGeometry6 = new THREE.SphereGeometry(50, 30, 30);

    var _sphereMaterial6 = new THREE.MeshBasicMaterial({
      color: 0x87D1B3
    });

    var _sphere6 = new THREE.Mesh(_sphereGeometry6, _sphereMaterial6);

    _scene6.add(_sphere6);

    _sphere6.position.x = -100;
    _sphere6.position.y = 100; // 箱

    var _boxGeometry6 = new THREE.BoxGeometry(100, 100, 100);

    var _boxMaterial6 = new THREE.MeshBasicMaterial({
      color: 0xB5E1E5
    });

    var _box6 = new THREE.Mesh(_boxGeometry6, _boxMaterial6);

    _scene6.add(_box6);

    _box6.position.x = -200;
    _box6.position.y = -100; //円柱

    var _coneGeometry6 = new THREE.ConeGeometry(60, 80, 100);

    var _coneMaterial6 = new THREE.MeshBasicMaterial({
      color: 0xF8F190
    });

    var _cone6 = new THREE.Mesh(_coneGeometry6, _coneMaterial6);

    _scene6.add(_cone6);

    _cone6.position.x = 300;
    _cone6.position.y = 200;
    var _rot = 0; // 角度

    var mouseX = 0; // マウス座標
    // マウス座標はマウスが動いた時のみ取得できる

    document.addEventListener("mousemove", function (event) {
      mouseX = event.pageX;
    });
    tick(); // 毎フレーム時に実行されるループイベントです

    function tick() {
      _torus6.rotation.y += 0.01;
      _torus6.rotation.x += 0.01; // sphere

      _sphere6.rotation.y += 0.02;
      _sphere6.rotation.x += 0.02; // box

      _box6.rotation.y += 0.005;
      _box6.rotation.x -= 0.005; // cone

      _cone6.rotation.y += 0.01;
      _cone6.rotation.z += 0.005; // マウスの位置に応じて角度を設定
      // マウスのX座標がステージの幅の何%の位置にあるか調べてそれを360度で乗算する

      var targetRot = mouseX / window.innerWidth * 360; // イージングの公式を用いて滑らかにする
      // 値 += (目標値 - 現在の値) * 減速値

      _rot += (targetRot - _rot) * 0.02; // ラジアンに変換する

      var radian = _rot * Math.PI / 180; // 角度に応じてカメラの位置を設定

      _camera6.position.x = 1000 * Math.sin(radian);
      _camera6.position.z = 1000 * Math.cos(radian); // 原点方向を見つめる

      _camera6.lookAt(new THREE.Vector3(0, 0, 0));

      _renderer6.render(_scene6, _camera6); // レンダリング


      requestAnimationFrame(tick);
    }

    onResize(); // リサイズイベント発生時に実行

    window.addEventListener('resize', onResize);

    function onResize() {
      // サイズをアップデート
      _sizes6.width = _wrapper6.clientWidth;
      _sizes6.height = _wrapper6.clientHeight; // カメラのアスペクト比を正す

      _camera6.aspect = _sizes6.width / _sizes6.height;

      _camera6.updateProjectionMatrix(); // レンダラーのサイズを調整する


      _renderer6.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      _renderer6.setSize(_sizes6.width, _sizes6.height);
    }
  }
}