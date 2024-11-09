import Rive from '@rive-app/react-canvas';

function compTest(props?: {text?: string}){
  return(
    <Rive
    src="blob:https://editor.rive.app/73d46d30-c053-42dd-b3ea-9228955e0dbc"
    stateMachines={props?.text}
  />
  );
}

export default compTest;