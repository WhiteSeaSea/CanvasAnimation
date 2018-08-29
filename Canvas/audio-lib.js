export const getConnectWithElement=(audio)=>{
  // params:{
  //   audio:页面中的audio元素
  // }
  let audioCtx=new (window.AudioContext||window.webkitAudioContext)();
  let analyser=audioCtx.createAnalyser();
  let source=audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  
  return {"audioCtx":audioCtx,"analyser":analyser,"source":source}
};
