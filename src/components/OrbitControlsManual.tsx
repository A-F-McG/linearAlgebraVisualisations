// because some antivrus software is flagging react drei as a trojan horse
// so it would be difficult to run locally

import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function OrbitControlsManual() {
  const { camera, gl } = useThree()
  const controlsRef = useRef<OrbitControls | null>(null)

  useEffect(() => {
    controlsRef.current = new OrbitControls(camera, gl.domElement)
    controlsRef.current.enableDamping = true
    controlsRef.current.dampingFactor = 0.05
    controlsRef.current.rotateSpeed = 0.5

    return () => {
      controlsRef.current?.dispose()
    }
  }, [camera, gl])

  return null
}
