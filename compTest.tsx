import Rive from '@rive-app/react-canvas';

function compTest(props?: {text?: string, theRiveF: any}){
  return(
    <Rive
    src={props?.theRiveF}
    stateMachines={props?.text}
  />
  );
}

export default compTest;