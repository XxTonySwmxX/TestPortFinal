import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useFBX, useAnimations, SoftShadows } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";
import { easing } from "maath";
import { useThree } from "@react-three/fiber";

function Light() {
  const ref = useRef();
  const targetRef = useRef();
  const { scene } = useThree();
  const pointLightPosition = [-0.5, 0.1, 0.5]; // Change this to alter the light's position
  const targetPosition = [0, 0, 0]; // Change this to alter the light's target

  useFrame((state, delta) => {
    easing.dampE(ref.current.rotation, [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0], 0.2, delta);
  });

  useEffect(() => {
    if (ref.current && targetRef.current) {
      ref.current.target = targetRef.current;
    }
  }, [ref, targetRef]);

  return (
    <group ref={ref}>
      <directionalLight position={pointLightPosition} castShadow intensity={5} 
      color="#e6baff" shadow-mapSize={2048} shadow-bias={-0.001} shadow-camera-far={1}>
        <orthographicCamera attach="shadow-camera" args={[-5.4, 5.4, 5.4, -5.4, 0.1, 11]} />
      </directionalLight>
      <object3D position={targetPosition} ref={targetRef} />
     
   {/*<mesh position={pointLightPosition}>
      <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
      <meshStandardMaterial attach="material" color="#cc99ff" />
    </mesh>*/}
    </group>
  );
}

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./test/test.gltf", true);
  const { animations: TypingAnimation } = useFBX("./animations/Typing.fbx");
  TypingAnimation[0].name = "Typing";

  const { actions } = useAnimations(TypingAnimation, computer.scene);

  useEffect(() => {
    actions["Typing"].play();
  }, [actions]);

  computer.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true; // this line enables the node to cast shadows
      node.receiveShadow = true; // this line enables the node to receive shadows
      node.frustumCulled = false;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor="black" />
      <Light />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.2 : 0.2}
        position={isMobile ? [3, 1, -2.2] : [3, -3, -3.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <SoftShadows />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
      )}
    </>
  );
};

export default ComputersCanvas;