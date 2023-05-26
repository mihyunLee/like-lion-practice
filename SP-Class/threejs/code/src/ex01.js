import * as THREE from "three";

// ----- 주제: 기본 장면 구성

export default function example() {
  // Renderer
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    // canvas: canvas,
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원
  renderer.shadowMap.enabled = true; // 그림자가 생기도록 (전체 시스템 기준)

  // ----- Scene
  const scene = new THREE.Scene();
  // 배경색 설정
  scene.background = new THREE.Color("white");

  // ----- Camera(카메라)
  // 원근 카메라
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각(field of view)
    window.innerWidth / window.innerHeight, // 장면 비율
    0.1, // near(가까이 보이는 한계)
    1000 // far(멀리 보이는 한계)
  );
  camera.position.set(0, 1, 5); // 카메라 위치 (x, y, z)
  // camera.position.x = 0;
  // camera.position.y = 1;
  // camera.position.z = 5;
  camera.lookAt(new THREE.Vector3(0, 0, 0)); // 카메라가 이동했을 때 대상을 바라보는 지점 변경
  scene.add(camera); // 무대에 카메라 추가하기기, 최신 three.js에서 카메라의 경우 안해도 추가가 되는 경우가 있다.

  // ----- Light(조명)
  // material(재질)에 따라 조명의 여부에 차이가 없을 수 있다.
  // 조명은 여러개 추가할 수 있지만, 다 연산에 포함되기 때문에 성능을 위해 적당히!

  // AmbientLight : 은은한 조명, 전체 밝기 톤 설정
  const ambientLight = new THREE.AmbientLight("white", 0.5); // 색상, 강도
  scene.add(ambientLight); // 무대에 조명 추가

  // SpotLight : 스팟 조명
  const spotLight = new THREE.SpotLight("white", 0.7); // 색상, 강도
  spotLight.position.set(-2, 5, 3);
  spotLight.castShadow = true; // 그림자를 만들 수 있도록 (조명별 설명), true : 그림자 있음 / false : 그림자 없음음
  spotLight.shadow.mapSize.width = 1024; // 그림자 해상도
  spotLight.shadow.mapSize.height = 1024;
  scene.add(spotLight); // 무대에 조명 추가

  // scene.add(ambientLight, spotLight);

  // ----- Mesh
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshStandardMaterial({
      color: "lightgray",
    })
  );
  floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
  floor.rotation.x = -Math.PI * 0.5; // X축을 기준으로 회전, Math.PI는 180도
  // floor.rotation.x = THREE.MathUtils.degToRad(-90); // 90도 돌려주세요~, 매개변수의 각도값을 Radian으로 변환해줌
  // 360도 -> 2파이
  // 180도 -> 파이
  // 3D Object는 기본적으로 뒷면이 보이지 않는다. 따라서 -Math.PI가 아닌 Math.PI를 해주면
  // 뒷면이 보이게 되어 바닥면이 보이지 않게 되는 것.

  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({
      color: "red",
    })
  );
  box.castShadow = true; // 그림자를 만들 수 있도록, 그림자의 원인
  box.position.y = 0.5;

  scene.add(floor, box); // scene에 조립
  renderer.render(scene, camera); // 그리기(렌더링)

  // ----- 캔버스 사이즈를 브라우저 창 사이즈에 맞추기
  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); // 카메라 관련 속성이 변하면 실행
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // ----- 이벤트
  // 브라우저 창 사이즈 변경 시, 캔버스 사이즈를 맞추기 위해 실행
  window.addEventListener("resize", setSize);
}
