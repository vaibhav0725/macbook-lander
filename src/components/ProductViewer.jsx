import React from 'react'
import useMacBookStore from '../store'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

const ProductViewer = () => {
    const {color,setColor,scale,setScale,reset} = useMacBookStore()
  return (
    <section id='product-viewer'>
        <h2>Have a closer look!</h2>
        <div className='controls'>
            <p className='info'>MackBook {scale} in {color}</p>
            <div className='flex-center gap-5 mt-5'>
                <div className='color-control'>
                    <div
                        onClick={() => setColor('#adb5bd')} 
                        className={clsx('bg-neutral-300',color === '#adb5bd' && 'active')}
                    />
                    <div
                        onClick={() => setColor('#2e2c2e')}
                        className={clsx('bg-neutral-900',color === '#2e2c2e' && 'active')}/>
                </div>
                <div className='size-control'>
                    <div 
                        onClick={()=>setScale(0.06)} 
                        className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                    >
                        14"
                    </div>
                    <div 
                        onClick={()=>setScale(0.08)}
                        className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                    >
                        16"
                    </div>
                </div>
            </div>
        </div>
        <Canvas id='canvas'>
            <Box position={[-1,1,0]} scale={scale * 20} material-color={color}/>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    </section>
  )
}

export default ProductViewer