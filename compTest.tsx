import Rive from '@rive-app/react-canvas';

function compTest(props?: {text?: string, rivefile?: string}){
  return(
    <Rive
    src={props?.rivefile}
    stateMachines={props?.text}
  />
  );
}

export default compTest;