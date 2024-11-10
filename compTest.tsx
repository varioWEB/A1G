import Rive from '@rive-app/react-canvas';

function compTest(props?: {text?: string}){
  return(
    <Rive
    src="/assets/vehicles.riv"
    stateMachines={props?.text}
  />
  );
}

export default compTest;