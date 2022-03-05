import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import suicide from './../../img/suicide.jpg';
import calendar from './../../img/my2012calendar.gif';
import unfair from './../../img/unfairly_flavours.png';
import kinder from './../../img/kinderkids.png';
import fairtrade from './../../img/fairtradearcade.png';
import FolioDetails from '../popups/FolioDetails';

const Folio = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const popupArray = [
    {
      title: 'Suicide Squad Interactive',
      description:
        'Developed for Supanova in Sydney, this was a native app that allowed the user to heavily customize a Suicide Squad image and email it to themselves.',
      image: suicide,
    },
    {
      title: 'Facebook Calendar App',
      description: 'Facebook Calendar App',
      image: calendar,
    },
    {
      title: 'Unfairly Desserted Flavours',
      description: 'Unfairly Desserted Flavours',
      image: unfair,
    },
    { title: 'Kinder Kids', description: 'Kinder Kids', image: kinder },
    {
      title: 'Fairtrade Arcade',
      description: 'Fairtrade Arcade',
      image: fairtrade,
    },
  ];
  function setPopUp() {
    if (visible) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  }

  function activatePopup(popup) {
    if (popup === 'suicide') {
      setIndex(0);
    } else if (popup === 'calendar') {
      setIndex(1);
    } else if (popup === 'unfair') {
      setIndex(2);
    } else if (popup === 'kinder') {
      setIndex(3);
    } else if (popup === 'fairtrade') {
      setIndex(4);
    }
    setVisible(true);
    console.log(popup);
  }
  function Box1(props) {
    const texture = useLoader(THREE.TextureLoader, suicide);
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Rotate mesh every frame, this is outside of React without overhead
    //useFrame(() => (mesh.current.rotation.x += 0.01));

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={() => activatePopup('suicide')}
        onPointerOver={(event) => setActive(!active)}
        onPointerOut={(event) => setActive(!active)}
      >
        <boxGeometry args={[7, 7, 7]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  }

  function Box2(props) {
    const texture = useLoader(THREE.TextureLoader, calendar);
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Rotate mesh every frame, this is outside of React without overhead
    //useFrame(() => (mesh.current.rotation.x += 0.01));

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={() => activatePopup('calendar')}
        onPointerOver={(event) => setActive(!active)}
        onPointerOut={(event) => setActive(!active)}
      >
        <boxGeometry args={[7, 7, 7]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  }

  function Box3(props) {
    const texture = useLoader(THREE.TextureLoader, unfair);
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Rotate mesh every frame, this is outside of React without overhead
    //useFrame(() => (mesh.current.rotation.x += 0.01));

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={() => activatePopup('unfair')}
        onPointerOver={(event) => setActive(!active)}
        onPointerOut={(event) => setActive(!active)}
      >
        <boxGeometry args={[7, 7, 7]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  }

  function Box4(props) {
    const texture = useLoader(THREE.TextureLoader, kinder);
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Rotate mesh every frame, this is outside of React without overhead
    //useFrame(() => (mesh.current.rotation.x += 0.01));

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={() => activatePopup('kinder')}
        onPointerOver={(event) => setActive(!active)}
        onPointerOut={(event) => setActive(!active)}
      >
        <boxGeometry args={[7, 7, 7]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  }

  function Box5(props) {
    const texture = useLoader(THREE.TextureLoader, fairtrade);
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Rotate mesh every frame, this is outside of React without overhead
    //useFrame(() => (mesh.current.rotation.x += 0.01));

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={() => activatePopup('fairtrade')}
        onPointerOver={(event) => setActive(!active)}
        onPointerOut={(event) => setActive(!active)}
      >
        <boxGeometry args={[7, 7, 7]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    );
  }

  const getPostion = (i) => {
    var count = 5;

    const t = (i / count) * 3 * Math.PI;

    return t;
  };

  return (
    <div>
      <Canvas
        style={{ height: '600px' }}
        camera={{ fov: 10, position: [0, 50, 190] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
        />
        <Suspense fallback={null}>
          <Box1
            position={[
              Math.cos(getPostion(0)) * 20,
              0,
              Math.sin(getPostion(0)) * 20,
            ]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Box2
            position={[
              Math.cos(getPostion(2)) * 20,
              0,
              Math.sin(getPostion(2)) * 20,
            ]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Box3
            position={[
              Math.cos(getPostion(4)) * 20,
              0,
              Math.sin(getPostion(4)) * 20,
            ]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Box4
            position={[
              Math.cos(getPostion(6)) * 20,
              0,
              Math.sin(getPostion(6)) * 20,
            ]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <Box5
            position={[
              Math.cos(getPostion(8)) * 20,
              0,
              Math.sin(getPostion(8)) * 20,
            ]}
          />
        </Suspense>
      </Canvas>
      <div className="popup" style={setPopUp()}>
        <FolioDetails box={popupArray[index]} setVisible={setVisible} />
      </div>
    </div>
  );
};

export default Folio;
