import Rive from '@rive-app/react-canvas';

function compTest(props?: {text?: string}){
  return(
    <Rive
    src="https://cdn.rive.app/animations/vehicles.riv"
    stateMachines={props?.text}
  />
  );
}

export default compTest;