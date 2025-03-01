"use client";
import { FC, ReactNode } from "react";
import WaterWave from 'react-water-wave';

interface CursorWaterWaveProps {
    imageUrl: string,
    dropRadius: string,
    perturbance: string,
    resolution: string,
    children: ()=>ReactNode
};

const CursorWaterWave: FC<CursorWaterWaveProps> = ({imageUrl, dropRadius, perturbance, resolution, children}) => {
    return(
        <WaterWave imageUrl={imageUrl} dropRadius={dropRadius} perturbance={perturbance} resolution={resolution}>
            {children}
        </WaterWave>
    )
};

export default CursorWaterWave;