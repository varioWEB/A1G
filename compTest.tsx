import Rive from '@rive-app/react-canvas';

function compTest(props?: {text?: string}){
  return(
    <Rive
    src="https://drive.google.com/file/d/1_WX49WXkgLeMeMLHCEFT-T-rMe8Vcg4P/view?usp=sharing"
    stateMachines={props?.text}
  />
  );
}

export default compTest;