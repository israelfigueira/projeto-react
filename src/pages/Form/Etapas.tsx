import React from "react"
import { Step, Stepper } from 'react-form-stepper';

const Etapas = (props: any) => {
    const { etapaAtiva, etapas } = props
    return (
        <>
            <Stepper
                steps={etapas}
                activeStep={etapaAtiva}
                connectorStateColors={false}
                styleConfig={{
                    completedColor: '#6c8a44',
                    activeBgColor: '#6c8a44',
                }}
            >
                {
                    etapas.map((label: any) => (
                        <Step label={label} key={label} />
                    ))
                }
            </Stepper>
        </>
    );
}
export default Etapas